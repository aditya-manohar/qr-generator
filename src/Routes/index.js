import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../Home';
import UrlQR from '../UrlQR';
import EmailQR from '../EmailQR';
import PhoneQR from '../PhoneQR';
import InstaQR from '../InstaQR';
import TextQR from '../TextQR';
import YoutubeQR from '../YoutubeQR';
import TwitterQR from '../TwitterQR';
import LocationQR from '../LocationQR';
import WifiQR from '../WifiQR';
import FacebookQR from '../FacebookQR';
import WhatsappQR from '../WhatsappQR';
import SmsQR from '../SmsQR';
import PhonepeQR from '../PhonepeQR';

export default function AppRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<UrlQR/>}></Route>
        <Route path='/qr-generator' element={<Home/>}></Route>
        <Route path='/text' element={<TextQR/>}></Route>
        <Route path='/email' element={<EmailQR/>}></Route>
        <Route path='/phone' element={<PhoneQR/>}></Route>
        <Route path='/sms' element={<SmsQR/>}></Route>
        <Route path='/whatsapp' element={<WhatsappQR/>}></Route>
        <Route path='/facebook' element={<FacebookQR/>}></Route>
        <Route path='/instagram' element={<InstaQR/>}></Route>
        <Route path='/twitter' element={<TwitterQR/>}></Route>
        <Route path='/youtube' element={<YoutubeQR/>}></Route>
        <Route path='/location' element={<LocationQR/>}></Route>
        <Route path='/wifi' element={<WifiQR/>}></Route>
        <Route path='/upi' element={<PhonepeQR/>}></Route>
    </Routes>
    </>
  )
}
