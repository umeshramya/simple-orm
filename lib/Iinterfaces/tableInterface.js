"use strict";
/** used in table cor creatation */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AS_DEFINED = exports.NULL = exports.CURRENT_TIMESTAMP = exports.textType = exports.doubleType = exports.booleanType = exports.dateType = exports.enumType = exports.numberType = exports.stringType = void 0;
function stringType(obj) {
    if (obj.String) {
        return obj;
    }
    else {
        return false;
    }
}
exports.stringType = stringType;
function numberType(obj) {
    if (obj.Number) {
        return obj;
    }
    else {
        return false;
    }
}
exports.numberType = numberType;
function dateType(obj) {
    if (obj.Date) {
        return obj;
    }
    else {
        return false;
    }
}
exports.dateType = dateType;
function enumType(obj) {
    if (obj.Enum) {
        return obj;
    }
    else {
        return false;
    }
}
exports.enumType = enumType;
function booleanType(obj) {
    if (obj.Boolean) {
        return obj;
    }
    else {
        return false;
    }
}
exports.booleanType = booleanType;
function doubleType(obj) {
    if (obj.Double) {
        return obj;
    }
    else {
        return false;
    }
}
exports.doubleType = doubleType;
function textType(obj) {
    if (obj.Text) {
        return obj;
    }
    else {
        return false;
    }
}
exports.textType = textType;
function CURRENT_TIMESTAMP(obj) {
    if (obj.CURRENT_TIMESTAMP) {
        return obj;
    }
    else {
        return false;
    }
}
exports.CURRENT_TIMESTAMP = CURRENT_TIMESTAMP;
function NULL(obj) {
    if (obj.NULL) {
        return obj;
    }
    else {
        return false;
    }
}
exports.NULL = NULL;
function AS_DEFINED(obj) {
    if (obj.AS_DEFINED) {
        return obj;
    }
    else {
        return false;
    }
}
exports.AS_DEFINED = AS_DEFINED;
//# sourceMappingURL=tableInterface.js.map