import { Component, VERSION } from '@angular/core';
import { Confirmable } from './confirmable.decorator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  @Confirmable({
    title: 'Are you sure',
    html: 'Do you want to delete this item?',
    icon: 'warning',
  })
  deleteItem(): void {
    //Code to delete your item
  }
}
