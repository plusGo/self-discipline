import {IndexComponent} from './page/index/index.component';
import {LayoutComponent} from './share/layout/layout.component';
import {Routes} from '@angular/router';

export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: IndexComponent}
    ]
  },
];
