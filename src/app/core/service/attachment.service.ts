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
      .headers({
        'Authorization': 'BearereyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjpcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIsXCJlbWFpbFwiOlwibWhsQHFxLmNvbVwiLFwibmlja05hbWVcIjpcIui2hee6p-euoeeQhuWRmFwifSIsImp0aSI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwiaWF0IjoxNjI0Nzk2MTYzLCJleHAiOjE2MjQ4MDMzNjN9.B24Ns8panZfqJY89I9q02BGRfrfc5Gqt8aDhY2ZZGrU'
      })
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
      .headers({
        'Authorization': 'BearereyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjpcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIsXCJlbWFpbFwiOlwibWhsQHFxLmNvbVwiLFwibmlja05hbWVcIjpcIui2hee6p-euoeeQhuWRmFwifSIsImp0aSI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwiaWF0IjoxNjI0Nzk2MTYzLCJleHAiOjE2MjQ4MDMzNjN9.B24Ns8panZfqJY89I9q02BGRfrfc5Gqt8aDhY2ZZGrU'
      })
      .responseType(HttpResponseType.BLOB)
      .get();
  }
}
