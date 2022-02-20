<h1>KESÄTÖIDEN SOVELLUSKEHITYSTEHTÄVÄT</h1>

Toteutettu tehtävä 2.2 node.js & TypeScript REST-rajapinta

Käytetty Express -frameworkkia sekä mongoDB -tietokantaa

Toteutetut tehtävät:

- [x] Henkilön lisääminen
- [x] Henkilön poistaminen
- [x] Kaikkien henkilöiden haku
- [x] Yksittäisen henkilön haku
- [x] Henkilön tietojen muokkaaminen
- [x] Tietokantana käytössä livenä @mongoDB atlas

<h3>Käynnistys paikallisesti:</h3>

```
npm run serve
```

<h3>Käynnistys paikallisesti:</h3>



<h3>Käyttö esim. Postmanilla:</h3>

- localhost:5000/api/henkilot/create
    - luo uuden henkilön, json syntaksi mallia:
    ```json
    {
    "etunimi": "Sauli",
    "sukunimi": "Niinistö",
    "ika": 73
    }
    ```
    ![kuva luonnista](https://i.ibb.co/pz9QbQN/henkilon-lisaaminen.png)

 - localhost:5000/api/henkilot/delete/:id
    - poistaa yksittäisen henkilön id:n mukaan
- localhost:5000/api/henkilot/get
    - noutaa kaikki henkilot tietokannasta
- localhost:5000/api/henkilot/get/:id
    - hakee yksittäisen henkilön id:n mukaan
- Tietokanta käytössä ja livenä https://cloud.mongodb.com/
- localhost:5000/api/henkilot/update/:id
    - päivittää yksittäisen käyttäjän tietoja id:n mukaan, json syntaksi samalla tavalla kuin yllä