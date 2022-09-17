
import './App.css';
import {Router} from './router/Router';
import { QuestionsProvider} from './context/Questions';

function App() {
  return (
    <div className="App">
      <QuestionsProvider>
      <Router/>
       </QuestionsProvider>
    
    </div>
  );
}

export default App;
