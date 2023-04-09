import axios from 'axios'
import {getAlbumNames, getAuthToken} from '../index.ts'

const testAlbums = [
  {
    album_group: 'single',
    album_type: 'single',
    href: 'https://api.spotify.com/v1/albums/2GHEslMI3nQJPNnbjjoEXW',
    id: '2GHEslMI3nQJPNnbjjoEXW',
    name: 'Griselda vs. The Living Dead',
    release_date: '2023-03-23',
    release_date_precision: 'day',
    total_tracks: 6,
    type: 'album',
    uri: 'spotify:album:2GHEslMI3nQJPNnbjjoEXW'
  },
  {
    album_group: 'single',
    album_type: 'single',
    href: 'https://api.spotify.com/v1/albums/4rSJKBkRGDI5ydAjdLbEKA',
    id: '4rSJKBkRGDI5ydAjdLbEKA',
    name: 'River Monsters',
    release_date: '2023-03-26',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:4rSJKBkRGDI5ydAjdLbEKA'
  },
  {
    album_group: 'single',
    album_type: 'single',
    href: 'https://api.spotify.com/v1/albums/2iGxdO72vkrbt19AxiFtW0',
    id: '2iGxdO72vkrbt19AxiFtW0',
    name: 'crab legs',
    release_date: '2023-03-16',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:2iGxdO72vkrbt19AxiFtW0'
  }
]

describe('getAlbumNames', () => {
    it('gets album names ordered by release date', () => {
        expect(getAlbumNames(testAlbums)).toStrictEqual([
            'River Monsters',
            'Griselda vs. The Living Dead',
            'crab legs'
        ])
    });
});

describe('getAuthToken', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('posts with the expected headers', async () => {
      await getAuthToken('test-id', 'test-secret')
      expect(axios.post).toHaveBeenCalledWith(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials&client_id=test-id&client_secret=test-secret",
        {"headers": {"Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded"}
      })
    });
});