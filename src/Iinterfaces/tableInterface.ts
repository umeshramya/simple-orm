/** used in table cor creatation */
type size = number;
type autoIncrement = boolean;
type enumValues = any[];
interface FIELD{
    fieldName:string;
    type : ["String", size]| ["Number", autoIncrement]| ["Enum", enumValues] | ["Date" ]|["Text" ]|["Boolean" ]|["Double"]
    PrimeryKey ?: boolean;
    default ?: ["CURRENT_TIMESTAMP"] | ["NULL"] | ["AS DEFINED", any  ];
    unique ?: boolean;
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