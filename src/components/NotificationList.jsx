import React from 'react'
import { useSelector } from 'react-redux'

export const NotificationList = () => {

    const notificationState = useSelector((state)=>state.notification.notifications)
    console.log(notificationState)
  return (
    <div style={{textAlign:"center"}}>
        <h1>NOTIFICATION LIST</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>TEXT</th>
                    <th>CAT</th>
                </tr>
            </thead>
            <tbody>
                {
                    notificationState?.map((noti)=>{
                        return<tr>
                            <td>{noti?.text}</td>
                            <td>{noti?.cat}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
