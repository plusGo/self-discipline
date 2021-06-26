import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserPo} from '../../model/po/user.po';
import {HttpPlusClient} from 'ng-http-plus';

@Injectable({providedIn: 'root'})
export class AttachmentService {
  upload(files: File[]): Observable<UserPo> {
    const formData = new FormData();
    formData.set('files', files as any);
    return HttpPlusClient.builder()
      .url('/api/attachments/upload')
      .body(formData)
      .post();
  }
}
