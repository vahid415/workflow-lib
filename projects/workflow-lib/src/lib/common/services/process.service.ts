import { Injectable } from '@angular/core';

import { ProcessEntity } from '../types';
import { WorkflowHttpClient } from './http';

@Injectable({
  providedIn: 'root'
})
export class ProcessManagementService {
  controller = 'process/'
  constructor(private http: WorkflowHttpClient) {
  }

  getProcess(processId: number) {
    return this.http.post<ProcessEntity>(`${this.controller}find-by-id`, processId);
  }

  processesFindPaging() {
    return this.http.post<any[]>(`${this.controller}find-paging`, {});
  }

  createProcess(process: ProcessEntity) {
    return this.http.post<ProcessEntity>(`${this.controller}save`, process);
  }

  editProcess(process: ProcessEntity) {
    return this.http.post<ProcessEntity>(`${this.controller}update`, process);
  }

  deleteProcess(processId: number) {
    return this.http.post<ProcessEntity[]>(`${this.controller}delete`, processId);
  }

  roleFiltering(start: number, size: number, filters: any[], sort: any) {
    return this.http.post<any>('role/find-paging',
      {
        "start": 0,
        "size": 10,
        "filters": [

        ],
        "sort": {
          "fieldName": "name",
          "operation": "desc"
        }
      }
    );
  }
}
