
import React from 'react';
import {Spinner, Button} from 'react-bootstrap';

function Loading(props) {
    const {loading,children,configuration} = props
    const styles ={
      spinner:{
        position:"fixed",
        top:"50%",
        left:"50%"
      }
    }
    if(loading){
      return (
        <div style={styles.spinner}>
          <Button variant="primary" disabled>
            <Spinner 
              as="span"
              animation={configuration?.animation1 || "border"}
              //variant={configuration?.variant || "dark"} // "primary"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Cargando...</span>
          </Button>{' '}
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation={configuration?.animation2 || "grow"}
              //variant={configuration?.variant || "dark"} // "primary"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Cargando...
          </Button>
      </div>
      );
    }else{
      return(
        <>
          {children}
        </>
      )
    }
  
  
}

export default Loading;
