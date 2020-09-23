import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import "./style.scss"
import Card from "../../components/Card";
import { data } from "./data";

export default function SuppliersList() {

    return (
        <section className="suppliers">
            <Title head={"h1"} title="Fornecedores Cadastrados"/>
            <div className="suppliers__container">
                { data.map((supplier, index)=> {
                    return <Card name={supplier.name} phoneNumber={supplier.phoneNumber} city={supplier.city} state={supplier.state}/>
                })}
            </div>
            <footer className="suppliers__footer">
                <Button type="button" className="suppliers__button" text="Novo Fornecedor"/>
                <Button type="button" className="suppliers__button suppliers__button--logout" text="Logout"/>
            </footer>
        </section>
    )
}