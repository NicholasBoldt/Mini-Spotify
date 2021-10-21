import axios, { AxiosResponse } from "axios";

export const getPlaylists = async (token: string) => {
  const response: AxiosResponse<any[]> = await axios.get(
    "https://api.spotify.com/v1/me/playlists",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data: any = response.data;
  return data.items;
};

export const getPlaylist = async (token: string, id: string) => {
  const response: AxiosResponse<any[]> = await axios.get(
    "https://api.spotify.com/v1/playlists/" + id,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = response.data;
  return data;
};

export const getUser = async (token: string) => {
  const response: AxiosResponse<any[]> = await axios.get(
    "https://api.spotify.com/v1/me",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = response.data;
  return data;
};

export const createPlaylist = async (
  token: string,
  userId: string,
  newPlaylist: any
) => {
  const response: AxiosResponse<any[]> = await axios.post(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    newPlaylist,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = response.data;
  return data;
};

export const editPlaylist = async (
  token: string,
  id: string,
  editedPlaylist: any
) => {
  const response: AxiosResponse<any[]> = await axios.put(
    `https://api.spotify.com/v1/playlists/` + id,
    editedPlaylist,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = response.data;
  return data;
};

export const searchTracks = async (token: string, trackSearch: string) => {
  try {
    const url: string =
      "https://api.spotify.com/v1/search?q=" +
      trackSearch +
      "&type=track&market=US&limit=10";
    const response: AxiosResponse<any[]> = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data: any = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addTracks = async (
  token: string,
  playlistId: string,
  track: string
) => {
  try {
    const response: AxiosResponse<any[]> = await axios.post(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      { uris: [track] },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeTracks = async (
  token: string,
  playlistId: string,
  track: string
) => {
  const tracks = {
    tracks: [
      {
        uri: track,
      },
    ],
  };
  await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(tracks),
  });
};
