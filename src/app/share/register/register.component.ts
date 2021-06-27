import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SFComponent, SFSchema, SFStringWidgetSchema} from '@delon/form';
import {RegisterValidator} from '../../core/validator/register.validator';
import {VerifyCodeService} from '../../core/service/verify-code.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private static VERIFY_CODE_EXPIRE_TIME = 300;
  private static VERIFY_CODE_ACTION_TIME = 60;

  schema: SFSchema;

  state = {
    sendingVerifyCode: false,
    verifyCodeActionDuration: null,
    actionDurationCountSub: null
  };

  @ViewChild(SFComponent)
  formRef: SFComponent;

  private readonly destroy$ = new Subject<void>();

  constructor(private verifyCodeService: VerifyCodeService,
              private messageService: NzMessageService) {
    this.schema = {
      properties: {
        nickName: {
          type: 'string',
          title: '昵称',
          maxLength: 55,
          minLength: 2,
          ui: {
            placeholder: '请输入您的昵称',
            validator: RegisterValidator.nickNameValidator
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

  sendEmailVerifyCode(): void {
    this.state.sendingVerifyCode = true;
    this.verifyCodeService.sendEmailVerifyCode(this.formRef.value.email).subscribe(res => {
      this.state.sendingVerifyCode = false;

      if (res.status === 200) {
        this.messageService.success('已发送验证码，请注意查收');
        this.state.verifyCodeActionDuration = RegisterComponent.VERIFY_CODE_ACTION_TIME;
      }
      if (res.status === 400) {
        this.messageService.success(res.message);
        this.state.verifyCodeActionDuration = res.data - (RegisterComponent.VERIFY_CODE_EXPIRE_TIME - RegisterComponent.VERIFY_CODE_ACTION_TIME);
      }
      this.startActionDurationCount();
    }, () => {
      this.state.sendingVerifyCode = false;
    })
  }

  startActionDurationCount(): void {
    this.state.actionDurationCountSub?.unsubscribe();
    this.state.actionDurationCountSub = timer(0, 1000)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        if (this.state.verifyCodeActionDuration <= 0) {
          this.state.actionDurationCountSub?.unsubscribe();
          this.state.verifyCodeActionDuration = null;
        } else {
          this.state.verifyCodeActionDuration--;
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
