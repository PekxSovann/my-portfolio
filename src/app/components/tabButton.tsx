import React from "react";

interface Props {
  active: boolean,
  selectTable: () => void,
  children: any,
};

const TabButton = ({ active, selectTable, children }: Props) => {
  const buttonClass = active ? 
    "text-white border-b border-blue" :
    "text-[#ADB7BE]"
  return (
    <span
      className={`mr-3 font-semibold hover:text-white ${buttonClass}`}
      onClick={selectTable}
    >
      {children}
    </span>
  );
};

export default TabButton;