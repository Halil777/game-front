import { FC } from "react";
import useSWR from "swr";
import "./server.css";

// Define the type for the server data
interface Server {
  id: number;
  name: string;
  ipAddress: string;
  port: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// Fetcher function to get data from the API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const TeamSpeakServer: FC = () => {
  // Fetch server data using SWR
  const { data, error } = useSWR<Server[]>(
    "http://88.218.60.127:5678/game-servers",
    fetcher
  );

  // Handle loading and error states
  if (error) return <div>Error loading servers.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="server-container">
      <div className="server-card">
        <img
          src="/images/teamspeak-ip.png"
          alt="TeamSpeak IP"
          className="server-image"
        />
        <div className="server-details">
          <h2>IP действующих серверов</h2>
          <h3>Активные сервера Teamspeak:</h3>
          <ul className="server-list">
            {data.map((server) => (
              <li key={server.id}>{`${server.name} – ${server.ipAddress}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamSpeakServer;
