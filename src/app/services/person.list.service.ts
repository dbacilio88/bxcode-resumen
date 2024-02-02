import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private httpClient: HttpClient) {

    }



    list() {
        const number$ = of(1, 2, 3, 4, 5, 6, 7);
        return number$
    }
}