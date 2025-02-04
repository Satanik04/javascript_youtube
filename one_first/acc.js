const mynums=[1,2,3,4]
const mytotal=mynums.reduce(function (acc,currval) {
    console.log(`${acc} and ${currval}`)
    return acc+currval
},0)

console.log(mytotal)