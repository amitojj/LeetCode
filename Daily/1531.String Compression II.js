var getLengthOfOptimalCompression = function (s, k) {
  const n = s.length;
  const dp = Array.from( s, () => Array(n+1).fill(9999));
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      let cnt = 0,
        del = 0;
      for (let l = i; l >= 1; l--) {
        if (s.charAt(l - 1) === s.charAt(i - 1)) cnt++;
        else del++;

        if (j - del >= 0) {
          dp[i][j] = Math.min(
            dp[i][j],
            dp[l - 1][j - del] +
              1 +
              (cnt >= 100 ? 3 : cnt >= 10 ? 2 : cnt >= 2 ? 1 : 0)
          );
        }
      }
      if (j > 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
    }
  }
  return dp[n][k];
};

// failed attempt 2
// var getLengthOfOptimalCompression = function (s, k) {
//   let arr = numarr(s);
//   // console.log(arr); //aaabccd

//   for (let i = 0; i < arr.length; i++) {
//     if (k === 0) {
//       break;
//     }
//     if (Math.log10(arr[i][1]) % 1 === 0 && arr[i][1] > 1) {
//       arr[i][1]--;
//       k--;
//     }
//   }
//   if (arr.length > 2) {
//     let temparr = new Array(arr.length).fill(0);
//     for (let i = 0; i < arr.length - 2; i++) {
//       if (arr[i][0] === arr[i + 2][0] && arr[i][0] !== arr[i + 1][0]) {
//         if (arr[i + 1][1] <= k) {
//           temparr[i] = arr[i][1] + arr[i + 2][1];
//         }
//       }
//     }

//     console.log(temparr);//aabaabbcbbbaccc - a2ba2b2cb3ac3;
//     let index = temparr.indexOf(Math.max(...temparr));
//     console.log(arr,index,k)
//     while (Math.max(...temparr) > 0 && k > 0 && k >= arr[index + 1][1] && index < arr.length - 2) {
//       console.log(index,k)
//       console.log(temparr) ;
//       arr[index][1] += arr[index + 2][1];
//       k -= arr[index + 1][1];
//       arr.splice(index + 1, 2);
//       temparr.splice(index,2);
//       console.log(temparr,k);
//       console.log(arr,k);
//       index = temparr.indexOf(Math.max(...temparr));
//     }
//   }

//   console.log(arr,k); //bababbaba
//   arr.sort((a, b) => b[1] - a[1]);
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (k <= 0) {
//       break;
//     }
//     if (k > arr[i][1]) {
//       k -= arr[i][1];
//       arr.pop();
//     } else if (k == arr[i][1]) {
//       arr.pop();
//       k = 0;
//     } else {
//       arr[i][1] = arr[i][1] - k;
//       k = 0;
//     }
//   }
//   // console.log(arr);
//   return arr.reduce((a, x) => {
//     if (x[1] > 1) {
//       return a + x[1].toString().length + 1;
//     } else return a + x[1].toString().length;
//   }, 0);
// };

// function numarr(s) {
//   let count = 0;
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     count++;
//     if (s[i] != s[i + 1] || i === s.length - 1) {
//       arr.push([s[i], count]);
//       count = 0;
//     }
//   }
//   // console.log(arr);
//   return arr;
// }

console.log(getLengthOfOptimalCompression("cacbbacadb", 7));

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
