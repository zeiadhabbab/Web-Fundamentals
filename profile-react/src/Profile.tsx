"use server";

import type { ReactNode } from "react";
import type { GithubUser } from "./types";

/**
 * Clean JSX function:
 * Decides what UI to show based on the state.
 */
type ProfileProps = {
  loading: boolean;
  error: string;
  profileData: GithubUser | null;
};

export function Profile({
  loading,
  error,
  profileData,
}: ProfileProps): ReactNode {
  if (loading) return <p>Loading...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!profileData) return <p>Enter a GitHub username to see the profile.</p>;

  return (
    <div className="profile-card-inner">
      <img
        className="avatar"
        src={profileData.avatar_url}
        alt={profileData.name || profileData.login}
      />

      <p>Name: {profileData.name || profileData.login}</p>

      {profileData.bio && <p>Bio: {profileData.bio}</p>}
      {profileData.location && <p>Location 🌎: {profileData.location}</p>}

      {profileData.blog && (
        <p>
          Blog:{" "}
          <a href={profileData.blog} target="_blank" rel="noreferrer">
            {profileData.blog}
          </a>
        </p>
      )}

      <p>Repos: {profileData.public_repos}</p>
      <p>
        Followers: {profileData.followers} | Following: {profileData.following}
      </p>

      <a href={profileData.html_url} target="_blank" rel="noreferrer">
        👉 View Full Profile
      </a>
    </div>
  );
}
