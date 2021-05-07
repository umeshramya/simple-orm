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
        "unique": false,
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


```


## Typescript example
```typescript

interface USER{
    id:number;
    username:string;
    password:string;
}

type userField = keyof USER;

let userId:userField = "id";
let userUsername:userField ="username"
let userPassword:userField = "password"

let user = new Table("user", [
    {
        "fieldName" :  userId,
        "null" : false,
        "type" : "Number",
        "PrimeryKey" : true,
        "unique" : true,
    },
    {
        "fieldName" : userUsername,
        "type" : "String",
        "size" : 200,
        "unique" : true,
        "null" : false
    },
    {
        "fieldName" : userPassword,
        "type" : "String",
        "size" : 200,
        "unique" : false,
        "null" : false
    }
])


```