import { QRCode,Button ,Typography} from 'antd'
import React, { useState } from 'react'
import { QrcodeOutlined } from '@ant-design/icons';
import './App.css';

function PhonepeQR() {
    const[number,setNumber] = useState('');
    const[amount,setAmount] = useState('');
    const[disp,setDisp] = useState(false);
    const[color,setColor] = useState('#000000');
  return (
    <div className='payment'>
        <center><br/>
        <Typography.Text style={{color:'green'}}>Enter the UPI ID and the amount to be transferred to initialize UPI payment.</Typography.Text><br/>
        <input type='text' className='pay' value={number} onChange={(e)=>{setNumber(e.target.value);setDisp(false)}} placeholder='UPI ID'/><br/>
        <input type='number' className='pay' value={amount} min={1} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Amount' style={{maxWidth:'21rem'}}/><br/>
        <Button onClick={()=>{setDisp(true)}}>Generate QR Code <QrcodeOutlined/></Button>
        
 <div className='qrcode'> 
        <QRCode size={250} color={color} value={`https://pay.upilink.in/pay/${number}?am=${amount}`} style={{display : disp && number.length >=10 ? 'block' : 'none'}}/>
        <input type='color' onChange={(e)=> setColor(e.target.value)} style={{display : disp && number.length >= 10 ? 'inline' : 'none'}}/>
        </div>
        </center>
    </div>
  )
}
export default PhonepeQR;