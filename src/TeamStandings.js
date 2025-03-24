import { useEffect, useState } from "react";
import NbaCard from "./NbaCard";

function TeamStandings({teamId}) {
  console.log('teamId: ', teamId); 

  const [teamStandings, setStandings] = useState([]);

  useEffect(() => {
    if (teamId) {
      fetch(`http://ec2-3-87-80-233.compute-1.amazonaws.com:5000/standings/${teamId}`)
        .then((response) => response.json())
        .then((data) => setStandings(data))
        .catch((error) => console.error("Erro ao buscar dados:", error));
    }
  }, [teamId]);

  console.log(teamStandings);

  return (
    <>
      <NbaCard
        key={teamStandings.teamId}
        teamLogo={teamStandings.teamLogo}
        teamGames={teamStandings.teamGames}
        teamWins={teamStandings.teamWins}
        teamLosses={teamStandings.teamLosses}
      />
    </>
  );
}

export default TeamStandings;