import { Injectable, Injector } from '@angular/core';
import { McbHttpClient } from '@navaco/mcb-infra';

@Injectable({
  providedIn: 'root'
})
export class WorkflowHttpClient extends McbHttpClient {
  constructor(httpClient: Injector) {
    super('api/infrastructure-workflow/', httpClient);
  }
}
