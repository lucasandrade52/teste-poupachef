import React from 'react';
import "./style.scss"
import Title from "../Title";
import Button from "../Button";
 

export default function Card(props) {
  const { name, phoneNumber, city, state } = props
  return (
    <div className="card">
      <Title head={"h3"} title={name}/>
      <div className="card__item card__item--one">Telefone: 
        <p className="card__info">{phoneNumber}</p>
      </div>
      <div className="card__item">Cidade:
        <p className="card__info card__info--city">{city}</p>
      </div>
      <div className="card__item">Estado:
        <p>{state}</p>
      </div>
      <Button type="button" text="Editar"/>
    </div>
  )
}