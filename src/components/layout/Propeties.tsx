import React from "react";
import { ElementModel } from "../../models/ElementModel";
import "./Propeties.css";
// import { Button } from '../styles/Button.styled';

export interface Props {
  selectedElements: ElementModel[];
  addFlex: () => void;
}
const Propeties: React.FC<Props> = ({ addFlex,selectedElements }) => {
  return (
    <div className="propeties">
      <h5 className="heading-tabs">
        <span>Design</span>
      </h5>
      <div>
        {selectedElements && selectedElements.length > 1 && <button onClick={addFlex}>Flex layout</button>}
      </div>
    </div>
  );
};

export default Propeties;
