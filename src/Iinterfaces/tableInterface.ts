/** used in table cor creatation */
type size = number;
type autoIncrement = boolean;
interface FIELD_TYPE{
    // type : "String"| "Number" | "Enum" | "Date" | "Text" | "Boolean" | "Double"
    type : ["String", size]| ["Number", autoIncrement]| ["Enum"] | ["Date" ]|["Text" ]|["Boolean" ]|["Double"]
    PrimeryKey ?: boolean;
    default ?: ["CURRENT_TIMESTAMP"] | ["NULL"] | ["AS DEFINED", any  ];
    unique ?: boolean;
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
interface FIELD{
    fieldName : string;
    FieldType :  FIELD_TYPE
   
}
/**
 * Table interface
 */
interface TABLE{
    tableName : string;
    fields:FIELD[],
    validate:()=>boolean

}


export type {TABLE, FIELD, FIELD_TYPE}