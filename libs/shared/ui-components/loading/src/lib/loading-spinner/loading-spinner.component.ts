import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {

  @Input() loading: boolean | unknown;

}
