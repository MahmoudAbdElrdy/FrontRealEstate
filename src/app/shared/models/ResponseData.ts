export class ResponseData  {
    code: EResponse;
    isSuccess: any;
    message:any;
    errors:any;
    data: any;
    totalItems: any;
    currentPage:any;
    pageSize:any;
    totalPages:any
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