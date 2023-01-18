import React, { useEffect, useState } from "react";
import { maskCEP } from "@/utils/mask";
import * as S from "./styled";
import * as M from "@mui/material";
import InputForm from "../InputForm";
import ButtonSubmit from "../ButtonSubmit";
import { Api } from "@/services/api";

import _ from "lodash";

function Form () {

  const [fields, setFields] = useState<any>({
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  const handleChange = (e: any) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  console.log(fields.cep, 'fields');
  
  
  const [buttonClick, setButtonClick] = useState(false);
  
  console.log(buttonClick, 'button click');

  const handleCep = _.debounce(async () => {
    if (fields.cep.length === 8) {
      const cepApi = await Api;
      
    }
  })

  
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
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <InputForm
            nameProp="cep"
            labelProp="CEP"
            handleChangeProp={handleChange}
            value={fields.cep && maskCEP(fields.cep)}
            inputProps={{ maxLength: 8 }}
            fieldsProp={fields}
            errorProp={fields.cep?.length === 0}
            validateProp={
              fields.cep?.length === 0 
              || fields.cep?.length === undefined 
              && buttonClick === true
              ? true 
              : false
            }
          />
          <InputForm
            nameProp="rua"
            labelProp="Rua"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            errorProp={fields.rua?.length === 0}
            validateProp={
              fields.rua?.length === 0 
              || fields.rua?.length === undefined 
              && buttonClick === true
              ? true 
              : false
            }
          />
        </M.Grid>
        <M.Grid
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
            validateProp={
              fields.numero?.length === 0 
              || fields.numero?.length === undefined 
              && buttonClick === true
              ? true 
              : false
            }
          />
          <InputForm
            nameProp="bairro"
            labelProp="Bairro"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            errorProp={fields.bairro?.length === 0}
            validateProp={
              fields.bairro?.length === 0 
              || fields.bairro?.length === undefined 
              && buttonClick === true
              ? true 
              : false
            }
          />
        </M.Grid>
        <M.Grid
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
            validateProp={
              fields.cidade?.length === 0 
              || fields.cidade?.length === undefined 
              && buttonClick === true
              ? true 
              : false
            }
          />
          <InputForm
            nameProp="estado"
            labelProp="Estado"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            errorProp={fields.estado?.length === 0}
            validateProp={
              fields.estado?.length === 0 
              || fields.estado?.length === undefined 
              && buttonClick === true
              ? true 
              : false
            }
          />
        </M.Grid>
        <M.Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <ButtonSubmit
            setButtonClickProp={setButtonClick}
          />
        </M.Grid>
      </M.Grid>
    </S.Container>
  )
}

export default Form;