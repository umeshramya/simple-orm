/** used in table cor creatation */
/**
 * string and size
 */
interface StringType {
    String: "String";
    size?: number;
}
/**
 * property number and autoincrement
 */
interface NumberType {
    Number: "Number";
    autoIncrement?: Boolean;
}
/**
 * enum and enum values
 */
interface EnumType {
    Enum: "Enum";
    enumValues: any[];
}
/**
 * Date
 */
interface DateType {
    Date: "Date";
}
/**
 * Boolean
 */
interface BooleanType {
    Boolean: "Boolean";
}
/**
 * double
 */
interface DoubleType {
    Double: "Double";
}
/**
 * Text
 */
interface TextType {
    Text: "Text";
}
interface CURRENT_TIMESTAMP_TYPE {
    CURRENT_TIMESTAMP: "CURRENT_TIMESTAMP";
}
interface NULL_TYPE {
    NULL: "NULL";
}
interface AS_DEFINED_TYPE {
    AS_DEFINED: "AS DEFINED";
    value: any;
}
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
    /**
     * false means required
     * true means not required
     */
    null?: boolean;
    /**
     * This is function is field validadtor before insert and update operations
     * @fieldValue value is value of the current field use this inside your custom validadtion function
     * return true if success or return false in faliure of validation
     */
    validate?: (fieldValue: any) => boolean;
}
/**
 * each field of table
/**
 * Table interface
 */
interface TABLE {
    tableName: string;
    fields: FIELD[];
}
export type { TABLE, FIELD };
export type { StringType, NumberType, EnumType, DateType, BooleanType, DoubleType, TextType, CURRENT_TIMESTAMP_TYPE, NULL_TYPE, AS_DEFINED_TYPE };
//# sourceMappingURL=tableInterface.d.ts.map