import React, { useEffect, useState } from "react";
import { maskCEP } from "@/utils/mask";
import * as S from "./styled";
import * as M from "@mui/material";
import InputForm from "../InputForm";
import ButtonSubmit from "../ButtonSubmit";
import { Api } from "@/services/api";

interface IResposta {
  bairro: string,
  localidade: string,
  logradouro: string,
  uf: string,
}


function Form () {
  const [resposta, setResposta] = useState<IResposta>();
  const [fields, setFields] = useState<any>({
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  const [batata, setBatata] = useState('');

  const handleChange = (e: any) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    // if (fields.cep?.length > 2) {
      Api({setResposta, batata});
    // }
    setBatata(fields?.cep);
  }
  
  const [buttonClick, setButtonClick] = useState(false);  

  console.log(fields.cep, 'fields cep', fields.cep.length, 'fields cep length');  

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
            maxLengthProps={{ maxLength: 8 }}
            fieldsProp={fields}
            errorProp={fields.cep?.length === 0 && buttonClick === true}
            valueProp={maskCEP(fields.cep)}
            validateProp={
              fields.cep?.length === 0 && buttonClick === true
              || fields.cep?.length === undefined && buttonClick === true
              ? true
              : false
            }
          />
          <InputForm
            nameProp="rua"
            labelProp="Rua"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            valueProp={resposta ? 
              resposta.logradouro :
              fields.rua
            }
            validateProp={
              fields.rua?.length === 0 && buttonClick === true
              || fields.rua?.length === undefined && buttonClick === true
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
            errorProp={fields.numero?.length === 0 && buttonClick === true}
            validateProp={
              fields.numero?.length === 0 && buttonClick === true
              || fields.numero?.length === undefined && buttonClick === true
              ? true 
              : false
            }
          />
          <InputForm
            nameProp="bairro"
            labelProp="Bairro"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            // errorProp={fields.bairro?.length === 0}
            valueProp={resposta ? 
              resposta.bairro : 
              fields.bairro
            }
            validateProp={
              fields.bairro?.length === 0 && buttonClick === true
              || fields.bairro?.length === undefined && buttonClick === true
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
            // errorProp={fields.cidade?.length === 0}
            valueProp={resposta ? 
              resposta.localidade : 
              fields.cidade
            }
            validateProp={
              fields.cidade?.length === 0 && buttonClick === true
              || fields.cidade?.length === undefined && buttonClick === true
              ? true 
              : false
            }
          />
          <InputForm
            nameProp="estado"
            labelProp="Estado"
            handleChangeProp={handleChange}
            fieldsProp={fields}
            // errorProp={fields.estado?.length === 0}
            valueProp={resposta ?
              resposta.uf :
              fields.estado
            }
            validateProp={
              fields.estado?.length === 0 && buttonClick === true
              || fields.estado?.length === undefined && buttonClick === true
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