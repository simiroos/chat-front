import Header from '../molecules/Header/Header';
import './reset.css';
import './App.module.scss';
import ChatView from '../organisms/ChatView/ChatView';
import SendBox from '../organisms/SendBox/SendBox';

function App() {
  return (
    <div>
      <Header />
      <ChatView />
      <SendBox />
    </div>
  );
}
export default App;
