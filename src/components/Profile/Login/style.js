import styled from "styled-components";
export const Container = styled.div`
  display: flex;
`;

export const Text = styled.div`
  font-size: 80px;
  padding-left: 250px;
  margin-top: 300px;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 200px;
  width: 600px;
  height: 750px;
  border: 2px solid royalblue;
  border-radius: 10px;
  background-color: white;
  box-shadow: inset;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  font-size: 50px;
  color: royalblue;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  margin-left: 80px;
  padding-top: 30px;
  color: royalblue;
`;
export const Label1 = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  margin-left: 80px;
  padding-top: 100px;
  color: royalblue;
`;

export const InputUsername = styled.input.attrs({
  placeholder: "Enter your username here",
})`
  height: 35px;
  width: 400px;
  margin-left: 80px;
  border-radius: 5px;
  border: 2px solid royalblue;
`;

export const InputPassword = styled.input.attrs({
  placeholder: "Enter password here",
  type: "password",
})`
  height: 35px;
  width: 400px;
  margin-left: 80px;
  border-radius: 5px;
  border: 2px solid royalblue;
`;
export const Button = styled.button`
  width: 401px;
  height: 40px;
  margin-left: 83px;
  margin-top: 50px;
  background-color: royalblue;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  color: white;
  &:hover {
    background-color: #0055a5; /* Change the background color on hover */
    cursor: pointer;
    transition: all 1s;
  }
`;
export const SocialsTitle = styled.div`
  margin-left: 255px;
  margin-top: 20px;
`;

export const Icons = styled.div`
  display: flex;
`;

export const Help = styled.div`
  margin-left: 180px;
  margin-top: 20px;
  font-size: 16px;
`;
