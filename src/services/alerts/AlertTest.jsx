import React from 'react'
import AlertComponent from './AlertComponent'
import { useAlert } from './AlertContext'

const AlertTest = () => {
  const { showSuccessAlert, showErrorAlert } = useAlert();
  return (
    <div className='alert-test'>
      <button onClick={() => showErrorAlert("Error Message")}>Error Alert</button>
      <button onClick={() => showSuccessAlert("Success Message")}>Success Alert</button>
      <AlertComponent />
    </div>
  )
}

export default AlertTest