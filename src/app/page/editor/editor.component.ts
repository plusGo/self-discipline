import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import * as bytemd from 'bytemd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticlePo} from '../../model/po/article.po';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {AttachmentService} from '../../core/service/biz/attachment.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {ArticleService} from '../../core/service/biz/article.service';
import {MarkdownEditorComponent} from '../../../../projects/markdown/src/lib/markdown-editor/markdown-editor.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  uploading = false;
  submiting = false;

  @ViewChild('editor') editor: MarkdownEditorComponent;

  constructor(private fb: FormBuilder,
              private messageService: NzMessageService,
              private articleService: ArticleService,
              private attachmentService: AttachmentService) {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      markContent: null,
      briefContent: [null, [Validators.required]],
      category: [null, [Validators.required]],
      tags: [null, [Validators.required]],
      headImageId: null
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.uploading = true;
    this.attachmentService.uploadSingle(file).subscribe(res => {
      this.messageService.success('上传成功');
      this.form.patchValue({headImageId: res.id});
      this.uploading = false;

    }, () => this.uploading = false);
    return false;
  };

  submit(): void {
    const data = {
      ...this.form.value,
      tags: this.form.value.tags.join(',')
    };
    this.submiting = true;
    this.articleService.save(data).subscribe(res => {
      this.submiting = false;
      this.messageService.success('发布成功');
    }, () => this.submiting = false);
  }

  onVisibleChange(visible: boolean) {
    if(visible){
      const briefContent = this.editor.getBriefContent(100);
      this.form.controls.briefContent.setValue(briefContent);
    }
  }
}
