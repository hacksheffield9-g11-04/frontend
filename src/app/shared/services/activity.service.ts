// activity.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActivityDetailResponse,
  ActivityRequest,
  ActivityResponse,
} from '../interfaces/activity.interface';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private baseUrl = 'https://6105-143-167-204-71.ngrok-free.app/api/generate';
  private getActivitiesUri = 'https://6105-143-167-204-71.ngrok-free.app/api/activities'
  constructor(private http: HttpClient) {}

  generateActivities(request: ActivityRequest): Observable<ActivityResponse> {
    const params = new HttpParams()
      .set('difficulty', request.difficulty)
      .set('category', request.category)
      .set('durationPerDay', request.durationPerDay);

    return this.http.get<ActivityResponse>(this.baseUrl, { params });
  }

  public getActivities(){
    const params = new HttpParams()
      .set('groupByTag', false)

    return this.http.get<ActivityDetailResponse>(this.getActivitiesUri, { params }) 
  }
}
