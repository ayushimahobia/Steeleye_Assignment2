const highlightHTMLContent = require('./index');
const data = require('./data');

describe('highlightHTMLContent function', () => {
    test('Test 1 | should highlight the specified positions', () => {
      const result = highlightHTMLContent(data.test1.input.htmlContent, data.test1.input.plainText, data.test1.input.plainTextPositions);
      expect(result).toEqual(data.test1.output);
    });

    test('Test 2 | should throw an error when htmlContent is empty', () => {
      expect(() => {
        highlightHTMLContent(data.test2.input.htmlContent, data.test2.input.plainText, data.test2.input.plainTextPositions);
      }).toThrow(data.test2.output);
    });
  
    test('Test 3 | should throw an error when plainTextPositions is empty', () => {
      expect(() => {
        highlightHTMLContent(data.test3.input.htmlContent, data.test3.input.plainText, data.test3.input.plainTextPositions);
      }).toThrow(data.test3.output);
    });

    test('Test 4 | should highlight the entire content when the positions cover the entire text', () => {
      const result = highlightHTMLContent(data.test4.input.htmlContent, data.test4.input.plainText, data.test4.input.plainTextPositions);
      expect(result).toEqual(data.test4.output);
    });
    
    test('Test 5 | should handle overlapping positions and highlight accordingly', () => {
      const result = highlightHTMLContent(data.test5.input.htmlContent, data.test5.input.plainText, data.test5.input.plainTextPositions);
      expect(result).toEqual(data.test5.output);
    });

    test('Test 6 | throw an error when plainTextPositions is out of bounds', () => {
      expect(() => {
        highlightHTMLContent(data.test6.input.htmlContent, data.test6.input.plainText, data.test6.input.plainTextPositions);
      }).toThrow(data.test6.output);
    });
    
});