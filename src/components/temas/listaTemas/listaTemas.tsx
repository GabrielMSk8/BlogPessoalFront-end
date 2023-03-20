import React, { useState, useEffect } from 'react'
import Tema from '../../../models/Tema'
import { busca } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';


function listaTemas() {

    const [temas, setTemas] = useState<Tema[]>([])

    const[token,setToken] = useLocalStorage('token')

     async function getTemas () {
        await busca ('/tema', setTemas, {
            headers:{
                Authorization: token
            }
        })

    }
    
    useEffect(()=>{
        getTemas()
    },[])


  return (
    <>
    <div>listaTemas</div>
    
    {temas.map(tema =>(
        <div>
    <p>Tema:{tema.descricao}</p>
    <button>Deletar</button>
    <button>Editar</button>
    </div>
    ))}

    </>
  )
}

export default listaTemas