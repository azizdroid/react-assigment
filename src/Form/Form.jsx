import React, { useState } from "react";
import InputField from "../components/Input/InputField";
import FormData from "../FormData/FormData";
import Dropdown from "../components/Dropdown/Dropdown";
import "./form.css";
import Checkbox from "../components/Checkbox/Checkbox.js";
import { useHistory } from "react-router-dom";
function Form() {
  const [value, setValue] = useState({
    firstName: "",
    secondName: "",
    email: "",
    age: "",
    maritalStatus: false,
    gender: "",
    qualification: false,
  });
  const history = useHistory();

  const [showdata, setshowdata] = useState(false);
  const {
    firstName,
    secondName,
    email,
    age,
    maritalStatus,
    gender,
    qualification,
  } = value;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log([name], value);
    setValue((prev) => ({
      ...prev,
      [name]: value,
      //   secondName,
    }));
  };

  const handleDropdown = (gender) => {
    setValue((prev) => ({
      ...prev,
      gender,
      //   secondName,
    }));
  };
  const handleCheckBox = (qualification) => {
    setValue((prev) => ({
      ...prev,
      qualification,
    }));
  };
  const handleRadio = (maritalStatus) => {
    setValue((prev) => ({
      ...prev,
      maritalStatus,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || secondName === "" || email === "" || age === "") {
      return alert("Please fill all the fields");
    }

    setshowdata(true);
  };

  console.log(maritalStatus);
  return (
    <div>
      <h1>FORM</h1>
      <div className="container">
        <form class="row g-3 needs-validation" onSubmit={handleSubmit}>
          <div className="row rows-col-2 ">
            {" "}
            <div className="col-5">
              {" "}
              <div className="row">
                <div className="col">
                  <InputField
                    inputClass={
                      firstName === ""
                        ? "form-control is invalid"
                        : "form-control"
                    }
                    value={firstName}
                    required={true}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    label="First Name"
                    onChange={handleChange}
                  />{" "}
                </div>
                <div className="col">
                  <InputField
                    value={secondName}
                    inputClass={
                      secondName === ""
                        ? "form-control is invalid"
                        : "form-control"
                    }
                    type="text"
                    name="secondName"
                    placeholder="Last Name"
                    label="Last Name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <InputField
                value={email}
                inputClass={
                  email === "" ? "form-control is invalid" : "form-control"
                }
                name="email"
                type="email"
                placeholder="Email"
                label="Email"
                onChange={handleChange}
              />{" "}
              <InputField
                value={age}
                name="age"
                inputClass={
                  secondName === "" ? "form-control is invalid" : "form-control"
                }
                type="number"
                placeholder="Age"
                label="Age"
                onChange={handleChange}
              />
              <Dropdown
                data={[
                  { value: 1, options: "Male" },
                  { value: 2, options: "Female" },
                ]}
                label="Select Gender"
                value={gender}
                inputClass={
                  secondName === ""
                    ? "form-control is invalid"
                    : "form-control-dropdown"
                }
                placeholder="Select Gender"
                onChange={handleDropdown}
              />
              <div className="row">
                <div className="col">
                  <span>Marital Status:</span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {" "}
                  <Checkbox
                    label="Married"
                    type="radio"
                    value="Married"
                    selected={maritalStatus}
                    className="form-check-input"
                    onChange={handleRadio}
                  />
                </div>
                <div className="col">
                  {" "}
                  <Checkbox
                    type="radio"
                    label="Unmarried"
                    value="unmarried"
                    selected={maritalStatus}
                    className="form-check-input"
                    onChange={handleRadio}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <span>Qualification:</span>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <Checkbox
                    label="10TH"
                    value="10th"
                    type="checkbox"
                    selected={qualification}
                    className="form-check-input"
                    onChange={handleCheckBox}
                  />
                </div>
                <div className="col-3">
                  {" "}
                  <Checkbox
                    label="12TH"
                    value="12th"
                    type="checkbox"
                    selected={qualification}
                    className="form-check-input"
                    onChange={handleCheckBox}
                  />
                </div>
                <div className="col">
                  {" "}
                  <Checkbox
                    label="BTech"
                    type="checkbox"
                    value="Btech"
                    selected={qualification}
                    className="form-check-input"
                    onChange={handleCheckBox}
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="col-6">
              <FormData showData={showdata} data={value} />
            </div>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="col-12">
          <button
            class="btn btn-primary"
            onClick={() => history.push("/dataFolder")}
          >
            Data Folder
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
