import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd/modal';
import {RegisterComponent} from '../register/register.component';
import {ModalWidthConstant} from '../../core/constant/modal-width.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NzModalService) {
  }

  ngOnInit(): void {
  }

  openRegister() {
    this.modalService.create({
      nzTitle: '注册',
      nzContent: RegisterComponent,
      nzWidth: ModalWidthConstant.SMALL_WIDTH,
      nzFooter: null
    })

  }
}