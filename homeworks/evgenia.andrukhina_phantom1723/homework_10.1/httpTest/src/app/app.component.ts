import {Component} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {HttpRequestService, RequestedDataInterface} from './services/http-request.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    inf: RequestedDataInterface;

    constructor(private httpRequestService: HttpRequestService) {
        this.showData()
    }

    showData() {
        this.httpRequestService.getData()
            .subscribe(data => {
                this.inf = data;
            })
    }
}
