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
    //
    function isMatch(s, p) {
    // Create DP table with (s.length + 1) x (p.length + 1)
    const dp = Array(s.length + 1).fill().map(
        () => Array(p.length + 1).fill(false)
    );
    
    // Empty string matches empty pattern
    dp[0][0] = true;
    
    // Handle patterns like a*, a*b*, a*b*c* that can match empty string
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            // If current char is '*', look two positions back in pattern
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    // Fill the DP table
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            // Case 1: Characters match exactly OR pattern has '.'
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            // Case 2: Pattern has '*'
            else if (p[j - 1] === '*') {
                // Two possibilities:
                
                // 2a: Zero occurrences of preceding character
                // Skip the preceding char and '*'
                dp[i][j] = dp[i][j - 2];
                
                // 2b: One or more occurrences of preceding character
                // Check if preceding char matches current string char
                const precedingChar = p[j - 2];
                if (precedingChar === '.' || precedingChar === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
            // Case 3: No match
            else {
                dp[i][j] = false;
            }
        }
    }
    
    return dp[s.length][p.length];
}
//
function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        // Calculate current water amount
        const width = right - left;
        const containerHeight = Math.min(height[left], height[right]);
        const water = width * containerHeight;
        
        // Update maximum if current is larger
        maxWater = Math.max(maxWater, water);
        
        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}
//
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    
    // Take the first string as reference
    const first = strs[0];
    
    // Check character by character
    for (let i = 0; i < first.length; i++) {
        const char = first[i];
        
        // Compare this character across all strings
        for (let j = 1; j < strs.length; j++) {
            // If we've reached the end of a string or character doesn't match
            if (i === strs[j].length || strs[j][i] !== char) {
                return first.substring(0, i);
            }
        }
    }
    
    return first;
}
//
function threeSum(nums) {
    const result = [];
    
    // Sort the array first (crucial for two-pointer technique)
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for the second element
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for the third element
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                // Move both pointers
                left++;
                right--;
            } else if (sum < 0) {
                // Sum too small, need larger numbers
                left++;
            } else {
                // Sum too large, need smaller numbers
                right--;
            }
        }
    }
    
    return result;
}

//looking for complement

  let twoSum= function( nums, target){
    const numMap= new Map();
    for(let i=0 ; i<nums.length; i++){
        const complement= target-nums[i];
        if(numMap.has (complement)){
            return [numMap.get(complement),i]
        }
        numMap.set(nums[i],i);
    }
  }
function isMatch(s, p) {
    // Create DP table with (s.length + 1) x (p.length + 1)
    const dp = Array(s.length + 1).fill().map(
        () => Array(p.length + 1).fill(false)
    );
    
    // Empty string matches empty pattern
    dp[0][0] = true;
    
    // Handle patterns like a*, a*b*, a*b*c* that can match empty string
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            // If current char is '*', look two positions back in pattern
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    // Fill the DP table
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            // Case 1: Characters match exactly OR pattern has '.'
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            // Case 2: Pattern has '*'
            else if (p[j - 1] === '*') {
                // Two possibilities:
                
                // 2a: Zero occurrences of preceding character
                // Skip the preceding char and '*'
                dp[i][j] = dp[i][j - 2];
                
                // 2b: One or more occurrences of preceding character
                // Check if preceding char matches current string char
                const precedingChar = p[j - 2];
                if (precedingChar === '.' || precedingChar === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
            // Case 3: No match
            else {
                dp[i][j] = false;
            }
        }
    }
    
    return dp[s.length][p.length];
}