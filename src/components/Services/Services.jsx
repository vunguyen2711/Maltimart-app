import React from "react";
import * as S from "./style";
import { BsTruck, BsCashCoin, BsCurrencyExchange } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";

const serviceData = [
  {
    id: 1,
    icon: <BsTruck></BsTruck>,
    title: "Free shipping",
    desc: "Lorem ipsum dolor sit.",
  },
  {
    id: 2,
    icon: <BsCashCoin></BsCashCoin>,
    title: "Easy Return",
    desc: "Lorem ipsum dolor sit.",
  },
  {
    id: 3,
    icon: <MdOutlineSecurity></MdOutlineSecurity>,
    title: "Secure Products",
    desc: "Lorem ipsum dolor sit.",
  },
  {
    id: 4,
    icon: <BsCurrencyExchange></BsCurrencyExchange>,
    title: "Money Guarentee",
    desc: "Lorem ipsum dolor sit.",
  },
];
const Services = () => {
  return (
    <S.ServicesContainer>
      {serviceData.map((item, index) => (
        <S.ServiceItem key={index}>
          {item.icon}
          <div className="service__text">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </S.ServiceItem>
      ))}
    </S.ServicesContainer>
  );
};

export default Services;
