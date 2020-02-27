import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-component';
  state = [true, true, true, true];
  togglecmp(val) {
    const filteredItems = this.state.filter((value, index) => val !== index);
    if (!filteredItems.includes(true)) {
      alert('can\'t remove least component ');
      return;
    }
    this.state[val] = !this.state[val];
  }
}
