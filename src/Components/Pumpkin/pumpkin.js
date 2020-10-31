import React from 'react';
import './style.css';

class Pumpkin extends React.Component {
    render(){
        return (
            <div class="pumpkin">
                <div class="texture"></div>
                <div class="root"></div>
                <div class="eye left"></div>
                <div class="eye right"></div>
                <div class="mouth left"></div>
                <div class="mouth right"></div>
                <div class="teeth"></div>
            </div>
        );
    }
}

export default Pumpkin;