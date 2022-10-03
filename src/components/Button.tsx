import styled from "styled-components";

const Button = styled.button`
  background: #555;
  border-radius: 5px;
  border: 0px;
  padding: 15px 40px;
  color: white;
  margin-top: 20px;
  font-size: 12pt;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    background: #222;
  }
`;

export default Button;
