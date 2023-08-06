
# SteelEye Assignment 2
## Ayushi Mahobia (Reg No: 12018039)
### Question 
You are required to write a pure JavaScript function called highlightHTMLContent that accepts three inputs and returns the expected result.
And test it using Jest too.
#### Solution

index.js
```javascript
function removeOverlaps(plainTextPositions) 
//takes plainTextPositions array and removes any overlaps.

function highlightHTMLContent(htmlContent, plainText, plainTextPositions)
//inserts <mark> tag at required positions.
```

index.test.js
```javascript
Contains all required tests for the highlightHTMLContent function. To be more specific it has 6 unique tests to check the funcitonality of code in different scenarios.

Test 1 | should highlight the specified positions
Test 2 | should throw an error when htmlContent is empty
Test 3 | should throw an error when plainTextPositions is empty
Test 4 | should highlight the entire content when the positions cover the entire text
Test 5 | should handle overlapping positions and highlight accordingly
Test 6 | throw an error when plainTextPositions is out of bounds
```

data.json
```javascript
contains data respective to each test cases.
```

### To run:
```bash
$ npm install jest
$ npx jest
```


### Output:
![image](https://github.com/ayushimahobia/Steeleye_Assignment2/assets/98510312/ed181c5a-6f4d-44a8-8f53-a01ff0a9e2f6)


