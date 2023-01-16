import React, { useState } from "react";
import InputForm from "../InputForm";
import * as S from "./styled";
import * as M from "@mui/material";

function Form () {

  const [fields, setFields] = useState({});

  const handleChange = (e: any) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  console.log(fields, 'deu bom');
  
  return (
    <S.Container>
      <header>
        <span>Formulário com validação</span>
      </header>
      <M.Grid
        className="address"
        sx={{
          "& MuiTextField-root": { m: 1, width: "25ch" }
        }}

        container
        rowGap={2}
      >
        <M.Grid 
        // xs={12} sm={12} md={12} lg={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <InputForm
            nameProp="rua"
            labelProp="Rua"
            itemChange={handleChange}
            maskProp=""
            fieldsProp={fields}
          />
          <InputForm
            nameProp="cep"
            labelProp="CEP"
            itemChange={handleChange}
            maskProp="99999-999"
            fieldsProp={fields}
          />
          
        </M.Grid>
        <M.Grid 
        // xs={12} sm={12} md={12} lg={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <InputForm
            nameProp="numero"
            labelProp="Número"
            itemChange={handleChange}
            maskProp=""
            fieldsProp={fields}
          />
          <InputForm
            nameProp="bairro"
            labelProp="Bairro"
            itemChange={handleChange}
            maskProp=""
            fieldsProp={fields}
          />
        </M.Grid>
        <M.Grid 
        // xs={12} sm={12} md={12} lg={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <InputForm
            nameProp="cidade"
            labelProp="Cidade"
            itemChange={handleChange}
            maskProp=""
            fieldsProp={fields}
          />
          <InputForm
            nameProp="estado"
            labelProp="Estado"
            itemChange={handleChange}
            maskProp=""
            fieldsProp={fields}
          />
        </M.Grid>
      </M.Grid>
    </S.Container>
  )
}

export default Form;