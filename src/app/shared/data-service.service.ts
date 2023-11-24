import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { ResponseParams } from '../interface/response-params'
import { PromptParams } from '../interface/prompt-params'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl: string = 'http://localhost:5200'
  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  preSelectedQuestion = ''

  constructor(private http: HttpClient) {
  }

  sendMessage(hash: string): Observable<ResponseParams> {
    const data: PromptParams = { prompt: hash }
    return this.http.post<ResponseParams>(`${this.baseUrl}/bot`, data, { headers: this.headers })
  }

}
