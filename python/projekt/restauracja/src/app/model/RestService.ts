import { Observable } from "rxjs";

export interface RestService {
    get<T>(...args): Observable<T>;
}
