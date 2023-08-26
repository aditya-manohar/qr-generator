import { QRCode,Button,Typography } from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function LocationQR() {
    const[address,setAddress] = useState('');
    const[disp,setDisp] = useState(false);
    const[latitude,setLatitude] = useState('');
    const[longitude,setLongitude] = useState('');
    const[color,setColor] = useState('#000000');

  return (
    <div>
        <center><br/>
        <Typography.Text>Enter the Location/Address.</Typography.Text><br/>
        <input type='text' className='url' value={address} onChange={(e)=> {setAddress(e.target.value);setDisp(false)}} placeholder='Enter address...'/><br/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code <QrcodeOutlined/></Button>
        
 <div className='qrcode'> 
        <QRCode size={300} color={color} value={`https://www.google.com/maps/place/${address}`} style={{display : disp && address.length>5 ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp && address.length>5 ? 'inline' : 'none'}}/>
        </div>
        </center>
    </div>
  )
}

export default LocationQR;