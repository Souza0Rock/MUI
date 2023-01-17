import * as M from "@mui/material";

function ButtonSubmit (testeProp: any) {
  return (
    <M.Button 
      variant="contained"
      color="primary"
      sx={{
        width: '81.4%',
        marginTop: '10px'
      }}
      onClick={() => testeProp}
    >
      enviar
    </M.Button>
  )
}

export default ButtonSubmit