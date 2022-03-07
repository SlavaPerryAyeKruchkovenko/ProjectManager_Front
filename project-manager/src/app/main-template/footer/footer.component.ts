import {Component, OnInit} from "@angular/core";
import {FooterItem} from "../../../models/footerItem";
import {delay} from "../../../services/timeServices";

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
  async changeToggle(item:FooterItem,id:number) {
    const toggleBtn = document.getElementById("toggle" + id.toString());
    if(toggleBtn != null){
      await delay(180);
      item.needHide = !item.needHide
      if(toggleBtn.classList.contains('rotate270')){
        toggleBtn.classList.remove('rotate270')
        toggleBtn.classList.add('rotate90')
      }
      else if(toggleBtn.classList.contains('rotate90')){
        toggleBtn.classList.remove('rotate90')
        toggleBtn.classList.add('rotate270')
      }
      else{
        toggleBtn.classList.add('rotate270')
      }
    }
  }
  needBtn(item:FooterItem): boolean{
    const minWidth = 768
    if(window.innerWidth > minWidth){
      item.needHide = false//return information in footerBlock
      return true;
    }
    return false
  }
}
