import { FIELD, SELECT, SQL_VALUES, TABLE } from "../Iinterfaces";
import { FIELD_NAME_VALUE, SQL_MASTER } from "../Iinterfaces";
import Delete from "./base_sql/Delete";
import Insert from "./base_sql/Insert";
import Select from "./base_sql/Select"
import Update from "./base_sql/Update";



export default class Table  implements TABLE, SQL_MASTER {
    /**name of the table */
    readonly tableName!: string;
    readonly fields!: FIELD[];


    private selectCls:Select ;
    private updateCls:Update ;
    private insertCls:Insert ;
    private deleteCls:Delete ;




    constructor (_name:string, _fields:FIELD[]){

        this.tableName = _name;
        this.fields = _fields;
        this.selectCls = new Select(this.tableName)
        this.updateCls = new Update(this.tableName)
        this.insertCls = new Insert(this.tableName)
        this.deleteCls = new Delete(this.tableName)
    }



    
    /**
     * 
     * @param _insertFields 
     * @returns 
     */
    insert(_insertFields: FIELD_NAME_VALUE[]): SQL_VALUES {
        return this.insertCls.insert(_insertFields)
    }

    /**
     * 
     * @param _field 
     * @returns 
     */
    deleteById(_field: FIELD_NAME_VALUE): SQL_VALUES {
        return this.deleteCls.deleteById(_field)
    }
    /**
     * 
     * @param _field 
     * @param _selectedFields 
     * @returns 
     */
    selectById(_field: FIELD_NAME_VALUE, _selectedFields?: string[]): SQL_VALUES {
        // write validation code here
       return this.selectCls.selectById(_field, _selectedFields)
    }

    /**
     * 
     * @param _field 
     * @param _updateFields 
     * @returns 
     */
    updateById(_field: FIELD_NAME_VALUE, _updateFields: FIELD_NAME_VALUE[]): SQL_VALUES {
          // write validation code here
        return this.updateCls.updateById(_field, _updateFields);
    }

    

    /**
     * createTable
     */
    public createTable():string {
        let __fields:string=""
        
        
         this.fields.forEach(curField=>{
            // set name of field
            __fields =__fields + " "  + curField.fieldName;


            // set type of field 
            if(curField.FieldType.type === "String"){
                __fields = __fields + " varchar"
            //size of Field
            if(curField.FieldType.size){
                __fields = __fields + "("+ curField.FieldType.size +")";
            }else{
                __fields = __fields + "(255)";
            }
            }else if (curField.FieldType.type === "Number"){
                __fields = __fields + " int"
                if(curField.FieldType.autoIncrement){
                    __fields = __fields + "  AUTO_INCREMENT"
                }
            }else if (curField.FieldType.type === "Date"){
                __fields = __fields + " date"
            }else if (curField.FieldType.type === "Text"){
                __fields = __fields + " text"
            }else if(curField.FieldType.type === "Boolean"){
                __fields = __fields + " tinyint(1)"
            }else if(curField.FieldType.type === "Double"){
                __fields = __fields + " double";
            }else if(curField.FieldType.type === "Enum"){
                __fields = __fields + " enum";

                if(curField.FieldType.values){
                 let EnumArray:string="";
                 curField.FieldType.values.forEach(el=>{
                    EnumArray = `${EnumArray}, "${el}"`
                 })
                 EnumArray = EnumArray.trim().substring(1, EnumArray.trim().length)

                    __fields = __fields  + "(" + EnumArray  + ")";
                }

            }

 

            // set null or not null
            if (curField.FieldType.null){
                __fields= __fields +   " NULL"
            }else{
                __fields =__fields +  " NOT NULL"
            }

            // default value
            if(curField.FieldType.default){
                __fields = __fields + "(" + curField.FieldType.default + ")"
            }

            __fields = __fields + ","
         })

         __fields= __fields.trim();
         /**
          * set keys
          */
        let __keys:string =""
         this.fields.forEach(curField=>{
             if(curField.FieldType.PrimeryKey){
                 __keys = __keys + " PRIMARY KEY ("+  curField.fieldName +"),"
             }
             if(curField.FieldType.unique){
                __keys = __keys + " UNIQUE KEY " + this.tableName + "_" + curField.fieldName + "(" + curField.fieldName+"),"
            }
         })
         __keys= __keys.trim();

         let __FiledKeys = __fields + __keys
         while(( __FiledKeys[__FiledKeys.trim().length-1] == ",")){
            __FiledKeys=__FiledKeys.substring(0, __FiledKeys.length-1)
         }

        



        let __sql = `CREATE TABLE  IF NOT EXISTS ${this.tableName} (${__FiledKeys})ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4`
         return __sql.trim() + ";";
    }

/**
 * This function creates relationship
 * @param thisTableFieldName FOREIGN KEY of this table
 * @param otherTable  name of related table
 * @param otherTablefieldName REFERENCES of retated table\
 * @onDelete "RESTRICT" | "CASCADE"
 * @onUpdate "RESTRICT" |"NO ACTION" | "CASCADE" | "SET NULL" | "SET DEFAULT"
 */
    public relatetable(thisTableFieldName:string,  otherTable:string, otherTablefieldName:string , onDelete:"RESTRICT" | "CASCADE" = "RESTRICT", onUpdate: "RESTRICT" |"NO ACTION" | "CASCADE" | "SET NULL" | "SET DEFAULT" = "RESTRICT"):string {
        let __sql = `ALTER TABLE ${this.tableName} ADD KEY ${otherTable}_${this.tableName} (${thisTableFieldName}); ALTER TABLE ${this.tableName} ADD CONSTRAINT ${otherTable}_${this.tableName} FOREIGN KEY (${thisTableFieldName}) REFERENCES ${otherTable} (${otherTablefieldName}) ON DELETE ${onDelete} ON UPDATE ${onUpdate}`;

        return __sql.trim() + ";"
    }

    

    validate():boolean{
        return true;
    }


}





 





