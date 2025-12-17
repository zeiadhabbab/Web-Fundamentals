export default function UserCard({ user }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      width: "250px",
      margin: "auto",
      marginTop: "20px",
      borderRadius: "8px",
      background: "#000000ff"
    }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: "100%", borderRadius: "6px" }}
      />
      <h3>{user.name ?? user.login}</h3>
      <p>Followers: {user.followers}</p>
      <p>Repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  );
}
