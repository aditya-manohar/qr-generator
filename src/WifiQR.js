import { QRCode,Button,Typography} from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function WifiQR() {
    const[ssid,setSSID] = useState('');
    const[pass,setPass] = useState('');
    const[disp,setDisp] = useState(false);
    const[color,setColor] = useState('#000000');

  return (
    <div>
        <center><br/>
        <Typography.Text>Connect to Wi-fi using QR code.</Typography.Text><br/>
        <Typography.Text style={{color:'red'}}>This QR code includes the network password and it isn't encrypted. Anyone with access to this QR code can find out this network's password.</Typography.Text><br/><br/>
        <input type='text' className='url' value={ssid} onChange={(e)=>{setSSID(e.target.value);setDisp(false)}} placeholder='Wireless SSID'/><br/>
        <input type='text' className='url' value={pass} onChange={(e)=>{setPass(e.target.value);setDisp(false)}} placeholder='Password'/><br/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code <QrcodeOutlined/></Button>
        
 <div className='qrcode'> 
        <QRCode size={250} color={color} value={`WIFI:S:${ssid};T:WPA;P:${pass};H:false;`} style={{display : disp && ssid.length>0 ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp && ssid.length>0 ? 'inline' : 'none'}}/>
        </div>
        </center>
    </div>
  )
}
export default WifiQR;