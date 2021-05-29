import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Typography } from '@material-ui/core'
import CloseBtn from '../CloseBtn'

const ContactContainer = styled(motion.section)`
  position: fixed;
  overflow: hidden;
  //background-color: rgba(55, 25, 202, 0.87);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  //transform: translateX(100%);
  z-index: 200;
  margin: auto auto;
`

const ContactMe = ({ toggleModal: { setContactIsOpen, contactIsOpen } }) => {
  return (
    <ContactContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="872"
        viewBox="0 0 1630 872"

      >
        <path
          id="Subtraction_6"
          data-name="Subtraction 6"
          d="M1607,872H105a22.981,22.981,0,0,1-23-23V724a26.951,26.951,0,0,0-24-26.835A27.575,27.575,0,0,1,61,697H27A26.978,26.978,0,0,1,0,670v-1a26.977,26.977,0,0,1,27-27H82v-.018c.311.012.647.018,1,.018H96a27.031,27.031,0,0,0,27-27v-1a27.031,27.031,0,0,0-27-27H83c-.327,0-.664.006-1,.018v-.091c-.666.049-1.34.073-2,.073H54a26.976,26.976,0,0,1-27-27v-1a26.976,26.976,0,0,1,27-27h7a27.46,27.46,0,0,1-3-.165A26.951,26.951,0,0,0,82,505V249a26.953,26.953,0,0,1,24-26.835,27.488,27.488,0,0,0-3-.165h47a27.031,27.031,0,0,0,27-27v-1a27.031,27.031,0,0,0-27-27H103.1a27.416,27.416,0,0,0,2.9-.165A26.952,26.952,0,0,1,82,140V23A22.98,22.98,0,0,1,105,0H1607a22.98,22.98,0,0,1,23,23V441.2a26.952,26.952,0,0,1-23.7,26.8H1595a27.031,27.031,0,0,0-27,27v1a27.031,27.031,0,0,0,27,27h11.3a26.952,26.952,0,0,1,23.7,26.8V849a22.98,22.98,0,0,1-23,23ZM80,532h.04c.655,0,1.314.024,1.959.072V532Z"
          transform="translate(0 0)"
          fill="#1e213d"
        />
      </svg>
    </ContactContainer>
  )
}

export default ContactMe
