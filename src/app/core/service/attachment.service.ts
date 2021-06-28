import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient, HttpResponseType} from 'ng-http-plus';
import {AttachmentPo} from '../../model/po/attachment.po';
import {map} from 'rxjs/operators';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {NzSafeAny} from 'ng-zorro-antd/core/types';

@Injectable({providedIn: 'root'})
export class AttachmentService {
  upload(files: NzUploadFile[] | File[]): Observable<AttachmentPo[]> {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    return HttpPlusClient.builder()
      .url('/api/attachments/upload')
      .body(formData)
      .post();
  }

  uploadSingle(file: NzUploadFile | File): Observable<AttachmentPo> {
    return this.upload([file as NzSafeAny]).pipe(
      map(attachments => attachments[0])
    );
  }

  download(attachmentId: string): Observable<Blob> {
    return HttpPlusClient.builder()
      .url(`/api/attachments/download/${attachmentId}`)
      .responseType(HttpResponseType.BLOB)
      .get();
  }
}
