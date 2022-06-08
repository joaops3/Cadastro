import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";

const Perfil = () => {
    const {logout} = useContext(AuthContext)
    return ( 
    
    <div>
    <h1 style={{color: "red"}}> aqui fica a pagina privada de perfil</h1>
    <button onClick={() =>logout()}>SAIR</button>
    </div>

    )
}
export default Perfil;