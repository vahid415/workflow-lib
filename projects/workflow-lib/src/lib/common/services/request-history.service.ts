import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkflowHttpClient } from './http';
import { GenericCrudService } from '@navaco/mcb-infra';
import { RequestHistoryEntity } from '../request-history.dto';

const controller = 'request-history';

@Injectable({ providedIn: 'root' })
export class RequestHistoryService extends GenericCrudService {
  constructor(public http: WorkflowHttpClient,public HttpClient: HttpClient) {
    super(controller, http, RequestHistoryEntity);
  }

  getNotes(id) {
    return this.http.post<any>(`${'request-note/list-state-notes/'}${id}`, {});
  }

  getRole(id) {
    return this.http.post<any>('state-role/find-by-request', id);
  }

  getUser(id) {
    return this.HttpClient.post<any>('api/infrastructure-security/users/find-by-id', id);
  }

}