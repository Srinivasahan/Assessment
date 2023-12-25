import { createBrowserRouter } from "react-router-dom";
import Home from './Home'
import About from "./About";
const Routing=createBrowserRouter([
    {path:"/",element:<Home/>},{path:"/About",element:<About/>}
])
export default Routing;