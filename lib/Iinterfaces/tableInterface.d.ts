/** used in table cor creatation */
/**
 * string and size
 */
declare type StringType = {
    String: "String";
    size?: number;
};
/**
 * property number and autoincrement
 */
declare type NumberType = {
    Number: "Number";
    autoIncrement?: Boolean;
};
/**
 * enum and enum values
 */
declare type EnumType = {
    Enum: "Enum";
    enumValues: any[];
};
/**
 * Date
 */
declare type DateType = {
    Date: "Date";
};
/**
 * Boolean
 */
declare type BooleanType = {
    Boolean: "Boolean";
};
/**
 * double
 */
declare type DoubleType = {
    Double: "Double";
};
/**
 * Text
 */
declare type TextType = {
    Text: "Text";
};
declare type CURRENT_TIMESTAMP_TYPE = {
    CURRENT_TIMESTAMP: "CURRENT_TIMESTAMP";
};
declare type NULL_TYPE = {
    NULL: "NULL";
};
declare type AS_DEFINED_TYPE = {
    AS_DEFINED: "AS DEFINED";
    value: any;
};
interface FIELD {
    /**
     * name of the field
     */
    fieldName: string;
    /**
     * example type : {"String" : "string", "size" : 123}
     *
     * StringType has 'size' as one more property
     *
     * NumberType has 'autoIncrement' as one more property
     *
     * EnumType has "enumValues" as one more property
     */
    type: StringType | NumberType | EnumType | DateType | TextType | BooleanType | DoubleType | TextType;
    /**
     * is the filed primery key
     */
    PrimeryKey?: boolean;
    /**
     * exaple  { "AS_DEFINED_TYPE" : "AS_DEFINED_TYPE", value ; "India"}
     * AS_DEFINED_TYPE has on property of value
     */
    default?: CURRENT_TIMESTAMP_TYPE | NULL_TYPE | AS_DEFINED_TYPE;
    unique?: boolean;
    preSelectHook?: (fieldValue: any, ...args: any[]) => boolean;
    preInsertHook?: (fieldValue: any, ...args: any[]) => boolean;
    preUpdateHook?: (fieldValue: any, ...args: any[]) => boolean;
    validate?: Function;
    null?: boolean;
}
/**
 * each field of table
/**
 * Table interface
 */
interface TABLE {
    tableName: string;
    fields: FIELD[];
    validate: () => boolean;
}
declare function stringType(obj: any): obj is StringType;
declare function numberType(obj: any): obj is NumberType;
declare function dateType(obj: any): obj is DateType;
declare function enumType(obj: any): obj is EnumType;
declare function booleanType(obj: any): obj is BooleanType;
declare function doubleType(obj: any): obj is DoubleType;
declare function textType(obj: any): obj is TextType;
export declare function CURRENT_TIMESTAMP(obj: any): obj is CURRENT_TIMESTAMP_TYPE;
export declare function NULL(obj: any): obj is NULL_TYPE;
export declare function AS_DEFINED(obj: any): obj is AS_DEFINED_TYPE;
export { stringType, numberType, enumType, dateType, booleanType, doubleType, textType };
export type { TABLE, FIELD };
//# sourceMappingURL=tableInterface.d.ts.map