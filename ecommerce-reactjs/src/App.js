import './App.css';
import Public from './Routes/Public';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Public />
    </AuthProvider>
  );
}

export default App;
