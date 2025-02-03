const arr=[1,2,3,4,5]
for(const num of arr){
    //console.log(num)
}

const greeting="Hello world"
for(const greet of greeting){                        
    //console.log(`Each char is: ${greet}`)
}

const map=new Map()
map.set('IN',"India")
map.set('Usa',"United state of Amarica")
map.set('Fr',"France")
map.set('IN',"India")

//console.log(map)
for (const [key,value] of map) {
  //  console.log(`${key} - ${value}`);
}

const myobject={
    'game1':'Nfs',
    'game2':'spiderman'
}
// for (const [key,value] of myobject) {  //in case of object for of loop is not work
//     console.log(`${key} of ${value}`)
// }


const langusge={
    js:'java script',
    cpp: 'c++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in langusge) {
   // console.log(`${key} of value is ${langusge[key]}`);
}

const programming=["js","c++","ruby","swift by apple"]
for (const key in programming) {
    console.log(programming[key])
}