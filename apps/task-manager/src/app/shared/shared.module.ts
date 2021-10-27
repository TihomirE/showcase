import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { SharedLocalizationModule } from "@showcase/shared/localization";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [MainLayoutComponent, DashboardComponent],
    entryComponents: [],
    imports: [
        CommonModule, 
        IonicModule, 
        TranslateModule, 
        SharedLocalizationModule
    ],

  })
  export class SharedModule {}