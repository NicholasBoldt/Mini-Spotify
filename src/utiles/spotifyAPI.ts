import axios from 'axios';

export const getPlaylists = async (token: string) => {
    const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      'Authorization': 'Bearer ' + token
    }})
    const data: any = response.data;
    console.log(data.items)
    return data.items;
  }


export const getPlaylist = async (token: string, id: string) => {
  const response = await axios.get(
    "https://api.spotify.com/v1/playlists/" + id,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data: any = response.data;
  console.log(data)
  console.log(data.tracks.items)
  return data;
};

export const getUser = async (token: string) => {
  const response = await axios.get(
    "https://api.spotify.com/v1/me",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data: any = response.data;
  console.log(data)
  return data;
};

export const createPlaylist = async (token: string, userId: string, newPlaylist: any) => {
  console.log(newPlaylist)
  const response = await axios.post(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    newPlaylist, 
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data: any = response.data;
  console.log(data)
  return data;
};

export const editPlaylist = async (token: string, id: string, editedPlaylist: any) => {
  console.log(editedPlaylist)
  const response = await axios.put(
    `https://api.spotify.com/v1/playlists/` + id,
    editedPlaylist, 
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data: any = response.data;
  console.log(data)
  return data;
};






