import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../../environments/environment";

@Injectable()
export class DownloadService {

    constructor(
        private http: HttpClient,
    ) { }

    downloadVideo(data) {
        return this.http.post(environment.origin + '/download/', {url: data})
    }

    getProgress(task_id) {
        return this.http.get(environment.origin + '/get_progress/' + task_id + '/')
    }
}
