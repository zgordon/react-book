import React from "react";
import InputField from "./InputField";
import StepButton from "./StepButton";

const Step2 = ({ user, updateUser }) => (
  <>
    <InputField id="username" onChange={updateUser} value={user.username} />
    <StepButton nextStep="1" label="Back" />
    <StepButton nextStep="3" />
  </>
);
export default Step2;
