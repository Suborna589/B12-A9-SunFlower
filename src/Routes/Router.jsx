import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";

const router = createBrowserRouter([

    {
        path:'/', 
        element:<HomeLayouts> </HomeLayouts>
    }, 
    { 

        path:'/auth',
        element:<h2>Authentication</h2>,

    }, 

    {
        path:'/skill',
        element: <h2></h2>
    }
]) 

export default router;