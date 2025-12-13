/**
 * TypeScript Interface:
 * We define the expected fields coming from GitHub API
 * so TypeScript knows the exact structure of "profileData".
 */
export interface GithubUser {
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  blog: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}
