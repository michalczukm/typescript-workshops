import {Config } from './config';

export function getConfig(): Config {
    return <Config>{
        // if same server hosts API and serve AngularJS app - this address is enought
        apiUrl: ''
    };
}