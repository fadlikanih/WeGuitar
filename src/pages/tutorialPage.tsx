import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const API_KEY = 'AIzaSyCiTcItIyGDYV5iyRMyVj4f8hTohQN1L0Q';
const MAX_RESULTS = 12;
const CHANNELS = [
    { name: 'Chord Tutorial Indonesia', id: 'UCTUwDXZDszbJDS5IwbJ3ufg' },
    { name: 'Arya Nara', id: 'UCXGGpexUbm7R3UDQrTsnmMQ' },
    { name: 'Teo Akustik', id: 'UC-t2-wMURorMxfLAkTkp_Jw' },
    { name: 'Rastavoria', id: 'UCfmiGirodnnPo5kpRQZHvag' },
    { name: 'Harry Veego', id: 'UCDkTPNGGA-uv09Xc5gO7eFw' },
];

interface VideoSnippet {
    title: string;
    description: string;
    thumbnails: {
        default: { url: string };
        medium: { url: string };
        high: { url: string };
    };
}

interface VideoItem {
    id: {
        kind: string;
        videoId: string;
    };
    snippet: VideoSnippet;
}

export default function TutorialPage() {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [selectedChannelId, setSelectedChannelId] = useState(CHANNELS[0].id);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                    params: {
                        part: 'snippet',
                        maxResults: MAX_RESULTS,
                        key: API_KEY,
                        q: 'tutorial bahasa indonesia',
                        type: 'video',
                        channelId: selectedChannelId,
                    },
                });

                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching data from YouTube API', error);
            }
        };

        fetchVideos();
    }, [selectedChannelId]);

    return (
        <div>
            <Navbar />


            <div className="selector-container p-4">
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedChannelId}
                    onChange={(e) => setSelectedChannelId(e.target.value)}
                >
                    {CHANNELS.map((channel) => (
                        <option key={channel.id} value={channel.id}>
                            {channel.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="p-8 bg-black bg-opacity-50 backdrop-blur-lg min-h-screen">
                <h2 className="text-2xl font-semibold text-white mb-6">Tutorial Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.map((video) => (
                        <div key={video.id.videoId} className="rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full h-48 object-cover" src={video.snippet.thumbnails.high.url} alt="Video thumbnail" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{video.snippet.title}</div>
                                <p className="text-gray-700 text-base">
                                    {video.snippet.description.slice(0, 100)}...
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <a
                                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full"
                                >
                                    Watch Video
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}