import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SectionTitle } from './SectionTitle';
import { PostCar } from './PostCar';

export class Add extends React.Component {
    render() {

        return (
            <div>
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