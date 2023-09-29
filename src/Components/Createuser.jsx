//Createuser
import React, { useState } from "react";
import style from "./home.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Createuser=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let goto=useNavigate()

    let namedata=(e)=>{
        setName(e.target.value)
    }

    let salarydata=(e)=>{
        setSalary(e.target.value)
    }

    let companydata=(e)=>{
        setCompany(e.target.value)
    }

    let formhandler=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.post("http://localhost:3000/user",payload)
        .then(()=>{
            console.log("DATA HAS BEEN ADDED")
        })
        .catch(()=>{
            console.log("SOME WENT WORNG")
        })
        goto("./users")
    }
    
    return(
        <div id={style.myform}>
            <form action="">
                <label htmlFor="" >NAME</label>
                <input type="text" value={name} onChange={namedata}/>
                <label htmlFor="">SALARY</label>
                <input type="text" value={salary} onChange={salarydata}/>
                <label htmlFor="">COMPANY</label>
                <input type="text" value={company} onChange={companydata}/>
                <button onClick={formhandler}>Submit</button>
            </form>

        </div>
    )
}
export default Createuser
