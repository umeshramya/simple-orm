/**
 * this conatiins sql string and values as arguments
 */
interface SQL_VALUES{
    sql:string;
    values:any[];
}
/** 
 * For inserting into many records and updating many record
 */
interface SQL_VALUES_MANY{
    sql:string;
    values:any[][];
}
/**
 * filed  name it value
 */
interface FIELD_NAME_VALUE{
    fieldName:string,
    value:any
}
/**
 * Field name value and its operator.
 */
interface FIELD_NAME_VALUE_OPERATOR  extends FIELD_NAME_VALUE{
    separator : "AND" | "OR" | "NONE";
    operator : "=" | "!=" | "LIKE"
}


interface SELECT{
    selectById(_field:FIELD_NAME_VALUE, _selectedFields ?:string[]):SQL_VALUES;
    select(_fields:FIELD_NAME_VALUE_OPERATOR[],  _selectedFields ?:string[]):SQL_VALUES;
}

interface UPADTE{
    updateById(_field:FIELD_NAME_VALUE, _updateFields:FIELD_NAME_VALUE[]):SQL_VALUES;
}

interface INSERT{
    insert(_insertFields:FIELD_NAME_VALUE[]):SQL_VALUES;
    insertMany(_insertFields: FIELD_NAME_VALUE[][]): SQL_VALUES_MANY;
}

interface DELETE{
    deleteById(_field:FIELD_NAME_VALUE):SQL_VALUES
}

interface SQL_MASTER extends SELECT, UPADTE, INSERT, DELETE{
    
}

export type {SQL_VALUES, SQL_VALUES_MANY,FIELD_NAME_VALUE, FIELD_NAME_VALUE_OPERATOR, SELECT, UPADTE, INSERT, DELETE, SQL_MASTER}