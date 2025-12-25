
// function larger(arr, n){
//     let arr1=[];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>n){
//             arr1.push(arr[i]);
//         }
//     }
//     return arr1 
// }

// let arr = [2,4,6,7,8,9,2,4,56,67,0];

// console.log(larger(arr,6));

// function unique(str){
//     let n = str.length;
//     let ans = "";
//     for(let i=0; i<n; i++){
//         let curr = str[i];
//         if(ans.indexOf(curr)==-1){
//             ans+=curr;
//         }
//     }
//     return ans;

// }
// console.log(unique("abcdabcdefgggh"));

// function largetConName(country){
//     let len = -1;
//     for(let i=0; i<country.length; i++){
//         if(country[i].length>len){
//             len = country[i].length;
//             ans = country[i];
//         }
//     }
//     return ans;
// }

// let country = ['Australia','Germany','United State of America'];
// // console.log(largetConName(country));

// function countVow(str){
//     let c=0;
//     let vow = ['a','e','i','o','u','A','E','I','O','U'];
//     for(let i=0; i<str.length; i++){
//         if(vow.indexOf(str[i])!=-1){
//             c++;
//         }
//     }
//     return c;
// }

// console.log(countVow("HelloieoWorld"));


// function randNumGenerator(st, en){
//     let num = Math.floor(Math.random()*(en-st))+st;
//     console.log(num);
// }

// let arrAvg = (arr) =>{
//     let sum = 0;
//     for( n of arr){
//         sum+=n;
//     }
//     return sum/(arr.length);
// };

// console.log(arrAvg([2,3,4,5,6,2,2,0]));

// let isEven = n =>(n%2==0);

const object = {
    message : 'Hello World',
    logMessage(){
        console.log(this.message);
    }
}

setTimeout(object.logMessage,1000);

// let length = 4;
// function callback(){
//     console.log(this.length);
// }

// const object = {
//     length : 5,
//     method(callback){
//         callback();
//     },
// };

// object.method(callback,1,2);
