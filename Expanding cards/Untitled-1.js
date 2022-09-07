

// let obj={ 
//     a:'a' ,
//     b:'b',
//     c:{deep: 'Welcome Home'}
// };
// let clone=Object.assign({},obj);
// let clone2 = {...obj};
// let superClone = JSON.parse(JSON.stringify(obj));
// obj.c.deep='hey!';

// console.log(obj);
// console.log(superClone);
// console.log(clone);
// console.log(clone2);


const square = (x) => { return x ** 3 };
let a = square(2);
console.log(a);

//es8
console.log("***".padStart(10));
for (i = 0; i <= 5; i++) {
    let str = '';
    str = '*'.repeat(i).padStart(5);
    console.log(str);
}

const f = (a, b, c, d,) => { console.log(a); };
f(5, 4, 3, 2,)  /* prints 5 */
f(5, 4, 3, 2) /* prints 5 */

let obj = {
    username0: 'Tanu',
    username1: 'Tanushree',
    username2: 'sharma',
}

Object.keys(obj).forEach((key, index) => {
    console.log(index, key, obj[key]);
});

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '')
})


//ES10

function flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}


const arr = [1, 2, [3, 4, [5]]];
arr.flat() // o/p=> [1,2,3,4,[5]]

arr.flat(2)   //o/p=> [1,2,3,4,5]  --2 is how many layers we want to flat the array

const arr2 = [1, 2, 3, [4, 5, [6, 7], [8, [9, 10, [11, 12]]]]];
arr2.flat(2);
arr2.flat(Infinity)

const arr1 = arr.flatMap(item => item + '0');
console.log('arr1', arr1);


const userEmail = '        tanushree@gmail.com';
const username = 'tanushree.sharma@gmail.com       '
console.log(userEmail.trimStart());
console.log(username.trimEnd());

//formEntries

var userProfile =
    [
        ['Tanu', 25, 'ts@gmail.com', 'ujjain'],
        ['Indu', 20, 'is@yahoo.com', 'Indore']
    ];
var userData = Object.fromEntries(userProfile);
var res = [];
userProfile.forEach((item) => {
    let usr = {};
    usr[item[0]] = item.slice(1);
    res.push(usr);
});

console.log(res);

// how to make object iterable

//** for-of is for iterators
// ** for-in is for enumerables

let object1 = {
    car : 60, 
    train :100,
    bike :80,
    [Symbol.iterator] : function(){
        const keys=Object.keys(this);
        let i=0;
        return (function next (){
            const key=keys[i];
            i++;
            return {
                value : {[key]:this[key]},
                done : i===keys.length? true :false
            }
        });
    }
}
// advanced loops:
let basket=['apples','oranges','banana'];
for(let a of basket){
    console.log(a);
}
let basketObj={
    'apples': 5,
    'banana': 8,
    'Oranges':12
};
for(let a of basketObj){
    console.log(a);
}
// ES2020
//bigint
//Optional Chaining Operator ?.
let colony={
    rowhouse:{
        count:25,
        storage:'double',
        color:'blue'
    }
}

//let count= colony.rowhouse.count;

let count = colony?.rowhouse?.count;

console.log(count);

//Nullish collasing operator
let colonies={
    rowhouse:{
        count:25,
        storage:'double',
        color:'blue'
        ,gatedSecurity:''
    }
}
let gs=colonies?.rowhouse?.gatedSecurity ?? 'no value';
console.log(gs);


let str1='bad deeds results in bad outcomes';
let res1=str1.replaceAll('bad','good');
console.log(str1);
console.log(res1);

// 

const flattend =  [[0,1],[2,3],[4,5]].reduce(
    (a,b)=>{
        debugger;
        return a.concat(b);
    }
    ,[]);
console.log(flattend);

const one=()=>{
 const two=()=>{
    console.log(4);
 }
 two();
}
