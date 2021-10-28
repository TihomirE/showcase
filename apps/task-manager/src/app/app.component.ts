import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Localization from '@showcase/shared/localization';
import { EventBusService, EventData } from './core/helpers/event-bus.service';
import { MenuItem, MenuService } from './core/services/menu.service';

@Component({
  selector: 'showcase-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  menuItems = [] as MenuItem[];

  constructor(
    private translate: TranslateService,
    private menuService: MenuService,
    private eventBusService: EventBusService
  ) { }

  setMenuItems() {
    this.menuItems = this.menuService.setMenu();
  }

  setTitle(title: string) {
    // TODO enum for event types?
    this.eventBusService.emit(new EventData('AppTitle', title));
  }

  ngOnInit(): void {
    Localization.LocalizationService.setInitialAppLanguage(this.translate);
    this.setMenuItems();
  }
}
