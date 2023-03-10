import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const authObject = {'Projrct-ID' : "9e32923c-ca0a-43c3-979e-e7d4e987cdc9", 'User-Name' : username, 'User-Secret' : password};
        
        try{
            // username | password => chatengine -> give messages
            axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
             // works out -> logged in
            
        } catch (error) {
            // error -> try with new username...
            setError('Oops, Incorrect credentials')
        }
        
        
        
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/> 
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting...</span>
                        </button>
                        <h2 className="error">{error}</h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;