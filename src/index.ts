interface FIELD_TYPE{
    type : "String"| "Number" | "Enum" | "Date" | "Text"
    size ?:number;
    autoIncrement ?: boolean;
    unique : boolean;
    values ?: any[];
    preSelectHook ?: Function;
    preInsertHook ?: Function;
    preUpdateHook ?: Function;
    validate ?: Function
}


interface FIELD{
    name : string;
    null :boolean;
    FieldType :  FIELD_TYPE
   
}

interface TABLE{
    name : string;
    FIELDS:FIELD[],
    validate:()=>boolean

}


export type {TABLE, FIELD, FIELD_TYPE}