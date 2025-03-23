import TeamsStandings from './TeamStandings.js';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [teams, setTeams] = useState([]);
  const [selectedTeamId, setSelectedTeamId] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Erro ao buscar times:", error));
  }, []);

  const handleSelectTeam = (teamId) => {
    setSelectedTeamId(parseInt(teamId)); 
  };

  return (
    <div className='vis'>
      <select onChange={(e) => handleSelectTeam(e.target.value)}>
        <option value="">Selecione</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
      {<TeamsStandings teamId={selectedTeamId}/>}
    </div>
  );
}

export default App;
