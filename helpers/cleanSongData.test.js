const cleanSongData = require('./cleanSongData');

// mock uuid fn
jest.mock('uuid', () => ({ v4: () => 'uuid-1234' }));

const recentSongs = [
  {
    track: {
      album: {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2HkSsS8O2U2gPhnCGVN5vn',
            },
            href: 'https://api.spotify.com/v1/artists/2HkSsS8O2U2gPhnCGVN5vn',
            id: '2HkSsS8O2U2gPhnCGVN5vn',
            name: 'BETWEEN FRIENDS',
            type: 'artist',
            uri: 'spotify:artist:2HkSsS8O2U2gPhnCGVN5vn',
          },
        ],
        available_markets: ['CA', 'US'],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0S4Y2Jnwf3tjQRlcKTsGUE',
        },
        href: 'https://api.spotify.com/v1/albums/0S4Y2Jnwf3tjQRlcKTsGUE',
        id: '0S4Y2Jnwf3tjQRlcKTsGUE',
        images: [
          {
            height: 640,
            url:
              'https://i.scdn.co/image/ab67616d0000b273641659fda6c66fc62d34b7c0',
            width: 640,
          },
          {
            height: 300,
            url:
              'https://i.scdn.co/image/ab67616d00001e02641659fda6c66fc62d34b7c0',
            width: 300,
          },
          {
            height: 64,
            url:
              'https://i.scdn.co/image/ab67616d00004851641659fda6c66fc62d34b7c0',
            width: 64,
          },
        ],
        name: 'we just need some time together',
        release_date: '2018-04-05',
        release_date_precision: 'day',
        total_tracks: 5,
        type: 'album',
        uri: 'spotify:album:0S4Y2Jnwf3tjQRlcKTsGUE',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/2HkSsS8O2U2gPhnCGVN5vn',
          },
          href: 'https://api.spotify.com/v1/artists/2HkSsS8O2U2gPhnCGVN5vn',
          id: '2HkSsS8O2U2gPhnCGVN5vn',
          name: 'BETWEEN FRIENDS',
          type: 'artist',
          uri: 'spotify:artist:2HkSsS8O2U2gPhnCGVN5vn',
        },
      ],
      available_markets: ['CA', 'US'],
      disc_number: 1,
      duration_ms: 235225,
      explicit: false,
      external_ids: {
        isrc: 'USQX91800782',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/2lTtnKQgjbrBA1qnOFhBkP',
      },
      href: 'https://api.spotify.com/v1/tracks/2lTtnKQgjbrBA1qnOFhBkP',
      id: '2lTtnKQgjbrBA1qnOFhBkP',
      is_local: false,
      name: 'affection',
      popularity: 74,
      preview_url:
        'https://p.scdn.co/mp3-preview/b936b4f0a68eb4ba84e7729b29fd85ea4eece42e?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 3,
      type: 'track',
      uri: 'spotify:track:2lTtnKQgjbrBA1qnOFhBkP',
    },
    played_at: '2021-05-08T18:56:45.102Z',
    context: null,
  },
  {
    track: {
      album: {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3uWJaTLnUnp0wZfB5xcdJy',
            },
            href: 'https://api.spotify.com/v1/artists/3uWJaTLnUnp0wZfB5xcdJy',
            id: '3uWJaTLnUnp0wZfB5xcdJy',
            name: 'Softee',
            type: 'artist',
            uri: 'spotify:artist:3uWJaTLnUnp0wZfB5xcdJy',
          },
        ],
        available_markets: ['CA', 'US'],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1cvUueJ1VO2gy8HaOKytad',
        },
        href: 'https://api.spotify.com/v1/albums/1cvUueJ1VO2gy8HaOKytad',
        id: '1cvUueJ1VO2gy8HaOKytad',
        images: [
          {
            height: 640,
            url:
              'https://i.scdn.co/image/ab67616d0000b273610835edfc9a5fc94172cb25',
            width: 640,
          },
          {
            height: 300,
            url:
              'https://i.scdn.co/image/ab67616d00001e02610835edfc9a5fc94172cb25',
            width: 300,
          },
          {
            height: 64,
            url:
              'https://i.scdn.co/image/ab67616d00004851610835edfc9a5fc94172cb25',
            width: 64,
          },
        ],
        name: 'Oh No',
        release_date: '2019-05-24',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:1cvUueJ1VO2gy8HaOKytad',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/3uWJaTLnUnp0wZfB5xcdJy',
          },
          href: 'https://api.spotify.com/v1/artists/3uWJaTLnUnp0wZfB5xcdJy',
          id: '3uWJaTLnUnp0wZfB5xcdJy',
          name: 'Softee',
          type: 'artist',
          uri: 'spotify:artist:3uWJaTLnUnp0wZfB5xcdJy',
        },
      ],
      available_markets: ['CA', 'US'],
      disc_number: 1,
      duration_ms: 285954,
      explicit: false,
      external_ids: {
        isrc: 'QZES81972955',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/3FLazwxIsNIWPmND1t1RIx',
      },
      href: 'https://api.spotify.com/v1/tracks/3FLazwxIsNIWPmND1t1RIx',
      id: '3FLazwxIsNIWPmND1t1RIx',
      is_local: false,
      name: 'Oh No',
      popularity: 43,
      preview_url:
        'https://p.scdn.co/mp3-preview/bce30e36d56694f4b180a165b53250e9694539c6?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:3FLazwxIsNIWPmND1t1RIx',
    },
    played_at: '2021-05-08T18:55:42.040Z',
    context: null,
  },
];

test('returns the correct result for simplified tracks', () => {
  const result = cleanSongData(recentSongs, simplified=true);

  expect(result).toEqual([
    {
      uuid: 'uuid-1234',
      id: '2lTtnKQgjbrBA1qnOFhBkP',
      name: 'affection',
      artists: ['BETWEEN FRIENDS'],
      album: 'we just need some time together',
      image: {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02641659fda6c66fc62d34b7c0',
        width: 300,
      },
      url: 'https://open.spotify.com/track/2lTtnKQgjbrBA1qnOFhBkP',
    },
    {
      uuid: 'uuid-1234',
      id: '3FLazwxIsNIWPmND1t1RIx',
      name: 'Oh No',
      artists: ['Softee'],
      album: 'Oh No',
      image: {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02610835edfc9a5fc94172cb25',
        width: 300,
      },
      url: 'https://open.spotify.com/track/3FLazwxIsNIWPmND1t1RIx',
    },
  ]);
});
