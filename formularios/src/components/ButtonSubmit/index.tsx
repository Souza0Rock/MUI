import * as M from "@mui/material";

function ButtonSubmit ({setButtonClickProp}: any) {

  return (
    <M.Button 
      variant="contained"
      color="primary"
      sx={{
        width: '81.4%',
        marginTop: '10px'
      }}
      onClick={() => setButtonClickProp(true)}
    >
      enviar
    </M.Button>
  )
}

export default ButtonSubmit