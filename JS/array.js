
const arr= Array(1,2,3,4,5,6,7,8,9,10);
var temp= [];
//console.log(arr); //[1,2,3,4,5,6,7,8,9,10]
const mapper = (array,format) => {
    var str="";
    if(!format) format=" ";
    if(Array.isArray(array)){
        array.map((val,i)=>{
            if(i === array.length-1) return console.log("mapper =",str+format+val);
            if(i === 0) str= val;
            else str = str+format+val;
        });
    }else return console.log("mapper =",array,"is Not an Array")
}

//static methods( from, fromAsync, isArray, of)
//-----------------------------------------------


Array.from("Hello"); // [ 'H','e','l','l','o']
// fromAsync
Array.isArray(arr);  //true
Array.of("hel",1,"0");  //[ "hel", 1, "o"]



// BASIC methods(15): (length, toString, at, join, pop, push, shift,unshift, delete, concat,
// copyWithin, flat, splice, toSpliced, slice)
// ------------------------------------------------

temp = [1,3,5,7,9].length;                                  // 5
temp = [1,3,5,7,9].toString();                              // 1,3,5,7,9
temp = [1,3,5,7,9].at(1);                                   // 3
temp = [1,3,5,7,9].join("");                                // 13579
temp = [1,3,5,7,9].pop();                                   // 9
temp = [1,3,5,7,9].push(11);                                // [1,3,5,7,9,11]
temp = [1,3,5,7,9].shift();                                 // [0,1,3,5,7,9]
temp = delete [1,3,5,7,9][0];                               // [undefined,3,5,7,9]
temp = [1,3,5,7,9].concat([2,4],[6,8],[10]);                // [1,3,5,7,9,2,4,6,8,10]
temp = [1,3,5,7,9].copyWithin(0,2,-1);                      // [5,7,5,7,9] {target,start,end}
temp = [1,[2,3],[4,[5,[6],7],8],9,10].flat(1);              // [1,2,3,4,[5,[6],7],8,9,10]
temp = [1,[2,3],[4,[5,[6],7],8],9,10].flat(Infinity);       //[1,2,3,4,5,6,7,8,9,10]
temp = [1,3,5,7,9].splice(1,0,2);                           // [] {start,count,elem1,...}
temp = [1,3,5,7,9].toSpliced(1,0,2);                        // [1,2,3,5,7,9]
temp = [1,3,5,7,9].slice(1,4)                               // [3,5,7]





// FIND methods(7): (indexOf, lastIndexOf, find, findIndex, findLast, findLastIndex, includes)
//---------------------------------------------------------------

temp = [1,3,5,7,9,3].indexOf(3);                            // 1 {val,startIndex}
temp = [1,3,5,7,9,3].lastIndexOf(3);                        // 5 {val,startIndex}
temp = [1,3,5,7,9,3].find(ele=>ele>3);                      // 5 {cb,this}
temp = [1,3,5,7,9,3].findIndex(ele=>ele>3);                 // 2 {cb,this}
temp = [1,3,5,7,9,3].findLast(ele=>ele>3);                  // 9 {cb,this}
temp = [1,3,5,7,9,3].findLastIndex(ele=>ele>3)              // 4 {cb,this}
temp = [1,3,5,7,9,3].includes(3,3)                          // true {val,startIndex}





//SORT methods(4): (sort,toSorted,reverse,toReversed)
//------------------------------------------------

const sortCB = (a,b) =>{
    return a-b;
}


temp = ["apr","Apr",1,21,4,"21","04","2025"].sort();           // ["04",1,"2025",21,"21","April","apr"]
temp = ["apr","Apr",1,21,4,"21","04","2025"].sort(sortCB)      // ["apr","Apr",1,4,"04",21,"21","2025"]
temp = temp.reverse();                                           // ["2025","21",21,"04",4,1,"Apr","apr"] 
//It retuns new Array
temp = ["apr","Apr",1,21,4,"21","04","2025"].toSorted();       // ["04",1,"2025",21,"21","April","apr"]
temp = ["apr","Apr",1,21,4,"21","04","2025"].toSorted(sortCB);  // ["apr","Apr",1,4,"04",21,"21","2025"]
temp = temp.toReversed();                                          // ["2025","21",21,"04",4,1,"Apr","apr"]





//ITERATION methods(13): (forEach, map, flatMap, filter, reduce, reduceRight, every, some, from, keys, entries, with, Spread (...)
//---------------------------------------------------------------

const _forEach = [];
const _map = [];
const _flatMap = [1,2,3,4,5];

// forEach
temp = arr.forEach((ele) => _forEach.push(ele)); // undefined It does not returns array

// map
temp = arr.map((ele)=> _map.push(`map:${ele}`)); // It returns array from arr instead _map

// flatMap
temp=_flatMap.flatMap((ele)=>(ele===5)?5:1);// [1,1,1,1,5]

// filetr
temp = temp.filter((ele)=>ele===1) //[1,1,1,1]

// reduce
temp = arr.reduce((acc,ele)=>acc+ele,0)

// reduceRight
temp = arr.reduceRight((acc,ele)=>acc+ele,0)

// every
temp = arr.every((ele,i,arr)=>{
    if(ele<5) return true;
    else {
        console.log("EVERY Bounced at","index:",i, "element:",arr[i]);
        return false;
    }
});

// some
temp = arr.some((ele,i,arr)=>{
    if(ele>5){
        console.log("Some Satisfied at","index:",i, "element:",arr[i]);
        return true;
    }
    else return false;
})

// from
temp = Array.from("foo")                // [ 'f', 'o', 'o' ]


// keys
const iterator = arr.keys();
for (const key of iterator) {
  console.log(key)                      // 1,2,3,4,5,6,7,8,9,10
}


// entries
const array1 = ["a", "b", "c"];
const iterator1 = array1.entries();
console.log(iterator1.next().value);    // Expected output: Array [0, "a"]
console.log(iterator1.next().value);    // Expected output: Array [1, "b"]


// with
const withArray = [1, 2, 3, 4, 5];
console.log(withArray.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(withArray); // [1, 2, 3, 4, 5]

// spread
 console.log([...arr])
mapper(temp,"|");
console.log("temp =",temp);



