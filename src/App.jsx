import React from "react"
import CadastroForm  from "./Components/Form.jsx"
import Header from "./Components/Header.jsx"
import { GlobalStyle } from "./Components/Header.jsx"

function App(){
  return(
    <div>
      <Header/>
      <CadastroForm/> 
      <GlobalStyle/>
      
     
    </div>
  )
}
export default App