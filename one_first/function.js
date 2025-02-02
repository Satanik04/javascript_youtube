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