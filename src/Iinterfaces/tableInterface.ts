/** used in table cor creatation */

/**
 * string and size
 */
type StringType = {
    String : "String";
    size ?:number 
}

/**
 * property number and autoincrement
 */
type  NumberType = {
    Number: "Number";
    autoIncrement ?:Boolean;
}

/**
 * enum and enum values
 */
type EnumType = {
    Enum : "Enum";
    enumValues : any[]
}

/**
 * Date
 */
type DateType = {
    Date: "Date"
}
/**
 * Boolean
 */
type BooleanType ={
    Boolean : "Boolean"
}
/**
 * double
 */
type DoubleType ={
    Double : "Double"
}
/**
 * Text
 */
type TextType={
    Text : "Text"
}

type CURRENT_TIMESTAMP_TYPE={
    CURRENT_TIMESTAMP : "CURRENT_TIMESTAMP"
}

type NULL_TYPE ={
    NULL : "NULL"
}

type AS_DEFINED_TYPE ={
    AS_DEFINED : "AS DEFINED"
    value : any
}


interface FIELD{
    /**
     * name of the field
     */
    fieldName:string;
    /**
     * example type : {"String" : "string", "size" : 123}
     * 
     * StringType has 'size' as one more property
     * 
     * NumberType has 'autoIncrement' as one more property
     * 
     * EnumType has "enumValues" as one more property
     */
    type  : StringType | NumberType | EnumType | DateType | TextType | BooleanType | DoubleType | TextType
    /**
     * is the filed primery key
     */
    PrimeryKey ?: boolean;
    /**
     * exaple  { "AS_DEFINED_TYPE" : "AS_DEFINED_TYPE", value ; "India"}
     * AS_DEFINED_TYPE has on property of value 
     */
    default ?: CURRENT_TIMESTAMP_TYPE | NULL_TYPE | AS_DEFINED_TYPE;
    unique ?: boolean;
    preSelectHook ?: (fieldValue:any, ...args:any[])=>boolean;
    preInsertHook ?: (fieldValue:any, ...args:any[])=>boolean;
    preUpdateHook ?: (fieldValue:any, ...args:any[])=>boolean;
    validate ?: Function;
    null ?:boolean;
}

/**
 * each field of table
/**
 * Table interface
 */
interface TABLE{
    tableName : string;
    fields:FIELD[],
    validate:()=>boolean

}


export type {TABLE, FIELD}