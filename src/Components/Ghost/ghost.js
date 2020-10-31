import React from 'react';
import './style.css';

class Ghost extends React.Component {
    render(){
        return (
            <div id="spooky">
                <div id="body">
                    <div id="eyess"></div>
                    <div id="mouth"></div>
                    <div id="feet">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ghost;