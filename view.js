const htmlDiv = document.getElementById('app');

// mainScreenView();
function mainScreenView() {
    let theLog = '';

    for (let i = 0; i < model.log.length; i++) {
        theLog += `<div class="log">${model.log[i].text} </div></br>`;
    }

    let html = `
                    <div id="navigate">
                        <div id="points">
                            <h2>POENG</h2>
                                <h4 id="firstName">${model.points[0].name}</h4></br>
                                <h6 id="firstPoints">${model.points[0].points}</h6>
                                <h4 id="secondName">${model.points[1].name}</h4></br>
                                <h6 id="secondPoints">${model.points[1].points}</h6>
                        </div>
                        <div id="navigationButtons">
                            <button id="todoButton">GJØREMÅL</button></br>
                            <button id="storeButton" onclick="storeView();">BUTIKK</button></br>
                            <button id="peopleButton">PERSONER</button></br>
                        </div>
                    </div>
                            
                                <div id="log">
                                    <h2>LOGG</h2>
                                    <p>${theLog}</p>
                                </div>
    `;
    htmlDiv.innerHTML = html;
};


storeView();
function storeView() {
    let html = '';
    let storeHtml = '';
    let newStoreHtml = `<div class="newStoreItem">
                            <h1 id="newStoreHeader">Legg til belønning</h1>
                            <label for="belønning">Belønning:</label></br>
                            <input type="text" id="belønning" value="${model.addToStore.reward}"></br></br>
                            <label for="pris">Pris:</label></br>
                            <input type="number" id="pris" onchange="${model.addToStore.price}" value="${model.addToStore.price}"></br></br>
                            <label for="select">Hvem kan kjøpe?</label></br>
                            <input type="checkbox" id="selectedOne" ${model.addToStore.allowIna ? 'checked' : ''}>${model.points[0].name}</input>
                            <input type="checkbox" id="selectedTwo" ${model.addToStore.allowErik ? 'checked' : ''}>${model.points[1].name}</input>
                            <input type="checkbox" id="selectedBoth" ${model.addToStore.allowBoth ? 'checked' : ''}>Begge</input></br></br>
                            <button id="saveStoreItem" onclick="addReward();">Lagre</button>
                        </div>`;



    for (let i = 0; i < model.store.length; i++) {
        let allowBoth =`<button id="personOne" onclick="personOneBuyStoreItem(${i});">Kjøp</button>
                        <button id="personTwo" onclick="personTwoBuyStoreItem(${i});">Kjøp</button>`;
        let allowOne = `<button id="personOne" onclick="personOneBuyStoreItem(${i});">Kjøp</button>`;
        let allowTwo = `<button id="personTwo" onclick="personTwoBuyStoreItem(${i});">Kjøp</button>`;

        storeHtml += `  <tr>
                            <td id="deleteButton" onclick="deleteStoreItem(${i});"><button>x</button></td>
                            <td id="reward">${(model.store[i].reward)}</td>
                            <td id="price">${(model.store[i].price)}</td>
                            <td id="buyButton">
                            ${model.store[i].allowBoth ? allowBoth : ''}
                            ${model.store[i].allowIna ? allowOne : ''}
                            ${model.store[i].allowErik ? allowTwo : ''}
                            </td>
                        </tr>`;
    };

    html = `
                    <div id="storeContent">
                                <button class="goBack" onclick="mainScreenView();">Hovedsiden</button>
                                <h1>BUTIKK</h1>
                        <div id="storePoints">
                            <div id="nameOne">
                                <h4>${model.points[0].name}</h4></br>
                                <h6>${model.points[0].points}</h6>
                            </div>
                            <div id="nameTwo">
                                <h4>${model.points[1].name}</h4></br>
                                <h6>${model.points[1].points}</h6>
                            </div>
                        </div>
                            <div id="store">
                                <table id="storeTable">
                                    <tr>
                                        <th></th><th>Belønning</th> <th>Pris</th> <th>${model.points[0].name} / ${model.points[1].name}</th>
                                    </tr>
                                         ${storeHtml}
                                </table>
                            </div>
                        <div id="addToStore">
                            ${newStoreHtml}
                        </div>
                    </div>
                `;

    htmlDiv.innerHTML = html;
};