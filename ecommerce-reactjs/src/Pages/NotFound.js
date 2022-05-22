
import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function NotFound() {
  
    return (
      <div>
        <h1>Error 404 - Not Found</h1>
        <h2>No se encontró la página solicitada</h2>
        <h3>Esto es embarazoso, la página que se solicitó, no se encuentró en el servidor,
            esto puede deberse a un error temporal, o al intento de acceder directamente a una URL antigua.</h3>
        <Button variant="secondary" as={Link} to={'/'}>Inicio</Button>
      </div>
    );
  
}

export default NotFound;
