import React from 'react'

export default function Chilldren_Comp(props) {
    console.log("tham so cua Chilldren", props.userName);
    console.log("tham so cua Chilldren", props.age);
  return (
      <div>UserName của children: {props.userName}</div>
  )
}
