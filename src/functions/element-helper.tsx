import { ElementModel } from "../models/ElementModel";


export const getElement = (id: string, items: ElementModel[]) => {
  const wids = isolateWidget([], items);
  const actives = wids.find((x) => x.id === id);
  return actives;
};
export const calculateSelectorCords = (elements: ElementModel[]) => {
  if (elements && elements.length > 1) {
    const lefts = Array.from(elements).map((x: any) => x.Element.offsetLeft);
    var min = Math.min(...lefts),
      max = Math.max(...lefts);
    console.log(`min: ${min}, max: ${max} `);
    Array.from(elements).forEach(element => {
    })

  }
};
export const isolateWidget = (output: ElementModel[], widgets: ElementModel[]) => {
  widgets.forEach((wid) => {
    output.push(wid);
    if (wid.elements) isolateWidget(output, wid.elements);
  });
  return output;
}

