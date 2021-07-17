import React, { useState } from 'react';

import { Button } from '@material-ui/core/';
import Controls from './Controls'


const Nav = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: '',justifyContent:'center', minHeight: '', background:'rgba(0,0,0,.4)' }}   >
                <Button type="button" onClick={handleOpen}>
                    Controls
                </Button>

                <Controls open={open} handleOpen={handleOpen} handleClose={handleClose} />
            </div>

        </>
    )

}

export default Nav