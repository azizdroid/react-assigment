import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({
  label,
  selected,
  value,
  styleClass,
  onChange,
  className,
  type,
}) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div className={`form-group ${styleClass}`}>
      <label>
        <input
          type={type}
          className={className}
          value={value}
          defaultChecked={selected}
          onChange={handleChange}
        />

        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  styleClass: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  styleClass: "",
};

export default Checkbox;
