<h1>KESÄTÖIDEN SOVELLUSKEHITYS TEHTÄVÄT</h1>

Toteutettu tehtävä 2.2 node.js & TypeScript REST-rajapinta

Käytetty Express -frameworkkia sekä mongoDB -tietokantaa

Toteutetut tehtävät:

- [x] Henkilön lisääminen
- [x] Henkilön poistaminen
- [x] Kaikkien henkilöiden haku
- [x] Yksittäisen henkilön haku
- [x] Henkilön tietojen muokkaaminen
- [x] Tietokantana käytössä livenä @mongoDB atlas

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
 - localhost:5000/api/henkilot/delete/:id
    - poistaa yksittäisen henkilön id:n mukaan
- localhost:5000/api/henkilot/get
    - noutaa kaikki henkilot tietokannasta
- localhost:5000/api/henkilot/get/:id
    - hakee yksittäisen henkilön id:n mukaan
- Tietokanta käytössä ja livenä https://cloud.mongodb.com/




