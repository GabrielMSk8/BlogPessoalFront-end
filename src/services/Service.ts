
 // /usuarios/logar // a variável dados vai armazenar o objeto json
  // a função setDado vai receber a resposta da nossa API
  // ou seja o objeto json com os dados do usuário e com um token que servirá para 
  //autenticar o usuario na API


  import axios from 'axios';

  export const api = axios.create({
      baseURL: 'https://gabrielblogpessoal.onrender.com'
  })
  
      export const cadastroUsuario = async(url: any,dados: any,setDado: any) => { 
          const resposta = await api.post(url,dados)
          setDado(resposta.data)
      }
  
      export const login = async (url: any, dados: any, setDados: any) => {
        const resposta = await api.post(url, dados)
        setDados(resposta.data)
      }
      export const busca = async(url: any,setDado: any, header: any) => { 
          const resposta = await api.get(url,header)
          setDado(resposta.data)
      }
  
      export const buscaId = async(url: any,setDado: any, header: any) => { 
          const resposta = await api.get(url,header)
          setDado(resposta.data)
      }
  
      export const post = async(url: any, dados: any, setDado: any, header: any) => { 
          const resposta = await api.post(url,dados,header)
          setDado(resposta.data)
      }
  
      export const put = async(url: any, dados: any, setDado: any, header: any) => { 
          const resposta = await api.put(url,dados,header)
          setDado(resposta.data)
      }
  
      export const deleteId = async(url: any,header: any) => { 
          await api.delete(url,header)
      }