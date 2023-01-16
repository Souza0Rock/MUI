import React, { useState } from "react";
import InputForm from "../InputForm";
import * as S from "./styled";
import * as M from "@mui/material";

function Form(this: any, inputProps: any, { itemChange }: any) {

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
            labelProp="rua"
            itemChange={handleChange}
          />
          <InputForm
            nameProp="cep"
            labelProp="cep"
            itemChange={handleChange}
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
            labelProp="número"
            itemChange={handleChange}
          />
          <InputForm
            nameProp="bairro"
            labelProp="bairro"
            itemChange={handleChange}
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
            labelProp="cidade"
            itemChange={handleChange}
          />
          <InputForm
            nameProp="estado"
            labelProp="estado"
            itemChange={handleChange}
          />
        </M.Grid>
      </M.Grid>
    </S.Container>
  )
}

export default Form;