export interface RouteInterface {
    method: HTTPMethods
    path: string,
    controller: any
    action: string
    middlewares: []
}

export interface CheckRouteInterface<T>{
    method: HTTPMethods
    path: string,
    controller: T,
    action: keyof T,
    middlewares: []
}

export type RoutesInterface = RouteInterface[]
export type CheckRoutesInterface<T> = CheckRouteInterface<T>[]

export enum HTTPMethods {
    GET = "get",
    POST = "post",
    PATCH = "patch",
    PUT = "put",
    DELETE = "delete"
}