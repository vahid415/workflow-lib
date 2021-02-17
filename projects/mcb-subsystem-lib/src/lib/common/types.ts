import { RequestDataType, RequestState, RequestStatus, StakeholderType, StateType, ActivityType, Target, ActionType, ActionPerformType, RequestActionState, TransitionType } from './enums';

export const SUBSYSTEM_STATE_PROCESSORS_ROUTES = [];

export abstract class AbstractAuditingEntity {
  id: number;
  insertDate: string;
  insertUserId: number;
  insertOrganizationId: number;
  modifyDate: string;
  modifyUserId: number;
  modifyOrganizationId: number;
  version: string;
}

export interface ActionEntity {
  id: number;
  actionType: ActionType;
  state: StateEntity;
  name: string;
  destination: string;
  uri: string;
  fallbackUri: string;
  order: number;
  type: ActionPerformType;
  description: string;
}
export interface ActivityEntity {
  id: number;
  activityType: ActivityType;
  state: StateEntity;
  name: string;
  description: string;
  activityTargets: ActivityTargetEntity[];
}
export interface ActivityTargetEntity {
  target: Target;
  activity: ActivityEntity;
  activityTargetRoles: ActivityTargetRoleEntity[];
}
export interface ActivityTargetRoleEntity extends AbstractAuditingEntity {
  activityTarget: ActivityTargetEntity;
  roleId: number;
}
export interface MovementEntity {
  id: number;
  transition: TransitionEntity;
  nextState: StateEntity;
  expression: string;
}
export interface ProcessEntity {
  id: number;
  name: string;
  active: boolean;
  states: StateEntity[];
  version: number;
}
export class RequestActionEntity extends AbstractAuditingEntity {
  requestState: RequestStateEntity;
  action: ActionEntity;
  result: String;
  requestData: RequestDataEntity[];
  state: RequestActionState;
}
export class RequestDataEntity extends AbstractAuditingEntity {
  request: RequestEntity;
  requestAction: RequestActionEntity;
  dataType: RequestDataType;
  value: String;
}
export interface RequestEntity extends DtoBase {
  process: ProcessEntity;
  requestStates: RequestStateEntity;
  title: String;
  status: RequestStatus;
  userId: number;
  stakeholders: RequestStakeholderEntity[];
  requestNotes: RequestNoteEntity[];
  requestData: RequestDataEntity[];
}
export interface RequestNoteEntity extends AbstractAuditingEntity {
  request: RequestEntity;
  requestState: RequestStateEntity;
  note: String;
}
export class RequestStakeholderEntity extends AbstractAuditingEntity {
  request: RequestEntity;
  userId: number;
  stakeholderType: StakeholderType;
}
export interface RequestStateEntity {
  id: number;
  notes?: string;
  request: RequestEntity;
  state: StateEntity;
  status: RequestState;
  requestNotes: RequestNoteEntity[];
  requestStateMovements: RequestStateMovementEntity[];
  requestActions: RequestActionEntity[];
  userId: number;
  locked?: boolean;
}
export class RequestStateMovementEntity extends AbstractAuditingEntity {
  requestState: RequestStateEntity;
  movement: MovementEntity;
  requestData: RequestDataEntity;
}
export class RoleActivityEntity {
  id: number;
  name: string;
  title: string;
  role: RoleEntity;
  enabled: boolean;
  states: StateRoleEntity[];
}
export class RoleEntity {
  id: number;
  name: string;
  title: string;
  enabled: boolean;
  states: StateRoleEntity[];
}
export interface StateEntity {
  id: number;
  stateType: StateType;
  process?: ProcessEntity;
  name: string;
  hasRollback: Boolean;
  systemic: boolean;
  deadline: number;
  description?: string;
  activities?: ActivityEntity[];
  actions?: ActionEntity[];
  roles: RoleActivityEntity[];
  transitions: TransitionEntity[];
  movementInGroups: StateMovementInGroupEntity[];
  isOnlySameOrg: boolean;
  isSelectDestinationOrg: boolean;
}
export class StateMovementInGroupEntity extends AbstractAuditingEntity {
  state: StateEntity;
  movements: MovementEntity[];
}
export class StateRoleEntity extends AbstractAuditingEntity {
  state: StateEntity;
  role: RoleEntity;
}
export interface TransitionEntity {
  id: number;
  name: string;
  process: ProcessEntity;
  currentState: StateEntity;
  type: TransitionType;
  movements: MovementEntity[];
}
export interface RequestCommitDto {
  requestAction: DtoBase;
  requestDataValue: any;
  expressionData: any;
}
export interface RequestDataDto {
  request: DtoBase;
  requestAction: DtoBase;
  dataType: RequestDataType;
  value: string;
}
export interface DtoBase {
  id: number;
  version: string;
  name: string;
}
export class RequestDto {
  process: DtoBase;
  title: String;
  status: RequestStatus;
  user: DtoBase;
  requestData: RequestDataDto[];
  requestNotes: RequestNoteDto[];
}
export class RequestNoteDto {
  request: DtoBase;
  requestState: DtoBase;
  note: String;
}
export interface CartableItemNote {
  id?: number;
  date?: any;
  text?: any;
}
export class RequestStartDto {
  process: DtoBase = {} as DtoBase;
  title: string;
  status: RequestStatus;
  requestData: RequestDataEntity[] = [];
  requestNotes: RequestNoteEntity[] = [];
}


















































