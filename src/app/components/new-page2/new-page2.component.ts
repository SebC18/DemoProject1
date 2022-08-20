import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-page2',
  templateUrl: './new-page2.component.html',
  styleUrls: ['./new-page2.component.scss']
})
export class NewPage2Component {

  constructor(private viewPortScroller: ViewportScroller) { }


  scrollElement(idElement: string) {
    this.viewPortScroller.scrollToAnchor(idElement);
  }
}
