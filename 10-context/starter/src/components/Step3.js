import React from "react";
import InputField from "./InputField";
import StepButton from "./StepButton";

const Step3 = ({ user, updateUser }) => (
  <>
    <InputField id="email" onChange={updateUser} value={user.email} />
    <StepButton nextStep="2" label="Back" />
    <StepButton nextStep="completed" label="Submit" />
  </>
);
export default Step3;
