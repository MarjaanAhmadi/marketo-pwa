import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        paddingTop: 10
    }
})
const SingleNearByInventory = (props) => {
    const classes = useStyles();
    const history = useHistory();
    return(
        <div className={classes.root}>
      <Card>
            <CardContent>
                
            <div onClick={() => {
                history.push({
                    pathname: '/products',
                    state: {
                      id: props.value.warehouseNo
                    }
                  })
                  }
            }>
                {props.value.title}
            </div>
            </CardContent>
            </Card>
        </div>
    )
}
export default SingleNearByInventory;