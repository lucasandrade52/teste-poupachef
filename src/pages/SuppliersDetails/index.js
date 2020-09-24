import React, { useState, useEffect, useCallback, useContext } from "react";
import { useLocation } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Form from "../../components/Form";

import "./style.scss";
import {
  createSupplier,
  retrieveSupplier,
  updateSupplier,
  deleteSupplier,
} from "../../services/endpoints";
import AuthContext from "../../services/authContext";

export default function SuppliersDetails() {
  const [formState, setFormState] = useState({});
  const [feedback, setFeedback] = useState(false);

  const location = useLocation();
  const supplierId = location.state?.id;
  const { token } = useContext(AuthContext);

  function handleInputValue(event) {
    event.persist();
    setFormState((currState) => {
      return {
        ...currState,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit() {
    if (supplierId) updateSupplier(token, formState);
    else createSupplier(token, formState);
  }

  async function handleDeleteSupplier() {
    if (supplierId) {
      await deleteSupplier(token, supplierId);
      setFormState({});
      setFeedback(true);
    }
  }

  function handleCloseFeedback() {
    setFeedback(false);
  }

  const handleSupplierDetail = useCallback(async () => {
    const supplierDetails = await retrieveSupplier(token, supplierId);
    setFormState(supplierDetails);
  }, [supplierId, token]);

  useEffect(() => {
    if (supplierId) {
      handleSupplierDetail();
    }
  }, [supplierId, handleSupplierDetail]);

  return (
    <section className="content-page">
      {console.log("Form", formState)}
      <Title head={"h1"} title="Detalhe dos Fornecedores" />
      <div className="content-page__detail">
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
            value={formState.cnpj || ""}
            onChange={(event) => handleInputValue(event)}
          />
          <Input
            type="tel"
            id="phone"
            name="phoneNumber"
            placeholder="Telefone comercial:"
            value={formState.phoneNumber || ""}
            onChange={(event) => handleInputValue(event)}
          />
          <Input
            type="zipCode"
            id="zipCode"
            name="zipCode"
            placeholder="CEP:"
            value={formState.zipCode || ""}
            onChange={(event) => handleInputValue(event)}
          />
          <Input
            type="text"
            id="address"
            name="address"
            placeholder="Endereço:"
            value={formState.address || ""}
            onChange={(event) => handleInputValue(event)}
          />
          <Input
            type="text"
            id="number"
            name="number"
            placeholder="Número:"
            value={formState.number || ""}
            onChange={(event) => handleInputValue(event)}
          />
          <Input
            type="text"
            id="complement"
            name="complement"
            placeholder="Complemento:"
            value={formState.complement || ""}
            onChange={(event) => handleInputValue(event)}
          />
          <Input
            type="text"
            id="neighborhood"
            name="neighborhood"
            placeholder="Bairro:"
            value={formState.neighborhood || ""}
            onChange={(event) => handleInputValue(event)}
          />
          <Input
            type="text"
            id="city"
            name="city"
            placeholder="Cidade:"
            value={formState.city || ""}
            onChange={(event) => handleInputValue(event)}
          />
          <Input
            type="text"
            id="state"
            name="state"
            placeholder="Estado:"
            value={formState.state || ""}
            onChange={(event) => handleInputValue(event)}
          />

          <footer className="content-page__footer">
            <Button type="submit" className="content-page__button">
              Salvar
            </Button>

            <Button
              className="content-page__button content-page__button--delete"
              onClick={handleDeleteSupplier}
            >
              Excluir fornecedor
            </Button>
            <Button className="content-page__button content-page__button--return">
              Cancelar
            </Button>
            <Input type="reset" name="reset" value="Limpar formulário" />
          </footer>
        </Form>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={feedback}
          autoHideDuration={4000}
          onClose={handleCloseFeedback}
          message="Fornecedor excluído com sucesso!"
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseFeedback}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </div>
    </section>
  );
}