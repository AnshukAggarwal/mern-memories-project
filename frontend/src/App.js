import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Memories from "./components/Memories/Memories";
import EditMemory from "./components/EditMemory/EditMemory";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/memories" component={Memories} exact />
          <Route path="/memories/edit/:id" component={EditMemory} />
        </Switch>
      </main>
    </>
  );
}

export default App;
