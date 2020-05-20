import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../../config/axios';
import SingleNearByInventory from './SingleNearByInventory';
import { useDispatch } from 'react-redux';

const NearByInventoryList = () => {
    const dispatch = useDispatch();
    const [inventories,setInventories] = useState({
        list: []
    });
    const [location, setLocation] = useState({
        lat: 35.7076319290324,
        lon: 51.377906799316406
    })
    const getInventories =async ()=>{
        try {
            dispatch({loading: true, type: 'SET_SHOW_LOADING'});
            const response = await axiosInstance.get(`/inventories/?nearBy=${location.lat},${location.lon}`);
            setInventories({
                ...inventories,
                list: response.data
            });
            dispatch({loading: false, type: 'SET_SHOW_LOADING'});

        } catch (error) {
            dispatch({loading: false, type: 'SET_SHOW_LOADING'});
            
        }
    }
    useEffect(() => {
        getInventories()
    },[])
    return(
        <React.Fragment>
            {
                inventories.list.map((value, idx) => {
                    return(
                        <SingleNearByInventory value={value} key={idx} />
                    )
                })
            }
        </React.Fragment>
    )
}
export default NearByInventoryList;