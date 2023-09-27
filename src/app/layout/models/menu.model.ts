export interface MenuItem {
  name: string;
  icon: string;
  path: string;
  submenu?: {
    title: string;
    items: MenuElementItem[];
  };
}
export class MenuElementItem {
  name: string;

  content: string;

  path: string;

  icon: string;

  param?: object;

  value?: number;

  constructor(
    name: string,
    content: string,
    path: string,
    icon: string,
    param?: object,
    value?: number,
  ) {
    this.name = name;
    this.content = content;
    this.path = path;
    this.icon = icon;
    this.param = param;
    this.value = value;
  }
}
