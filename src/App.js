import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import { Switch } from "@material-ui/core";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import EmailList from "./EmailList";
import Mail from "./Mail";
import SendMail from "./SendMail";
import {useSelector} from 'react-redux'
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { userSelected } from "./features/userSlice";
// import Login from "./Login";

// import history from "./history";

function App() {
 const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
//  const user = useSelector(userSelected);
  return (
    <Router >
      {/* {!user ? (
        <Login/>
      ):( */}
      <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Routes>
      <Route path="/" element={<EmailList />} />
      <Route path="/mail" element={<Mail />} />
    </Routes>
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
    {/* )} */}
      
    </Router>
  );
}

export default App;
