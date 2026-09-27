// AI Chatbot Widget Logic (Feature 1)
document.addEventListener('DOMContentLoaded', () => {
  // Inject floating chatbot button and widget into DOM if not present
  if (!document.getElementById('aiChatContainer')) {
    const chatHtml = `
      <div id="aiChatContainer">
        <!-- Floating Toggle Button -->
        <button id="aiChatToggleBtn" title="Ask AI Scheme Assistant">
          💬 <span style="font-size: 0.85rem; font-weight: 600;">AI Chat Assistant</span>
        </button>

        <!-- Floating Chat Drawer -->
        <div id="aiChatDrawer" class="chat-drawer">
          <div class="chat-header">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.25rem;">🤖</span>
              <div>
                <strong style="font-size: 0.95rem;">AI Scheme Assistant</strong>
                <div style="font-size: 0.75rem; color: #94a3b8;">Ask anything in natural language</div>
              </div>
            </div>
            <button id="aiChatCloseBtn" class="chat-close-btn">✕</button>
          </div>

          <div id="chatMessages" class="chat-messages">
            <div class="chat-msg bot">
              👋 Hello! I am your AI Government Scheme Assistant. Ask me any question about eligibility, required documents, or application portals for Central and State schemes across India.
            </div>
          </div>

          <form id="chatForm" class="chat-input-area">
            <input type="text" id="chatInput" placeholder="Ask e.g. What documents are needed for PM-KISAN?" autocomplete="off" required>
            <button type="submit" id="chatSendBtn">Send</button>
          </form>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatHtml);
  }

  const toggleBtn = document.getElementById('aiChatToggleBtn');
  const closeBtn = document.getElementById('aiChatCloseBtn');
  const drawer = document.getElementById('aiChatDrawer');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('active');
    if (drawer.classList.contains('active')) {
      chatInput.focus();
    }
  });

  closeBtn.addEventListener('click', () => {
    drawer.classList.remove('active');
  });

  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;

    // Append user message
    appendMessage(message, 'user');
    chatInput.value = '';

    // Append typing indicator
    const loadingId = appendMessage('Thinking...', 'bot loading');

    try {
      const lang = window.i18n ? window.i18n.getLang() : 'en';
      const headers = window.Auth ? Auth.getHeaders() : { 'Content-Type': 'application/json' };

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers,
        body: JSON.stringify({ message, language: lang })
      });

      const data = await response.json();
      removeMessage(loadingId);

      if (data.success && data.reply) {
        appendMessage(data.reply, 'bot');
      } else {
        appendMessage('Sorry, I could not process your query at this moment. Please try again.', 'bot');
      }
    } catch (err) {
      removeMessage(loadingId);
      appendMessage('Connection error. Please try asking again.', 'bot');
    }
  });

  function appendMessage(text, sender) {
    const msgId = `msg-${Date.now()}`;
    const msgDiv = document.createElement('div');
    msgDiv.id = msgId;
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return msgId;
  }

  function removeMessage(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }
});
