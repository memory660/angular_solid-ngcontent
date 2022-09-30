import { Observable } from "rxjs";

export interface IGetPost {
    getPost(): Observable<any>;
}
