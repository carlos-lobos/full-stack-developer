
import React,{useState,useEffect} from 'react';
import Loading from '../Components/Loading';
import Producto from '../Components/Producto';
import {getAllProductos} from "../Services/ProductosServices";
import {Row} from 'react-bootstrap';

function Home() {
  const [productos,setProductos] = useState([])
  const [loading,setLoading] = useState(true)
  
  useEffect(
    ()=>{
      getAllProductos()
      .then(response=>{
        console.log("data",response)
        if(response.data.results){
          setProductos(response.data.results)
          setLoading(false)
        }
      })
      .catch(e=>{
        console.log(e)
      })
    },
    []
  )

    return (
      <Loading loading={loading}>
        <Row xs={"auto"} md={"auto"}>
        {productos.map(producto=><Producto key={producto.id} datos={producto} />)}
        </Row>
      </Loading>
    );
  
}

export default Home;
