import React from 'react';
import './style.css';

class Spider extends React.Component {
    render(){
        return (
            <div class="spider">
            <div class="spiderweb"></div>
            <div class="body">
                <div class="eye left"></div>
                <div class="eye right"></div>
            </div>
            <div class="legs left">
                <div class="leg"></div>
                <div class="leg"></div>
                <div class="leg"></div>
            </div>
            <div class="legs right">
                <div class="leg"></div>
                <div class="leg"></div>
                <div class="leg"></div>
            </div>
            </div>
        );
    }
}

export default Spider;