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

export const searchTracks = async (token: string, trackSearch: string) => {
  console.log(trackSearch)
  try {
    const url = "https://api.spotify.com/v1/search?q=" + trackSearch + "&type=track&market=US&limit=10"
    console.log(url)
    const response = await axios.get(
      url,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data: any = response.data;
    console.log(data)
    return data;
  } catch (error) {
      console.log(error)
  }
 
};


export const addTracks = async (token: string, playlistId: string, track: string) => {
  console.log(track)
  try {
    const response = await axios.post(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {"uris": [track]},
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: "Bearer " + token,
        },
      }
    );
    const data: any = response.data;
    console.log(data)
    return data;
  } catch(error) {
    console.log(error)
  }
  
};

// export const removeTracks = async (token: string, playlistId: string, track: string) => {
//   const body = {
//     "tracks": [
//       {
//         "uri": "spotify:track:7MDKvOzNgAJ3KMCtaP2UOa"
//       }
//     ]
//   }
//   // const response = await axios.delete(
//   //   `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
//   //   {
//   //     headers: {
//   //       Authorization: "Bearer " + token,
//   //     }
//   //   },
//   // );
//   const data: any = response.data;
//   console.log(data)
//   return data;
// };




