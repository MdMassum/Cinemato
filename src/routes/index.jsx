import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from "../pages/Explore"
import PageDetail from "../pages/PageDetail"
import Search from "../pages/Search"

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:":explore",
                element:<Explore />
            },
            {
                path:":explore/:id",
                element:<PageDetail/>
            },
            {
                path:"search",
                element:<Search />
            }

        ]
    }
])

export default router;