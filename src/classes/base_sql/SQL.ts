import {SQL_VALUES} from "../../Iinterfaces/index"

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

    protected clauseMaker(){
        // write code here
    }
}