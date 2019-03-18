import React from 'react';
import logo from './../images/avantrip.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Label } from 'reactstrap';

export default class navbar extends React.Component {
  
    constructor(props) {
    super(props);

   this.toggle = this.toggle.bind(this);
    
    this.state = {
      isOpen: false
    };

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
const styleLabel = {
        color:'red',
        fontSize: '0.75rem',         
      };
const styleImage = {
        height: '60px',
        width: '60px'
      };
const color ={
       'background-color':'red'
      };
const { isOpen } = this.state;

  if (this.props.mobile) {
    return (
      <div>
        <Navbar color="none"  light expand="md" style={color}>
          <NavbarBrand href="/">
              <img 
              style={styleImage} 
              id="logo" 
              className="d-inline-block mr-1" 
              src={logo} /> 
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>         
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }else{   
    return (
      <div>
        <Navbar color="none" light expand="md">
          <NavbarBrand href="/">
          <img 
          style={styleImage} 
          id="logo" className="d-inline-block mr-1" 
          src={logo}/> 
          <Label
             style={styleLabel}>
             {this.props.Texto}
          </Label>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
    );
  }
  }
}