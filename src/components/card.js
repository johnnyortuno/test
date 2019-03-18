
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Jumbotron,Container,Row,Col,Button } from 'reactstrap';


   export default class card extends React.Component {
  constructor(props) {
    super(props);
  }
 render() {

  return (
  <div>
  <Container>
   <Row>
    <Col  xs="3">
    <Card>
      <CardImg top width="100%" src="https://static.avantrip.com/fkt-flight/images/cluster-new-york.jpg" alt="Card image cap" />
      <CardBody>
      <Container>
        <Row>
          <Col xs="6"> <div><i className="fas fa-plane-departure">Directo</i></div></Col>
            <Col xs="6"><span>Precio</span></Col>
        </Row>
        <Row>
          <Col xs="6">Nueva York</Col>
          <Col xs="6">$ 2650</Col>
        </Row>
        <Row>
          <Col style={{"text-align": "right"}}><Button color="link">Ver Vuelo</Button></Col>
        </Row>
      </Container>
      </CardBody>
    </Card>
    </Col>
    </Row>
    </Container>
       </div>
   );

   }
}