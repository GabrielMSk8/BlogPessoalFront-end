import Postagem from "./Postagem";

interface UserLogin{
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    token?: string| null
    senha: string;
    postagem?: Postagem[]

}

export default UserLogin