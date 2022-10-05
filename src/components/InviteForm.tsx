import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

const InviteForm = () => {
  const initialState = {
    fullName: "",
    email: "",
    confirmEmail: "",
  };

  const { onChange, onSubmit, values } = useForm(
    signupUserCallback,
    initialState
  );

  async function signupUserCallback() {
    // validate and request
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Full Name</label>
      <input
        placeholder="Full Name"
        type="text"
        name="fullName"
        onChange={onChange}
      />
      <label>Email</label>
      <input
        placeholder="Email"
        type="email"
        name="email"
        onChange={onChange}
      />
      <label>Confirm Email</label>
      <input
        placeholder="Confirm Email"
        type="email"
        name="confirmEmail"
        onChange={onChange}
      />
      <Button>Sign me up!</Button>
    </form>
  );
};

export default styled(InviteForm)``;
