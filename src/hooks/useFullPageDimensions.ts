import { useEffect, useState } from 'react';

// This function is adapted from the following Stack Overflow answer:
// https://stackoverflow.com/a/41181003/3204158
function findLargestNodeHeight(nodeList: HTMLCollection): number {
  let largestHeight = 0;
  for (let i = nodeList.length - 1; i >= 0; i--) {
    let currentNode = nodeList[i];

    if (currentNode.scrollHeight && currentNode.clientHeight) {
      var elementHeight = Math.max(
        currentNode.scrollHeight,
        currentNode.clientHeight
      );
      largestHeight = Math.max(elementHeight, largestHeight);
    }

    if (currentNode.childNodes.length !== 0) {
      const largestHeightOfChildren = findLargestNodeHeight(
        currentNode.children
      );
      largestHeight = Math.max(largestHeight, largestHeightOfChildren);
    }
  }

  return largestHeight;
}

function useFullPageDimensions(): [number, number] {
  const [pageHeight, setPageHeight] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(0);

  useEffect(() => {
    setPageHeight(findLargestNodeHeight(document.documentElement.children));
    setPageWidth(window.innerWidth);
  }, []);

  return [pageWidth, pageHeight];
}

export default useFullPageDimensions;
