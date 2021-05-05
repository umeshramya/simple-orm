interface FIELD_TYPE {
    type: "String" | "Number" | "Enum" | "Date" | "Text" | "Boolean";
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
}
interface FIELD {
    name: string;
    null: boolean;
    FieldType: FIELD_TYPE;
}
interface TABLE {
    name: string;
    fields: FIELD[];
    validate: () => boolean;
}
export type { TABLE, FIELD, FIELD_TYPE };
//# sourceMappingURL=index.d.ts.map