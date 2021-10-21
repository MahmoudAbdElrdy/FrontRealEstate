export class ResponseData  {
    code: EResponse;
    isSuccess: any;
    message:any;
    errors:any;
    data: any;
    totalRecordsCount: any;
    currentPage:any;
    pageSize:any;
    pageCount:any
}

export enum EResponse
{
    OK=0,
    Unauthorized,
    NoPermission,
    NoData,
    ValidationError,
    UnSuccess,
    UnexpectedError,
}