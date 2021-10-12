import axios from 'axios';

export const getPlaylists = async (token: string) => {
    const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
    url: 'https://api.spotify.com/v1/me',
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

