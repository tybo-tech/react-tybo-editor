import { ElementModel } from "../models/ElementModel";

export const copyOneElement = (old: ElementModel,parentId: string): ElementModel => {
  const element: ElementModel = {
    id:  getId('button'),
    data: old.data,
    type: old.type,
    name: old.name,
    isVisible: true,
    isSelected: false,
    isDraggable: true,
    parentId: parentId,
    styles: copyCss(old.styles)
  };
  return element;
};

export const  copyCss = (styles: any) => {
  let cssObject: any = {};

  for (const [key, value] of Object.entries(styles)) {
    cssObject[key] = value;
  }
  return cssObject;
}

export const getId = (prefix: string = ''): string => {
  if (prefix && prefix.length)
      prefix += '-';
  return `${prefix}${Math.floor(Math.random() * 1000000000)}-${(new Date()).getTime()}`;
};
