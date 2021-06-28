import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AttachmentService} from '../../../core/service/attachment.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-auth-img',
  templateUrl: './auth-img.component.html',
  styleUrls: ['./auth-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class AuthImgComponent implements OnInit, OnChanges {
  @Input()
  attachmentId: string;

  src: SafeResourceUrl = null;

  constructor(private attachmentService: AttachmentService,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.attachmentId) {
      this.load();
    }
  }

  private load(): void {
    this.attachmentService.download(this.attachmentId).subscribe(res => {
      this.src = this.domSanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(res));

      // const fileReader = new FileReader();
      // window.URL.createObjectURL(res);
      // fileReader.readAsDataURL(res);
      // fileReader.onload = (e) => {
      //   this.domSanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(res))
      //   this.src = e.target.result;
      // };
    });
  }
}
