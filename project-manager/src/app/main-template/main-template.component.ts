import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.sass']
})
export class MainTemplateComponent implements OnInit {

  menuIsOpen: boolean = false;
  menuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  headerIsVisible: boolean = true;
  headerEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.menuEmitter.subscribe(value => this.menuIsOpen = value);
  }

}
