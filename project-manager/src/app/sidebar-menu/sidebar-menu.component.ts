import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.sass']
})
export class SidebarMenuComponent implements OnInit {

  isOpen:boolean = true;
  ngOnInit(): void {
  }

}
