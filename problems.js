let ispalidrome = function (x){
  const  str= x.toString();
  return str=== str.split(``).reverse().join(``);
};

//without Converting to string ( math way)
let isPalindrome= function(x){
  if(x<0) return false;
  let original =x;
  let reversed = 0;
  while (x>0){
    reversed = reversed*10 +(x%10);
    x = Math.floor(x/10);
  }
  return original === reversed;
};
// Palindrom quiz
let longestPalindrome = function(s) {
  let res = "";

  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.slice(l + 1, r);
  };

  for (let i = 0; i < s.length; i++) {
    let p1 = expand(i, i);
    let p2 = expand(i, i + 1);
    if (p1.length > res.length) res = p1;
    if (p2.length > res.length) res = p2;
  }

  return res;
};

// 
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;

    let rows = Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {
        rows[currentRow] += char;

        // change direction at top or bottom
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};
//function reverse(x) {
    // Define the 32-bit integer boundaries
    const MIN = -Math.pow(2, 31);      // -2147483648
    const MAX = Math.pow(2, 31) - 1;    // 2147483647
    
    // Store the sign and work with absolute value
    const sign = Math.sign(x);
    const absoluteValue = Math.abs(x);
    
    // Convert to string, reverse, and convert back to number
    const reversedString = absoluteValue.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);
    
    // Apply the original sign to the reversed number
    const result = sign * reversedNumber;
    
    // Check if result is within 32-bit integer range
    if (result < MIN || result > MAX) {
        return 0;
    }
    
    return result;
    