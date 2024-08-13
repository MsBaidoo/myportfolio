import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/rootlayout"
import Hero from "./pages/landingpage/components/hero"
import About from "./pages/landingpage/components/about"
import Resume from "./pages/landingpage/components/resume"
import Contact from "./pages/landingpage/components/contact"
import LandingPage from "./pages/landingpage"



function App() {
  const router = createBrowserRouter([

    {
    path : "/",
    element: <RootLayout/>,
    children: [

      {
        index: true,
        element: <LandingPage/>
      },

      {
        path: "home",
        element: <Hero/>
      },
      {
        path: "about",
        element: <About/>
      },

      {
        path: "resume",
        element: <Resume/>
      },

      {
        path: "contact",
        element: <Contact/>
      }
    ]
    }



  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
