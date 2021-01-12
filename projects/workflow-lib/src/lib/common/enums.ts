export enum RequestDataType {
  REQUEST = 'REQUEST', // داده فرایندی   
  EXPRESSION = 'EXPRESSION' // داده تصمیم گیری
}

export enum RequestState {
  INIT = 'INIT', // وضعیت در حالت اولیه
  READY = 'READY', // وضعیت در حالت آماده (برای اجرای پیش دستورات
  ACTIVE = 'ACTIVE', // وضعیت درحال پیگیری (اجرای دستورات کاربری)
  COMPLETED = 'COMPLETED', //  وضعیت کامل شده (آماده برای اجرای پس دستورات)
  DONE = 'DONE', //  وضعیت انجام شده
  ROLE_BACK = 'ROLE_BACK' // وضعیت بازگشت داده شده
}

export enum RequestStatus {
  READY = 'READY', // فرایند در وضعیت اولیه
  ACTIVE = 'ACTIVE', //  فرایند درحال پیگیری
  COMPLETED = 'COMPLETED', // فرایند انجام شده
  CLOSED = 'CLOSED', /// فرایند بسته شده از سمت بانک
  CANCELED = 'CANCELED' // فرایند انصرافی از سمت مشتری
}

export enum StakeholderType {
  ACTOR = 'ACTOR', // کاربر
  INFORMED = 'INFORMED' // مطلع
}

export enum StateType {
  INITIAL = 'INITIAL', // نخستین
  MEDIAL = 'MEDIAL', // میانی
  TERMINAL = 'TERMINAL' // پایانی
};

export enum ActivityType {
  NOTIFY = 'NOTIFY' // اطلاع رسانی
}

export enum Target {
  STAKEHOLDER = 'STAKEHOLDER', // مرتبطین
  PROCESS_ADMIN = 'PROCESS_ADMIN', // مسئول
  REQUESTER = 'REQUESTER', // درخواست دهنده (کاربر)
  ROLE = 'ROL' // گروه کاربری
}

export enum ActionType {
  SERVICE_CALL = 'SERVICE_CALL', // فراخوانی سرویس
  COMPONENT_RUN = 'COMPONENT_RUN' // بازکردن فرم
}

export enum ActionPerformType {
  PRE = 'PRE', //  پیش فعالیت
  POST = 'POST', // پس فعالیت
  ROLLBACK = 'ROLLBACK' // بازگشت
}

export enum RequestActionState {
  READY = 'READY', // در حالت اولیه
  PROCESSED = 'PROCESSED' // پردازش شده
}

export enum TransitionType {
  FORK = 'FORK', // موازی
  CONDITIONAL = 'CONDITIONAL' // شرطی
}