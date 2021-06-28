import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';
import {UserTokenDto} from '../../../model/dto/user-token.dto';
import {EmailPasswordRequest} from '../../../model/request/email-password.request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public emailPasswordLogin(request: EmailPasswordRequest): Observable<UserTokenDto> {
    return HttpPlusClient.builder()
      .url('/api/login/email/password')
      .body(request)
      .post();
  }

}
