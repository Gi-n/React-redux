import React from 'react'

import {Notifications} from '../layout/utils/Notifications';

const HomePage = () => {

    const ToasterType = 'info'
    const ToasterTitle = 'Success message'
    const Toasterdescription = 'lorem ipsum'

    return (
        <div>
            <h1>Welcome to home page</h1>
            <button
                onClick={() => 
                    Notifications(ToasterType,ToasterTitle,Toasterdescription)
                }
            >
                Add notification
      </button>
        </div>
    )
}


export default HomePage;