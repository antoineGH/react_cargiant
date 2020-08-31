import React from 'react';
import { SectionTitle } from './SectionTitle';
import { GetCars } from './GetCars';

export class Cars extends React.Component {
    render() {

        return (
            <div>
                <SectionTitle title="All our offers"/>
                <GetCars />
            </div>
        );
    }
}