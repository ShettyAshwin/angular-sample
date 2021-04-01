import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { blog } from '../class/blog'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { 

  }

  list(): Observable<blog[]> {
    return this.http.get<blog[]>(environment.apiServer + "/devTest/api.php");
  }

  add(detail: blog): Observable<blog> {
    return this.http.post<blog>(environment.apiServer + "/devTest/api.php", detail)
  }

  detail(id:Number): Observable<blog>{
    return this.http.get<blog>(environment.apiServer + "/devTest/api.php?id=" + id);
  }

  update(detail: blog): Observable<blog> {
    return this.http.put<blog>(environment.apiServer + "/devTest/api.php?id=" + detail.id, detail)
  }

  delete(id:Number){
    return this.http.delete<blog>(environment.apiServer + "/devTest/api.php?id=" + id)
  }
}
