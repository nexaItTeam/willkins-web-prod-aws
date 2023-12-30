import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpErrorResponse, } from "@angular/common/http";
import { AppPreference } from "../shared/app-preference";
import { ACCESS_TOKEN_KEY, CustomEvents, RestEnds } from "../shared/config";
import { environment } from "../env/env";
import { catchError, map, tap, throwError } from "rxjs";

@Injectable({
    providedIn: "root",
})

export class ApiManager {
    reponseEmitter: EventEmitter<any> = new EventEmitter();

    constructor(
        public http: HttpClient,
        public appPreference: AppPreference,
        public router: Router
    ) { }

    loadJSONFile(url: string) {
        return this.http.get(url);
    }

    prepareUrl(url: RestEnds) {
        let urlStr = url + "";
        if (urlStr.indexOf("http://") != -1 || urlStr.indexOf("https://") != -1) {
            return urlStr;
        } else {
            return environment.apiBase + urlStr;
        }
    }

    getRequestHeaders(authenticate: boolean, endUrl: any) {
        var headers: any = {
            'Accept': 'application/json'
        };
        if (authenticate) {
            // Append access token and referesh token
            // headers[ACCESS_TOKEN_KEY] = `Bearer ${this.appPreference.getAccessToken()}`;

            // if (endUrl == 'users/save' || endUrl == 'users/update') {
            headers['x-auth-token'] = this.appPreference.getAccessToken()
            // }
        }
        return {
            headers: new HttpHeaders(headers),
        };
    }

    sendPOSTRequest(endUrl: RestEnds, bodyParams: any, authenticate: boolean) {
        // console.log('endurl', endUrl)
        // console.log('bodyParams', bodyParams)
        // console.log('authenticate', authenticate)
        const headers = this.getRequestHeaders(authenticate, endUrl);
        const restUrl = this.prepareUrl(endUrl);
        const self = this;
        return self.http.post(restUrl, bodyParams, headers).pipe(
            map((response) => {
                // response = AppUtil.convertObject(response, "Camel");
                return response;
            }),
            tap(
                (data) => { },
                (error) => {
                    self.processError(error);
                }
            ),
            catchError(self.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        const self = this;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log("An error occurred:", error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}` +
                `, URL: ${error.url}`
            );
        }
        console.log(error);
        return throwError(error);
    }

    processError(error: any) {
        if (error.status == 401) {
            localStorage.clear();
            this.router.navigate(["/login"]);
            this.reponseEmitter.emit({ event: CustomEvents.UNAUTHORISED });
        }
    }
}



