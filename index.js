import axios from 'axios';
import qs from 'qs'

const TAK_ARTIST_ID = '2ax0J2OsLpsH9kgAT6eqng'

export const getAuthToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  const data = {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

const getInfo =  async (token) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };
  
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${TAK_ARTIST_ID}/albums`,
      headers
    );
    console.log(response.data.items.sort((a, b) => a.release_date > b.release_date ? -1 : 1 ).map(album => album.name));
  } catch (error) {
    console.log(error);
  }
};

const token = await getAuthToken()

getInfo(token)