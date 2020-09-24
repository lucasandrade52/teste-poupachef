import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Title from "../../components/Title";
import Button from "../../components/Button";
import Card from "../../components/Card";

import "./style.scss";
import { getSuppliers } from "../../services/endpoints";
import AuthContext from "../../services/authContext";

export default function SuppliersList() {
  const [suppliers, setSuppliers] = useState([]);

  const history = useHistory();
  const { token } = useContext(AuthContext);

  const handleSuppliers = useCallback(async () => {
    const response = await getSuppliers(token);
    setSuppliers(response);
  }, [token]);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) handleSuppliers();
    else history.push("/login");
  }, [handleSuppliers, history]);

  return (
    <section className="suppliers">
      <Title head={"h1"} title="Fornecedores Cadastrados" />
      <div className="suppliers__container">
        {suppliers &&
          suppliers.map((supplier, index) => {
            return (
              <Card
                key={supplier.publicId}
                id={supplier.publicId}
                name={supplier.name}
                phoneNumber={supplier.phoneNumber}
                city={supplier.city}
                state={supplier.state}
                owner={supplier.owner}
              />
            );
          })}
      </div>
      <footer className="suppliers__footer">
        <Button type="button" className="suppliers__button">
          <Link to="/supplier-details">Novo Fornecedor</Link>
        </Button>
      </footer>
    </section>
  );
}