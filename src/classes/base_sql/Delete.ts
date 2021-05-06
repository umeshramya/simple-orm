import { DELETE, FIELD_NAME_VALUE, SQL_VALUES } from "../../Iinterfaces";
import Sql from "./SQL";

export default class Delete extends Sql implements DELETE{
    deleteById(_field: FIELD_NAME_VALUE): SQL_VALUES {
        let __sql:string="";
        let __values:any[]=[];


        let ret:SQL_VALUES= {"sql" : __sql , "values": __values};
        return ret;
    }
    
}