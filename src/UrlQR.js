import { QRCode,Button,Typography } from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function TextQR() {
    const[url,setUrl] = useState('');
    const[disp,setDisp] = useState(false);
    const[color,setColor] = useState('#000000');
  return (
    <div>
        <center><br/>
        <Typography.Text style={{color:'green'}}>Enter URL link and scan the QR Code.<br/>The QR code redirects you to the URL in your browser.</Typography.Text><br/><br/>
        <input type='text' className='url' value={url} onChange={(e)=>setUrl(e.target.value)} placeholder='Enter URL Link...'/><br/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code <QrcodeOutlined/></Button>
        
 <div className='qrcode'> 
        <QRCode size={250} color={color} value={url} style={{display : disp ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp && url != '' ? 'inline' : 'none'}}/>
        </div>
        </center>
    </div>
  )
}
export default TextQR;