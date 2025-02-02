function saymyname(){
    console.log("my")
    console.log("name")
    console.log("is")
}
saymyname()

function addtwonum(num1,num2){
    console.log(num1+num2)
}
addtwonum(4,6)

function addnumber(num1,num2){
    let result=num1+num2
    return result
}
const result=addnumber(4,5)
console.log("result:",result)

function loginuser(username){
    return `${username} just logged in `
}
console.log(loginuser("satanik"))

//shopping card add elements
function addcardelement(...num){
    return num
}
console.log(addcardelement(122,342,223,224))

const user={    //object
   username:"satanik",
   price:199  
}
function handleobject(anyobj){
   console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
handleobject(user)