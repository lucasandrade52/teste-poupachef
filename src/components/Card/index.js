import React from "react";
import { Link } from "react-router-dom";

import Title from "../Title";
import Button from "../Button";

import "./style.scss";

export default function Card(props) {
  const { name, phoneNumber, city, state, id, owner } = props;
  return (
    <div className="card">
      <Title head={"h4"} title={name} />
      <Title head={"h5"} title={owner.name} />
      <div className="card__item card__item--one">
        Telefone:
        <p className="card__info">{phoneNumber}</p>
      </div>
      <div className="card__item">
        Cidade:
        <p className="card__info card__info--city">{city}</p>
      </div>
      <div className="card__item">
        Estado:
        <p>{state}</p>
      </div>
      <Button type="button">
        <Link
          to={{
            pathname: "/supplier-details",
            state: { id },
          }}
        >
          Editar
        </Link>
      </Button>
    </div>
  );
}