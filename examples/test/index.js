const {Table} = require("very-simple-orm")

let user = new Table("User",[
    {"name" : "id", "null" : false, FieldType : {
        "type" : "Number",
        "autoIncrement" : true,
        "unique" : true,
        "PrimeryKey" : true    
    } },
    {"name" : "username", "null" : false, FieldType : {
        "type" : "String",
        "unique" : true,
        "size" : 50
    }},
    {"name" : "password", "null" : false, FieldType : {
        "type" : "String",
        "size" : 200,
        "unique" : true
    }}
    
    
])


console.log(user.createTable())