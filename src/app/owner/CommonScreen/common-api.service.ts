import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  Url = "http://localhost:3000/";
  constructor(private http:HttpClient) { }
  PostApicall(formdata:any,endpoint:any){
  let ApiUrl = this.Url+endpoint
  return this.http.post(ApiUrl,formdata)
  }
}
