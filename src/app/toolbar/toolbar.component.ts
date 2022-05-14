import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: Event) {
    console.log(e);
  }
}
