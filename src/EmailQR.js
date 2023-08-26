import { QRCode,Button,Typography } from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function YoutubeQR() {
    const[address,setAddress] = useState('');
    const[sub,setSub] = useState('');
    const[body,setBody] = useState('');
    const[disp,setDisp] = useState(false);
    const[color,setColor] = useState('#000000');
  return (
    <div>
        <center><br/><br/>
        <Typography.Text style={{color:'dodgerblue'}}>Enter the Mail address, subject and body of the mail and scan the QR code.</Typography.Text><br/>
        <input type='text' className='url' value={address} onChange={(e)=>{setAddress(e.target.value);setDisp(false)}} placeholder='Enter mail address'/><br/>
        <input type='text' className='url' value={sub} onChange={(e)=>{setSub(e.target.value);setDisp(false)}} placeholder='Subject'/><br/>
        <textarea type='text' className='url' value={body} onChange={(e)=>{setBody(e.target.value);setDisp(false)}} placeholder='Body' style={{maxWidth:'21rem'}}/><br/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code <QrcodeOutlined/></Button>
        
 <div className='qrcode'> 
        <QRCode size={250} color={color} value={`mailto:${address}?subject=${sub}&body=${body}`} style={{display : disp && address.includes('@gmail.com') ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp && address.includes('@gmail.com') ? 'inline' : 'none'}}/>
        </div>
        </center>
    </div>
  )
}
export default YoutubeQR;