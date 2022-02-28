import {Component, OnInit} from "@angular/core";
import {FooterItem, ItemTemp} from "../../../models/footerItem";

@Component({
  selector:'app-footer',
  styleUrls:['./footer.component.sass','../main-template.component.sass'],
  templateUrl:'./footer.component.html',
  })

export class FooterComponent implements OnInit{
  footerItems:FooterItem[] = [];
  ngOnInit(): void {
    this.footerItems.push(new FooterItem("More to Explore",
      [new ItemTemp("About Us"),new ItemTemp("Privacy Policy")]))
    this.footerItems.push(new FooterItem("Our Social",
      [new ItemTemp("GitHub","https://github.com/Nanoster1/ProjectManager","../../../assets/images/github.png"),
        new ItemTemp("Discord","","../../../assets/images/discord.svg"),
        new ItemTemp("Telegram","","../../../assets/images/telegram.png")]))
  }

}
