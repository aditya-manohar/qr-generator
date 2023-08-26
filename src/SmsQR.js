import { QRCode,Button,Typography } from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function SmsQR() {
    const[number,setNumber] = useState('');
    const[body,setBody] = useState('');
    const[disp,setDisp] = useState(false);
    const[color,setColor] = useState('#000000');
  return (
    <div>
        <center><br/>
        <Typography.Text style={{color:'dodgerblue'}}>Enter the mobile number and the message to be sent.</Typography.Text><br/>
        <input type='tel' className='url' value={number} onChange={(e)=>{setNumber(e.target.value);setDisp(false)}} placeholder='Enter mobile number'/><br/>
        <textarea type='text' className='url' value={body} onChange={(e)=>{setBody(e.target.value);setDisp(false)}} placeholder='Message' style={{maxWidth:'21rem'}}/><br/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code <QrcodeOutlined/></Button>
        
 <div className='qrcode'> 
        <QRCode size={250} color={color} value={`sms:${number}?body=${body}`} style={{display : disp ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp ? 'inline' : 'none'}}/>
        </div>
        </center>
    </div>
  )
}
export default SmsQR;