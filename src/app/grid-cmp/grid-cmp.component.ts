import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-cmp',
  templateUrl: './grid-cmp.component.html',
  styleUrls: ['./grid-cmp.component.css']
})
export class GridCmpComponent implements OnInit {

  @Output() getCmp = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleCmp(num) {
    this.getCmp.emit(num);
  }
}
