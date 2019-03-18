import React from 'react';
import {
  Jumbotron, Container, Row,Col,Button} from 'reactstrap';


  export default class box extends React.Component {

  constructor(props) {
    super(props);
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  
  };

  render() {

const { id, name, bestPrice } = this.props
    return (
            <div key={id}  id={id+1} className="left border" style={{'backgroundColor':'rgba(180, 203, 216, 0.47)'}}>
                <Container xs="12">
                       
                        <Row id={id}  xs="12" >
                            <Col xs="12">{name}</Col>
                            <Col xs="12"> <Button onClick={this.handleClick(id)} color="link">DESDE :${bestPrice}</Button></Col>
                        </Row>
                   </Container>
               </div>
           );
   }
}