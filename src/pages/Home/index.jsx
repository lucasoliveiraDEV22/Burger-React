import React, { useState, useRef } from "react";
import axios from "axios";

import {
  Container,
  Image,
  H1,
  ContainerItems,
  InputLabel,
  Input,
  Button
} from "./styles";

import Codeburger from "../../assets/codeburger.svg";
import trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const [costumers, setCostumers] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const navigate = useNavigate();

  async function addNewCostumer() {
    const { data: newCostumer } = await axios.post(
      "http://localhost:3001/order",
      {
        order: inputOrder.current.value,
        clientName: inputName.current.value,
      }
    );
    setCostumers([...costumers, newCostumer]);

     navigate("/pedidos")
  }
 
  return (
    <Container>
      <Image alt="logo-image" src={Codeburger} />
      <ContainerItems>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido" />
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome do Cliente" />

        <Button onClick={addNewCostumer}>Novo Pedido</Button>
       
      </ContainerItems>
    </Container>
  );
}
export default Home;
