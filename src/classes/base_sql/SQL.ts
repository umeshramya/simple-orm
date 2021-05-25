import {SQL_VALUES, FIELD_NAME_VALUE_OPERATOR} from "../../Iinterfaces/index"

export default class Sql{
    private _sqlAndValues!: SQL_VALUES;
    protected _tableName!:string;


    constructor(_tablename:string){
        this._tableName=_tablename;
    }



    public get sqlAndValues(): SQL_VALUES {
        return this._sqlAndValues;
    }
    public set sqlAndValues(value: SQL_VALUES) {
        this._sqlAndValues = value;
    }

    protected clauseMaker(_fields:FIELD_NAME_VALUE_OPERATOR[]):SQL_VALUES{
        let __fieldList:string="";
        let __values:any[] =[];

        _fields.forEach((field, index )=>{
            if(index  < _fields.length-1){
                if(field.separator === "NONE"){
                    throw new Error().message="NONE operator is aloowed only at the last"
                }
                __fieldList = `${__fieldList} ${this._tableName}.${field.fieldName} ${field.operator} ? ${field.separator} `
            }else{
                __fieldList = `${__fieldList} ${this._tableName}.${field.fieldName} ${field.operator} ? `
            }

            __values.push(field.value);
            
        })
        let ret:SQL_VALUES = {"sql" : __fieldList, "values" : __values}
        return ret;
    }
}