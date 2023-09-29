//Edituser
import React, { useState } from "react";
import style from "./home.module.css"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";


const Edituser = () => {
    let [name, upName] = useState("")
    let [salary, upSalary] = useState("")
    let [company, upCompany] = useState("")



    let { abc } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${abc}`)
            .then((resp) => {
                console.log("data recived");
                upName(resp.data.name)
                upSalary(resp.data.salary)
                upCompany(resp.data.company)

            })
            .catch(() => {
                console.log("there is no data");
            })
    }, [])
    let nameData = (e) => {
        upName(e.target.value)
    }
    let salaryData = (e) => {
        upSalary(e.target.value)
    }
    let companyData = (e) => {
        upCompany(e.target.value)
    }

    let navigate = useNavigate()

    let formHandle = (e) => {
        e.preventDefault()
        let payload = { name, salary, company }
        axios.put(`http://localhost:3000/user/${abc}`, payload)
            .then(() => {
                console.log("Data Updata")
            })
            .catch(() => {
                console.log("Something Went Worng")
            })
        navigate("/users")
    }
    return (
        <div id={style.myform}>
            <form action="">
                <h1>Update The Data</h1>
                <label htmlFor="" >NAME</label>
                <input type="text" value={name} onChange={nameData} />
                <label htmlFor="">SALARY</label>
                <input type="text" value={salary} onChange={salaryData} />
                <label htmlFor="">COMPANY</label>
                <input type="text" value={company} onChange={companyData} />
                <button onClick={formHandle}>Update</button>
            </form>

        </div>
    )
}
export default Edituser