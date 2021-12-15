/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '../Button';

export default function FormButton ({ isLoading = false, children, ...props }) {
  return (
    <Button {...props} disabled={isLoading}>
      {
        (isLoading === true)
         ? <p type="ThreeDots" color="#fff" height={15} width={50} />
         : children
      }
    </Button>
  )
}