import React, { useState } from 'react';
import Navbar from "./Navbar";
import axios from 'axios';

interface Song {
  id: number;
  title: string;
  artist: { name: string };
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState<Song[]>([]);

  const searchSongs = async () => {
    try {
      const response = await axios.get(`https://www.songsterr.com/a/ra/songs.json`, {
        params: {
          pattern: query
        }
      });
      setSongs(response.data);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('path_to_your_background_image.jpg')` }}>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="max-w-xl mx-auto my-10">
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for songs"
              className="input input-bordered rounded-md py-4 px-4 w-full mb-4 bg-white/70 backdrop-blur-sm"
            />
            <button onClick={searchSongs} className="btn rounded-md py-2 px-2 bg-orange-500 hover:bg-orange-600 text-white w-full">Search</button>
          </div>
        </div>
        <div>
          {songs.map((song) => (
            <div key={song.id} className="p-4 bg-white/70 backdrop-blur-sm shadow-md rounded-lg mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{song.title}</h3>
                <p className="text-orange-800">{song.artist.name}</p>
              </div>
              <a href={`http://www.songsterr.com/a/wa/song?id=${song.id}`} target="_blank" rel="noopener noreferrer" className="btn py-2 px-2 rounded-lg text-white bg-orange-500 hover:bg-orange-600">View Chords</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
