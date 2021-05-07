/** used in table cor creatation */
interface FIELD{
    fieldName : string;
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

/**
 * each field of table
 */
// interface FIELD{
//     fieldName : string;
//     FieldType :  FIELD_TYPE
   
// }
/**
 * Table interface
 */
interface TABLE{
    tableName : string;
    fields:FIELD[],
    validate:()=>boolean

}


export type {TABLE, FIELD}