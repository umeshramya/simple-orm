import {FIELD_NAME_VALUE, FIELD_NAME_VALUE_OPERATOR,SELECT, SQL_VALUES} from "../../Iinterfaces/index"
import Sql from "./SQL";

export default class Select extends Sql implements SELECT{
    /**
     * select the table by single filed i.e id 
     * @param _idField this is  object with id field name and it value as clause
     * @param _tableName name of the table
     * @param _selectedFields field to returned if undefined all fields will be returned
     * @param _orderBy  order by columns
     * @param _limit limit of rows 
     * @param _offset offset rows
     * @returns return sql_values
     */
    public selectById(_idField:FIELD_NAME_VALUE, _selectedFields ?:string[], _orderBy?:{fields:string[], by:"ASC" | "DESC"}, _limit?:number, _offset?:number):SQL_VALUES {
        let __sql:string="";
        let __values:any[]=[];
       
        if(_selectedFields === undefined){
            __sql = `SELECT * FROM ${this._tableName} WhERE ${_idField["fieldName"]} = ?`;
           
        }else{
            __sql = `SELECT ${_selectedFields.toString()} FROM ${this._tableName} WHERE ${_idField['fieldName']} = ?`
        }

        __sql = `${__sql}${this.orderBy(_orderBy?.fields, _orderBy?.by)}${this.limit(_limit)}${this.offset(_offset)}`

        __values = [_idField["value"]]

        return {"sql" : __sql, "values" : __values}
    }

    /**
     * 
     * @param _clauseFields clauase fileds
     * @param _selectedFields selected field to be returned
     * @param _orderBy  order by columns
     * @param _limit limit of rows 
     * @param _offset offset rows
     * @returns return sql_values
     */
    public select(_clauseFields:FIELD_NAME_VALUE_OPERATOR[],  _selectedFields ?:string[], _orderBy?:{fields:string[], by:"ASC" | "DESC"}, _limit?:number, _offset?:number):SQL_VALUES {
        let __sql:string="";

        
        let ClauseFieldValues = this.clauseMaker(_clauseFields)
        
        if(_selectedFields === undefined){
            __sql = `SELECT * FROM ${this._tableName} WhERE ${ClauseFieldValues.sql}`;
           
        }else{
            __sql = `SELECT ${_selectedFields.toString()} FROM ${this._tableName} WHERE ${ClauseFieldValues.sql}`
        }

        __sql =  `${__sql}${this.orderBy(_orderBy?.fields, _orderBy?.by)}${this.limit(_limit)}${this.offset(_offset)}`

        return {"sql" : __sql, "values" : ClauseFieldValues.values}
    }


    private orderBy(fields:string[]=[], by:"ASC" | "DESC" = "ASC"):string {
        //write code for sort statement
        let ret:string=  fields.length > 0 ?  ` ORDER BY ${fields.toString()} ${by}` : "";
        return ret
    }
    
    private offset(_offset:number=0):string {
          let ret:string= _offset > 0 ? ` OFFSET ${_offset}` : ""
        return ret
    }

    private limit(_limit:number=0):string {
        let ret:string= _limit > 0 ? ` LIMIT ${_limit}` : ""
        return ret
  }



}