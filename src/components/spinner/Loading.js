import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import './loading.css'


const Loading = () => {
  return (
    <div className="loading-container">
    <Spinner animation="border" variant="primary" />
    </div>
  )
}

export default Loading