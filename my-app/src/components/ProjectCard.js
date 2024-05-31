import { Col } from "react-bootstrap";
import React from 'react'

export default function ProjectCard  ({ title, description, imgUrl }) {
  return (
    <Col size={10} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}