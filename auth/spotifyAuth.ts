/**
 * Authorization module for Spotify
 */

import dotenv from "dotenv";

// Load env vars
dotenv.config({ path: ".env" });

// Spotify Auth
const authURL = "https://accounts.spotify.com/authorize";
const redirectURL = "http://localhost:5000"; 
const scopes = ["playlist-read-private", "playlist-modify-private", "user-read-recently-played"];

export type SpotifyToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
  state: string;
};

/**
 * Get auth URL
 */
export const getAuthURL = async (): Promise<string> => {
  const { CLIENT_ID, CLIENT_SECRET } = process.env;
  const stateId = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`, "utf-8").toString("base64");

  // Add stringified params
  const params = new URLSearchParams();
  params.set("client_id", CLIENT_ID);
  params.set("response_type", "token");
  params.set("redirect_uri", redirectURL);
  params.set("scope", scopes.join(" "));
  params.set("state", stateId);

  return `${authURL}?${params.toString()}`;
};