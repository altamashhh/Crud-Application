import React from "react";

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Createuser from "./Components/Createuser";
import Users from "./Components/Users";
import Homecrud from "./Components/Homecrud";
import Edituser from "./Components/Edituser";

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Homecrud/>
                <Routes>
                    <Route element={<Createuser/>} path="/"></Route>
                    <Route element={<Users/>} path="/users"></Route>
                    <Route element={<Edituser/>} path='/upd/:abc'></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App 