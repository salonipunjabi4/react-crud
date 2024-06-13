import "./App.css";
import Hello from "./component/Hello";
import Message from "./component/Message";

import Greet from "./component/Greet";
import NameList from "./component/NameList";
import Counter from "./component/Counter";
import EventBinding from "./component/EventBinding";
import ParentComponent from "./component/ParentComponent";
import LifeCycle1 from "./component/LifeCycle1";
import UnMount from "./component/UnMount";
import ErrorBoundary from "./component/ErrorBoundary";
import Hero from "./component/Hero";
import HoverCounter from "./component/HoverCounter";
import ClickCounter from "./component/ClickCounter";
import HooksCounter from "./Hooks/HooksCounter";
import HookCounterTwo from "./component/HookCounterTwo";
import HookCounterThree from "./component/HookCounterThree";
import ClassCounterOne from "./component/ClassCounterOne";
import HookCounterOne from "./component/HookCounterOne";
import DataFetching from "./component/DataFetching";
import Navbar from "./component/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Customer from "./APIcall/Customer";
import User from "./APIcall/User";
import UpdateUser from "./service/UpdateUser";

function App() {
  return (
    <div className="App">
      {/* <Message message="Welcome to React" />
      <Hello /> */}
      {/* <Greet name="ABC" heroName="XYZ">
        <p>This is children props</p>
      </Greet> */}

      {/* <NameList></NameList> */}

      {/* <Counter></Counter> */}
      {/* <EventBinding></EventBinding> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <LifeCycle1 name="Allen"></LifeCycle1> */}

      {/* <UnMount></UnMount> */}
      {/* <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <HoverCounter></HoverCounter>
      <ClickCounter></ClickCounter> */}
      {/* <HooksCounter></HooksCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <HookCounterOne></HookCounterOne> */}
      {/* <DataFetching></DataFetching> */}
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HookCounterOne />} />
        <Route exact path="/hover" element={<HoverCounter />} />
        <Route
          exact
          path="/error"
          element={<ErrorBoundary heroName="Spiderman" />}
        />
        <Route exact path="/hello" element={<Hello />} />
        <Route exact path="/eventb" element={<EventBinding />} />
        <Route exact path="/dataf" element={<DataFetching />} />
        <Route exact path="/customer" element={<Customer />} />
        <Route exact path="/user" element={<User />} />
        {/* <Route exact path="/users" element={<User />} />
        <Route exact path="/updateCustomer/:userId" component={UpdateUser} /> */}
      </Routes>
    </div>
  );
}

export default App;
