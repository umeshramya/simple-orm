import { FIELD_NAME_VALUE, INSERT, SQL_VALUES } from "../../Iinterfaces";
import Sql from "./SQL";

export default class Insert extends Sql implements INSERT{
    insert(_insertFields: FIELD_NAME_VALUE[]): SQL_VALUES {
        let __sql:string="";
        let __values:any[]=[];


        let ret:SQL_VALUES= {"sql" : __sql , "values": __values};
        return ret;


    }
    
}