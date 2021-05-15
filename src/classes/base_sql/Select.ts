import {FIELD_NAME_VALUE, FIELD_NAME_VALUE_OPERATOR,SELECT, SQL_VALUES} from "../../Iinterfaces/index"
import Sql from "./SQL";

export default class Select extends Sql implements SELECT{
    /**
     * select the table by single filed i.e id 
     * @param _field this is  object with id field name and it value as clause
     * @param _tableName name of the table
     * @param _selectedFields field to returned if undefined all fields will be returned
     */
    public selectById(_field:FIELD_NAME_VALUE, _selectedFields ?:string[]):SQL_VALUES {
        let __sql:string="";
        let __values:any[]=[];
       
        if(_selectedFields === undefined){
            __sql = `SELECT * FROM ${this._tableName} WhERE ${_field["fieldName"]} = ?`;
           
        }else{
            __sql = `SELECT ${_selectedFields.toString()} FROM ${this._tableName} WHERE ${_field['fieldName']} = ?`
        }

        __values = [_field["value"]]

        return {"sql" : __sql, "values" : __values}
    }

    /**
     * select
     */
    public select(_fields:FIELD_NAME_VALUE_OPERATOR[],  _selectedFields ?:string[]):SQL_VALUES {
        let __sql:string="";
<<<<<<< HEAD
        let __values:any[]=[];

        let __fieldList:string =""


=======
        // let __values:any[]=[];

        // let __fieldList:string =""
>>>>>>> 816f768a5cb722603fbb9b0bdda4d416c95883e8
        
        let ClauseFieldValues = this.clauseMaker(_fields)
        
        if(_selectedFields === undefined){
            __sql = `SELECT * FROM ${this._tableName} WhERE ${ClauseFieldValues.sql}`;
           
        }else{
            __sql = `SELECT ${_selectedFields.toString()} FROM ${this._tableName} WHERE ${ClauseFieldValues.sql}`
        }


        return {"sql" : __sql, "values" : ClauseFieldValues.values}
    }


    private sort(field:string, by:"ASC" | "DSC"):string {
        //write code for sort statement
        let ret:string=""
        return ret
    }
    
    private offsetAndLimit(offset:number, limit:number):string {
        //write code offset and limit stattment
        let ret:string=""
        return ret
    }
}