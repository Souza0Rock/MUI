import axios from "axios";

export async function Api ( cep : string, setData : any) {
 
  const baseURL = `https://viacep.com.br/ws/${cep}/json/`

  return axios.get(baseURL)
  .then((response: any) => {
    setData(response.data)
  })
  .catch(error => console.log(error));
}
