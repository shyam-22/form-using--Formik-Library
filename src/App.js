import React, { Component } from "react"
import './App.css';
import Form from "./COMPONENTs/form";

class App extends Component {
  render(){
    return (
      <div className="App">
          <div className="container">

              <div className="col-md-8">
                <h2>Using Formik Library</h2>
                <Form/>
              </div>
            </div>
      </div>
    );
  }
}

export default App;
//forms are a vital part of any business application
//we use forms -->To register,Login,Logout,submit a request,palce an order,scheule appointment and countless other task 
   //As a developer we need to handle
   //Handle Form Data
   //Validate data
   //visual feedback with error messages
   //And offcource form_submission

//what is formik------> Formik is a small library that help us to deal with form in React  and React Native
//why formik----->formik help us in 3 parts --->form validation and show error message,Managing Data,form_submission  
