import React from 'react'
import { Link } from 'react-router-dom'
import img2  from "../web_components/Images/img2.png"
function Card(props) {
  return (
    <>
     <div className='col-md-4 col-10 mx-auto'>
            <div className="card" >
                <h2>{props.id}</h2>
  <img src={props.imgsrc} className="card-img-top" alt="..." />
  <div className="card-body text-center">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text text-center" >
      {props.brief}
    </p>
    <Link to={props.link} className="btn btn-primary text-center">
      Git Repository
    </Link>
  </div>
</div>
            </div>
    </>
  )
}

export default Card