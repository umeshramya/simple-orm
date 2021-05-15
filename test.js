let str=""
let fieldar = ["id", "firstname", "lastname"].forEach(el=>{
 str=`${str} ${el},`
})
str = str.substring(0, str.length-1)

console.log(str)
