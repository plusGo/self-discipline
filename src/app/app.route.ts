import {IndexComponent} from './page/index/index.component';
import {LayoutComponent} from './normal/layout/layout.component';
import {Routes} from '@angular/router';

export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: 'index', loadChildren: () => import('./page/index/index.module').then(m => m.IndexModule)},
    ]
  },
];
