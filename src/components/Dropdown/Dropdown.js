import React from "react";
import PropTypes from "prop-types";

function Dropdown({ value, data, styleClass, placeholder, label, onChange }) {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div class={`form group ${styleClass}`}>
      {label && (
        <label for="validationCustom01" class="form-label">
          {label}
        </label>
      )}
      <select value={value} className="form-select" onChange={handleChange}>
        <option value="">{placeholder} </option>
        {data.map((item) => (
          <option value={item.options}>{item.options}</option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  styleClass: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  value: "",
  label: "",
  placeholder: "",
  styleClass: "",
};

export default Dropdown;
