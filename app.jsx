let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Header = ({ players }) => {
  let score = 0;
  let playersNum = players.length;
  console.log(playersNum);
  for (var i = 0; i < players.length; i++) {
    score += parseInt(players[i].score);
    console.log(score);
  }
  return (
    <div className="header" >
      <p>PLAYERS: {playersNum}</p>
      <p>TOTAL POINTS: {score}</p>
    </div>
  );
}

const PlayerList = (props) => {
  const li = props.items.map((item, index) => <ul key={index}> {item} </ul>);
  return (
    <div className="player">
      <li>
        <p>{li.name}</p>
        <p>{li.score}</p>
      </li>
    </div>
  )
}

const PlayerForm = () => {
  return (
    <div className="add-player-form">
      <input type="text" placeholder="Enter a name" />
      <button>ADD PLAYER</button>
    </div>
  );
}

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList items={players} />
      <PlayerForm />
    </div>
  );
}

ReactDOM.render(
  <Application title="Scoreboard" players={PLAYERS} />,
  document.getElementById('container')
);
