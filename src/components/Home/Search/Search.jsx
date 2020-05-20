import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import productReq from '../../../requests/products';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles({
  root: {
    paddingTop: 8,
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    fontFamily: 'IranSans'
  },
    paper: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        height: 40,
        padding: "0 10px",
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'

      },
      iconButton: {
      },
  });
const Search = () => {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();

    const [params, setParams] = useState({
      title: '',
      status: 'ACTIVE',
      // categoryId: 3
    });
    const searchbyTitle = async (event) => {
      event.preventDefault();
      //id is null
      try {
        dispatch({loading: true, type: 'SHOW_LOADING'});
        
        const response = await productReq(params, null);
        dispatch({products: response.data, type: 'SET_PRODUCTS'});
        if(response.data) {
          history.push(`/products/?title=${params.title}`);
        } 
        dispatch({loading: false, type: 'SHOW_LOADING'});

        
      } catch (error) {
        dispatch({loading: false, type: 'SHOW_LOADING'});
        
      }
    }   
    
    return(
         <div className={classes.root}>
            <Paper component="form" className={classes.paper}>
            <InputBase
              className={classes.input}
              placeholder="دنبال چی میگردی؟"
              inputProps={{ 'aria-label': 'search google maps' }}
              value={params.title}
              onChange={(event) => {
                setParams({
                  ...params,
                  title : event.target.value
                })
              }}

            />
            <IconButton onClick={searchbyTitle} className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
         </div>

    )
}
export default Search;