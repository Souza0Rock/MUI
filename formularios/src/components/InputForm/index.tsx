import * as M from "@mui/material";

function InputForm ({
  nameProp,
  handleChangeProp,
  labelProp,
  errorProp,
  value,
  inputProps,
  validateProp
}: any) {

  return (
    <M.TextField
      onChange={handleChangeProp}
      id="outlined-basic"
      label={labelProp}
      name={nameProp}
      margin="none"
      size="medium"
      required
      helperText={validateProp && "Campo obrigatório"}
      value={value}
      inputProps={inputProps}
      error={errorProp}
    />
  )
}

export default InputForm