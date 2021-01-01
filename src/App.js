import logo from './logo.svg';
import './App.css';
import './styles/flex.css'
import { Builder } from './Builder/Builder'

function App() {

  //app setup. Tunnel content through here
  return (
    <main className="flex-column-centered">
      Port Building App.

      <Builder />


    </main>
  );
}

export default App;
