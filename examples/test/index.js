
const { Table } = require("very-simple-orm")
const validator = require("validator")

let user = new Table("userTest", [
    {
        "fieldName": "id",
        "type": {"Number" : "Number", "autoIncrement" : true},
        "unique": true,
        "PrimeryKey": true,
        "null": false,

    },
    {
        "fieldName": "username",
        "type": {"String" : "String", "size" : 150},
        "unique": true,
        "null": false
        
    },
    {
        "fieldName": "password",
        "type": {"String" : "String", "size" : 200},
        "unique": false,
        "null": false,
    },
    {
        "fieldName": "email",
        "type": {"String" : "String", "size" : 200},
        "unique": false,
        "null": false,
        "validate" : (value =>{
            if(validator.isEmail(value)){
                return true
            }else{
                return false
            }
        })
    },
    {
        "fieldName": "gender",
        "type": {"Enum" : "Enum", "enumValues" :['Male', 'Female', 'Not Specified', 'Transgender'] },
        "null": false,
        "unique" : false,
        "default" : {"AS_DEFINED" : "AS DEFINED", "value" : "(curdate())"}


    },
    {
        "fieldName": "orgId",
        "null": false,
        "type": {"Number" : "Number"}

    }


])


let org = new Table("orgTest", [
    {
        "fieldName": "id",
        "type": {"Number" : "Number", "autoIncrement" : true},
        "PrimeryKey": true,
        "null": false,
        "unique": true
    },
    {
        "fieldName": "orgName",
        "type": {"String" : "String"},
        "unique": true,
        "null": false,

    }
])








//return the sql string and values of arguments
console.log(user.createTable())
console.log(org.createTable())
console.log(user.relatetable("orgId", "orgTest", "id", "RESTRICT", "RESTRICT"))
console.log(user.selectById({"fieldName": "id", "value" : 1}))
console.log(user.updateById({"fieldName" : "id", "value" : 1}, [
    {"fieldName" : "name" , value : "han"},
    {"fieldName" : "gender" , value : "Female"},
    {"fieldName" : "email", "value" : "umeshbilagi@gmail.com"}
]))
console.log(org.insert([
    { "fieldName": "id", "value": 1 },
    { "fieldName": "name", "value": "JJH" }
]))
console.log(user.deleteById({fieldName : "id", "value" : 1}))
console.log(user.fields.map(el => {
    return el.fieldName
}))




