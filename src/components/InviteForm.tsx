import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const InviteForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  console.log({ fullName, email, confirmEmail });

  return (
    <form
      onSubmit={() => {
        // 1 - validate input
        // 2 - make request
        // 3 - update modal with error or success text
      }}
    >
      <label>Full Name</label>
      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Confirm Email</label>
      <input
        type="email"
        name="confirmEmail"
        value={confirmEmail}
        onChange={(e) => setConfirmEmail(e.target.value)}
      />
      <Button>Sign me up!</Button>
    </form>
  );
};

export default styled(InviteForm)``;
