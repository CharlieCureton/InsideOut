import React from 'react';

function Chat(props) {
    return (
        <div className="chat-wrapper home-subpage hidden" id="chat-page">
            <div className={"chat-header " + props.bgColor}>
                <h1>LGBTQIA+ Society</h1>
                <p>Please be nice and use chat responsibly.</p>
            </div>
            <h1>Chat</h1>
        </div>
    );
}

export default Chat;