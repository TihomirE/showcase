import { TranslateService } from '@ngx-translate/core';
import { ILanguages } from './ILanguages';

const LNG_KEY = 'SELECTED_LANGUAGE';

export const LANGUAGES: ILanguages[] = [
    { id: 1, language: 'English', value: 'en', imgUrl: 'url(./assets/i18n/flags/uk_small.png)', selected: false },
    { id: 2, language: 'German', value: 'de', imgUrl: 'url(./assets/i18n/flags/ger_small.png)', selected: false }
];

export class LocalizationService {

    public static selected: string;

    static setInitialAppLanguage(translate: TranslateService): void {
        // fallback if there's no language set
        let language = translate.getBrowserLang();
        language ? translate.setDefaultLang(language) : (language = 'en', translate.setDefaultLang(language)); // if no language is returned from translate, default to english

        const lng = localStorage.getItem(LNG_KEY);
        if (lng) {
            this.setLanguage(lng, translate);
            this.selected = lng;
        } else {
            this.setLanguage(language, translate);
            this.selected = language;
        }
    }

    static setLanguage(lng: string, translate: TranslateService) {
        translate.use(lng);
        this.selected = lng;
        localStorage.setItem(LNG_KEY, lng);

        this.updateDefaultLanguage(lng);
    }

    static updateDefaultLanguage(lng: string) {
        LANGUAGES.forEach(element => {
            element.selected = element.value === lng; 
        });
    }

    static getLanguages() {
        return LANGUAGES;
    }

}