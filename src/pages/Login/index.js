import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "react-spinkit";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./style.scss";
import { getUser } from "../../services/endpoints";
import AuthContext from "../../services/authContext";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(false);

  const history = useHistory();
  const { token } = useContext(AuthContext);

  const feedbackDuration = 6000;
  const feedbackPosition = { vertical: "bottom", horizontal: "right" };
  const feedbackMessage = "Acesso negado";

  async function handleLogin() {
    setLoading(true);

    const user = await getUser(token);

    if (!user) setFeedback(true);
    else {
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }

  function handleSaveUsername(value) {
    setUsername(value);
  }

  function handleSavePassword(value) {
    setPassword(value);
  }

  function handleSaveLoginFormData() {
    const loginData = JSON.stringify({ username, password });
    localStorage.setItem("Login Data", loginData);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    handleLogin();
    handleSaveLoginFormData();
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  function handleCloseFeedback() {
    setFeedback(false);
  }

  return (
    <section className="login">
      <Title head={"h1"} title="Login" />
      <form onSubmit={(event) => handleSubmitForm(event)}>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Usuário:"
          onChange={(event) => handleSaveUsername(event.target.value)}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Digite a senha"
          onChange={(event) => handleSavePassword(event.target.value)}
        />
        <Button type="submit">
          {loading ? <Spinner name="ball-beat" color="white" /> : "Entrar"}
        </Button>
      </form>
      <Snackbar
        open={feedback}
        autoHideDuration={feedbackDuration}
        onClose={handleCloseFeedback}
        anchorOrigin={feedbackPosition}
      >
        <Alert onClose={handleCloseFeedback} severity="error">
          {feedbackMessage}
        </Alert>
      </Snackbar>
    </section>
  );
}