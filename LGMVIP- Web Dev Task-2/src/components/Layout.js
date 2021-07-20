import React from 'react'

export default function Layout(props) {
    return (
        <>
            <div className="col-lg-3 col-sm-6 card mx-5 my-3">
                 <div className="card-body">
                     <img className="card-img-top py-2"  src={props.avatar} alt="Card image"  />
                    <h4 className="card-title text-center"><span className="text-center p-1">{props.id}</span><span className="text-center p-1">{props.first_name}</span><span className="text-center p-1">{props.last_name}</span></h4>
                    <p className="card-text text-center">{props.email}</p>
                 </div>
            </div>

      </>
  
    )
}
