import { FIELD, TABLE } from "../Iinterfaces";
export default class Table implements TABLE {
    /**name of the table */
    tableName: string;
    fields: FIELD[];
    constructor(_name: string, _fields: FIELD[]);
    /**
     * createTable
     */
    createTable(): string;
    /**
     * This function creates relationship
     * @param thisTableFieldName FOREIGN KEY of this table
     * @param otherTable  name of related table
     * @param otherTablefieldName REFERENCES of retated table\
     * @onDelete "RESTRICT" | "CASCADE"
     * @onUpdate "RESTRICT" |"NO ACTION" | "CASCADE" | "SET NULL" | "SET DEFAULT"
     */
    relatetable(thisTableFieldName: string, otherTable: string, otherTablefieldName: string, onDelete?: "RESTRICT" | "CASCADE", onUpdate?: "RESTRICT" | "NO ACTION" | "CASCADE" | "SET NULL" | "SET DEFAULT"): string;
    validate(): boolean;
}
//# sourceMappingURL=Table.d.ts.map