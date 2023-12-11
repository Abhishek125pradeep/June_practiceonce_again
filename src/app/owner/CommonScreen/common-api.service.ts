import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  apiurl = "http://localhost:3000"
  // Url = "http://localhost:3000/";
  Journey!: string;
  OwnerName: any;
  constructor(private http: HttpClient) { }
  PostApicall(formdata: any, endpoint: any) {
    let ApiUrl = this.apiurl + "/" + endpoint;
    return this.http.post(ApiUrl, formdata)
  }
  getownerdata(endpoint: any) {
    let url = this.apiurl + "/" + endpoint;
    return this.http.get(url)
  }
}
