import './categories.styles.scss'
import Home from './routs/home/home.component';
import {Routes, Route, Outlet} from 'react-router-dom'
import Navigation from './routs/navigation/navigation.component';
import Authentication from './routs/authentication/authentication.component';

const Shop = ()=>{
  return <h1>I am the shop page</h1>
}

const App = () => {
return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path='shop' element={<Shop />}/>
      <Route path='auth' element={<Authentication />}/>
    </Route>
  </Routes>
)
}

export default App;
