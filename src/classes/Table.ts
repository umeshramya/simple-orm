import { FIELD, TABLE } from "..";

export class Table implements TABLE{
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