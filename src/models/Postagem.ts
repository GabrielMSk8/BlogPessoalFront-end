import Tema from "./Tema";
import User from '../../BuildEco-front/src/models/User';

interface Postagem{


id: number;
titulo: string;
texto: string;
data:  null;
tema?: Tema|null
usuario?: User | null //linha adicionada para vincular um usuário
}

export default Postagem