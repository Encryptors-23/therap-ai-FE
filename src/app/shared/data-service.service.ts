import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = environment.baseUrl
  private params= new HttpParams()

  constructor(private http: HttpClient) {
  }

  sendMessage(hash:string): Observable<string> {
    this.params= this.params.append('message', hash)
    console.log(hash)
    return this.http.post<string>(`${this.baseUrl}/idk`, this.params);
  }

}
