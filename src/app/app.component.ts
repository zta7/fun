import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { slideInDownAnimation } from './animate_top';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInDownAnimation]
})
export class AppComponent {

  //默认显示
  show = true

  delete() {
    this.show = false
  }
}
