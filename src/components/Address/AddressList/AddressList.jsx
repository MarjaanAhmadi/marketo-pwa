import React, {useState} from 'react';
import SingleAddress from '../SingleAddress/SingleAddress';
import CreateAddress from '../CrudAddress/CreateAddress/CreateAddress';
import { Button, RadioGroup } from '@material-ui/core';
import { useSelector } from 'react-redux';

const AddressList = () => {
    const addresses = useSelector(state => state.addresses);
    const [value, setValue] = useState('');
    const renderAddresses = () => {
        return(
            addresses.map((address, idx) => {
                return <SingleAddress address={address} key={idx}/>
            })
        )
    }
    const handleChange = () => {

    }
    return(
        <React.Fragment>
            <RadioGroup value={value} 

            >
            {
                renderAddresses()
            }
            </RadioGroup>
            
        </React.Fragment>
    )
}
export default AddressList;