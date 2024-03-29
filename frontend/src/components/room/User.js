import React from 'react'

export const User = ({username,talk}) => {
  return (
    <div className={`w-full h-auto ${talk}`}>
        <div className="flex justify-center pt-5">
            <img src="https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png" className="object-scale-down rounded-full w-[50px] h-[50px]"/>
        </div>
        <span className="text-center py-3 px-2 w-full inline-block text-white">{username}</span>
    </div>
  )
}
