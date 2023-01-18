import axios from "axios";
import { useState } from "react";

export async function Api (data: any) {

  const [resposta, setResposta] = useState();
  
  const baseURL = `https://viacep.com.br/ws/${data}/json/`
  
  return axios.get(baseURL)
  .then((response) => {
      setResposta(response.data)
      console.log(response.data, 'api resposta');
  })
  .catch(error => console.log(error));

}
