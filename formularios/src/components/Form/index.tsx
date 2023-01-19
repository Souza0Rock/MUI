import React, { useEffect, useState } from "react";
import * as S from "./styled";
import * as M from "@mui/material";
import InputForm from "../InputForm";
import ButtonSubmit from "../ButtonSubmit";
import { Api } from "@/services/api";
import { IData, IFields } from "./interface";
import { maskCEP } from "@/utils/mask";

function Form () {
  
  const [fields, setFields] = useState<IFields>({
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
  });
  
  const handleChange = (e: any) => {
    setFields({ ...fields, [e.target.name]: e.target.value });    
  }
  
  const [data, setData] = useState<IData>();

  useEffect(() => {
    if (fields?.cep.length === 8) {
      Api(fields?.cep, setData);
    }
  },[fields?.cep])

  const [buttonClick, setButtonClick] = useState(false);     

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
            maxLengthProp={{ maxLength: 8 }}
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
            valueProp={data ?
              data.logradouro :
              fields.rua
            }
            validateProp={
              fields.rua?.length === 0 && buttonClick === true
              || fields.rua?.length === undefined && buttonClick === true
              ? true
              : false}
              errorProp={undefined}
              maxLengthProp={undefined}
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
            errorProp={fields.numero?.length === 0 && buttonClick === true}
            validateProp={
              fields.numero?.length === 0 && buttonClick === true
              || fields.numero?.length === undefined && buttonClick === true
              ? true
              : false
            }
            valueProp={undefined}
            maxLengthProp={undefined}
          />
          <InputForm
            nameProp="bairro"
            labelProp="Bairro"
            handleChangeProp={handleChange}
            valueProp={data ?
              data.bairro :
              fields.bairro
            }
            validateProp={
              fields.bairro?.length === 0 && buttonClick === true
              || fields.bairro?.length === undefined && buttonClick === true
              ? true
              : false
            }
            errorProp={undefined}
            maxLengthProp={undefined}
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
            valueProp={data ?
              data.localidade :
              fields.cidade
            }
            validateProp={
              fields.cidade?.length === 0 && buttonClick === true
              || fields.cidade?.length === undefined && buttonClick === true
              ? true
              : false
            }
            errorProp={undefined}
            maxLengthProp={undefined}
          />
          <InputForm
            nameProp="estado"
            labelProp="Estado"
            handleChangeProp={handleChange}
            valueProp={data ?
              data.uf :
              fields.estado
            }
            validateProp={
              fields.estado?.length === 0 && buttonClick === true
              || fields.estado?.length === undefined && buttonClick === true
              ? true
              : false
            }
            errorProp={undefined}
            maxLengthProp={undefined}
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