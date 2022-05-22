import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Menu from '../Components/Menu';
import Home from '../Pages/Home';
import Registro from '../Pages/Registro';
import Login from '../Pages/Login';
import Footer from '../Components/Footer';
import Detalle from '../Pages/Detalle';
import NotFound from '../Pages/NotFound';
import Container from 'react-bootstrap/Container';
import AuthContext from '../Context/AuthContext';

function Public() {
  return (
    
      <Router>
        <Menu />
        <Container>
          <AuthContext.Consumer>
            {
              context =>
                <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/home" element={<Navigate to="/"/>} />
                  {
                    !context.userLogin &&
                    <>
                    <Route path="/registrarse" element={<Registro />}/>
                    <Route path="/ingresar" element={<Login />}/>
                    </>
                  }
                  <Route path="/producto/:id" element={<Detalle />}/>
                  <Route path="*" element={<NotFound />} />
                </Routes>
            }
          </AuthContext.Consumer>
        </Container>
        <Footer />
      </Router>

  );
}

export default Public;
