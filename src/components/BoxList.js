import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col ,Jumbotron} from 'reactstrap';
import Box from '../components/Box';
import  {Title } from './Title'


export default class Header extends React.Component {
    
    constructor(props) {
        super(props); 

    this.state = [{"id":"0","name":"Todas las estadías","bestPrice":"26119"},{"id":"1","name":"Viajá por 7 días","bestPrice":"26119"},{"id":"2","name":"Viajá por 10 días","bestPrice":"32413"},{"id":"3","name":"Viajá por 15 días","bestPrice":"40000"},{"id":"4","name":"Viajá por 19 días","bestPrice":"50000"}]
    };
    


    componentDidMount() {   
        fetch(`https://api.myjson.com/bins/wrnby`)
        .then(res => res.json())
        .then(results => {
          console.log({ results })        
          })
       
    }  
      render() {
       
        const stylediv = {backgroundColor:'green'};
        debugger;
          const styletext = {backgroundColor:'#000'};
         var items =this.state;
       const Boxes = items.map((item,i) => {
              return (
                 <Col xs="2" >
                    <Box id={item.id}  name={item.name} bestPrice={item.bestPrice}/>
                    </Col>
              );
            });
    
           const mobile = false;
           if (mobile) {
                return(
                  <div>
                      <Container >
                          <Row xs="12">>
                              <Col>{Boxes}</Col>
                          </Row>
                      </Container>
                  </div>
                )
           }else{
            return(
                <div>
                  <Jumbotron style={{  backgroundColor:'#00968d75'}}>             
                      <Container >
                          <Row >
                              <Col xs="12" style={{'text-align': 'center'}} >
                                <Title children={'Los vuelos mas baratos desde tu estadia en MIAMI'}/>
                              </Col>
                          </Row>
                          <Row>
                              {Boxes}
                          </Row>
                      </Container>
                  </Jumbotron>
                </div>
              )
           }
      }
};