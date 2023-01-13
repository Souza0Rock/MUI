import React from "react";
import * as S from "styled-components"
import * as M from "@mui/material"

function Form () {
  return (
    <div>
      <input onChange={handleChange("rua")} />
      <input onChange={handleChange("numero")} />
      <input onChange={handleChange("cep")} />
      <input />
      <input />
      <input />
    </div>
  )
}

export default Form;