import { Injectable } from '@angular/core';
import { ActionEntity } from '../types';
import { WorkflowHttpClient } from './http';

@Injectable({ providedIn: 'root' })
export class ActionService {
  controller = 'action/'
  constructor(private http: WorkflowHttpClient) {
  }

  getActions() {
    return this.http.post<ActionEntity>(`${this.controller}find-paging`, {});
  }

  deleteAction(actionId: number) {
    return this.http.post<ActionEntity[]>(`${this.controller}delete`, actionId);
  }

  getAction(actionId: number) {
    return this.http.post<ActionEntity>(`${this.controller}find-by-id`, actionId);
  }

  createAction(action: ActionEntity) {
    return this.http.post<ActionEntity>(`${this.controller}save`, action);
  }

  editAction(action: ActionEntity) {
    return this.http.post<ActionEntity>(`${this.controller}update`, action);
  }
}