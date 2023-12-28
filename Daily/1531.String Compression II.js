var getLengthOfOptimalCompression = function (s, k) {
  let arr = numarr(s);
  arr.sort((a, b) => b - a);
  console.log(arr); //aaabccd
  for (let i = arr.length - 1; i >= 0; i--) {
    if (k === 0) {
      break;
    }
    if (k > arr[i]) {
      k -= arr[i];
      arr.pop();
    } else if (k == arr[i]) {
      arr.pop();
      k = 0;
    } else {
      arr[i] = arr[i] - k;
      k = 0;
    }
  }
  console.log(arr);
  return arr.reduce((a, x) => {
    if (x > 1) {
      return a + x.toString().length + 1;
    } else return a + x.toString().length;
  }, 0);
};

function numarr(s) {
  s = Array.from(s);
  s.sort();

  let count = 0;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    count++;
    if (s[i] != s[i + 1] || i === s.length - 1) {
      arr.push(count);
      count = 0;
    }
  }
  console.log(arr);
  return arr;
}

console.log(getLengthOfOptimalCompression("llllllllllttttttttt", 1));

//aabbaa

/** long approach not required
 *   console.log(aNS); //aaabcccd
  if (k === 0) {
    return aNS.length;
  }
  aNS = removeSingleChar(aNS, k);
  k = aNS.k;
  aNS = aNS.s;
  console.log(aNS); //aaabcccd
  console.log(k); //aaabcccd
  if (k === 0) {
    return aNS.length;
  }
  //remove multiple characters
  

};

function convertStringtoAlphaNumeric(s) {
  let alphaNumericString = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count++;
    if (s[i] != s[i + 1] || i === s.length - 1) {
      if (count > 1) {
        alphaNumericString += s[i];
        alphaNumericString += count;
        count = 0;
      } else {
        alphaNumericString += s[i];
        count = 0;
      }
    }
  }
  return alphaNumericString;
}
function removeSingleChar(s, k) {
  let singleChars = s.match(/[a-z](?!\d)/g);
  console.log(singleChars);
  for (let i = 0; i < singleChars.length || i < k; i++) {
    s = s.replace(singleChars[i], "");
    k--;
  }
  console.log(k);
  let obj = {
    k: k,
    s: s,
  };
  return obj;
}
 */
