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
  margin-top: 20px;
  width: 246px;
  height: 354px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 36px;
`;

export const H1 = styled.h1`
  margin-top: 36px;

  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  text-align: center;

  color: #ffffff;
`;

export const Order = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: none;
  border: none;
  margin-top: 50px;

  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;


export const Button = styled.button`
  width: 342px;
  height: 68px;
  border: none;
  margin-top: 85px;
  cursor: pointer;

  font-weight: 900;
  font-size: 17px;
  line-height: 2px;

  background: rgba(255, 255, 255, 0.14);

  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
