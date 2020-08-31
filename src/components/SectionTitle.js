import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export const SectionTitle = (props) => {
    return (
        <Row className="justify-content-center">
            <Col xs={11} sm={6} md={4} className='mt-5'>
                <h4>{props.title}</h4>
            </Col>
        </Row>    
    );
}

SectionTitle.propTypes = {
    title: PropTypes.string
  };