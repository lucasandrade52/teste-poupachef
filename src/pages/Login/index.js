import React, { useState } from "react";
import { useHistory} from "react-router-dom";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./style.scss"

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    function handleSaveUsername(value) {
        setUsername(value);
    }
    function handleSavePassword(value) {
        setPassword(value)
    }
    function handleSubmitForm(event) {
        event.preventDefault();
        if (username === "lucasandrade" && password === "mariaclara") {
            history.push("/");
        }
    }

    return (
        <section className="login">
            <Title head={"h1"} title="Login"/>
            <form onSubmit={(event) => handleSubmitForm(event)} >
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
            <Button type="submit" text="Entrar"/>
            </form>
        </section>
    )
}