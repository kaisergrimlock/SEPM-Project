import React from 'react'
import { ButtonRow } from './ButtonRow'
import dashboard from '../../../assets/svg/dashboard.svg'
import teams from '../../../assets/svg/teams.svg'
import images from '../../../assets/svg/images.svg'
import invitation from '../../../assets/svg/invitation.svg'
import setting from '../../../assets/svg/setting.svg'
export const ButtonList = () => {
  return (
    <div className='leading-[50px]'>
        <ButtonRow icon={dashboard} title={"Dashboard"} path="/dashboard" />
        <ButtonRow icon={teams} title={"Teams"} path="/dashboard" />
        <ButtonRow icon={images} title={"Images"} path="/dashboard" />
        <ButtonRow icon={invitation} title={"Invitation"} path="/dashboard" />
        <ButtonRow icon={setting} title={"Setting"} path="/dashboard" />
    </div>
  )
}
