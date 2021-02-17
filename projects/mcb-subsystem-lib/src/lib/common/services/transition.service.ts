import { Injectable } from '@angular/core';
import { TransitionEntity, StateEntity } from '../types';
import { WorkflowHttpClient } from './http';

@Injectable({ providedIn: 'root' })
export class TransitionService {
  controller = 'transition/'
  constructor(private http: WorkflowHttpClient) {
  }


  getTransitions(stateId: number) {
    return this.http.post<any[]>(`${this.controller}find-paging`, stateId);
  }

  getTransition(transitionId: number) {
    return this.http.post<TransitionEntity>(`${this.controller}find-by-id`, transitionId);
  }

  deleteTransition(transitionId: number) {
    return this.http.post<TransitionEntity[]>(`${this.controller}delete`, transitionId);
  }

  createTransition(transition: TransitionEntity) {
    return this.http.post<TransitionEntity>(`${this.controller}save`, transition);
  }

  getMovementsForGrid(transitionId: number) {
    return this.http.post<TransitionEntity>(`${this.controller}find-by-id`, {});
  }

  editTransition(transition: TransitionEntity) {
    return this.http.post<TransitionEntity>(`${this.controller}update`, transition);
  }

  getPossibleStateForMovement(processId: number) {
    return this.http.post<StateEntity[]>(`${this.controller}find-possible-movement`, processId);
  }
}