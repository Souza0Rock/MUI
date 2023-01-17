import * as M from "@mui/material";

function InputForm ({nameProp, handleChangeProp, labelProp, errorProp, value, inputProps, fieldsProp}: any) {

  // console.log(fieldsProp.cep.length, 'prop');

  // const teste = () => {
  //   if (fieldsProp.rua.length === 0) {
  //     true
  //   }
  //   else (false)
  // }

  return (
    <M.TextField
      onChange={handleChangeProp}
      id="outlined-basic"
      label={labelProp}
      name={nameProp}
      margin="none"
      size="medium"
      required
      // helperText="Campo obrigatório"
      value={value}
      inputProps={inputProps}
      error={errorProp}
    />
  )
}

export default InputForm