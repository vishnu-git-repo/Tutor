let str = "Hi, My name is Vishnu!";
let icons = "☃★♲";
let repetion = "abcdabcdabcd";
let str1;

str1 = String.fromCharCode(65);     // A its range from 0 to 1114111
str1 = String.fromCodePoint(8377);  // ₹
str1 = String.raw`Hello\n World`;   // Hello\n World


// prototypes
str1 = "Hi, My name is Vishnu!"

str1 = str.at(5);                   // i 
str1 = str.charAt(5);               // i 
str1 = str.at(-5);                  // s
str1 = str.charAt(-5);              // It gives "" does not handle negative index
str1 = str.charCodeAt(5);           // 121 here i === 121 unicode
str1 = icons.codePointAt(1);        // 9733

str1 = "abcd".concat("1234");       // abcd1234

str1 = str.endsWith("Vishnu!");     // true 
str1 = str.endsWith("Vishnu!",22);  // true (str, end)

str1 = str.includes(",");           // true
str1 = str.includes(",", 5);        // false (searchStr, start)

str1 = str.indexOf(",");            // 2
str1 = str.indexOf(",", 5);         // -1 (searchStr, start)

str1 = repetion.lastIndexOf("a");   // 8
str1 = repetion.lastIndexOf("a", 7);// 4 (searchStr, end)

let a = "réservé"; // With accents, lowercase
let b = "RESERVE"; // No accents, uppercase
str1 = a.localeCompare(b);          // 1
str1 = a.localeCompare(b, "en");    // 1 (str, locales)
str1 = a.localeCompare(b,"en",{
  sensitivity:"base"}
);                                  // 0 (str, locales, options)


str1 = str.match(/[A-Z]/g);         // [ 'H', 'M', 'V' ]
str1 = str.padEnd(30,"#");          // Hi, My name is Vishnu!########
str1 = str.padStart(30,"#");        // ########Hi, My name is Vishnu!
str1 = "*".repeat(5);                     // *****
str1 = repetion.replace(/cd/i,"ab");      // abababcdabcd
str1 = repetion.replaceAll(/cd/ig,"ab") ; // abababababab
str1 = str.search(/[^\w\s]/);       // 2 denotes ","

str1 = repetion.split("bc");        // [ 'a', 'da', 'da', 'd' ]
str1 = repetion.split("bc",2);      // [ 'a', 'da' ]
str1 = repetion.split("bc",10);     // [ 'a', 'da', 'da', 'd' ]
str1 = "abcdea".startsWith("a");    // true
str1 = "abcdea".startsWith("a",1);  // false

str1 = "01234".slice(1,4);          // 123
str1 = "01234".substring(1,4);      // 123
str1 = "01234".slice(4,1);          // "" => do not swap
str1 = "01234".substring(1,4);      // 123
str1 = "01234".slice(-1,4);         // "" => do not convert 0 to negative
str1 = "01234".substring(-1,4);     // 0123

str1 = "İstanbul".toLocaleLowerCase(); // i̇stanbul
str1 = "İstanbul".toLocaleUpperCase(); // İSTANBUL
str1 = "istanbul".toLocaleUpperCase("tr"); //İSTANBUL
str1 = "Char".toLowerCase();        // char
str1 = "Char".toUpperCase();        // CHAR

const stringObj = new String("foo");
str1 = stringObj;                   // [String: 'foo']
str1 = stringObj.toString();        // foo

str1 = "  trim   ".trim();          //trim
str1 = "  trim   ".trimEnd()+1;     //   trim1
str1 = "  trim   ".trimStart()+1;   //trim   1
str1 = stringObj.valueOf();         // foo

str1 = "ab\uD800".isWellFormed()    // false
str1 =  "ab\uD83D\uDE04c".isWellFormed() // true
str1 = "ab\uD800".toWellFormed()    // ab�
str1 =  "ab\uD83D\uDE04c".toWellFormed() // ab😄c

console.log(str1);                  





let regexp = /t(e)(st(\d?))/g;
let key = "test1test2";
let matched = [...key.matchAll(regexp)];
// console.log(matched);
// [['test1','e','st1','1',index: 0,input: 'test1test2',groups: undefined],['test2','e','st2','2',index: 5,input: 'test1test2',groups: undefined]]

