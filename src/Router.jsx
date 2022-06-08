import { BrowserRouter,Routes, Route } from "react-router-dom";

import PagLogin from "./Login/PagLogin";
import Perfil from "./Privado/Perfil";
import Private from "./Context/Private";


const Router = () => {
    return ( <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagLogin></PagLogin>}></Route>
                <Route path="/Perfil" element={<Private><Perfil/></Private>}></Route>
                
            </Routes>

    
    </BrowserRouter> );
}
 
export default Router;