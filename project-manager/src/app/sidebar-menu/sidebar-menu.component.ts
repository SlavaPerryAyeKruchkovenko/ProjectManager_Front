import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.sass']
})
export class SidebarMenuComponent implements OnInit {

  isOpen:boolean = false;
  @Output() menuObserver = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.menuObserver.subscribe(value => this.isOpen = value);
  }

}
