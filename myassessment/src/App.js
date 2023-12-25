import Display from './Components/Pro1/Display'
import Toggle from './Components/Pro2/Toggle'
import Fetching from './Components/Pro3/Fetching'
import { RouterProvider } from 'react-router-dom'
import Routing from './Components/Pro4/Routing'
import Form from './Components/Pro5/Form'
export  const App = () => {
  return (
    <>
    <Display />
    <Toggle/>
    <Fetching/>
    <RouterProvider router={Routing}/>
    <Form/>
    </>
  )
}
export default App