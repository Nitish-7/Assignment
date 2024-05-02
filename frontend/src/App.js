import { Provider } from 'react-redux';
import TodoListUsingRedux from './toDoListRedux/TodoListUsingRedux'
import store from './toDoListRedux/store';
import DarkMode from './components/DarkMode';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import UserContext from './contextApi/UserContext';
import UserForm from './materialUi/UserForm';
import Header from './materialUi/HeaderFunctionalComponent';
import UserList from './materialUi/UserList';
import ApiData from './reduxThunk/ApiData';

import {Route, BrowserRouter as Router , Routes, Routr} from 'react-router-dom'
import Home from './routing/Home';
import About from './routing/About';
import Contact from './routing/Contact';
import Navbar from './routing/NavBar';

function App() {
  return (

    <Provider store={store}>
     {/* <TodoListUsingRedux/> */}
     {/* <First name="Nitish " profession="Associate Sowtware Developer"/>
    <Second/>
    <Third/>
    <Fourth/> */}
     {/* <DarkMode/> */}
     
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>

     {/* <UserContext/> */}
     {/* material UI */}
    {/* <Header/> */}
    {/* <UserForm/> */}
    {/* <UserList/> */}
     {/* <Header/>
     <UserForm/>
     <UserList/> */}
     {/* <ApiData/> */}


     </Provider>
    
  );
}

export default App;