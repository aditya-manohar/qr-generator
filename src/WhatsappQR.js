import { QRCode,Button,Typography } from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function WhatsappQR() {
    const[number,setNumber] = useState('');
    const[body,setBody] = useState('');
    const[disp,setDisp] = useState(false);
    const[color,setColor] = useState('#000000');
  return (
    <div>
        <center><br/><br/>
        <Typography.Text style={{color:'red'}}>Enter the mobile number with country code.</Typography.Text><br/>
        <input type='tel' className='url' value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Enter mobile number with country code'/><br/>
        <textarea type='text' className='url' value={body} onChange={(e)=>setBody(e.target.value)} placeholder='Message' style={{maxWidth:'21rem'}}/><br/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code <QrcodeOutlined/></Button>
        
 <div className='qrcode'> 
        <QRCode size={250} color={color} value={`https://wa.me/${number}/?text=${body}`} style={{display : disp && number.length > 6 ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp && number.length > 6 ? 'inline' : 'none'}}/>
        </div>
        </center>
    </div>
  )
}
export default WhatsappQR;