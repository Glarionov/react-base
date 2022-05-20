import './App.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import 'bootstrap/dist/css/bootstrap.min.css';

import AlertTemplate from 'react-alert-template-basic'
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

const alertOptions = {
  position: positions.MIDDLE,
  transition: transitions.SCALE,
}

function App() {
  return (
      <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Header />
          <Body />
      </AlertProvider>
  );
}

export default App;
