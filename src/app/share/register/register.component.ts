import {Component, OnInit} from '@angular/core';
import {SFSchema, SFStringWidgetSchema} from '@delon/form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  schema: SFSchema;

  constructor() {
    this.schema = {
      properties: {
        nickName: {
          type: 'string',
          title: '昵称',
          maxLength: 55,
          minLength: 2,
          ui: {
            placeholder: '请输入您的昵称'
          } as SFStringWidgetSchema
        },
        email: {
          type: 'string',
          title: '邮箱',
          maxLength: 255,
          ui: {
            placeholder: '请输入您的邮箱'
          } as SFStringWidgetSchema
        },
        verifyCode: {
          type: 'string',
          title: '邮箱验证码',
          ui: {
            widget: 'custom',
          } as SFStringWidgetSchema
        },
        password: {
          type: 'string',
          title: '密码',
          maxLength: 255,
          ui: {
            placeholder: '请输入您的密码'
          } as SFStringWidgetSchema
        },
      },
      required: ['nickName', 'email', 'password', 'verifyCode']
    };
  }

  ngOnInit(): void {
  }

  sendEmailVerifyCode() {

  }
}
