/**
 * this conatiins sql string and values as arguments
 */
interface SQL_VALUES{
    sql:string;
    values:any[];
}

interface FIELD_NAME_VALUE{
    fieldName:string,
    value:any
}

interface SELECT{
    selectById(_field:FIELD_NAME_VALUE, _selectedFields ?:string[]):SQL_VALUES;
}

interface UPADTE{
    updateById(_field:FIELD_NAME_VALUE, _updateFields:FIELD_NAME_VALUE[]):SQL_VALUES;
}

interface INSERT{

}

interface DELETE{

}

interface SQL_MASTER extends SELECT, UPADTE, INSERT, DELETE{
    
}

export type {SQL_VALUES, FIELD_NAME_VALUE, SELECT, UPADTE, INSERT, DELETE, SQL_MASTER}