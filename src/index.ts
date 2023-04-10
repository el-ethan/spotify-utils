import axios from 'axios'
import type { Album } from '../types.js'
import qs from 'qs'

const TAK_ARTIST_ID = process.env.SPOTIFY_ARTIST_ID

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

export const getAuthToken = async (id:string, secret:string) => {
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const data = {
    grant_type: 'client_credentials',
    client_id: id,
    client_secret: secret
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

const getInfo =  async (token: string) => {
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
    const albums: Album[] = response.data.items
    console.log(albums.sort((a, b) => a.release_date > b.release_date ? -1 : 1 ).map(album => album.name));
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  const token = await getAuthToken(clientId, clientSecret)
  getInfo(token)
}

// main()

export const getAlbumNames = (albums: Album[]): string[] => {
  const albumsByReleaseDateDesc = albums.sort((a, b) => a.release_date > b.release_date ? -1 : 1 )
  return albumsByReleaseDateDesc.map(album => album.name)
}