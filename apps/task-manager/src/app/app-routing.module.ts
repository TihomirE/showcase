import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('@showcase/feature/authentication').then((m) => m.FeatureAuthModule), data: { title:"Task Manager Login"} },
  // { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then((m) => m.TasksModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
