const jsuser={
    name:"satanik",
    age:18,
    location:"kolkata",
    email:"manasatanik@gmail.com"
}//object create

console.log(jsuser["email"])

jsuser.greeting=function(){
    console.log(`hello js user,${this.location}`)
}
console.log(jsuser.greeting())

//const tinderuser=new Object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="satanik"
console.log(tinderuser)
console.log(Object.keys(tinderuser))  //convert an array of an element
console.log(Object.values(tinderuser)) 


const regularuser={  //nested object
    email:"satanik@gmail.com",
    fullname:{
       userfullname:{
        firstname:"satanik",
        lastname:"manna"
       }
    }
}

console.log(regularuser.fullname.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

// const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

const obj4={...obj1,...obj2} //spread operation
console.log(obj4)

const obj6=[
    {id:2344,email:"mannasatanik8@gmail.com"},
    {id:234484,email:"mannasatanik6@gmail.com"}
] //array of an object
console.log(obj6[1].id) //access

const info={
    courseinstructure:"hitesh",
    age:30
}
const{courseinstructure:instructure}=info
console.log(instructure)
