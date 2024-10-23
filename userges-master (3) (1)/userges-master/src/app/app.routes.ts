import { Routes } from '@angular/router';
import { UsuarioAdminPlistRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.plist.routed/usuario.admin.plist.routed.component';
import { UsuarioAdminEditRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.edit.routed/usuario.admin.edit.routed.component';
import { UsuarioAdminNewRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.new.routed/usuario.admin.new.routed.component';


export const routes: Routes = [
  { path: 'admin/usuario/plist', component: UsuarioAdminPlistRoutedComponent },
  { path: 'admin/usuario/edit/:id', component: UsuarioAdminEditRoutedComponent },
  { path: 'admin/usuario/create', component: UsuarioAdminNewRoutedComponent },
];
