import React, { Children } from 'react'
import Chilldren_Comp from './Chilldren_Comp'

export default function Parent_Comp() {
    const userName = "Nguyen Van A"
    const age = 22;
  return (
    <div>
          <h1>UserName của ParentComponent:{userName}</h1>
          <Chilldren_Comp userName={userName}  age ={age} />
    </div>
  )
}
