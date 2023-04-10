import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layouts } from './Layout/Layouts';
import { About } from './components/About';
import { Home } from './components/Home';
import { Helplayout } from './Layout/Helplayout';
import { Faq } from './components/Faq';
import { Notfound } from './components/Notfound';
import {Careerlayout } from './Layout/Careerlayout';
import {  careersLoader } from './components/career/Career';
import { Contact, submit } from './components/Contact';
import Careers from './components/career/Career';
import { careerdetails, Careerdetails } from './components/career/careerdetails';
import { Careererror } from './components/career/careererror';
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts/>}>
           <Route index element={<Home/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="help" element={<Helplayout/>}>
            <Route path="faq" element={<Faq/>}/>
            <Route path="contact" element={<Contact/>} action={submit}/>
           </Route>
           <Route path='careers' element={<Careerlayout/>} errorElement={<Careererror/>}>
             <Route index element={<Careers/>} loader={careersLoader} />
             <Route path=':id' element={<Careerdetails/>} loader={careerdetails} />
           </Route>
           <Route path='*' element={<Notfound/>}/>
    </Route>
  )
)

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
