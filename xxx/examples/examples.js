//
//
// var num=2;
// function func(num) {
//     var num;
//     console.log(num);
//     num=5;
// }
// func(10);
// console.log(num);
// 10,2
//
// function func(x){
//     console.log(typeof x);
//     console.log(arguments.length);
// }
// func();
// func('1','2','3');
//
// undefined
// 0
// string
// 3
//
// console.log(typeof 1);
// console.log(typeof typeof 1);
//

let letters = ['a', 'b', 'c'];
let [1,2,3]= letters;
console.log(1,2);

const numbers = [1,2,3];
const [a] = numbers;
console.log(a);

const numbers = [1,2,3];
const [a,b] = numbers;
console.log(a,b);


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o] = numbers;
console.log(a,n,n,a);


const numbers = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o];
const [b,c,d,e,f,g,h,i,j,k,l,m,n,o] = numbers;
console.log(b);
