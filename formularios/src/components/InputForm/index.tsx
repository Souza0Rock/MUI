import * as M from "@mui/material";
import { IProps } from "./interface";

function InputForm ({
  nameProp,
  handleChangeProp,
  labelProp,
  errorProp,
  valueProp,
  maxLengthProp,
  validateProp,
}: IProps) {

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
      value={valueProp}
      inputProps={maxLengthProp}
      error={errorProp}
    />
  )
}

export default InputForm