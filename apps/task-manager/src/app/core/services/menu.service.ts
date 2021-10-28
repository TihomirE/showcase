import { Injectable } from '@angular/core';
import * as Localization from '@showcase/shared/localization';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  setMenu(): MenuItem[] {
    const menuItems: MenuItem[] = new Array<MenuItem>();

    const home: MenuItem = MenuItem.createMenuItem(Localization.LocalizationService.selected === 'en' ? 'Home' : 'Hauptseite', 'home', '/app/dashboard');
    menuItems.push(home);
    const tasks: MenuItem = MenuItem.createMenuItem(Localization.LocalizationService.selected === 'en' ? 'Tasks' : 'Aufgaben', 'calendar', '/app/tasks');
    menuItems.push(tasks);
    const admin: MenuItem = MenuItem.createMenuItem(Localization.LocalizationService.selected === 'en' ? 'Admin' : 'Admin', 'person-circle', '/app/admin');
    menuItems.push(admin);
    const language: MenuItem = MenuItem.createMenuItem(Localization.LocalizationService.selected === 'en' ? 'Language' : 'Sprache', 'language', '/app/language');
    menuItems.push(language);
    const auth: MenuItem = MenuItem.createMenuItem(Localization.LocalizationService.selected === 'en' ? 'Logout' : 'Ausloggen', 'log-out', '/auth');
    menuItems.push(auth);

    return menuItems;
  }
}

export class MenuItem {

  constructor(
      public title: string,
      public path: string,
      public icon: string,
  ) { }

  static createMenuItem(title: string, icon: string, path: string): MenuItem {
      const newMenuItem = new MenuItem(title, path, icon);
      return newMenuItem;
  }
}
