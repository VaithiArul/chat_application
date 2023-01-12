import {ChatEngine} from 'react-chat-engine'

import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    

    return (
        <ChatEngine
        height="100vh"
        projectID="9e32923c-ca0a-43c3-979e-e7d4e987cdc9"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
        />
    )
};

export default App; 
