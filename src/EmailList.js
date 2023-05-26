import React, { useEffect, useState } from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import RedoIcon from "@material-ui/icons/Redo";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import { Query, collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";

function EmailList() {
  const[emails, setEmails] = useState([]);

  // const getMailsHandler = async()=>{
  //   const mailsCollection = await getDocs(collection(db,'emails'));
  //   mailsCollection.forEach((doc)=>{
  //     setEmails(`${doc.id}=> ${doc.data}`);
  //     console.log(`${doc.id}=> ${doc.data}`);
  //     return emails;
  //   });
  // }
  // useEffect(()=>{
  //   getMailsHandler();
  // },[])
  useEffect(() => {
    onSnapshot(query(collection(db, "emails"), orderBy("timestamp", "desc")),
        (snapshot => setEmails(snapshot.docs.map((elem) => ({ ...elem.data(), id: elem.id })))));
}, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsleft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#0099CC" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        {  emails.map(email => (
            <EmailRow
               id={email.id}
               key={email.id}
               title={email.to}
               subject={email.subject}
               description={email.message}
               time={new Date(email.timestamp?.seconds * 1000).toUTCString()}
            />
        ))}
        {/* <EmailRow
          
        />   <EmailRow
        title="Youtube"
        subject="Hey fellow streamer"
        description="this is a test test tes te ste ste ste ste ste ste etsees"
        time="10pm"
      /> */}
      </div>
    </div>
  );
}

export default EmailList;
