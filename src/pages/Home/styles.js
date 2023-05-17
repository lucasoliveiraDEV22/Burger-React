import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Background});
  background-size: cover;
  flex-direction: column;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 342px;
  height: 354px;
  margin-top: 20px;
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  color: #ffffff;

  text-align: center;
  margin-top: 25px;
  margin-bottom: 76px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 36px;
`;

export const InputLabel = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #eeeeee;

  display: flex;
  align-items: center;
  letter-spacing: -0.408px;
  padding-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  outline: none;
  border: none;
  width: 342px;
  height: 58px;

  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  padding-left: 15px;
  margin-bottom: 42px;

  color: #ffffff;
`;

export const Button = styled.button`
  background: #d93856;

  width: 342px;
  height: 68px;
  cursor: pointer;
  border: none;

  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;


