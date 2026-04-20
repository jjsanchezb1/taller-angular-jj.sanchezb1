import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from './series';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = environment.baseUrl + 'courses.json';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Series[]> {
    return this.http.get<Series[]>(this.apiUrl);
  }
}
