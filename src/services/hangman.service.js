let activeGames = [{
  "uuid": "ea5ed7bf-1c5d-45aa-b07a-e9f1808b8cfb",
  "nguesses": 10,
  "wguesses": [
    "a",
    "b",
    "c"
  ],
  "mword": "hello",
  "gletters": [
    "a"
  ]
}];


const createGame = (data) => {
  let result = null;
  try {
    activeGames.push(data);
    result = data;
  } catch (error) {
    logger.error('Error at service to create game: ' + error)
  } finally {
    return result;
  }
};

const updateGame = (body) => {
  let result = null;
  try {
    const index = activeGames.findIndex(element => element.uuid === body.uuid);
    if (index !== -1) {
      activeGames[index] = body;
      result = activeGames[index];
    }
  } catch (error) {
    logger.error('Error at service updating game: ' + error)
  } finally {
    return result;
  }
}

module.exports = {
  createGame,
  updateGame
}