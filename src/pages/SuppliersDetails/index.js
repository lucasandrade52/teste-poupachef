import React, { useState } from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./style.scss"
import Form from "../../components/Form";

export default function SuppliersDetails() {
    const [ formState, setFormState ] = useState({})
    
    function handleInputValue(event) {
        event.persist()
        setFormState((currState) => {
            return {
                ...currState,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit() {
        console.log(formState)
    }

    return (
        <section className="suppliers">     
            <Title head={"h1"} title="Detalhe dos Fornecedores"/>
            <div className="suppliers__container">
                <Form handleSubmit={handleSubmit}>
                <Input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Nome do Fornecedor:" 
                value={formState.name}
                onChange={(event) => handleInputValue(event)}
                />
                <Input 
                type="number" 
                id="cnpj" 
                name="cnpj" 
                placeholder="Insira o CNPJ:" 
                value={formState.cnpj}
                onChange={(event) => handleInputValue(event)}
                />
                <Input 
                type="tel" 
                id="phone" 
                name="phoneNumber" 
                placeholder="Telefone comercial:" 
                value={formState.phoneNumber}
                onChange={(event) => handleInputValue(event)}
                />
                <Input 
                type="zipCode" 
                id="zipCode" 
                name="zipCode" 
                placeholder="CEP:" 
                value={formState.zipCode}
                onChange={(event) => handleInputValue(event)}
                />
                <Input 
                type="text" 
                id="address" 
                name="address" 
                placeholder="Endereço:" 
                value={formState.address}
                onChange={(event) => handleInputValue(event)}
                />
                <Input 
                type="text" 
                id="number" 
                name="number" 
                placeholder="Número:" 
                value={formState.number}
                onChange={(event) => handleInputValue(event)}
                />
                <Input 
                type="text" 
                id="complement" 
                name="complement" 
                placeholder="Complemento:" 
                value={formState.complement}
                onChange={(event) => handleInputValue(event)}
                />
                <Input 
                type="text" 
                id="neighborhood" 
                name="neighborhood" 
                placeholder="Bairro:" 
                value={formState.neighborhood}
                onChange={(event) => handleInputValue(event)}
                />
                <Input 
                type="text" 
                id="city" 
                name="city" 
                placeholder="Cidade:" 
                value={formState.city}
                onChange={(event) => handleInputValue(event)}
                />
                <Input 
                type="text" 
                id="state" 
                name="state" 
                placeholder="Estado:" 
                value={formState.state}
                onChange={(event) => handleInputValue(event)}
                />
                <Button type="submit" className="content-page__button" text="Salvar"/>
                <Button className="content-page__button content-page__button--delete" text="Deletar"/>
                <Button className="content-page__button content-page__button--return" text="Cancelar"/>
                <Input 
                    type="reset" 
                    name="reset" 
                    value="Limpar formulário"
                />
            </Form>

            
        </div>
                    
        </section>
    )
}