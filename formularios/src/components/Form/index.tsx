import React, { useState } from "react";
import { maskCEP, maskPhone } from "@/utils/mask";
import InputForm from "../InputForm";
import * as S from "./styled";
import * as M from "@mui/material";
import ButtonSubmit from "../ButtonSubmit";

function Form () {

  const [fields, setFields] = useState<any>({});

  const handleChange = (e: any) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const [sla, setSla] = useState(false)
  console.log(sla, 'sla');
  console.log(fields.rua?.length, 'rua');+1ghb

  const teste = () => {
    if (fields.rua?.length === 0) {
      setSla(true);
    }
    // else if (fields.cep?.length === 0) {
    //   setSla(true);
    // }
    // else if (fields.numero?.length === 0) {
    //   setSla(true);
    // }
    // else if (fields.bairro?.length === 0) {
    //   setSla(true);
    // }
    // else if (fields.cidade?.length === 0) {
    //   setSla(true);
    // }
    // else if (fields.estado?.length === 0) {
    //   setSla(true);
    // }
    else (false)
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
        <M.Grid 
          xs={12} sm={12} md={12} lg={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <InputForm
            nameProp="rua"
            labelProp="Rua"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            errorProp={fields.rua?.length === 0}
            slaProp={sla}
          />
          <InputForm
            nameProp="cep"
            labelProp="CEP"
            handleChangeProp={handleChange}
            value={fields.cep && maskCEP(fields.cep)}
            inputProps={{ maxLength: 8 }}
            fieldsProp={fields}
            errorProp={fields.cep?.length === 0}
          />
        </M.Grid>
        <M.Grid 
          xs={12} sm={12} md={12} lg={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <InputForm
            nameProp="numero"
            labelProp="Número"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            errorProp={fields.numero?.length === 0}
          />
          <InputForm
            nameProp="bairro"
            labelProp="Bairro"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            errorProp={fields.bairro?.length === 0}
          />
        </M.Grid>
        <M.Grid 
          xs={12} sm={12} md={12} lg={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <InputForm
            nameProp="cidade"
            labelProp="Cidade"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            errorProp={fields.cidade?.length === 0}
          />
          <InputForm
            nameProp="estado"
            labelProp="Estado"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            errorProp={fields.estado?.length === 0}
          />
        </M.Grid>
        <M.Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <ButtonSubmit testeProp={teste} />
        </M.Grid>
      </M.Grid>
    </S.Container>
  )
}

export default Form;