import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Localization from '@showcase/shared/localization';

@Component({
  selector: 'showcase-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {

  languages = [] as Localization.ILanguages[];

  constructor(private translateService: TranslateService) { }

  changeLanguage(language: Localization.ILanguages) {
    Localization.LocalizationService.setLanguage(language.value, this.translateService);
    // this.languageService.languageChangeStart(lng.value);

    this.languages.forEach(element => {
      element.selected = element.value === language.value;
    });
    // this.titleCheck(lng.value);
}

  ngOnInit(): void {
    this.languages = Localization.LocalizationService.getLanguages();
  }

}
