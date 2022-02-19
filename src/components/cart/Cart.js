import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from "react-router-dom";
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'
import {
    Badge,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink
  } from "reactstrap";

class Cart extends Component {

    removeFromCart=(product)=>{
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName+" has been deleted from the cart!");
    }

  render() {
    return (
        <div>
            {this.props.cart.length>0 ? (
                <UncontrolledDropdown nav>
                    <DropdownToggle nav caret>
                    Cart <Badge color='success'>{this.props.cart.length}</Badge>
                    </DropdownToggle>
                    <DropdownMenu end>
                        {
                            this.props.cart.map(cartItem=>(
                                <DropdownItem key={cartItem.product.id}><Badge color='danger' onClick={()=>this.removeFromCart(cartItem.product)}>-</Badge> {cartItem.product.productName} <Badge>{cartItem.quantity}</Badge></DropdownItem>
                            ))
                        }
                        <DropdownItem divider />
                        <DropdownItem><Link to="/cart" className='nav-link'>Preview Cart</Link></DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            ):  <NavItem>
                    <NavLink>Cart is Empty</NavLink>
                </NavItem>
            }
        </div>
    )
  }
}

function mapStateToProps(state){
    return {
        cart:state.cartReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
      actions:{
          removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Cart);