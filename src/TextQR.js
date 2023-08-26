import { QRCode,Button,Typography } from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function TextQR() {
    const[text,setText] = useState('');
    const[disp,setDisp] = useState(false);
    const[color,setColor] = useState('#000000');
  return (
    <div>
        <center><br/>
        <Typography.Text style={{color:'green'}}>Enter a text and scan the QR Code.</Typography.Text><br/><br/>
        <textarea type='text' className='url' value={text} onChange={(e)=>{setText(e.target.value);setDisp(false)}} placeholder='Enter Text...'/><br/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code <QrcodeOutlined/></Button>
        
 <div className='qrcode'> 
        <QRCode size={250} color={color} value={text} style={{display : disp ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp && text !== '' ? 'inline' : 'none'}}/>
        </div>
        </center>
    </div>
  )
}
export default TextQR;