import { useState, useRef, useEffect } from "react";
import "./chat.css";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentChatId, setCurrentChatId] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Send message to Laravel API
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { text: input, sender: "user", timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);

    // Save to history if first message
    if (messages.length === 0) {
      const newChat = {
        id: Date.now(),
        title: input.substring(0, 30) + (input.length > 30 ? "..." : ""),
        messages: [userMsg],
      };
      setHistory((prev) => [newChat, ...prev]);
      setCurrentChatId(newChat.id);
    }

    const userQuestion = input;
    setInput("");
    setIsLoading(true);

    try {
      // Laravel API call
      const response = await fetch("http://localhost:8000/api/askAi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: userQuestion,
        }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      const fullResponse =
        data.answer || data.response || "Sorry, I couldn't get a response.";

      // Add empty bot message that will be filled gradually
      const botMsgId = Date.now();
      setMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          text: "",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);

      setIsLoading(false);

      // Typing effect - add characters one by one
      let currentIndex = 0;
      const typingSpeed = 20; // milliseconds per character (faster = lower number)

      const typingInterval = setInterval(() => {
        if (currentIndex < fullResponse.length) {
          const nextChar = fullResponse[currentIndex];

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMsgId ? { ...msg, text: msg.text + nextChar } : msg,
            ),
          );

          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);

      // Error message
      const errorMsg = {
        text: "⚠️ Sorry, there was an error connecting to the AI. Please make sure the Laravel API is running at http://localhost:8000",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Start new chat
  const startNewChat = () => {
    setMessages([]);
    setCurrentChatId(null);
    setActiveMenu(null);
  };

  // Load chat from history
  const loadChat = (chat) => {
    setMessages(chat.messages);
    setCurrentChatId(chat.id);
    setActiveMenu(null);
  };

  // Delete one chat
  const deleteChat = (chatId) => {
    setHistory((prev) => prev.filter((chat) => chat.id !== chatId));
    if (currentChatId === chatId) {
      setMessages([]);
      setCurrentChatId(null);
    }
    setActiveMenu(null);
  };

  // Clear all history
  const clearAllHistory = () => {
    if (window.confirm("Are you sure you want to delete all chat history?")) {
      setHistory([]);
      setMessages([]);
      setCurrentChatId(null);
    }
  };

  return (
    <div className="chat-app">
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>💬 Chat History</h2>
          <button
            className="clear-all-btn"
            onClick={clearAllHistory}
            title="Clear all"
          >
            🗑️
          </button>
        </div>

        <button className="new-chat-btn" onClick={startNewChat}>
          <span className="plus-icon">+</span>
          New Chat
        </button>

        <div className="history-list">
          {history.length === 0 ? (
            <div className="empty-history">
              <p>No chat history yet</p>
              <span>Start a new conversation!</span>
            </div>
          ) : (
            history.map((chat) => (
              <div
                key={chat.id}
                className={`history-item ${currentChatId === chat.id ? "active" : ""}`}
                onClick={() => loadChat(chat)}
              >
                <div className="history-content">
                  <span className="chat-icon">💬</span>
                  <span className="chat-title">{chat.title}</span>
                </div>

                <div className="menu-wrapper">
                  <button
                    className="menu-dots"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenu(activeMenu === chat.id ? null : chat.id);
                    }}
                  >
                    ⋮
                  </button>

                  {activeMenu === chat.id && (
                    <div className="dropdown-menu">
                      <div
                        className="menu-item delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteChat(chat.id);
                        }}
                      >
                        🗑️ Delete
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="sidebar-footer">
          <div className="api-status">
            <span className="status-dot"></span>
            <span>AI Ready</span>
          </div>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="chat-container">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="header-info">
            <h1>🤖 AI Learning Assistant</h1>
            <p>
              Powered by AI - Ask me anything about programming, AI, or courses!
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="chat-box">
          {messages.length === 0 ? (
            <div className="welcome-screen">
              <div className="welcome-icon">🤖</div>
              <h2>Welcome to AI Assistant!</h2>
              <p>Ask me anything and I'll help you learn</p>

              <div className="example-questions">
                <h3>Try asking:</h3>
                <div className="examples-grid">
                  <button
                    className="example-btn"
                    onClick={() => setInput("What is Machine Learning?")}
                  >
                    What is Machine Learning?
                  </button>
                  <button
                    className="example-btn"
                    onClick={() => setInput("Explain React hooks")}
                  >
                    Explain React hooks
                  </button>
                  <button
                    className="example-btn"
                    onClick={() => setInput("How to learn AI?")}
                  >
                    How to learn AI?
                  </button>
                  <button
                    className="example-btn"
                    onClick={() =>
                      setInput("Best programming languages in 2024")
                    }
                  >
                    Best programming languages
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.sender}`}>
                  <div className="message-avatar">
                    {msg.sender === "user" ? "👤" : "🤖"}
                  </div>
                  <div className="message-content">
                    <div className="message-text">{msg.text}</div>
                    <div className="message-time">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="message bot">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="input-area">
          <div className="input-wrapper">
            <textarea
              className="chat-input"
              placeholder="Type your message... (Press Enter to send)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows="1"
              disabled={isLoading}
            />
            <button
              className="send-btn"
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? "⏳" : "↑"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
