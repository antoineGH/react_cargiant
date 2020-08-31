import React from 'react';

export class Footer extends React.Component {
    
    render() {
        const styles = {
            background : '#0b1736',
            color : 'white',
            padding: '25px 0',
            position: 'absolute',
            width: '100%'
        }

        return (
            <div>
                <div className="mt-5" style={styles}>Footer Component</div>                
            </div>
        );
    }
}