
import './App.css';
import Content from './Components/Content';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="dasboard">
      <SideBar/>
      <div className="dashboard-content">
        <Content/>
      </div>
    </div>
  );
}

export default App;
