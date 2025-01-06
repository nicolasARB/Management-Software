import logo from './logo.svg';
import './App.css';
import './sobre.css';
import './statistics.css';
import './edit.css';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Customers from './components/Customers'
import Stock from './components/Stock'
import Document from './components/Document';
import Edit from './components/Edit'
import Statistics from './components/Statistics';
import Database from './components/Databases';
import { CustomerProvider } from "./components/CustomerProvider";
function App() {
  const documentroute = window.location.pathname === '/document';
  console.log(documentroute);
  console.log(window.location.pathname);
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return (
      <BrowserRouter>
        <Database />
        {!documentroute && <Navbar />}
        <CustomerProvider>
        <Routes>
          <Route exact path="/" element={<Customers />} />
          <Route exact path="/Stock" element={<Stock />} />
          <Route exact path="/document" element={<Document />} />
          <Route exact path="/edit" element={<Edit />} />
          <Route exact path="/Stats" element={<Statistics />} />
        </Routes>
        </CustomerProvider>
      </BrowserRouter>)
  } else {
    return (
      <HashRouter>
        <Database />
        {!documentroute && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Customers />} />
          <Route exact path="/Stock" element={<Stock />} />
          <Route exact path="/document" element={<Document />} />
          <Route exact path="/edit" element={<Edit />} />
          <Route exact path="/Stats" element={<Statistics />} />
        </Routes>
      </HashRouter>)
  }
}

export default App;


/*
return (
  <BrowserRouter basename={window.location.pathname}>
    <Database />
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Customers />} />
      <Route exact path="/Stock" element={<Stock />} />
      <Route exact path="/document" element={<Document />} />
    </Routes>
  </BrowserRouter>
);*/
