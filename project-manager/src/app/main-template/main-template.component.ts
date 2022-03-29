import {Component, EventEmitter, HostListener, OnInit} from '@angular/core';
import Size from "../../models/Size";

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.sass']
})
export class MainTemplateComponent implements OnInit {

  private _menuIsOpen: boolean = false;
  private _headerSize: Size = new Size(0, 0);
  menuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  headerHeightEmitter: EventEmitter<number> = new EventEmitter<number>();
  headerWidthEmitter: EventEmitter<number> = new EventEmitter<number>();

  @HostListener('scroll', ['$event.target'])
  onContentScrolled(e: HTMLElement) {
    let scroll = e.scrollTop;
    if (e.scrollTop > 0) {
      console.log("scrollDown");
    } else {
      console.log("scrollUp");
    }
  }
  get menuIsOpen(): boolean {
    return this._menuIsOpen
  }

  get headerSize(): Size {
    return this._headerSize
  }

  private set headerSize(value) {
    if (value.height >= 0 && value.height >= 0)
      this._headerSize = value;
  }

  ngOnInit(): void {
    //window.addEventListener('scroll', this.onContentScrolled, true);
    this.menuEmitter.subscribe(value => this._menuIsOpen = value);
    this.headerHeightEmitter.subscribe(value => this.headerSize = new Size(this._headerSize.width, value));
    this.headerWidthEmitter.subscribe(value => this.headerSize = new Size(this._headerSize.width, value));
  }
}
