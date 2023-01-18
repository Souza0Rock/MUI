import axios from "axios";
import { useState } from "react";

export async function Api (data: any, setResposta: any) {


  
  const baseURL = `https://viacep.com.br/ws/${data}/json/`
  console.log('entrei');
  
  return axios.get(baseURL)
  .then((response) => {
      setResposta(response.data)
      console.log(response.data, 'api resposta');
  })
  .catch(error => console.log(error));

}
