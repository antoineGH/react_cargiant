import React from 'react';
import { useParams } from 'react-router-dom';
import { SectionTitle } from './SectionTitle';
import { GetCar } from './GetCar';

export const Car = (props) => {
        let id = useParams().id;
        id = parseInt(id)
        if (Number.isNaN(id)){
            return <p className="mt-5">Please input a valid ID.</p>
        }
        else {
            return (
                <div>
                    <SectionTitle title="Single Car Offer"/>
                    <GetCar id={id}/>
                </div>
            );
        }
}