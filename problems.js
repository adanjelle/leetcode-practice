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