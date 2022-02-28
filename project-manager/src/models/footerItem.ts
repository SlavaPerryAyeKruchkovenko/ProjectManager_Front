export class FooterItem{
  name:string;
  items:ItemTemp[];
  constructor(name: string,items: ItemTemp[]) {
    this.name = name
    this.items = items;
  }
}
export class ItemTemp{
  text
  url
  imgLink
  constructor(text: string,url:string = "",link:string = "") {
    this.text = text
    this.url = url
    this.imgLink = link
  }
}
