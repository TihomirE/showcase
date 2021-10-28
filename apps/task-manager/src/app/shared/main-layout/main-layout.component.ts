import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../core/helpers/event-bus.service';
import * as Localization from '@showcase/shared/localization';
import { MenuItem, MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'showcase-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  // default fallback
  title = Localization.LocalizationService.selected === 'en' ? 'Home' : 'Hauptseite';

  menuItems = [] as MenuItem[];

  constructor(
    private eventBusService: EventBusService,
    private menuService: MenuService
  ) { }

  setMenuItems() {
    this.menuItems = this.menuService.setMenu();
  }

  ngOnInit(): void {
    this.eventBusService.on('AppTitle', (data: string) => {
      this.title = data;
    });
    this.setMenuItems();
  }

}
