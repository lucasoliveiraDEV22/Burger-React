import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Image, ContainerItems, H1, Order, Button } from "./styles";

import Burger from "../../assets/burger.svg";
import trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [costumers, setCostumers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCostumers() {
      const { data: newCostumers } = await axios.get(
        "http://localhost:3001/order"
      );
      setCostumers(newCostumers);
    }
    fetchCostumers();
  },[]);
  async function deleteCostumer(clientId){
    const newCostumers = costumers.filter((client) => client.id !== clientId);
    setCostumers(newCostumers);
    await axios.delete(`http://localhost:3001/order ${clientId}`);
  }
  return (
    <Container>
      <Image alt="logo-image" src={Burger} />
      <ContainerItems>
        <H1>Pedidos</H1>
        
        <ul>
        {costumers.map((client) => (
          <Order key={client.id}>
            <p>{client.order}</p>
            <p>{client.clientName}</p>
            <button onClick={() => deleteCostumer(index.id)}>
              <img src={trash} alt="lata-de-lixo" />
            </button>
          </Order>
          ))}
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </ul>
         
      </ContainerItems>
    </Container>
  );
}
export default Orders;
