import React, { Component } from "react";
import {Link} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse
} from "reactstrap";
import Cart from '../cart/Cart'

export default class Navi extends Component {
  constructor(props){
    super(props);
    this.toogle=this.toogle.bind(this);
    this.state={
      isOpen:false
    };
  }
  
  toogle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/" className='nav-link'>Product Cart App</Link>
          <NavbarToggler className="me-2" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <Link to="/saveproduct" className='nav-link'>Add Product</Link>
              </NavItem>
              <Cart/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
