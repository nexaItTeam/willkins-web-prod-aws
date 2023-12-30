import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

export enum PreferenceKeys {
    ACCESS_TOKEN = "ACCESS_TOKEN",
    USER_INFO = "USER_INFO"
}

@Injectable({
    providedIn: "root",
})

export class AppPreference {

    loginData: any;
    access: any;

    setInPreference(key: PreferenceKeys, value: any) {
        localStorage.setItem(key + "", value);
    }

    setAccessToken(accessToken: any) {
        this.setInPreference(PreferenceKeys.ACCESS_TOKEN, accessToken);
    }

    getAccessToken() {
        return this.getFromPreference(PreferenceKeys.ACCESS_TOKEN);
    }

    

    getFromPreference(key: PreferenceKeys) {
        return localStorage.getItem(key + "");
    }
    getObject(key: PreferenceKeys) {
        const objectStr = this.getFromPreference(key);
        if (objectStr) {
            return JSON.parse(objectStr);
        }
        return null;
    }
}