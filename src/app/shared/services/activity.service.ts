// activity.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
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
  private baseUrl = 'https://backend-n2pq.onrender.com/api';
  private updateActivityStatusUri =
    'http://localhost:3000/api/activities/@activityId';
  constructor(private http: HttpClient) {}

  generateActivities(request: ActivityRequest): Observable<ActivityResponse> {
    const params = new HttpParams()
      .set('difficulty', request.difficulty)
      .set('category', request.category)
      .set('durationPerDay', request.durationPerDay)
      .set('subcategory', request.subcategory);

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

  public updateActivity(activityId: string, isCompletedToday: boolean) {
    let Uri: string = this.updateActivityStatusUri.replace(
      '@activityId',
      activityId
    );
    const body = {
      complete: isCompletedToday,
    };
    const params = new HttpParams().set('complete', isCompletedToday);
    return lastValueFrom(this.http.patch(Uri, body));
  }
}
