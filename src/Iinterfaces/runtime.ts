import { StringType, NumberType, EnumType, DateType, BooleanType, DoubleType, TextType, CURRENT_TIMESTAMP_TYPE, NULL_TYPE, AS_DEFINED_TYPE} from "./tableInterface"
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