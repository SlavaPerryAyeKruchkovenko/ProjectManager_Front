import {Component, OnInit} from "@angular/core";
import {FooterItem} from "../../../models/footerItem";

@Component({
  selector:'app-footer',
  styleUrls:['./footer.component.sass','../main-template.component.sass'],
  templateUrl:'./footer.component.html',
  })

export class FooterComponent implements OnInit{
  footerItems:FooterItem[] = [
    {name:"More to Explore",items:[
        {text: "About Us",imgLink: "",url: ""},
        {text: "Privacy Policy",imgLink: "",url: ""},
      ],needHide:false},
    {name:"Our Social",items:[
        {text: "GitHub",imgLink: "../../../assets/images/github.png",url: "https://github.com/Nanoster1/ProjectManager"},
        {text: "Discord",imgLink: "../../../assets/images/discord.svg",url: ""},
        {text: "Telegram",imgLink: "../../../assets/images/telegram.png",url: ""},
      ],needHide:false},
  ]
  ngOnInit(): void {
  }
}
