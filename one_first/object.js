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