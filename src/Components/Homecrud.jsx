//Homecrud
import React from "react";
import style from "./home.module.css"
import { Link } from "react-router-dom";
const Homecrud=()=>{
    return(
        <section id={style.nav}>
             <Link to="/">Create-User</Link>
            <Link to="/users">Users</Link> 
         </section>
    )
}
export default Homecrud