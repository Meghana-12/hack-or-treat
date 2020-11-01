import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './card.js';
import { makeStyles } from '@material-ui/core/styles';
import bg1 from '../Images/bg1.jpg';
import { GiSpiderWeb } from 'react-icons/gi';

const useStyles = makeStyles((theme) => ({
    root: { },
}));
export default function Games(){
    return (
        <div>
            <GiSpiderWeb size="3em" color="orange"/>
        </div>
    );
}