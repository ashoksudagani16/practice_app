import './App.css';
// import Counter from "./components/counter"
// import { Application } from './components/application';
// import Skills from "./components/skills"
// import UsersList from "./components/usersList"
// import UserProfile from "./components/userProfile"
// import Users from "./components/users"
import DummyUsers from "./pages/DummyUsersPage/DummyUsersPage"

function App() {
  return (
    <div className="App">
      <DummyUsers />
      {/* <Users /> */}
        {/* <Counter /> */}
        {/* <Application />
        <Skills skills={["Javascript, reactjs, Html"]}/> */}
        {/* <UserProfile /> */}
    </div>
  );
}

export default App;
