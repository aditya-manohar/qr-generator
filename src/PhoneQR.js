import { QRCode,Button,Typography } from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function SmsQR() {
    const[number,setNumber] = useState('');
    const[disp,setDisp] = useState(false);
    const[color,setColor] = useState('#000000');
  return (
    <div>
        <center><br/>
        <Typography.Text style={{color:'green'}}>Enter the Mobile number and scan the QR code to call or save the contact in your mobile.</Typography.Text><br/>
        <input type='tel' pattern="[789][0-9]{9}" className='url' value={number} onChange={(e)=>{setNumber(e.target.value);setDisp(false)}} placeholder='Enter mobile number'/><br/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code <QrcodeOutlined/></Button>
        
 <div className='qrcode'> 
        <QRCode size={250} color={color} value={`tel:${number}`} style={{display : disp && number.length !== '' ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp && number !== '' ? 'inline' : 'none'}}/>
        </div>
        </center>
    </div>
  )
}
export default SmsQR;