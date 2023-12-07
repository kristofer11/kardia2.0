"use client"
import { useEffect } from 'react'

const MessengerChat = () => {

    useEffect(() => {
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v16.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    })

  return (
    <div className='fb-customerchat' page_id='104872501299533' attribution="biz_inbox" theme_color="#0084ff"></div>
  )
}

export default MessengerChat