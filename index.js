/**
 * Strips the prefix from the keys of the given key-value pairs
 * @param {string} htmlContent - HTML content which needs to be highlighted
 * @param {string} plainText - This plain text is extracted from htmlContent
 * @param {array} plainTextPositions - Array of Objects with start and end positions of words in plainText (Not the positions in HTML)
 * @returns {string} Using the positions in plainText, find the appropriate positions in htmlContent, highlight the content and return it
 */

function removeOverlaps(plainTextPositions) {
  plainTextPositions.sort((a, b) => a.start - b.start);
  const result = [];
  let currentInterval = plainTextPositions[0];
  for (let i = 1; i < plainTextPositions.length; i++) {
    const nextInterval = plainTextPositions[i];
    if (nextInterval.start <= currentInterval.end) {
      currentInterval.end = Math.max(currentInterval.end, nextInterval.end);
    } else {
      result.push(currentInterval);
      currentInterval = nextInterval;
    }
  }
  result.push(currentInterval);
  return result;
}

function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  if (!htmlContent || !plainTextPositions || plainTextPositions.length === 0) {
    throw new Error("htmlContent and plainTextPositions cannot be empty.");
  }
  plainTextPositions = removeOverlaps(plainTextPositions);
  if(plainTextPositions[plainTextPositions.length - 1].end > plainText.length) {
    throw new Error("plainTextPositions is out of bounds.");
  }
  let highlightedHTML = "";
  let currentPlainText = "";
  let offset = 0;
  let positionIndex = 0;

  for (let i = 0; i < htmlContent.length; i++) {
    let currentTag = "";
    if (
      !(
        i === 0 &&
        plainTextPositions[0].start === 0 &&
        htmlContent[0] === "<"
      ) &&
      positionIndex < plainTextPositions.length &&
      offset === plainTextPositions[positionIndex].start
    ) {
      highlightedHTML += "<mark>";
    }
    if (
      positionIndex < plainTextPositions.length &&
      offset === plainTextPositions[positionIndex].end
    ) {
      highlightedHTML += "</mark>";
      positionIndex++;
    }
    if (htmlContent[i] === "<") {
      while (htmlContent[i] !== ">") {
        highlightedHTML += htmlContent[i];
        currentTag += htmlContent[i];
        i++;
      }
      highlightedHTML += htmlContent[i];

      if (currentTag === "<br") {
        if (currentPlainText[currentPlainText.length - 1] !== " ") {
          currentPlainText += " ";
          offset++;
        }
      }
      if (currentTag === "</a") {
        currentPlainText += " ";
        offset++;
      }
      continue;
    }
    currentPlainText += htmlContent[i];
    highlightedHTML += htmlContent[i];
    offset++;
  }
  return highlightedHTML;
}

module.exports = highlightHTMLContent;
