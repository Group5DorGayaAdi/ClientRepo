$(document).ready(() => {
  $("#insertBTN").click(() => {
    const GamesList = [];
    GAME.forEach((game) => {
      const serverGame = {
        // "appID": 0,
        // "name": "string",
        // "releaseDate": "2024-12-29T15:12:41.238Z",
        // "price": 0,
        // "description": "string",
        // "headerImage": "string",
        // "website": "string",
        // "windows": true,
        // "linux": true,
        // "scoreRank": 0,
        // "recommendations": "string",
        // "publisher": "string",
        // "numberOfPurchases": 0,
        // "mac": true
        appID: game.AppID,
        name: game.Name,
        releaseDate: new Date(game.Release_date).toISOString(),
        price: game.Price,
        description: game.description,
        headerImage: game.Header_image,
        website: game.Website,
        windows: game.Windows === "TRUE",
        mac: game.Mac === "TRUE",
        linux: game.Linux === "TRUE",
        scoreRank: game.Score_rank,
        recommendations: game.Recommendations,
        publisher: game.Developers,
        numberOfPurchases: 0,
      };
      GamesList.push(serverGame);
    });
    console.log(GamesList);

    $.ajax({
      url: "https://localhost:7048/api/Games/InitPostForAllGames",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(GamesList),
      success: function (response) {
        alert("All Games inserted successfully:", response);
      },
      error: function (error) {
        console.error("Error inserting games:", error);
      },
    });
  });
});
