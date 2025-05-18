import React from "react";

const Fieldset = ({ label, placeholder, colSpan, defaultValue }) => {
  return (
    <fieldset
      className={`fieldset text-start ${
        colSpan && colSpan
      } text-[#1B1A1A] text-[20px] font-semibold`}>
      <legend className="fieldset-legend">{label}</legend>
      <input
        type="text"
        className="input w-full font-normal text-base"
        placeholder={placeholder}
        name={label}
        defaultValue={defaultValue}
        required
      />
    </fieldset>
  );
};

export default Fieldset;
