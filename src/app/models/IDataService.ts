import { Subject } from "rxjs";
import { DataService } from "../service/data.service";
import { Movie } from "./movie";

export interface IDataService{

   
    getData(): any;
    theData: Subject<Movie[]>;
    
   
}