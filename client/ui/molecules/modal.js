import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Litter } from '../atoms'
import { Close } from '../outlines'


export const ModalWrapper = styled.div`

  display: flex;
  min-height: 100%;
  overflow: auto;
  width: auto;
  z-index: 130;
`

export const ModalContent = styled.div`
  padding: 0 40px;
  margin: auto;
  align-items: center;
  max-width: 935px;
  width: 100%;
  color: #fff;
`
export const ModalButton = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
`

export const Modal = ({ onClose, children }) => (
  <Litter>
    <ModalWrapper>
      <ModalContent>{children}</ModalContent>
      <ModalButton onClick={onClose}>
        <Close />
      </ModalButton>
    </ModalWrapper>
  </Litter>
)

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  children: null,
  onClose: null,
}
