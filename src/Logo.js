import React from 'react'

function Logo(props) {
    const {imgurl, discrption } = props
    return (
        <div className="logo" styel >
            <img  width='65%' height='65%' src={imgurl} alt="there was supposed to be picture "></img>
            <p>{discrption}</p>
        </div>
    )

}
export default Logo;