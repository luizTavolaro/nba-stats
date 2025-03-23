import './NbaCard.css'

function NbaCard(param){
    let winsPerc = Math.round(param.teamWins / param.teamGames * 100);
    let lossPerc = Math.round(param.teamLosses / param.teamGames * 100);

    return (
        <div className="dash">
            <div className="card">
                <img 
                    src={param.teamLogo} 
                    className="teamLogo" 
                    alt="logo" 
                />
                <div className='stats'>
                    <span style={{fontStyle: 'italic'}}>Game Wins: {param.teamWins}</span>
                    <div className='total'><span style={{ width: `${winsPerc}%` }} className='win'></span></div>
                </div>
                <div className='stats'>
                    <span style={{fontStyle: 'italic'}}>Games Loss: {param.teamLosses}</span>
                    <div className='total'><span style={{ width: `${lossPerc}%` }} className='loss'></span></div>
                </div>
            </div>
        </div>
    );    
}

export default NbaCard