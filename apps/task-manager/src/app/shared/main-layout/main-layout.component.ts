import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../core/helpers/event-bus.service';
import * as Localization from '@showcase/shared/localization';

@Component({
  selector: 'showcase-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  // default fallback
  title = Localization.LocalizationService.selected === 'en' ? 'Home' : 'Hauptseite';

  constructor(
    private eventBusService: EventBusService
  ) { }

  ngOnInit(): void {
    this.eventBusService.on('AppTitle', (data: string) => {
      this.title = data;
    })
  }

}
