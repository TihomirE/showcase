import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'select-language', pathMatch: 'full' },
  { path: 'select-language', pathMatch: 'full', component: SelectLanguageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SelectLanguageComponent
  ],
})
export class FeatureLanguageSelectLanguageModule {}
