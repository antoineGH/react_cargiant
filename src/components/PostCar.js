import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { addCar } from '../utils/addCar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, fas);

export class PostCar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {brand: '', color: '', matriculation: '', price: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(prop, value) {
      this.setState({
          [prop]: value
        });
      console.log(this.state)
    }
  
    handleSubmit(event) {
      event.preventDefault();
      addCar(this.state);
    }
  
    render() {

      return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Group className='mt-4' controlId="FormCar.Brand">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" value={this.state.brand} onChange={ (e) => this.handleChange('brand', e.target.value) } />
            </Form.Group>
            <Form.Group controlId="FormCar.Color">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" value={this.state.color} onChange={ (e) => this.handleChange('color', e.target.value) } />
            </Form.Group>
            <Form.Group controlId="FormCar.Matriculation">
                <Form.Label>Matriculation</Form.Label>
                <Form.Control type="text" value={this.state.matriculation} onChange={ (e) => this.handleChange('matriculation', e.target.value) } />
            </Form.Group>
            <Form.Group controlId="FormCar.Price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" value={this.state.price} onChange={ (e) => this.handleChange('price', e.target.value) } />
            </Form.Group>
            <Button className="mt-2" variant="primary" type="submit">
                Submit <FontAwesomeIcon style={{color: 'white'}} icon={['fas', 'check']} />
            </Button>
        </Form>
      );
    }
  }