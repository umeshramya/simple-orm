const { Table } = require("very-simple-orm")

let user = new Table("userTest", [
    {
        "fieldName": "id",
        "type": "Number",
        "autoIncrement": true,
        "unique": true,
        "PrimeryKey": true,
        "null": false,

    },
    {
        "fieldName": "username",
        "type": "String",
        "unique": true,
        "size": 50,
        "null": false
    },
    {
        "fieldName": "password",
        "type": "String",
        "size": 200,
        "unique": true,
        "null": false,
    },
    {
        "fieldName": "gender",
        "type": "Enum",
        "null": false,
        "values": ['Male', 'Female', 'Not Specified', 'Transgender']

    },
    {
        "fieldName": "orgId",
        "null": false,
        "type": "Number",

    }


])


let org = new Table("orgTest", [
    {
        "fieldName": "id",
        "type": "Number",
        "PrimeryKey": true,
        "null": false,
        "autoIncrement": true,
        "unique": true
    },
    {
        "fieldName": "orgName",
        "type": "String",
        "unique": true,
        "null": false,
        "size": 255

    }
])





console.log(user.fields.map(el => {
    return el.fieldName
}))


//return the sql string and values of arguments
console.log(user.createTable())
console.log(org.createTable())
console.log(user.relatetable("orgId", "orgTest", "id", "RESTRICT", "RESTRICT"))
console.log(user.selectById({"fieldName": "id", "value" : 1}))
console.log(user.updateById({"fieldName" : "id", "value" : 1}, [
    {"fieldName" : "name" , value : "han"},
    {"fieldName" : "gender" , value : "Female"}
]))
console.log(org.insert([
    { "fieldName": "id", "value": 1 },
    { "fieldName": "name", "value": "JJH" }
]))
console.log(user.deleteById({fieldName : "id", "value" : 1}))




