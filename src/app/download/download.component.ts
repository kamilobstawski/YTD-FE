import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../_services/index'


@Component({
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
    url: string = '';
    msg: string = '';
    dots = '.';
    percentWidth = 0;
    allBytes = 0;
    bytesDone = 0;
    timeout: any;
    finished = false;
    started = false;
    wrongURL = false;

    constructor(
        private downloadService: DownloadService,
    ) { }

    download(url) {
        var matches = url.match(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/)
        if (matches) {
            this.wrongURL = false;
            this.downloadService.downloadVideo(url)
                .subscribe(data => {
                    if(data['task_id']) {
                        this.finished = false;
                        this.started = true;
                        this.msg = 'Downloading is starting';
                        this.timeout = setInterval(() => {
                            this.getProgress(data['task_id']);
                        }, 500);
                    }
                    else {
                        this.msg = 'Something went wrong. Please try again.';
                    }
                });
        }
        else {
            this.wrongURL = true;
        }
    }

    getProgress(task_id) {
        this.downloadService.getProgress(task_id)
            .subscribe(data => {
                this.appendDots();
                if(data['details'] && data['details'] != 'Downloading finished') {
                    this.msg = '';
                    this.allBytes = data['details']['total'];
                    this.bytesDone = data['details']['current'];
                    this.percentWidth = data['details']['percent'];
                }
                if(data['state'] == 'SUCCESS') {
                    this.msg = 'Video downloaded successfully!';
                    this.finished = true;
                    this.started = false;
                    clearInterval(this.timeout);
                }
            })
    }

    appendDots() {
        if(this.dots.length != 3) {
            this.dots += '.';
        }
        else {
            this.dots = '';
        }
    }
}
