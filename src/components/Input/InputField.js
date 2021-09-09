import React from "react";
import PropTypes from "prop-types";

function InputField({
  value,
  label,
  placeholder,
  type,
  onChange,
  name,
  inputClass,
}) {
  return (
    <div>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col">
          {label && (
            <label for="validationCustom01" class="form-label">
              {label}
            </label>
          )}
          <input
            type={type}
            name={name}
            class={inputClass}
            id="validationCustom01"
            value={value}
            placeholder={placeholder}
            required
            onChange={onChange}
          />
        </div>
      </form>
      {/* <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div> */}
    </div>
  );
}

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  class: PropTypes.string,
  placeholders: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: "",
  class: "",
  label: "",
  placeholder: "",
  type: "text",
};

export default InputField;
