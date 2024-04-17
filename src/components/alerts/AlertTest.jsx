import React from 'react'
import AlertComponent from './AlertComponent'
import { useAlert } from './alertContext'

const AlertTest = () => {
    const {showSuccessAlert, showErrorAlert} = useAlert();
  return (
    <div>
        <button onClick={() => showErrorAlert("Error")}>Error Alert</button>
        <button onClick={() => showSuccessAlert("Success")}>Success Alert</button>
        <AlertComponent />
    </div>
  )
}

export default AlertTest