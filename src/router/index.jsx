import { createBrowserRouter } from "react-router-dom";
import React from 'react'
import About from "../pages/About";
import Index from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic";
import ApiGet, { GetData } from "../pages/ApiGet";
import ApiFind, { FindData } from "../pages/ApiFind";
import LayoutPrivate from "../layouts/LayoutPrivate";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<LayoutPublic />,
        errorElement:<NotFound/>,
        children:[
            {
                index:true,
                element:<Index />,
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/",
                element:<LayoutPrivate />,
                children:[
                    {
                        index:true,
                        element:<Index/>
                    },
                    {
                        path:"/apiGet",
                        element:<ApiGet/>,
                        loader:GetData
                    },
                    {
                        path:"/apiGet/:id",
                        element:<ApiFind />,
                        loader: FindData
                    }
                ]
            }
        ]
    },
    
])
