import Header from '../molecules/Header/Header';
import './reset.css';
import './App.module.scss';
import ChatView from '../organisms/ChatView/ChatView';

function App() {
  return (
    <div>
      <Header />
      <ChatView />
    </div>
  );
}
export default App;
