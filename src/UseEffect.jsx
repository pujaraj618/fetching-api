// FETCHING API USING USEEFFECT IN REACTJS
// import React,{useState,useEffect } from 'react'
// const FetchApi = () => {
//     let [users,setUsers]=useState([])
//      useEffect(()=>{
//      window.fetch("https://api.github.com/users")
//     .then((data)=>data.json())
//     .then((value)=>setUsers(value))
//     .catch((err)=>console.log(err))
//     },[]);
//     return (
//     <div>
//         {users.map((user,index)=>{
//             // return <>
//             // <li>{user.login}</li>
//             // <li>{user.id}</li>
//             // </>
//          return <li key={index}>{user.login}</li>
//         })}
//     </div>
//   )
// }
// export default FetchApi

//FETCHING API USING ASYNC AWAIT

import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
const UseEffect = () => {
  let [users,setUsers]=useState([])
  useEffect(()=>{
    let fetchData=async ()=>{
      let data=await window.fetch("https://api.github.com/users")
      let payload=await data.json()
      setUsers(payload)
    }
    fetchData()
  },[]);
  return (
    <div>
      {users.map((user,index)=>{
        return <li key={index}>{user.login}</li>
      })}
    </div>
  )
}
export default UseEffect
