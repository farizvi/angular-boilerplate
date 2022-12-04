import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
  constructor(private http: HttpClient) {}

  async get<T>(path: string) {
    const baseUrl = environment.API_URL;
    console.log(baseUrl);
    return this.http.get<T>(`${baseUrl}${path}`);
  }
}
