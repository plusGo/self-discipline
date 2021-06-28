import {LayoutComponent} from './normal/layout/layout.component';
import {Routes} from '@angular/router';
import {AuthLoginGuard} from './core/service/auth/auth-login.guard';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {
    path: '', component: LayoutComponent, children: [
      {path: 'index', loadChildren: () => import('./page/index/index.module').then(m => m.IndexModule)},
    ]
  },
  {
    path: 'editor',
    loadChildren: () => import('./page/editor/editor.module').then(m => m.EditorModule),
    canActivate: [AuthLoginGuard]
  },
];
