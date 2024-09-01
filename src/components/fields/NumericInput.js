import React, { useState } from 'react';
import {Input, Tooltip} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const NumericInput = () =>{
const [value, setValue] = useState('');

const handleOnChange = val =>{
    if(!isNaN(Number(val.target.value)))
        setValue(val.target.value);
};

return(
  <Input
    onChange={handleOnChange}
    value={value}
    style={{width: '25%'}}
     suffix={
      <Tooltip title="Extra information">
        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
      </Tooltip>
    }
  />
);
};

export default NumericInput;