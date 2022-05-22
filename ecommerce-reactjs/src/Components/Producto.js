import {Link} from "react-router-dom";
import {Card,Button,Col} from 'react-bootstrap';
import './Producto.css';
import AuthContext from "../Context/AuthContext"

const styles={
  cardContainer:{
    marginBottom:"10px",
    width: '18rem',
    height: '31rem'
  },
  cardBody:{

  }
}

function Producto(props) {
  const {datos} = props
  
  return (
    <AuthContext.Consumer>
      {
        context =>
        <Col>
          <Card style={styles.cardContainer}>
            <Card.Img className="imgProducto" variant="top" src={datos.thumbnail} />
            <Card.Body>
              <Card.Header>{datos.id}</Card.Header>
              <Card.Title>Moto</Card.Title>
              <Card.Subtitle>{datos.title}</Card.Subtitle>
              <Card.Text>$ {datos.price}</Card.Text>
              <Button variant="primary" as={Link} to={'/producto/'+datos.id}>Ver Detalle</Button>
            </Card.Body>
          </Card>
        </Col>
      }
    </AuthContext.Consumer>
  );
  
}

export default Producto;
