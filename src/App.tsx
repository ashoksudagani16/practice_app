import './App.css';
// import Counter from "./components/counter"
import { Application } from './components/application';
import Skills from "./components/skills"
import Users from "./components/users"

function App() {
  return (
    <div className="App">
      <Users />
        {/* <Counter /> */}
        {/* <Application />
        <Skills skills={["Javascript, reactjs, Html"]}/> */}
    </div>
  );
}

export default App;
