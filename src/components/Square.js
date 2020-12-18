import React from 'react';
import Button from '@material-ui/core/Button';

const style = {
    margin: '5px',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    color: 'black',
    outline: 'none'
};
const Square = ({ value , onClick }) => (
    <Button style={style} variant="contained" onClick={onClick}>
        {value}
    </Button>
);

export default Square;