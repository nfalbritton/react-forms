import React from 'react';

const AddressList = props => {
  let addressItems = props.addresses.map(address => {
    return(
      <li key={index}>
         {address.firstName} {address.lastName}
         <br />
         {address.address}
         <br />
         {address.city}, {address.stateSelected} {address.zipcode}
         <br />
         {address.phone} {address.email}
      </li>
    )
  })

  return (
    <div>
      <ul>{addressItems}</ul>
    </div>
  )
}

export default AddressList;
