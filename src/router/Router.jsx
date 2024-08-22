import { createBrowserRouter } from "react-router-dom"
import Error404 from "../components/pages/Error404"
import Products from "../components/pages/Products"
import App from "../components/templates/App"
import Home from "../components/pages/Home"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/Products",
                element: <Products/>
            }
        ]
    },
    
])

export default Router