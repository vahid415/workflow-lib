import { Injectable, Injector } from '@angular/core';
import { NgHttpClient } from 'angular-infra';

@Injectable({
  providedIn: 'root'
})
export class WorkflowHttpClient extends NgHttpClient {
  constructor(httpClient: Injector) {
    super('api/infrastructure-workflow/', httpClient);
  }
}
