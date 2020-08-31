import React from 'react';
import { fetchCar } from '../utils/fetchCar';

// React Bootstrap Import
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

// FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, fas);

export class GetCar extends React.Component {

    constructor(props){
        super (props);
        this.state = { items: [], isLoaded: false, hasError: false}
    }

    componentDidMount() {
        setTimeout( () => {
            fetchCar(this.props.id)
            .then( response => this.setState( { items: response, isLoaded: true, hasError: false } ))
            .catch( this.setState( { hasError: true } ))
        }, 1500);
    }

    render() {
        let { isLoaded, hasError, items } = this.state;
        let car = items.car
        const image_url = 'http://127.0.0.1:5000/api/car/' + this.props.id + '/image';

        if (hasError) {
            return (<p>Impossible to fetch API. Please try again later.</p>);
        }

        if (!isLoaded) {
            return <Spinner className="my-2" animation="border" variant="primary" />
        }

        if (isLoaded) {

            return (
                <div>
                    <Card>
                        <Card.Img variant="top" className="justify-content-center mx-auto rounded" style={{maxWidth: '30%', paddingTop: 30}} src={image_url} />
                        <Card.Body>
                        <Card.Title>
                            {car.brand}
                        </Card.Title>
                        <Card.Text>
                            {car.price}€ TTC
                        </Card.Text>
                        <Card.Text>
                            <span className="font-weight-bold">Description :</span> {car.color.toLowerCase()} car, matriculate as {car.matriculation}.
                        </Card.Text>
                        <Button variant="primary">Purchase <FontAwesomeIcon size="xs" icon={['fas', 'greater-than']} fixedWidth /></Button>
                        </Card.Body>
                    </Card>
                </div>
            );
        }
    }
}