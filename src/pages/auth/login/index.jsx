import { useState } from "react";

import { Button, Input } from "antd";
import { signInRequest } from "@/services/auth";

// Exemplo

export default function Login() {
  const [loginPassword, setLoginPassword] = useState({login: "", password: ""})
  async function login() {
    console.log(loginPassword)
    const {data } = await signInRequest(loginPassword)
    console.log(data)
  } 
  return (

    <div style={{height: "100%", width: "100%"}} className="flex flex-col items-center p-20"> 
      <h1>Login</h1>
      <div className="flex flex-col w-2/5 items-center justify-center">
        <input onChange={(e) => setLoginPassword({...loginPassword, login:e.target.value})} placeholder="Digite seu login" className="text-black"/>
        <h1>Password</h1>
        <input onChange={(e) => setLoginPassword({...loginPassword, password:e.target.value})} placeholder="Digite sua senha" type="password" width={50} className="text-black"/>
        <button onClick={login}>Login</button>
        <button onClick={() => console.log("login")}>Esqueceu Senha</button>
        <button onClick={() => console.log("login")}>Cadastrar</button>
      </div>
    </div>
  );
}
