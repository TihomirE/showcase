import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { SharedLocalizationModule } from "@showcase/shared/localization";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [MainLayoutComponent, DashboardComponent, AdminComponent, TasksComponent],
    entryComponents: [],
    imports: [
        CommonModule, 
        IonicModule, 
        BrowserModule,
        TranslateModule, 
        SharedLocalizationModule,
        AppRoutingModule
    ],

  })
  export class SharedModule {}