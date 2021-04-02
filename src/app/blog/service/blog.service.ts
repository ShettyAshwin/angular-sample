import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Blog } from '../class/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {

  }

  list(): Observable<Blog[]> {
    return this.http.get<Blog[]>(environment.apiServer + '/devTest/api.php');
  }

  add(detail: Blog): Observable<Blog> {
    return this.http.post<Blog>(environment.apiServer + '/devTest/api.php', detail);
  }

  detail(id: number): Observable<Blog>{
    return this.http.get<Blog>(environment.apiServer + '/devTest/api.php?id=' + id);
  }

  update(detail: Blog): Observable<Blog> {
    return this.http.put<Blog>(environment.apiServer + '/devTest/api.php?id=' + detail.id, detail);
  }

  delete(id: number){
    return this.http.delete<Blog>(environment.apiServer + '/devTest/api.php?id=' + id);
  }
}
