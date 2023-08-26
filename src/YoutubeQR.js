import { QRCode,Button,Typography } from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function YoutubeQR() {
    const[url,setUrl] = useState('');
    const[disp,setDisp] = useState(false);
    const[color,setColor] = useState('#000000');

  return (
    <div>
        <center><br/>
        <Typography.Text style={{color:'red'}}>Paste a youtube link or search for youtube results.<br/>Empty search redirects to Youtube.</Typography.Text><br/>
        <input type='text' className='url' value={url} onChange={(e)=>{setUrl(e.target.value);setDisp(false)}} placeholder='Search for youtube results...'/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code <QrcodeOutlined/></Button>
        
  <div className='qrcode'> 
       <QRCode id='qrcode' size={300} color={color} value={ (url.includes('www.youtube.com')) ? `${url}` : `www.youtube.com/results?search_query=${url.split(' ').join('+')}`} style={{display : disp ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp ? 'inline' : 'none'}}/><br/>
        </div>
        </center>
    </div>
  )
}
export default YoutubeQR;