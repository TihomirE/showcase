import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './shared/admin/admin.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LanguageComponent } from './shared/language/language.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { TasksComponent } from './shared/tasks/tasks.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('@showcase/feature/authentication').then((m) => m.FeatureAuthModule), data: { title: "Task Manager Login" } },
  {
    path: 'app', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // TODO needs to be moved to separate solution modules or feature libs
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'language', component: LanguageComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
