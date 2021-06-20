import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserPo} from '../../model/po/user.po';
import {EmailRegisterRequest} from '../../model/request/email-register.request';
import {HttpPlusClient} from 'ng-http-plus';

@Injectable()
export class RegisterService {
  public emailRegister(emailRegisterRequest: EmailRegisterRequest): Observable<UserPo> {
    return HttpPlusClient.builder()
      .url('/api/register/email')
      .body(emailRegisterRequest)
      .post();
  }
}
