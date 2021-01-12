import { Injectable } from '@angular/core';
import { WorkflowHttpClient } from './http';

@Injectable({ providedIn: 'root' })
export class ActivityService {
  controller = 'activity/'
  constructor(private http: WorkflowHttpClient) {
  }

  getActivityTypes() {
    return this.http.post<any[]>(`${this.controller}get-type-list`, {});
  }
  getActivityTargets() {
    return this.http.post<any[]>(`${this.controller}get-target-list`, {});
  }
}