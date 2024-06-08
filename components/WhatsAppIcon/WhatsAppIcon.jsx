import React from 'react'

const WhatsAppIcon = () => {
    const WhatsAppImage = "https://websiteimagessb.s3.us-west-2.amazonaws.com/whatsapp.png"

    return (
      <a
        href="https://api.whatsapp.com/send?phone=919811736844"
        className="w-[50px] h-[50px] fixed top-[90vh] right-[10px] z-[100] contact_icon rounded-full">
  
          <img src={WhatsAppImage} alt="" className="w-full h-full" />
  
        </a>
    )
}

export default WhatsAppIcon