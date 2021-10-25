import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Localization from '@showcase/shared/localization'

@Component({
  selector: 'showcase-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    Localization.LocalizationService.setInitialAppLanguage(this.translate);
  }
}
