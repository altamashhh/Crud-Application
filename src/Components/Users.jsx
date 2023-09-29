import React from "react";
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom";

const Users = () => {
   

    let [content, setContent] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then((resp) => {
                console.log("Got The Data");
                setContent(resp.data)
            })
            .catch(() => {
                console.log("there is no data");
            })
    }, [])

    let deleteData = (x) => {
        axios.delete(`http://localhost:3000/user/${x}`)
        window.location.assign("/users")
    }
    return (
        <div id={style.userPage}>
            {content.map((x) => {
                return (
                    <div id={style.Profile}>
                        <table>
                            <tr>
                                <th colSpan="2">USER {x.id}</th>
                            </tr>
                            <tr>
                                <td>NAME:</td>
                                <td>{x.name}</td>
                            </tr>
                            <tr>
                                <td>Salary:</td>
                                <td>{x.salary}</td>
                            </tr>
                            <tr>
                                <td>Company:</td>
                                <td>{x.company}</td>
                            </tr>
                            <tr>
                                <td><Link to={`/upd/${x.id}`}>Edit</Link></td>
                                <td><button onClick={() => { deleteData(x.id) }}>Delete</button></td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
export default Users
