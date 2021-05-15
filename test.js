let str=""
let fieldar = ["id", "firstname", "lastname"].forEach(el=>{
 str=`${str} ${el},`
})
str = str.trim();

while(str.charAt(str.length-1)== ","){
    str= str.substring(0, str.length-1)
}


console.log(str)