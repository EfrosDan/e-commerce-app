import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    const {title} = props;
  return (
    <p>
        <Link to="/">Home</Link>
        / {title}
    </p>
  )
}


export default BreadCrumb