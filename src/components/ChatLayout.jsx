import { Outlet } from 'react-router-dom';

function ChatLayout() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Left Sidebar (Chat) */}
      <div style={{ width: '30%', borderRight: '1px solid #ccc' }}>
        <ChatSidebar />  {/* Your original Chat component */}
      </div>

      {/* Right Content Area (ChatMain) */}
      <div style={{ width: '70%' }}>
        <Outlet />  {/* Renders either ChatMain or other nested routes */}
      </div>
    </div>
  );
}

export default ChatLayout;