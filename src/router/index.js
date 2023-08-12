import {createBrowserRouter} from 'react-router-dom'
import Landing from '../Pages/Landing'
import Root from '../layout/Root'
import Agent from '../Pages/Agent'
import Press from '../Pages/Press'
import Companlayout from '../layout/Companylayout'
import About from '../Pages/Company/About'
import Blog from '../Pages/Company/Blog'
import Career from '../Pages/Company/Career'
import PersonalLayout from '../layout/PersonalLayout'

const router = createBrowserRouter([{
    path: '/',
    Element: <Root/>,
    children: [
        {
            index: true,
            Element: <Landing />
        },
        {
            path:'agent',
            Element:<Agent/>
        },
        {
            path:"press",
            Element:<Press/>
        },
        {
            path: 'company',
            element: <Companlayout />,
            children:[
                {
                    path: 'about',
                    element: <About />
                },
                {
                    path: 'blog',
                    element: <Blog />
                },
                {
                    path: 'career',
                    element: <Career />
                },
            ]
        },
        {
            path: 'personal',
            element: <PersonalLayout/>,
            children:
            [
                {
                    path: 'palmpayapp',
                    element: <PalmPayApp/>
                }
            ]
        }
    ]
}])