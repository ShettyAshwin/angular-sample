import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Blog } from '../class/blog';

import { BlogService } from './blog.service';

describe('BlogService', () => {
  let service: BlogService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports : [HttpClientModule]});
    service = TestBed.inject(BlogService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(httpClient).toBeDefined();
  });

  it('should make a call to get list', () => {
    let url;
    spyOn(httpClient, 'get').and.callFake((p: any) => ( url = p));
    service.list();
    expect(url).toContain('/devTest/api.php');
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('should make a call to get detail based on id', () => {
    let url;
    spyOn(httpClient, 'get').and.callFake((p: any) => ( url = p));
    service.detail(100);
    expect(url).toContain('=100');
    expect(url).toContain('/devTest/api.php');
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('should make a call add detail', () => {
    let url;
    spyOn(httpClient, 'post').and.callFake((p: any) => ( url = p));
    service.add({} as Blog);
    expect(url).not.toContain('=100');
    expect(url).toContain('/devTest/api.php');
    expect(httpClient.post).toHaveBeenCalled();
  });

  it('should make a call update detail', () => {
    let url;
    spyOn(httpClient, 'put').and.callFake((p: any) => ( url = p));
    service.update({} as Blog);
    expect(url).not.toContain('=100');
    expect(url).toContain('/devTest/api.php');
    expect(httpClient.put).toHaveBeenCalled();
  });

  it('should make a call delete blog', () => {
    let url;
    spyOn(httpClient, 'delete').and.callFake((p: any) => ( url = p));
    service.delete(100);
    expect(url).toContain('=100');
    expect(url).toContain('/devTest/api.php');
    expect(httpClient.delete).toHaveBeenCalled();
  });
});
