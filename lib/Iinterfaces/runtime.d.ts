import { StringType, NumberType, EnumType, DateType, BooleanType, DoubleType, TextType, CURRENT_TIMESTAMP_TYPE, NULL_TYPE, AS_DEFINED_TYPE } from "./tableInterface";
declare function stringType(obj: any): obj is StringType;
declare function numberType(obj: any): obj is NumberType;
declare function dateType(obj: any): obj is DateType;
declare function enumType(obj: any): obj is EnumType;
declare function booleanType(obj: any): obj is BooleanType;
declare function doubleType(obj: any): obj is DoubleType;
declare function textType(obj: any): obj is TextType;
declare function CURRENT_TIMESTAMP(obj: any): obj is CURRENT_TIMESTAMP_TYPE;
declare function NULL(obj: any): obj is NULL_TYPE;
declare function AS_DEFINED(obj: any): obj is AS_DEFINED_TYPE;
export { stringType, numberType, enumType, dateType, booleanType, doubleType, textType, CURRENT_TIMESTAMP, NULL, AS_DEFINED };
//# sourceMappingURL=runtime.d.ts.map