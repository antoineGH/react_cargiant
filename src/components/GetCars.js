import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { fetchCars } from '../utils/fetchCars'
import { Container, Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, fas);




export class GetCars extends React.Component {

    constructor(props){
        super (props);
        this.state = { items: [], isLoaded: false, hasError: false };
    }

    componentDidMount() {
        setTimeout(() => {
            fetchCars()
            .then(response => {
                this.setState( { isLoaded: true, items: response } )
            })
            .catch(error => { 
                this.setState( { hasError: true }) 
            })
        }, 1000);
    }

    render() {
        let { isLoaded, items, hasError } = this.state

        if (hasError) {
            return <p>Impossible to fetch API. Please try again later.</p>
        }

        if (!isLoaded) {
            return <Spinner className="my-2" animation="border" variant="primary" />
        }
        else {
            return (
                <div>   
                    <Container>                         
                    <Row className="justify-content-center">
                        {items.cars.map(item => {
                                const image_url = 'http://127.0.0.1:5000/api/car/'+ item.id +'/image'; 
                                return <Col key={item.id} xs={11} sm={6} md={4} lg={4} className='mt-4'>
                                    <Card key={item.id} className="justify-content-centers" >
                                        <Card.Img variant="top" src={image_url} className="mx-auto mt-4" style={{width: '80%'}}/>
                                        <Card.Body>
                                        <Card.Title>{item.brand}</Card.Title>
                                        <Card.Text>
                                            Color: {item.color}  
                                        </Card.Text>
                                        <Card.Text>
                                            Matriculation: {item.matriculation}
                                        </Card.Text>
                                        <Card.Text className="font-weight-bold">
                                            {item.price}€ TTC
                                        </Card.Text>
                                        <Button> variant="primary">Read More <FontAwesomeIcon size="xs" icon={['fas', 'greater-than']} fixedWidth /></Button>
                                        </Card.Body>
                                    </Card>
                                </Col>             
                        })}
                        </Row>
                        </Container>
                <hr className='mt-4'/>
                </div>
            );
        }
    }
}