import React, { FC } from "react";
import { CheckboxCheckedIcon, CheckboxIcon } from "../../assets/icons";

type Checkbox = {
  checked: boolean;
  handleClick: any;
};

const Checkbox: FC<Checkbox> = ({ checked, handleClick }) => {
  if (checked) {
    return <CheckboxCheckedIcon onClick={handleClick} />;
  }
  return <CheckboxIcon onClick={handleClick} />;
};

export default Checkbox;
