import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAlbum = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/albums").then(
        (response)=>{
          console.log(response.data)
          changeData(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {
                            data.map(
                                (value,index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
                                    <img src="https://img.freepik.com/free-photo/beautiful-woman-long-red-dress-walks-around-city-with-her-husband_1157-13373.jpg?t=st=1717805313~exp=1717808913~hmac=6f3e1fcc6751a20b48b0af1ff2663439a5b628396c635447b04d82bcfbe3d2eb&w=1060" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                    <h5 class="card-title">USERID:{value.userId}</h5>
                                    <p class="card-text">ID:{value.id}</p>
                                    <p class="card-text">{value.title}</p>
                                    </div>
                                    </div>
                                    </div>
                                }
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
  )
}

export default ViewAlbum