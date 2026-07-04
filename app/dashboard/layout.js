export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <aside
        style={{
          width: "200px",
          background: "#ddd",
          padding: "20px",
        }}
      >
        <h2>Dashboard</h2>

        <p>🏠 Home</p>
        <p>👤 Profile</p>
        <p>⚙ Settings</p>
      </aside>

      <main
        style={{
          padding: "20px",
          flex: 1,
        }}
      >
        {children}
      </main>
    </div>
  );
}