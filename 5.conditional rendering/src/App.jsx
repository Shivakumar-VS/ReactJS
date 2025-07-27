// Conditional rendering in React = allows you to control
//                                  in your application based on certain conditions
//                                  (show, hide, or change components)


import UserGreeting  from "./userGreeting.jsx";
function App() {
  return(
    <>
    <UserGreeting isLoggedIn={true} userName="Shivakumar" />
    </>
  );
}

export default App;
