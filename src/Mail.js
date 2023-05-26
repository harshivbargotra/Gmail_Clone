import React from "react";
import "./Mail.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ErrorIcon from "@material-ui/icons/Error";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToApplication from "@material-ui/icons/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMail } from "./features/mailSlice";


function Mail() {
  const history = useNavigate();
   const choosenMail = useSelector(selectMail);
  //  console.log(choosenMail);

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={()=>history("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
        <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToApplication />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div>
          <div className="mail__bodyHeader">
          <h2>{choosenMail.payload.mail.selectedMail.subject}</h2>
          <LabelImportantIcon className="mail__important"/>
          <p>{choosenMail.payload.mail.selectedMail.title}</p>
          </div>
          <p className="mail__time">{choosenMail.payload.mail.selectedMail.time}</p>
        </div>
        <div className="mail__message">
          <p>{choosenMail.payload.mail.selectedMail.description}</p>
        </div>

      </div>
    </div>
  );
}

export default Mail;
