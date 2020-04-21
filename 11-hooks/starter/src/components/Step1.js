import React from "react";
import InputField from "./InputField";
import StepButton from "./StepButton";

const Step1 = ({ user, updateUser }) => (
  <>
    <InputField id="name" onChange={updateUser} value={user.name} />
    <StepButton nextStep="2" />
  </>
);
export default Step1;
