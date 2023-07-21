async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=9ca69bc7-0f68-4e1c-8d81-26166200d1e6&offset=0")
    .then(data => data.json())
    .then(data => {
        if (data.status != "success")return;

        const matchesList = data.data;
        console.log(matchesList);
        if(!matchesList) return[];

        const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

        console.log({relevantData});

        document.getElementById("matches").innerHTML=relevantData.map(match => `<li>${match}</li>`).join('');

        return relevantData;
    })
}

getMatchData();