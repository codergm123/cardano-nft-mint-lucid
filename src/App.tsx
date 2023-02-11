import "./App.css";
import React, {useState} from "react";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Snackbar } from "@mui/material";
import Alert from "@mui/lab/Alert";

const App = () => {
  const [IsMinting, setIsMinting] = useState(false);
  const [IsConnected, setIsConnected] = useState(false);
  const [lucid, setLucid] = useState(false);
  const [alertState, setAlertState] = useState({msg: "Mint fail!",open: false});

  return (
      <div className="App flex flex-col">
        <Header IsConnected = {IsConnected} setLucid = {setLucid} setIsConnected = {setIsConnected} />
        <Main IsConnected = {IsConnected} lucid = {lucid} setIsMinting = {setIsMinting} setAlertState = {setAlertState}/>
        <Footer />
        {
          IsMinting ? 
          <div className="grid justify-items-center items-center fixed w-full h-full bg-gray-900 z-50 bg-opacity-50 top-0">
            <div className="justify-self-center spinner" />
          </div>
          :
          ""
        }
        <Snackbar
          open={alertState.open}
          anchorOrigin={{ vertical:"top", horizontal:"center" }}
          autoHideDuration={ 6000 }
          onClose={() => setAlertState({ ...alertState, open: false})}
        >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false})}
            severity={"error"}
            icon={" "}
          >
            <p className="font-benji text-4xl overflow-hidden">
              {alertState.msg}
            </p>
          </Alert>
        </Snackbar>
      </div>
  );
};

export default App;
