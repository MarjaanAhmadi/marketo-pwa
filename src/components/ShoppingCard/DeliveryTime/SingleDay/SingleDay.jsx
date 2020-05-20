import React, { useState } from 'react';
import SingleTime from './SingleTime/SingleTime';
import { makeStyles} from "@material-ui/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography } from '@material-ui/core';
import shipmentReq from '../../../../requests/shipments';
import { useEffect } from 'react';
const useStyles = makeStyles({
    root: {
        marginTop: 5
    },
    dateFormat: {
        fontFamily: 'IranSans'
    },
    accordin: {
        backgroundColor: 'white',
        borderRadius: '15px !important',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'grey',
        cursor: 'pointer'
    },
    actionIcos: {
        padding: '0 3px'
    },
    label: {
        margin: 0,
        fontSize: 14,
    },
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
    },
    timeContainer: {
        padding: '0 5px'
    }
})
const SingleDay = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <ExpansionPanel className={classes.accordin}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography className={classes.dateFormat}> {`${new Date().getFullYear()}-0${new Date().getMonth()+1}-${new Date().getDate() + props.day}`}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.timeContainer}>
                <SingleTime day={props.day} setShipmentTime={(time,day)=>{props.setShipmentTime(time, day)}}/>
            </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}
export default SingleDay;