import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { SharedLocalizationModule } from "@showcase/shared/localization";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { LanguageComponent } from './language/language.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
    declarations: [MainLayoutComponent, DashboardComponent, AdminComponent, LanguageComponent, TasksComponent],
    entryComponents: [],
    imports: [
        CommonModule, 
        IonicModule, 
        TranslateModule, 
        SharedLocalizationModule
    ],

  })
  export class SharedModule {}