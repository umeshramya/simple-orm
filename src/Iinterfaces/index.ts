interface FIELD_TYPE{
    type : "String"| "Number" | "Enum" | "Date" | "Text" | "Boolean" | "Double"
    PrimeryKey ?: boolean;
    size ?:number;
    default ?: any;
    autoIncrement ?: boolean;
    unique : boolean;
    values ?: any[];//ENUM values
    preSelectHook ?: Function;
    preInsertHook ?: Function;
    preUpdateHook ?: Function;
    validate ?: Function;
    null :boolean;
}


interface FIELD{
    fieldName : string;
    FieldType :  FIELD_TYPE
   
}

interface TABLE{
    tableName : string;
    fields:FIELD[],
    validate:()=>boolean

}


interface SQL_VALUES{
    sql:string;
    values:any[];
}

interface FIELD_NAME_VALUE{
    fieldName:string,
    value:any
}




export type {TABLE, FIELD, FIELD_TYPE, SQL_VALUES, FIELD_NAME_VALUE}