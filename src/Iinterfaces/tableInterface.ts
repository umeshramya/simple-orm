/** used in table cor creatation */

/**
 * string and size
 */
interface StringType{
    String : "String";
    size ?:number ;
}

/**
 * property number and autoincrement
 */
interface NumberType{
    Number: "Number";
    autoIncrement ?:Boolean;
}

/**
 * enum and enum values
 */
interface EnumType {
    Enum : "Enum";
    enumValues : any[]
}

/**
 * Date
 */
interface DateType  {
    Date: "Date";
}
/**
 * Boolean
 */
interface BooleanType{
    Boolean : "Boolean";
}
/**
 * double
 */
interface DoubleType{
    Double : "Double";
}
/**
 * Text
 */
interface TextType{
    Text : "Text";
}

interface CURRENT_TIMESTAMP_TYPE{
    CURRENT_TIMESTAMP : "CURRENT_TIMESTAMP";
}

interface NULL_TYPE {
    NULL : "NULL"
}

interface AS_DEFINED_TYPE {
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
    /**
     * false means required 
     * true means not required
     */
    null ?:boolean;
    /**
     * This is function is field validadtor before insert and update operations
     * @fieldValue value is value of the current field use this inside your custom validadtion function
     * return true if success or return false in faliure of validation
     */
    validate ?: (fieldValue:any)=>boolean;
}

/**
 * each field of table
/**
 * Table interface
 */
interface TABLE{
    tableName : string;
    fields:FIELD[],

}

// run time custom type check fucntions

 function stringType(obj:any ):obj is StringType{
    if(obj.String){
        return obj
    }else{
        return false
    }
    
}
 function numberType(obj:any ):obj is NumberType{
    if(obj.Number){
        return obj
    }else{
        return false
    }
}
function dateType(obj:any ):obj is DateType{
    if(obj.Date){
        return obj
    }else{
        return false
    }
}
function enumType(obj:any ):obj is EnumType{
    if(obj.Enum){
        return obj
    }else{
        return false
    }
}
function booleanType(obj:any ):obj is BooleanType{
    if(obj.Boolean){
        return obj
    }else{
        return false
    }
}
function doubleType(obj:any ):obj is DoubleType{
    if(obj.Double){
        return obj
    }else{
        return false
    }
}
function textType(obj:any ):obj is TextType{
    if(obj.Text){
        return obj
    }else{
        return false
    }
}



function CURRENT_TIMESTAMP(obj:any ):obj is CURRENT_TIMESTAMP_TYPE{
    if(obj.CURRENT_TIMESTAMP){
        return obj
    }else{
        return false
    }
}
 function NULL(obj:any ):obj is NULL_TYPE{
    if(obj.NULL){
        return obj
    }else{
        return false
    }
}
function AS_DEFINED(obj:any ):obj is AS_DEFINED_TYPE{
    if(obj.AS_DEFINED){
        return obj
    }else{
        return false
    }
}





export { stringType, numberType, enumType, dateType, booleanType, doubleType, textType, CURRENT_TIMESTAMP, NULL, AS_DEFINED}
export type {TABLE, FIELD  }