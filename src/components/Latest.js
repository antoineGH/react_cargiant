import React from 'react';
import { SectionTitle } from './SectionTitle';
import { GetLatest } from './GetLatest';

export class Latest extends React.Component {
    render() {

        return (
            <div>
                <SectionTitle title="Our last offers"/>
                <GetLatest />
            </div>
        );
    }
}