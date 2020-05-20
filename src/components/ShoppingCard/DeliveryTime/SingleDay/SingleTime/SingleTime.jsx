import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Circle from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Checkbox from '@material-ui/core/Checkbox';
import {FormControlLabel, Radio} from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RadioGroup } from '@material-ui/core';
const useStyles = makeStyles({
    chooseAddress: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'row',
    },
    addressDetail: {
        marginTop: 2,
        color: '#9A9A9A',
        fontSize: 12,
        fontWeight: 600
    }
})
const SingleTime = (props) => {
    const classes = useStyles();
    const [time, setTime] = useState({
        list: []
    });
    const [value, setValue] = useState(0)

    const shipments = useSelector(state => state.shipments)
    useEffect(() => {
         
        if(shipments.length > 0) {
            debugger

            if(shipments[0].excluded !== null){
                const timeItem = shipments[0].hoursOfDay.filter(i => i !== shipments[0].excluded.hourOfDay)[0];
            setTime({
                ...time,
                list: shipments[0].hoursOfDay
            });
            }
            setTime({
                ...time,
                list: shipments[0].hoursOfDay
            });
        }
    },[shipments]);
    
    return(
        <div className={classes.addressDetail}>
            <RadioGroup
                value={value}
                onChange = {(event) => {
                    setValue(parseInt(event.target.value));
                    props.setShipmentTime(parseInt(event.target.value),props.day);
                }}>
            {
                time.list.map((t, idx) => {
                    return(
                        <React.Fragment>
                            <FormControlLabel
                            value={t}
                            control={<Radio color="primary"/>}
                            label={`ساعت ${t}-${t+1}`}/>
                        </React.Fragment>
                    )
                })
            }
            </RadioGroup>
            
        </div>
    )
}
export default SingleTime;