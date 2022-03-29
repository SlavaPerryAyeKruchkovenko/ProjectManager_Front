import {
  ChangeDetectorRef,
  Component,
  EventEmitter, Inject,
  OnInit,
} from '@angular/core';
import Size from "../../models/Size";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.sass']
})
export class MainTemplateComponent implements OnInit{

  private _scrollPosition: number = 0;
  private _menuIsOpen: boolean = false;
  private _headerSize: Size = new Size(0, 0);

  @Inject(ChangeDetectorRef)changeDetection: ChangeDetectorRef | undefined;

  onContentScrolled(e: Event) {

    if (window.scrollY - this._scrollPosition < 0 && !this.isHeaderVisible) {
      this.isHeaderVisible = true;
      console.log(this.changeDetection);
      this.changeDetection?.markForCheck();
    } else if(window.scrollY - this._scrollPosition > 0 && this.isHeaderVisible) {
      this.isHeaderVisible = false;
      console.log(this.changeDetection);
      this.changeDetection?.markForCheck();
    }
    this._scrollPosition = window.scrollY;
  }

  menuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  headerHeightEmitter: EventEmitter<number> = new EventEmitter<number>();
  headerWidthEmitter: EventEmitter<number> = new EventEmitter<number>();
  isHeaderVisible = true;
  get menuIsOpen(): boolean {
    return this._menuIsOpen
  }

  get headerSize(): Size {
    return this._headerSize
  }

  set headerSize(value) {
    if (value.height >= 0 && value.height >= 0)
      this._headerSize = value;
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onContentScrolled,false);
    this.menuEmitter.subscribe(value => this._menuIsOpen = value);
    this.headerHeightEmitter.subscribe(value => this._headerSize = new Size(this._headerSize.width, value));
    this.headerWidthEmitter.subscribe(value => this._headerSize = new Size(this._headerSize.width, value));
  }
}
