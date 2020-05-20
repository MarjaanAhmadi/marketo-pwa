import React from 'react';
import {makeStyles} from '@material-ui/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100
    },
    iconColor: {
        color: "#36CE91",
        fontSize: "35px"
    },
    numberColor: {
        color: "#9A9A9A",
        fontWeight: "bold",
        paddingTop: 8
    }
});

const AddOrRemoveFromShCard = (props) => {
    const classes = useStyles();
    const token = useSelector(state => state.token);
    const history = useHistory();
    const addItem = () => {
        // if(token)
        props.addItem();
        // else history.push('/auth/login');
    }
    const removeItem = () => {
        // if(token)
        props.removeItem();
        // else history.push('/auth/login');
    }
    //when user click on add the number will change here and in redux by props.id
    return(
        <div className={classes.root}>
            <AddCircleIcon onClick={addItem} className={classes.iconColor}/>
    <span className={classes.numberColor}>{props.count}</span>
            <RemoveCircleIcon onClick={removeItem} className={classes.iconColor}/>
        </div>
    )
};
export default AddOrRemoveFromShCard;