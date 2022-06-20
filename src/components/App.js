import '../App.css';
import { Navbar, name } from './Navbar';
import List from './List';
const App = () => {
  const number1 = 10;
  const number2 = 5;
  const result = number1 + number2;

  let color = '';

  let finalResult = '';
  if (result > 20) {
    finalResult = 'result is greater than 20';
    color = 'red';
  } else {
    finalResult = 'result is less than 20';
    color = 'green';
  }

  const names = ['John', 'Jane', 'Mary', 'Bob', 'Tom'];

  const nameList = names.map((name) => <li>{name}</li>);

  return (
    <div className='App'>
      <h1 className={color}>Hey from react</h1>
      <ol>{nameList}</ol>
    </div>
  );
};

export default App;
