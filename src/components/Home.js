import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SectionTitle } from './SectionTitle';
import { PostCar } from './PostCar';
import { GetCars } from './GetCars';
import { GetLatest } from './GetLatest';

export class Home extends React.Component {
    render() {

        return (
            <div>
                <SectionTitle title="Our last offers"/>
                <GetLatest />

                <SectionTitle title="All our offers"/>
                <GetCars />

                <SectionTitle title="Add your car"/>
                <Row className='justify-content-center'>
                    <Col xs={11} sm={6} md={4} xl={2}>
                        <PostCar />
                    </Col>
                </Row>
            </div>
        );
    }
}