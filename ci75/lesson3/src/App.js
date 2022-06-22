import logo from './logo.svg';
import './App.css';
import { Header } from "./hwDay3/Header"
import { Content } from "./hwDay3/Content"

const contentArr = [
  {
    img: "https://taimeme.com/public/upload/memes/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg",
    h1: "AFRICAN SAFARI",
    i: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    p: "MORE"
  },

  {
    img : "https://taimeme.com/public/upload/memes/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg",
    h1 : "PLANNING",
    i : "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    p : "MORE"
  },

  {
    img : "https://taimeme.com/public/upload/memes/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg",
    h1 : "CITY TOURS",
    i : "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    p : "MORE"
  },

  {
    img : "https://taimeme.com/public/upload/memes/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg",
    h1 : "TREKKING",
    i : "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    p : "MORE"
  },

  {
    img : "https://taimeme.com/public/upload/memes/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg",
    h1 : "ROMANTIC TOURS",
    i : "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    p : "MORE"
  },

  {
    img : "https://taimeme.com/public/upload/memes/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg",
    h1 : "ACTIVE TOURS",
    i : "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    p : "MORE"
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <div style = {{display: "flex" , flexWrap: "wrap" , justifyContent: "space-between" , margin: "50px 50px"}}>
        {contentArr.map((item, index) => 
          <Content key = {index} img = {item.img} h1 = {item.h1} i = {item.i} p = {item.p} />
      )}
      </div>
    </div>
  );
}

export default App;
