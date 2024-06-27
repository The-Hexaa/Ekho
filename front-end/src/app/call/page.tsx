'use client';
import {
  LiveKitRoom,
  RoomAudioRenderer,
  useLocalParticipant,
} from '@livekit/components-react';
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure Font Awesome is available

export default function Call() {
  const [token, setToken] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const router = useRouter();


  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isConnected) {
      timer = setInterval(() => {
        setCallDuration(prevDuration => prevDuration + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isConnected]);

  const handleConnect = async () => {
    if (!id) {
      console.error("No ID found in the URL");
      return;
    }

    const response = await fetch(`/api/token?id=${id}`);
    const { accessToken, url } = await response.json();

    setToken(accessToken);
    setUrl(url);
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    setToken(null);
    setUrl(null);
    setIsConnected(false);
    setCallDuration(0);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex space-x-4 mt-4">
          <button 
            onClick={handleConnect}
            className="bg-blue-500 text-white p-3 rounded-full"
            disabled={isConnected}
          >
            <i className="fas fa-phone fa-2x"></i>
          </button>
          <button 
            onClick={handleDisconnect}
            className="bg-red-500 text-white p-3 rounded-full"
            disabled={!isConnected}
          >
            <i className="fas fa-phone-slash fa-2x"></i>
          </button>
        </div>
        {isConnected && (
          <div className="mt-4 text-lg">
            Call Duration: {Math.floor(callDuration / 60)}:{callDuration % 60 < 10 ? '0' : ''}{callDuration % 60}
          </div>
        )}
        {token && url && (
          <LiveKitRoom
            token={token}
            serverUrl={url}
            connectOptions={{ autoSubscribe: true }}
            onDisconnected={() => setIsConnected(false)}
          >
            <ActiveRoom />
          </LiveKitRoom>
        )}
        <MicrophoneAccessComponent />
      </main>
    </>
  );
}

const ActiveRoom = () => {
  const { localParticipant, isMicrophoneEnabled } = useLocalParticipant();

  // console.log("isMicrophoneEnabled", isMicrophoneEnabled)
  if (!localParticipant) {
    console.error("Local participant is undefined");
    return <div>Error: Local participant is undefined</div>;
  }

  return (
    <>
      <RoomAudioRenderer />
      <button
        className="mt-4 p-2 bg-gray-700 text-white rounded"
        onClick={() => {
          if (localParticipant) {
            localParticipant.setMicrophoneEnabled(!isMicrophoneEnabled);
          } else {
            console.error("Local participant is not defined when trying to toggle microphone");
          }
        }}
      >
        Toggle Microphone
      </button>
      <div className="mt-2">Audio Enabled: {isMicrophoneEnabled ? 'Unmuted' : 'Muted' }</div>
    </>
  );
};


const useMicrophone = () => {
  const [microphoneAccess, setMicrophoneAccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMicrophoneAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setMicrophoneAccess(true);
        console.log(stream)
        console.log('Microphone access granted');
      } catch (err) {
        setError(err);
        console.error('Microphone access denied', err);
      }
    };

    getMicrophoneAccess();
  }, []);

  return { microphoneAccess, error };
};

const MicrophoneAccessComponent = () => {
  const { microphoneAccess, error } = useMicrophone();

  return (
    <div>
      {microphoneAccess ? (
        <p>Microphone access granted</p>
      ) : (
        <p>Microphone access denied or not yet requested</p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

