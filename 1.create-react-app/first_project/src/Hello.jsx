function Hello(){
  
  let number = 7;
  let fullName = () =>{
    return "ShivaKumar";
  }
  return (
    <h2>Message Number {number}, This is {fullName()}</h2>
  );
}

export default Hello;