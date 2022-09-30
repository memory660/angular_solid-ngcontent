import { Observable } from "rxjs";

export interface IPostService {
    getPost(): Observable<any>;
}
