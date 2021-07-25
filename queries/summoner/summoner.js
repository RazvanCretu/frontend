import gql from "graphql-tag";

const SUMMONER_QUERY = gql`
  query SummonerByName($summoner: String!) {
    SummonerInfo: Summoner(summoner: $summoner) {
      id
      puuid
      name
      summonerLevel
      profileIconId
      games {
        gameMode
        gameCreation
        gameDuration
        assists
        kills
        deaths
        championName
        champLevel
        win
      }
    }
  }
`;

export default SUMMONER_QUERY;
