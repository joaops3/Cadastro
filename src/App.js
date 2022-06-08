import './App.css';
import AuthProvider from './Context/AuthProvider';
import FormCadastro from './form/FormCadastro';
import FormSenha from './form/FormSenha';
import PagLogin from './Login/PagLogin';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

function App() {
  return (
   
    <AuthProvider>
      <PagLogin></PagLogin>
    </AuthProvider>
    
    
  );
}

export default App;
