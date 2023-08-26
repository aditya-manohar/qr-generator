import React from 'react'
import {Menu,Typography} from 'antd';
import {InstagramOutlined , TwitterOutlined , YoutubeFilled , PhoneOutlined , FileTextOutlined , LinkOutlined ,MessageOutlined , FacebookFilled , WifiOutlined, MailOutlined, EnvironmentOutlined, WhatsAppOutlined , MoneyCollectOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function AppHeader() {

    const navigate = useNavigate();

    const onMenuClick=(menu)=>{
            navigate(`/${menu.key}`)
    }

  return (
    <>
       <center>

        <Menu mode='horizontal' onClick={onMenuClick} className='header'
        
        items={ [

            {
                label : 'URL',
                key : '',
                icon : <LinkOutlined/>
            },
            {
                label:'Text',
                key : 'text',
                icon : <FileTextOutlined/>
            },
            {
                label : 'Phone',
                key : 'phone',
                icon : <PhoneOutlined/>
            },
            {
                label : 'E-mail',
                key : 'email',
                icon : <MailOutlined/>
            },
            {
                label : 'SMS',
                key : 'sms',
                icon : <MessageOutlined/>
            },
            {
                label : 'Whatsapp',
                key : 'whatsapp',
                icon : <WhatsAppOutlined/>
            },
            {
                label : 'Facebook',
                key : 'facebook',
                icon : <FacebookFilled/>
            },
            {
                label : 'Instagram',
                key : 'instagram',
                icon : <InstagramOutlined/>
            },
            {
                label : 'Twitter',
                key : 'twitter',
                icon : <TwitterOutlined/>
            },
            {
                label : 'Youtube',
                key : 'youtube',
                icon : <YoutubeFilled/>
            },
            {
                label : 'LOCATION',
                key : 'location',
                icon : <EnvironmentOutlined/>
            },
            {
                label : 'WIFI',
                key : 'wifi',
                icon : <WifiOutlined/>
            },
            {
                label : 'UPI Payment',
                key : 'upi',
                icon : <MoneyCollectOutlined/>
            } 
        ]}
        />
        </center>
    </>
  )
}
