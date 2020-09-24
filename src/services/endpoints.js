import FormData from "form-data";
import axios from "./api";

const BASEURL = "https://2gym6eoyk9.execute-api.sa-east-1.amazonaws.com";
// const TOKEN = process.env.REACT_ENV_TOKEN;
const TOKEN = "Basic cmVzdC1hcGk6YWFhYWFhYWEtYmJiYi1jY2NjLWRkZGQtZWVlZWVlZWVlZWVl";

const data = new FormData();

data.append("grant_type", "password");
data.append("username", "ac@poupachef.com.br");
data.append("password", "123456");

export const getToken = async () => {
  try {
    const response = await axios.post(`${BASEURL}/default/oauth/token`, data, {
      headers: {
        Authorization: TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error("[Erro ao obter o token] ", error);
  }
};

export const getUser = async (token) => {
  try {
    const response = await axios.get(
      `${BASEURL}/default/users/11858214-c8e3-4dd9-8d3d-291225b1c88f`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("[Erro ao obter o token] ", error);
  }
};

export const getSuppliers = async (token) => {
  try {
    const response = await axios.get(`${BASEURL}/default/suppliers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("[Erro ao carregar fornecedores] ", error);
  }
};

export const createSupplier = async (token, data) => {
  try {
    const response = await axios.post(`${BASEURL}/default/suppliers`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("[Erro ao atualizar fornecedor] ", error);
  }
};

export const retrieveSupplier = async (token, id) => {
  try {
    const response = await axios.get(`${BASEURL}/default/suppliers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("[Erro ao carregar fornecedor] ", error);
  }
};

export const updateSupplier = async (token, data) => {
  try {
    const response = await axios.put(`${BASEURL}/default/suppliers`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("[Erro ao atualizar fornecedor] ", error);
  }
};

export const deleteSupplier = async (token, id) => {
  try {
    const response = await axios.get(`${BASEURL}/default/suppliers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("[Erro ao carregar fornecedor] ", error);
  }
};