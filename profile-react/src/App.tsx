/**
 * GitHub Profile Viewer - React + TypeScript
 * ------------------------------------------
 * Concepts Covered:
 * - useState for managing component state
 * - useEffect for side effects (load & save to localStorage)
 * - Form submission handling in React
 * - Fetching APIs using async/await
 * - Conditional rendering in JSX
 * - Strong typing: Creating an interface for API response
 * - Controlled Input Component Pattern
 */

import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Profile } from "./Profile";
import type { GithubUser } from "./types";

/**
 * Constant Key for Local Storage
 * Avoids magic strings repeated in multiple places.
 */
const LOCAL_STORAGE_KEY = "user-data";

const App = () => {
  /**
   * React States:
   * username: input field value
   * profileData: fetched user data
   * loading: show a loading message
   * error: show error if user not found or failed fetch
   */
  const [username, setUsername] = useState<string>("");
  const [profileData, setProfileData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  /**
   * useEffect #1 — Load last saved GitHub user on page load
   * Runs only once ([]) when component is first displayed.
   */
  useEffect(() => {
    console.log(">>>>>>> Call First Time Use Effect")
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed: GithubUser = JSON.parse(saved);
        setProfileData(parsed);
      } catch (e) {
        console.log("Error parsing saved user-data");
      }
    }
  }, []);

  /**
   * useEffect #2 — Save profileData to localStorage whenever it changes
   * Good practice: keeps last successful result for future visits.
   */
  useEffect(() => {
    
    if (profileData) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profileData));
      console.log("Saving user-data to localStorage");
    }
  }, [profileData]);

  /**
   * Fetch data from GitHub API
   * This function:
   * - Shows loading
   * - Handles errors
   * - Stores valid result into profileData
   */
  async function fetchUserData(userName: string): Promise<void> {
    setLoading(true);
    setError("");
    setProfileData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      if (!response.ok) {
        throw new Error("User not found (" + response.status + ")");
      }

      const data: GithubUser = await response.json();
      setProfileData(data); // Update UI state
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }

  /**
   * When form is submitted:
   * - Stop the page from reloading (e.preventDefault)
   * - Fetch GitHub user data
   */
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault(); // we use this to prevent reload the page
    if (username.trim()) {
      fetchUserData(username.trim());
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
     setUsername(e.target.value)
  }

  return (
    <main className="container">
      <h1>🔍 GitHub Profile Viewer :{username}</h1>

      {/* Controlled Component Form:
          Input value always comes from React state */}
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Fetch Profile
        </button>
      </form>

      <div id="profile" className="profile-card">
        <Profile loading={loading} error={error} profileData={profileData} />
      </div>
    </main>
  );
};

export default App;
