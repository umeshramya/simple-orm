const {Table} = require("very-simple-orm")

let user = new Table("userTest",[
    {"fieldName" : "id",  FieldType : {
        "type" : "Number",
        "autoIncrement" : true,
        "unique" : true,
        "PrimeryKey" : true ,
        "null" : false,  

    } },
    {"fieldName" : "username",  FieldType : {
        "type" : "String",
        "unique" : true,
        "size" : 50,
        "null" : false
    }},
    {"fieldName" : "password", FieldType : {
        "type" : "String",
        "size" : 200,
        "unique" : true,
        "null" : false, 
    }},
    {
        "fieldName" : "gender",
        "FieldType" : {
            "type" : "Enum",
            "null" : false,
            "values" : ['Male','Female','Not Specified','Transgender']
        }
    },
    {
        "fieldName" : "orgId",
        "FieldType" : {
            "null" :false,
            "type" : "Number",
        }
    }
    
    
])


let org = new Table("orgTest", [
    {"fieldName" : "id", "FieldType" : {
        "type" : "Number",
        "PrimeryKey" : true,
        "null" : false,
        "autoIncrement" : true,
        "unique" : true
    }},
    {
        "fieldName" : "orgName",
        "FieldType" : {
            "type" : "String",
            "unique" : true,
            "null" : false,
            "size" : 255
        }
    }
])





console.log(user.fields.map(el=>{
    return el.fieldName
}))


console.log(org.insert([
    {"fieldName" : "id", "value" : 1},
    {"fieldName" : "name", "value" : "JJH"}
]))
// console.log(user.createTable())
// console.log(org.createTable())
// console.log(user.relatetable("orgId", "orgTest", "id", "RESTRICT", "RESTRICT"))
// console.log(user.selectById({"fieldName": "id", "value" : 1}))
// console.log(user.updateById({"fieldName" : "id", "value" : 1}, [
//     {"fieldName" : "name" , value : "han"},
//     {"fieldName" : "gender" , value : "Female"}
// ]))



