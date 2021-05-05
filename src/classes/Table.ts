import { FIELD, TABLE } from "..";

export class Table implements TABLE{
    /**name of the table */
    name: string;
    FIELDS: FIELD[];


    constructor (_name:string, _FIELDS:FIELD[]){
        this.name = _name;
        this.FIELDS = _FIELDS
    }

    /**
     * createTable
     */
    public createTable() {
        let sql = `CREATE TABLE  IF NOT EXISTS ${this.name} ()`
        //     id int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primery key',
        //     email varchar(100) NOT NULL,
        //     role varchar(15) NOT NULL,
        //     username varchar(15) NOT NULL,
        //     password varchar(100) NOT NULL,
        //     firstName varchar(25) NOT NULL,
        //     lastName varchar(25) NOT NULL,
        //     mobile varchar(15) NOT NULL,
        //     isActive tinyint(1) NOT NULL DEFAULT '0',
        //     professionalAccess varchar(100) NOT NULL DEFAULT 'None' COMMENT 'This  sets professional acces to users',
        //     organizationId int(11) NOT NULL COMMENT 'FornnKey organozation',
        //     PRIMARY KEY (id),
        //     UNIQUE KEY user_email (email),
        //     UNIQUE KEY username (username),
        //     KEY Organization_User (organizationId),
        //     CONSTRAINT Organization_User FOREIGN KEY (organizationId) REFERENCES organization (id) ON DELETE RESTRICT ON UPDATE RESTRICT
        //    ) ENGINE=InnoDB DEFAULT CHARSET=utf8`
        
    }

    /**
     * relatetable
     */
    public relatetable() {
        
    }

    validate():boolean{
        return true;
    }


}



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