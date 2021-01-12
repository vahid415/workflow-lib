import { Injectable } from '@angular/core';
import { WorkflowHttpClient } from './http';

@Injectable({
  providedIn: 'root'
})
export class RequestActionService {
  constructor(private http: WorkflowHttpClient) { }

  commit(dto) {
    return this.http.post('request-action/commit', dto);
  }

  start(dto) {
    return this.http.post('request/start', dto);
  }
}
