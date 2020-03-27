import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const updatedRequest = request.clone({
            setHeaders : { Authorization : "Bearer "+ localStorage.getItem('token')}
        });


        console.log("Before making api call : ", updatedRequest);
        return next.handle(updatedRequest)
    }
}