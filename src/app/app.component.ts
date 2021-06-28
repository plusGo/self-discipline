import {Component} from '@angular/core';
import {HttpPlusConfig} from 'ng-http-plus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   static AUTHORIZATION = 'Authorization';

  constructor() {
    HttpPlusConfig.builder()
      .baseUrl('')
      .addInterceptor({
        request: (req) => {
          const token = window.sessionStorage.getItem(AppComponent.AUTHORIZATION);
          if (!token) {
            return req;

          }
          return req.clone({headers: req.headers.set(AppComponent.AUTHORIZATION, token)});
        },
        response: (res) => {
          const token = (res as any).headers.get(AppComponent.AUTHORIZATION);
          if (token) {
            window.sessionStorage.setItem(AppComponent.AUTHORIZATION, token);
          }
        }
      });
  }
}
