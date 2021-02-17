import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubsystemManager, SubsystemExternalRouteConfig } from 'angular-infra';

import { RequestNoteEntity } from './../../common/types';
import { WorkflowHttpClient } from '../../common/services/http';
import { SUBSYSTEM_STATE_PROCESSORS_ROUTES } from '../../common/types';

@Injectable({
  providedIn: 'root'
})
export class CartableService {
  static readonly PROCESSORS_SUB_PATH = 'processors';

  constructor(private sysManager: SubsystemManager, private http: WorkflowHttpClient,
    private httpClient: HttpClient) {
  }

  getAllSubsystem() {
    return this.httpClient.post<any>('api/platform/subsystem/find-children', null);
  }

  getOpenItems(data) {
    return this.http.post<any>('request-state/task-list', data);
  }

  getCartableItemNotes(pagingRequest) {
    return this.http.post<any>('request-note/find-paging', pagingRequest);
  }

  addNoteToCartableItem(data: RequestNoteEntity) {
    return this.http.post<any>('request-note/add', data);
  }

  registerAllStateProcessorRoutes() {
    this.getAllSubsystemsWithStateProcessors()
      .forEach(s => {
        const routes = (s.externalRoutes as SubsystemExternalRouteConfig).stateProcessorsRoutes;
        routes.forEach(x => SUBSYSTEM_STATE_PROCESSORS_ROUTES.push(x));
      });
  }

  getAllSubsystemsStateProcessorsRoutesMap() {
    const map = new Map<string, string>();
    this.getAllSubsystemsWithStateProcessors()
      .forEach(sys => {
        const routes = (sys.externalRoutes as SubsystemExternalRouteConfig).stateProcessorsRoutes;
        routes.forEach(route => {
          map.set(route.id, route.path);
        });
      });

    return map;
  }

  getAllSubsystemsWithStateProcessors() {
    return this.sysManager.subsystems
      .filter(s =>
        s.externalRoutes &&
        Array.isArray((s.externalRoutes as SubsystemExternalRouteConfig).stateProcessorsRoutes));
  }

  lockCartableItem(requestStateId) {
    return this.http.post<boolean>('request-state/lock-state', requestStateId);

  }
}
