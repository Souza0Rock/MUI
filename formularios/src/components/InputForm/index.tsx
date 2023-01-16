import * as M from "@mui/material";
import InputMask from "react-input-mask";

function InputForm ({nameProp, itemChange, labelProp, maskProp, fieldsProp}: any) {
  return (
    
    <InputMask
    mask={maskProp}
    onChange={itemChange}
    >
      {(inputProps: any) => 
        <M.TextField
          {...inputProps}
          onChange={itemChange}
          id="outlined-basic"
          label={labelProp}
          name={nameProp} 
          margin="none"
          size="medium"
          required
          helperText="Campo obrigatório"
          error={!fieldsProp.nameProp}
        />
      }
    </InputMask>
  )
}

export default InputForm