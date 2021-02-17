import { Injectable } from '@angular/core';
import { WorkflowHttpClient } from './http';

import { StateEntity } from '../types';

@Injectable({ providedIn: 'root' })
export class StateService {
  controller = 'state/'
  constructor(private http: WorkflowHttpClient) {
  }

  getState(stateId: number) {
    return this.http.post<StateEntity>(`${this.controller}find-by-id`, stateId);
  }

  getStatesForGrid(processId: number) {
    return this.http.post<any[]>(`${this.controller}find-paging`, processId);
  }

  createState(state: StateEntity) {
    return this.http.post<StateEntity>(`${this.controller}save`, state);
  }

  editState(state: StateEntity) {
    return this.http.post<StateEntity>(`${this.controller}update`, state);
  }

  deleteState(stateId: number) {
    return this.http.post<StateEntity[]>(`${this.controller}delete`, stateId);
  }
}