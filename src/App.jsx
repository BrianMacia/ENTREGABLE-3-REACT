import './App.css';
import SearchBox from "./components/Search/SearchBox";

document.body.style = "background: #272121";


function App() {
  return (
    <>
      <div className="banner"></div>
      <div className="container">
        <h1>Rick and Morty Wiki</h1>
        <SearchBox />
      </div>
    </>
  );
}

export default App;
