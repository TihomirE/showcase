import { Component, OnInit } from '@angular/core';
import * as Localization from '@showcase/shared/localization';
import * as MessageBus from '@showcase/shared/util/message-bus';
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
    private menuService: MenuService
  ) { }

  setMenuItems() {
    this.menuItems = this.menuService.setMenu();
  }

  ngOnInit(): void {
    // this.eventBusService.on('AppTitle', (data: string) => {
    //   this.title = data;
    // });
    MessageBus.MessageBusEmitter.subscribe('AppTitle', message => this.title = message.description);
    this.setMenuItems();
  }

}
