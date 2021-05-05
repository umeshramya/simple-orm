interface FIELD_TYPE {
    type: "String" | "Number" | "Enum" | "Date" | "Text" | "Boolean" | "Double";
    PrimeryKey?: boolean;
    size?: number;
    default?: any;
    autoIncrement?: boolean;
    unique: boolean;
    values?: any[];
    preSelectHook?: Function;
    preInsertHook?: Function;
    preUpdateHook?: Function;
    validate?: Function;
    null: boolean;
}
interface FIELD {
    fieldName: string;
    FieldType: FIELD_TYPE;
}
interface TABLE {
    tableName: string;
    fields: FIELD[];
    validate: () => boolean;
}
export type { TABLE, FIELD, FIELD_TYPE };
//# sourceMappingURL=index.d.ts.map