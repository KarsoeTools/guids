import { Component } from '@angular/core';
import { Guid } from "guid-typescript";
import {Clipboard} from '@angular/cdk/clipboard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private clipboard: Clipboard) {}
  title = 'guids';
  guids : string  = '';

  generateGUIDS() {
    this.guids= Guid.create().toString();
    //this.clipboard.copy(this.guids)
  }

  copyClipboard() {
    this.clipboard.copy(this.guids);
  }
}
