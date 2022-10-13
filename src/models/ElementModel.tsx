export interface ElementModel{
    id: string;
    type: string;
    data: string;
    name: string;
    parentId: string;
    isVisible: boolean;
    isSelected: boolean;
    isDraggable: boolean;
    styles: any;
    elements?: ElementModel[]
    Element?: any;
}