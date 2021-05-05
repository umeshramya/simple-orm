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
     * relatetable
     */
    relatetable(): void;
    validate(): boolean;
}
//# sourceMappingURL=Table.d.ts.map