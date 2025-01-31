// const arr=[1,2,3,4]
// console.log(arr[0]);
// console.log(arr.push(8,9))
// console.log(arr)
// arr.pop()
// console.log(arr)
// console.log(arr.indexOf(3))

const myarr=[0,1,2,3,4]
const myn1=myarr.slice(1,3)
console.log(myn1)

const myn2=myarr.splice(1,3)
console.log(myarr)
console.log(myn2) 

const another_array=[1,2,3,[4,5],6,[4,2,[3,9]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)