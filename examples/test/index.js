const {Table} = require("very-simple-orm")

let user = new Table("User",[
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
    }
    
    
])


console.log(user.createTable())

