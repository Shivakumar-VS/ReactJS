// Props = read only properties that are shared between components
//A parent component can send data to a child component.
// <component key="value" />
//PropTypes = a mechanisom that ensures that the passed value is of the correct data type

import Student from './Student.jsx';
function App() {
  return (
   <>
   <Student name ="John Doe" age={30} isStudent={true}/>
   <Student name ="John Doe" age={30} isStudent={true}/>
   <Student name ="John Doe" age={30} isStudent={true}/>
   <Student name="Jhon Doe" age={30} isStudent={false} />
    </>
  );
}

export default App
