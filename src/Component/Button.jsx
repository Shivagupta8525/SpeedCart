import React from 'react'

function Button(props ){

    return(
        <button 
        {...props} className="bg-orange-600 text-white rounded py-2 px-6"> 
</button>
    )
}
export default Button;