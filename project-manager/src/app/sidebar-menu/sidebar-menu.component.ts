import {Component, Input, OnInit} from '@angular/core';
import {HeaderComponent} from "../main-template/header/header.component";

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
