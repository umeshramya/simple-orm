"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Select_1 = __importDefault(require("./base_sql/Select"));
class Table {
    constructor(_name, _fields) {
        this.select = new Select_1.default(this.tableName);
        this.tableName = _name;
        this.fields = _fields;
    }
    /**
     * createTable
     */
    createTable() {
        let __fields = "";
        this.fields.forEach(curField => {
            // set name of field
            __fields = __fields + " " + curField.fieldName;
            // set type of field 
            if (curField.FieldType.type === "String") {
                __fields = __fields + " varchar";
                //size of Field
                if (curField.FieldType.size) {
                    __fields = __fields + "(" + curField.FieldType.size + ")";
                }
                else {
                    __fields = __fields + "(255)";
                }
            }
            else if (curField.FieldType.type === "Number") {
                __fields = __fields + " int";
                if (curField.FieldType.autoIncrement) {
                    __fields = __fields + "  AUTO_INCREMENT";
                }
            }
            else if (curField.FieldType.type === "Date") {
                __fields = __fields + " date";
            }
            else if (curField.FieldType.type === "Text") {
                __fields = __fields + " text";
            }
            else if (curField.FieldType.type === "Boolean") {
                __fields = __fields + " tinyint(1)";
            }
            else if (curField.FieldType.type === "Double") {
                __fields = __fields + " double";
            }
            else if (curField.FieldType.type === "Enum") {
                __fields = __fields + " enum";
                if (curField.FieldType.values) {
                    let EnumArray = "";
                    curField.FieldType.values.forEach(el => {
                        EnumArray = `${EnumArray}, "${el}"`;
                    });
                    EnumArray = EnumArray.trim().substring(1, EnumArray.trim().length);
                    __fields = __fields + "(" + EnumArray + ")";
                }
            }
            // set null or not null
            if (curField.FieldType.null) {
                __fields = __fields + " NULL";
            }
            else {
                __fields = __fields + " NOT NULL";
            }
            // default value
            if (curField.FieldType.default) {
                __fields = __fields + "(" + curField.FieldType.default + ")";
            }
            __fields = __fields + ",";
        });
        __fields = __fields.trim();
        /**
         * set keys
         */
        let __keys = "";
        this.fields.forEach(curField => {
            if (curField.FieldType.PrimeryKey) {
                __keys = __keys + " PRIMARY KEY (" + curField.fieldName + "),";
            }
            if (curField.FieldType.unique) {
                __keys = __keys + " UNIQUE KEY " + this.tableName + "_" + curField.fieldName + "(" + curField.fieldName + "),";
            }
        });
        __keys = __keys.trim();
        let __FiledKeys = __fields + __keys;
        while ((__FiledKeys[__FiledKeys.trim().length - 1] == ",")) {
            __FiledKeys = __FiledKeys.substring(0, __FiledKeys.length - 1);
        }
        let __sql = `CREATE TABLE  IF NOT EXISTS ${this.tableName} (${__FiledKeys})ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4`;
        return __sql.trim() + ";";
    }
    /**
     * This function creates relationship
     * @param thisTableFieldName FOREIGN KEY of this table
     * @param otherTable  name of related table
     * @param otherTablefieldName REFERENCES of retated table\
     * @onDelete "RESTRICT" | "CASCADE"
     * @onUpdate "RESTRICT" |"NO ACTION" | "CASCADE" | "SET NULL" | "SET DEFAULT"
     */
    relatetable(thisTableFieldName, otherTable, otherTablefieldName, onDelete = "RESTRICT", onUpdate = "CASCADE") {
        let __sql = `ALTER TABLE ${this.tableName} ADD KEY ${otherTable}_${this.tableName} (${thisTableFieldName}); ALTER TABLE ${this.tableName} ADD CONSTRAINT ${otherTable}_${this.tableName} FOREIGN KEY (${thisTableFieldName}) REFERENCES ${otherTable} (${otherTablefieldName}) ON DELETE ${onDelete} ON UPDATE ${onUpdate}`;
        return __sql.trim() + ";";
    }
    validate() {
        return true;
    }
}
exports.default = Table;
//# sourceMappingURL=Table.js.map