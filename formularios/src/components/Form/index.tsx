import React, { useState } from "react";
import InputForm from "../InputForm";
import * as S from "./styled";
import * as M from "@mui/material";

import InputMask from "react-input-mask";

function Form(this: any, inputProps: any, { itemChange }: any) {

  const [fields, setFields] = useState({});

  const handleChange = (e: any) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

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
        <M.Grid xs={12} sm={12} md={12} lg={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <InputForm
            itemName="rua"
            labelProp="rua"
          />
          {/* <InputMask
          mask="99999-999"
          onChange={handleChange}
          /> */}
          {/* {() =>
            (<InputForm 
              itemName="cep"
              labelProp="cep" 
              // itemChange={handleChange}
            />)} */}
          {/* </InputMask> */}
          <InputMask
            mask="99999-999"
            disabled={false}
            onChange={handleChange}
          >
            {(inputProps: any) =>
              <InputForm
                {...inputProps}
                id="outlined-basic"
                itemName="cep"
                labelProp="cep"
                itemChange={handleChange}
              />
            }
          </InputMask>
        </M.Grid>
        <M.Grid xs={12} sm={12} md={12} lg={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <InputForm
            itemName="numero"
            labelProp="numero"
            itemChange={handleChange}
          />
          <InputForm
            itemName="bairro"
            labelProp="bairro"
            itemChange={handleChange}
          />
        </M.Grid>
        <M.Grid xs={12} sm={12} md={12} lg={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <InputForm
            itemName="cidade"
            labelProp="cidade"
            itemChange={handleChange}
          />
          <InputForm
            itemName="estado"
            labelProp="estado"
            itemChange={handleChange}
          />
        </M.Grid>
      </M.Grid>
    </S.Container>
  )
}

export default Form;