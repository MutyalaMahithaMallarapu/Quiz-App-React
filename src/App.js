import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homePage/HomePage';
import QuizPage from './components/pages/quizPage/QuizPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/quiz" element={<QuizPage />}> 
          </Route>
          </Routes>
    </Router>
  );
}

export default App;
