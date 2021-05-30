let str=""
let fieldar = ["id", "firstname", "lastname"].forEach(el=>{
 str=`${str} ${el},`
})
str = str.trim();

while(str.charAt(str.length-1)== ","){
    str= str.substring(0, str.length-1)
}


console.log(str)


`SELECT userTest.id,userTest.name,userTest.gender,orgnization.organization_name,orgnization.address,doctor.name FROM userTest   
RIGHT JOIN orgnization ON orgnization.id = userTest.organizationId  
INNER JOIN doctor ON doctor.id = userTest.patientId 
WHERE  userTest.name = ? AND  userTest.gender != ? OR  userTest.email LIKE ?  LIMIT 100 OFFSET 50'`



  values: [ 'umesh', 'Male', '%umesh@gmail.com%