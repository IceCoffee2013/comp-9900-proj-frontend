/**
 * Created by langley on 16/10/17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Lawcase} from "../model/lawcase-model";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class CaseService {
  public baseUrl = "http://localhost:8200/api/case";

  constructor(public http: HttpClient) {
  }


  public getCase(id: number): Observable<Lawcase> {
    return this.http.get<Lawcase>(this.baseUrl + "/detail/" + id);
  }

  public getAllCases(): Observable<Lawcase[]> {
    return this.http.get<Lawcase[]>(this.baseUrl);
  }

}
