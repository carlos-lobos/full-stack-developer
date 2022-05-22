
import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Loading from '../Components/Loading';
import {Link} from "react-router-dom";
import {getByIdProductos} from "../Services/ProductosServices";
import Button from 'react-bootstrap/Button';
import AuthContext from '../Context/AuthContext';

const styles={
  imgContainer:{
    width: "250px"
  }
}

function Detalle() {
  const [msg, setMsg] = useState('')
  const [producto,setProducto] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams();

  console.log("id",id)

  useEffect(
    ()=>{
      getByIdProductos(id)
      .then(response=>{
        console.log("data",response)
        if(response.data){
          setProducto(response.data)
          setLoading(false)
        }
      })
      .catch(e=>{
        console.log(e)
      })
    },
    [id]
  )

  const comprarProducto = () => {
    setMsg('Gracias por su compra!')
  }

  return (
    <AuthContext.Consumer>
      {
        context => 
        <Loading loading={loading}>
          <h1>Detalle de producto</h1>
          <p><img style={styles.imgContainer} src={producto.thumbnail} alt="thumbnail"></img></p>
          {
            context.userLogin &&
            <p><Button onClick={comprarProducto} variant="primary">Comprar</Button></p>
          }
          {
            !context.userLogin &&
            <p><div className="Error-msj">(Para adquirir un producto debe registrarse y loguearse. El registro es gratuito)</div></p>
          }
          <p className="Info-msj">{msg}</p>
          <p><Button variant="secondary" as={Link} to={'/'}>Volver</Button></p>
          <p>Nombre: Moto</p>
          <p>Descripción: {producto.title}</p>
          <p>Precio: $ {producto.price}</p>
          <p>SKU: {producto.id}</p>
        </Loading>
      }
    </AuthContext.Consumer>
  );
  
}

export default Detalle;
