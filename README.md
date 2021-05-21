# very-simple-orm
This is a orm built to retrive sql statments. so retrived statmets can be passed to your data connection drivers
This tested with mssql database

## What this orm does?
1. It generats sql statements
2. It helps to evalavates values passed to database at single place DR
3. Easy to use
4. Not bound to any drivers so user has advanteges of choosing.
5. Allow raw sqls
6. Generats the tables thus object mapping becomes easy with your code more so if using typescript
7. If used with typescript use table structerd interface


## Javascript example

```javascript

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
// console.log(user.createTable())
// console.log(org.createTable())
// console.log(user.relatetable("orgId", "orgTest", "id", "RESTRICT", "RESTRICT"))


/**
 * ===============
 *  SELECT
 * ===============
 */
// console.log(user.selectById({"fieldName": "id", "value" : 1},["id", "email", "username"], {"fields" : ["id", "email"], "by" : "DESC"}))
// console.log(user.select([
//     {"fieldName" : "name", "value" : "umesh", "operator" : "=", "separator" : "AND"},
//     {"fieldName" : "gender", "value" : "Male", "operator" : "!=" , "separator" : "OR"},
//     {"fieldName" : "email", "value" : "%umesh@gmail.com%", "operator" : "LIKE" , "separator" : "NONE" },
// ], [], {}, 100, 50))

/**
 * =====================
 *  UPDATE
 * ======================
 */
// console.log(user.updateById({"fieldName" : "id", "value" : 1}, [
//     {"fieldName" : "name" , value : "han"},
//     {"fieldName" : "gender" , value : "Female"},
//     {"fieldName" : "email", "value" : "umeshbilagi@gmail.com"}
// ]))

// console.log(user.update(
//     [{"fieldName" : "pincode", "value" : "589057"}, {"fieldName" : "mobile", "value" : "9856789"}],
//     [   {"fieldName" : "mobile", "value" : "", "operator" : "=", "separator" : "OR"},
//         {"fieldName" : "pincode", "value" : "", "operator" : "=", "separator" : ""}]
// ))


/***
 * ==================
 *  INSERT
 * ================
 */
// console.log(org.insert([
//     { "fieldName": "id", "value": 1 },
//     { "fieldName": "name", "value": "JJH" }
// ]))

// console.log(
//     org.insertMany([
//         [{"fieldName" : "id", "value" : 1}, { "fieldName": "name", "value": "JJH" }],
//         [{"fieldName" : "id", "value" : 2}, { "fieldName": "name", "value": "TDH" }],
//         [{"fieldName" : "id", "value" : 3}, { "fieldName": "name", "value": "MH" }],
//     ])
// )


    
/**
 * ==================
 *  DELETE
 * ================
 */

// console.log(user.deleteById({fieldName : "id", "value" : 1}))
// console.log(user.fields.map(el => {
//     return el.fieldName
// }))

// console.log(user.delete([
//     {"fieldName" : "firstName", "value" : "%um%", "operator" : "LIKE", "separator" : "AND"},
//     {"fieldName" : "middleName", "value" : "M", "operator" : "!=", "separator" : "NONE"}

// ]))

/**
 * ==========================
 * CONTRAINT STATEMENT GET
 * ===========================
 * 

// console.log(user.getConstraint("user_org"))





```