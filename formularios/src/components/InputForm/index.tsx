import * as M from "@mui/material";
import InputMask from "react-input-mask";

function InputForm ({nameProp, itemChange, labelProp}: any) {
  return (
    
    <InputMask
    mask={""}
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
          inputMode="numeric"
        />
      }
    </InputMask>
  )
}

export default InputForm