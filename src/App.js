import './App.css';
import Router from './Router';
import { EmployeeProvider } from './Context'

function App() {
  return (
    <div className="App">
      <EmployeeProvider>
        <Router />
      </EmployeeProvider>
    </div>
  );
}

export default App;
