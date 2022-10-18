import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Memories from "./components/Memories/Memories";
import EditMemory from "./components/EditMemory/EditMemory";
import AddMemory from "./components/AddMemory/AddMemory";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/memories" />
          </Route>
          <Route path="/memories" component={Memories} exact />
          <Route path="/memories/edit/:id" component={EditMemory} />
          <Route path="/memories/add" component={AddMemory} />
        </Switch>
      </main>
    </>
  );
}

export default App;
