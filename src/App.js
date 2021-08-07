import './App.css';
import Product from './Components/Product';
import Products from './Components/Products';
import CheckoutPage from './Components/CheckoutPage';
import CheckoutCard from './Components/CheckoutCard';
import Navbar from './Components/Navbar';
import {Switch,BrowserRouter as Router,Route} from "react-router-dom";
import SignIn from './Components/Signin';
import SignUp from './Components/Signup';
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import Checkout from './Components/CheckoutForm/Checkout';


function App() {
 
  const [{user}, dispatch] = useStateValue();
  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])



  return (

    <Router>
     <div className="App">
     <Navbar/>
     <Switch>
      <Route path="/signup">
           <SignUp/>
      </Route> 
      <Route path="/signin">
           <SignIn/>
      </Route> 
      <Route path="/checkout-page">
           <CheckoutPage/>
      </Route>
      <Route path="/checkout">
           <Checkout/>
      </Route>  
      <Route path="/">
           <Products/>
      </Route> 
     </Switch> 
    </div>
    </Router>
   
  );
}

export default App;
