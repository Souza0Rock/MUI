import axios from "axios";

export async function Api ({ batata, setResposta }: any) {
 
  const baseURL = `https://viacep.com.br/ws/${batata}/json/`
  
  console.log(batata, 'batata', batata?.length, 'batata length');
  
  return axios.get(baseURL)
  .then((response: any) => {
      setResposta(response.data)
      console.log(response.data, 'api resposta');
  })
  .catch(error => console.log(error));

}
