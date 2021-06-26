import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as bytemd from 'bytemd';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ArticlePo} from '../../model/po/article.po';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {AttachmentService} from '../../core/service/attachment.service';
// declare const bytemd: any;

declare const bytemdPluginGfm: any;
declare const bytemdPluginHighlight: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('main') mainRef: ElementRef;
  form: FormGroup;

  article: ArticlePo = {};

  uploading = false;

  constructor(private fb: FormBuilder,
              private attachmentService: AttachmentService) {
    console.log(1)
    this.form = this.fb.group({
      title: null,
      markContent: null,
      category: null,
      headImageId: null
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const plugins = [bytemdPluginGfm(), bytemdPluginHighlight()];

    const editor = new bytemd.Editor({
      target: this.mainRef.nativeElement,
      props: {
        value: '# heading\n\nparagraph\n\n> blockquote',
        plugins,
      },
    });

    editor.$on('change', (e) => {
      this.article.markContent = e.detail.value;
    });
  }

  handleChange(info: { file: NzUploadFile }): void {

    switch (info.file.status) {
      case 'uploading':
        this.uploading = true;
        break;
      case 'done':
        debugger
        break;
      case 'error':
        this.uploading = false;
        break;
    }
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    debugger
    this.attachmentService.upload(file.originFileObj as any);
    return false;
  };

}
