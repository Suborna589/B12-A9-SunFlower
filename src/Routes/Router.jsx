import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import PopularSkill from "../components/Header.jsx/PopularSkill/PopularSkill";

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
        path:'/skills',
        element: <PopularSkill></PopularSkill>,
        loader:()=>fetch('/skills.json'),
    }
]) 

export default router;