import { Dictionary } from 'angular-infra';

export default {
  locale: 'faIR',
  entries: {
    workflowDefinition: 'تعریف گردش کار',
    workflow: 'گردش کار',
    subsystem: 'سامانه',
    process: 'فرآیند',
    note: 'یادداشت',
    processName: 'نام فرآیند',
    processes: 'فرآیندها',
    referenceId: 'مقدار ورودی',
    active: 'فعال',
    report: 'گزارش',
    deActive: 'غیرفعال',
    defineProcesses: 'تعریف فرآیندها',
    states: 'حالت ها',
    state: 'حالت',
    stateName: 'نام حالت',
    status: 'وضعیت',
    warning: 'هشدار',
    cartable: 'کارتابل',
    createDate: 'تاریخ ایجاد',
    sender: 'ارسال کننده',
    description: 'شرح',
    doAction: 'اقدام',
    lock: 'قفل',
    detail: 'جزییات',
    unlock: 'باز',
    view: 'مشاهده',
    systemic: 'سیستمیک',
    deadline: '  سررسید  (روز)',
    stateType: 'نوع حالت',
    INITIAL: 'حالت نخستین',
    MEDIAL: 'حالت میانی',
    TERMINAL: 'حالت پایانی',
    reload: 'بارگذاری مجدد',
    actionType: 'نوع عملیات',
    changeStatus: 'تغییر وضعیت',
    SERVICE_CALL: 'فراخوانی سرویس',
    COMPONENT_RUN: 'بازکردن فرم',
    type: 'نوع',
    PRE: 'پیش فعالیت',
    POST: 'پس فعالیت',
    ROLLBACK: 'بازگشت',
    order: 'اهمیت',
    destination: 'مقصد',
    uri: 'سرویس مقصد',
    fallbackUri: ' سرویس فالبک',
    actions: ' عملیات ',
    currentState: ' حالت فعلی ',
    FORK: ' موازی ',
    CONDITIONAL: ' شرطی ',
    transition: 'انتقال',
    transitions: 'انتقالات',
    movements: 'جابجایی ها',
    serviceAddress: 'آدرس سرویس',
    form: 'انتخاب فرم',
    row: 'ردیف',
    toWhichState: 'به کدام حالت',
    insert: 'درج',
    expression: 'عبارت شرطی',
    expressionValue: 'مقدار شرط',
    expressionKey: 'کلید شرط',
    expressionType: 'نوع شرط',
    yes: 'بلی',
    no: 'خیر',
    transitionDetails: 'جزییات انتقال',
    StateDetails: 'جزییات حالت',
    addState: 'افزودن حالت',
    addNote: 'افزودن یادداشت',
    notes: 'یادداشت ها',
    addAction: 'افزودن اکشن',
    activityType: 'نوع اتکتیویتی',
    roleId: 'شناسه نقش',
    roles: 'نقش ها',
    stateId: 'شناسه حالت',
    requestId: 'شناسه درخواست',
    title: ' عنوان',
    select: ' انتخاب',
    acceptedUser: 'کاربر تایید کننده',
    processStart: 'استارت فرآیند',
    selectProcess: 'انتخاب فرآیند',
    successStartProcess: 'فرآیند باموفقیت استارت خورد',
    reset: ' ریست جدول',
    isOnlySameOrg: ' فقط سازمان ایجادکننده',
    isSelectDestinationOrg: 'الزام به تعیین سازمان مقصد',
    addActivity: 'افزودن اکتیویتی',
    targets: 'تارگت ها ',
    RoleBack: 'بازگشت داده شده',
    done: 'تکمیل شده',
    roleHasBeenAdded: ' این نقش در لیست موجود است ',
    deleteWarningMsg: 'آیا از حذف این رکورد اطمینان دارید؟',
    
    // processors Form Title
    successChangeStatus: 'تغییر وضعیت این فرایند با موفقیت انجام شد',
    successAddState: 'این حالت با موفقیت به لیست حالت ها افزوده شد',
    TestWorkflow1State1: 'تایید پرداخت پایا-گام 1',
    TestWorkflow1State2: 'تایید پرداخت پایا-گام 2',
    TestWorkflow1State3: 'تایید پرداخت پایا-گام 3',
    TestTakeChequeState1Checking: 'اعطای دسته چک مرحله بررسی مدارک',
    TestTakeChequeState2Confirmation: 'اعطای دسته چک مرحله تایید',
    TestTakeChequeState3Confirmed: 'اعطای دسته چک مرحله تایید شده',
    TestTakeChequeState4Validation: 'اعطای دسته چک مرحله اعتبارسنجی',
    TestTakeChequeState5Inquiry: 'اعطای دسته چک مرحله استعلام',
    TestTakeChequeState6Review: 'اعطای دسته چک مرحله بازنگری',
    TestTakeChequeState7Documents: 'اعطای دسته چک مرحله اخذ وثایق',
    TestTakeChequeState8Final: 'اعطای دسته چک مرحله پایان',

    // validation message
    noActionTypeSelectedAsTypeComponent: 'این حالت از نوع سیستمی نیست و برای این حالت اکشنی از نوع باز کردن فرم تعریف نشده است',
    thisRoleAddedToTheStatesRolesList: ' این نقش به لیست نقش های حالت افزوده شد',
    thisMovementIsConditional: 'برای انتقال های شرطی باید حداقل دو شرط تعریف کنید',
    noRoleSelectedForThisState: 'برای این حالت نقشی تعریف نشده است',
    noNoteForThisState: 'یادداشتی برای این حالت یافت نشد',
    noRoleForThisState: 'نقشی برای این حالت یافت نشد',
    changeStatusConfirmation: 'آیا از تغییر وضعیت این فرایند اطمینان دارید',
    noStateProcessorFoundForTask: 'پیکربندی این فرآیند به درستی انجام نشده است (no-state-processor-found)',

  }
} as Dictionary;
