import React, { useState } from "react"
import styled from "styled-components"

export const Div= styled.div`
height:80vh;
display:flex;
flex-direction: column;
align-items :center;
justify-content:center;
background-color:#50733b;
`

export const TelaCadastro= styled.div`
border: #31531e solid;
width:40vw;
height: 50vh;
background-color: #bad1a9;
border-radius: 15px;
`

export const FormNce=styled.form`
display:flex;
flex-direction: column;
align-items:center;
`

export const Label = styled.label`
  margin-bottom: 5px;
  color: #31531e;
  
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: solid #4caf50;
`;

export const Btn = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SuccessMessage = styled.div`
margin-top: 15px;
padding: 10px;
background-color: #dff0d8;
border: 1px solid #d0e9c6;
border-radius: 4px;
`;


const CadastroForm = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [cadastradoComSucesso, setCadastradoComSucesso] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aqui você pode adicionar lógica de envio para um servidor ou banco de dados, se necessário.
      // Neste exemplo, apenas simularemos o sucesso após 1 segundo.
      setTimeout(() => {
        setNome('');
        setCpf('');
        setEmail('');
        setCadastradoComSucesso(true);
      }, 1000);
    };
  
    return (
      <Div>
        <h2>Cadastre-se</h2>
        <TelaCadastro>
        <FormNce onSubmit={handleSubmit}>
          <Label>
            Nome:
            <Input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </Label>
          <Label>
            CPF:
            <Input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </Label>
          <Label>
            Email:
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Label>
          <Btn type="submit">Cadastrar</Btn>
        </FormNce>
  
        {cadastradoComSucesso && (
          <SuccessMessage>
            <p>Dados cadastrados com sucesso!</p>
          </SuccessMessage>
        )}
        </TelaCadastro>
      
      </Div>
      
    );
  };
  
  export default CadastroForm;