
import React, { useState } from 'react';

import { Slider, Typography, Modal, Button } from '@material-ui/core/';
import { makeStyles } from "@material-ui/core/styles";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 
    const left = 50 

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        zIndex: 5,
        width: 'auto',
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));

export default function Controls({ open, handleClose }) {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);

    const body = (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center', minHeight:'fit-content'}}>

            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Adjust first option</h2>
                <Slider
                    defaultValue={1}
                    getAriaValueText={0}
                    aria-labelledby="discrete-slider-small-steps"
                    step={0.00000001}
                    marks
                    min={0.0000000}
                    max={0.0000005}
                    valueLabelDisplay="auto"
                />

                <Button>Close</Button>

                <Controls />
            </div>
        </div>
    );

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
