import React, { Component } from 'react';

class Modal extends Component {
    render() {
      if (this.props.isOpen === false)
        return null

      // Modal background styling
      const backdropStyle = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.45)'
      }

      // Modal styling
      const modalStyle = {
        position: 'fixed',
        top: '40%',
        left: '50%',
        display: 'flex',
        flexFlow: 'column',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999'
      }

      return (
        <div className={this.props.modalContainer}>
          <div className={this.props.modalDiv} style={modalStyle}>
            {this.props.children}
          </div>
          {!this.props.noBackdrop &&
            <div className={this.props.backdropClassName} style={backdropStyle}
            onClick={e => this.close(e)}/>}
        </div>
      )
    }

    close(e) {
      e.preventDefault()
      if (this.props.onClose) {
        this.props.onClose()
      }
    }
  }

  export default Modal;
