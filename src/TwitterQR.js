import { QRCode,Button,Typography } from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function TwitterQR() {
    const[url,setUrl] = useState('');
    const[disp,setDisp] = useState(false);
    const[color,setColor] = useState('#000000');
  return (
    <div>
        <center><br/>
        <Typography.Text style={{color:'dodgerblue'}}>Paste your twitter account link or enter your twitter account ID.<br/>Empty Twitter ID redirects you to Twitter.</Typography.Text><br/>
        <input type='text' className='url' value={url} onChange={(e)=>setUrl(e.target.value)} placeholder='Twitter account ID'/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code<QrcodeOutlined/></Button>
        
 <div className='qrcode'> 
        <QRCode size={300} color={color} value={(url.includes('www.twitter.com'))? `${url}` :`www.twitter.com/${url}`} style={{display : disp ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp ? 'inline' : 'none'}}/>
        </div>
        </center>
    </div>
  )
}
export default TwitterQR;