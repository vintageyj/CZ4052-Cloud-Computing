import "./App.css";
import ImageUpload from "./ImageUpload";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <p style={{ fontSize: "200%" }}>Doggle</p>
        </div>
        <ImageUpload />
      </header>
    </div>
  );
}

export default App;
