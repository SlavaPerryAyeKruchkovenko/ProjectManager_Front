import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {fromEvent, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.sass', '../main-template.component.sass'],
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnDestroy, OnInit, AfterViewInit {

  imgLink = "#";
  mainImg = "../../../assets/images/logo.png"
  signIn = "#";
  signUp = "#"
  private minWidth = 768;
  private resizeObservable: Observable<Event> = fromEvent(window, 'resize')
  private resizeSubscription: Subscription = new Subscription()

  @ViewChild('header') header: ElementRef | undefined
  @ViewChild('signIn') signInObj: ElementRef | undefined;
  @Input() needBorder = false;

  private static changeSignMenu(signInObj: ElementRef, minWidth: number) {
    if (signInObj != undefined) {
      const signBlock = signInObj.nativeElement;
      if (window.innerWidth < minWidth)
        signBlock.classList.add("hide");

      else if (signBlock.classList.contains("hide"))
        signBlock.classList.remove("hide");
    }
  }

  ngOnInit() {
    this.resizeSubscription = this.resizeObservable.subscribe(() => {
      if (this.signInObj != undefined)
        HeaderComponent.changeSignMenu(this.signInObj, this.minWidth)
        console.log(this.header?.nativeElement)
    })
  }

  ngOnDestroy() {
    this.resizeSubscription.unsubscribe()
  }

  ngAfterViewInit(): void {
    if (this.signInObj != undefined)
      HeaderComponent.changeSignMenu(this.signInObj, this.minWidth)
  }
}



