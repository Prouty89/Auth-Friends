
import React from 'react';
import { connect } from 'react-redux';

const Card = props => {
  
  return (
    <tr>
      <th scope="row">{props.friend.id}</th>
      <td>{props.friend.name}</td>
      <td>{props.friend.age}</td>
      <td>{props.friend.email}</td>
      <td>
        <button> Edit </button>
        <button> Delete </button>
      </td>
    </tr>
  );
};

export default connect(
  null,
  {},
)(Card);