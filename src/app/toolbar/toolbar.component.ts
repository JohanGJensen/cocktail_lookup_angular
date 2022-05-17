import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  search: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.searchEvent.emit(value);
  }
}
