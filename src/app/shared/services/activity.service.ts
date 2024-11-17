// activity.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActivityDetailResponse,
  ActivityRequest,
  ActivityResponse,
  ActivityTreeResponse,
} from '../interfaces/activity.interface';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private baseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  generateActivities(request: ActivityRequest): Observable<ActivityResponse> {
    const params = new HttpParams()
      .set('difficulty', request.difficulty)
      .set('category', request.category)
      .set('durationPerDay', request.durationPerDay);

    return this.http.get<ActivityResponse>(`${this.baseUrl}/generate`, {
      params,
    });
  }

  getActivityTree(): Observable<ActivityTreeResponse> {
    return this.http.get<ActivityTreeResponse>(
      `${this.baseUrl}/activities/tree`
    );
  }

  public getActivities() {
    const params = new HttpParams().set('groupByTag', false);

    return this.http.get<ActivityDetailResponse>(`${this.baseUrl}/activities`, {
      params,
    });
  }
}
