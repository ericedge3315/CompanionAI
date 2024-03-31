import React, { useEffect } from 'react';
import './ChatPage.css';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

function ChatPage() {
    const { id } = useParams();
    const history = useHistory(); // Access history object

    useEffect(() => {
        // Force refresh when component mounts
        history.listen(() => {
        window.location.reload();
        });
    }, [history]);

    const getNameById = (id) => {
    switch (id) {
        case '1':
        return 'Olivia Rodrigo';
        case '2':
        return 'Pokimane';
        case '3':
        return 'TOP G';
        default:
        return 'Unknown Model';
    }
    };

  // Use id to determine which chat to display
  return (
    <div className="chat-container">
      <h1>Chat Page</h1>
      <p>Chat with {getNameById(id)}</p>

      <Link to="/">
        <button className="back-button">Go Back</button>
      </Link>

      <div className="video-container">
        <div className="video-stream"></div>
      </div>

      <div className="message-container">
        <input type="text" className="chat-input" placeholder="Type your message" />
        <button className="send-button">Send Message</button>
      </div>
    </div>
  );
}

export default ChatPage;
