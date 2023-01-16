import * as M from "@mui/material";

function InputForm ({itemName, itemChange, labelProp}: any) {
  return (
    <M.TextField
      id="outlined-basic"
      label={labelProp}
      name={itemName} 
      onChange={itemChange} 
      margin="none"
      size="medium"
      inputMode="numeric"
    />
  )
}

export default InputForm