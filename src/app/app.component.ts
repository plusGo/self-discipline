import {Component} from '@angular/core';
import {HttpPlusConfig} from 'ng-http-plus';
import {LoginService} from './core/service/biz/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static AUTHORIZATION = 'Authorization';

  constructor(private loginService: LoginService) {
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
      }).addResponseInterceptor((res) => {
        if (res.status === 401 || res.status === 403) {
          this.loginService.openLoginModal();
        }
        return res;
      }
    );
  }
}
