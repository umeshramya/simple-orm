import { FIELD, TABLE } from "../Iinterfaces";

export default class Table implements TABLE{
    /**name of the table */
    name: string;
    fields: FIELD[];


    constructor (_name:string, _FIELDS:FIELD[]){
        this.name = _name;
        this.fields = _FIELDS
    }

    /**
     * createTable
     */
    public createTable():string {
        let __fields:string=""
        
        
         this.fields.forEach(curField=>{
            // set name of field
            __fields = curField.name;

            // set type of field 
            if(curField.FieldType.type === "String"){
                __fields = __fields + " varchar"
            }else if (curField.FieldType.type === "Number"){
                __fields = __fields + " int"
            }else if (curField.FieldType.type === "Date"){
                __fields = __fields + " date"
            }else if (curField.FieldType.type === "Text"){
                __fields = __fields + " text"
            }else if(curField.FieldType.type === "Boolean"){
                __fields = __fields + " tinyint(1)"
            }else if(curField.FieldType.type === "Enum"){
                __fields = __fields + " enum"
            }

            //size of Field
            if(curField.FieldType.size){
                __fields = __fields = " (" + curField.FieldType.size +")";
            }

            // set null or not null
            if (curField.null){
                __fields= __fields +  curField + " NOT NULL,"
            }else{
                __fields =__fields + curField + " NULL,"
            }

            // default value
            if(curField.FieldType.default){
                __fields = __fields + curField.FieldType.default
            }


         })

        let __keys:string =""
        let __constraints:string=""
        let __sql = `CREATE TABLE  IF NOT EXISTS ${this.name} (${__fields} ${__keys} ${__constraints}) ENGINE=InnoDB DEFAULT CHARSET=utf8`
        //     id int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primery key',
        //     email varchar(100) NOT NULL,
        //     role varchar(15) NOT NULL,
        //     username varchar(15) NOT NULL,
        //     password varchar(100) NOT NULL,
        //     firstName varchar(25) NOT NULL,
        //     lastName varchar(25) NOT NULL,
        //     gender enum('Male','Female','Not Specified','Transgender') NOT NULL,
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
         return __sql;
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





