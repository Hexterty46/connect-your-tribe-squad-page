# Squad page

Ontwerp en maak met een team een website met NodeJS en JSON.

De instructie vind je in: [INSTRUCTIONS](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/INSTRUCTIONS.md)

## Inhoudsopgave Squad page

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Deze week ben ik bezig geweest met het maken van een Team Squadpage waarin ik de WHOIS API moet gebruiken om data uit de Directus op te halen.
Ik heb een voetbalveld met de mensen uit de WHO API toegevoegd op de website. Daarnaast bestaat er ook nog een button om een reserve team te zien.

Bekijk [Hier](https://connect-your-tribe-squad-page-s1i5.onrender.com/) de website

<img width="384" height="814" alt="image" src="https://github.com/user-attachments/assets/063676c6-4a1f-4b39-b433-d44fb95df439" />
<img width="1392" height="891" alt="image" src="https://github.com/user-attachments/assets/8e638c0a-393e-4e31-956e-581676f0c15e" />



## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Voor de background gebruik ik een `repeating-linear-gradient`. Dit zorgt ervoor, dat het veld steeds geloopt word. Dus ik heb geen problemen met het veld als het scherm groter word. Dus hoef ik ook geen `@media` queries te gebruiken voor responsiveness
https://github.com/Hexterty46/connect-your-tribe-squad-page/blob/14ce088c7c7e5147034da4a4cc61c0012e60a25c/public/style.css#L19-L25

Op het veld heb ik voor de spelers `clamp` gebruikt bij de `width`. Dit zorgt ervoor dat de grootte van de afbeeldingen automatisch worden gescaled, op basis van de grootte van je scherm.
https://github.com/Hexterty46/connect-your-tribe-squad-page/blob/14ce088c7c7e5147034da4a4cc61c0012e60a25c/public/style.css#L29

Voor het openen en het sluiten van de reserve lijst gebruik ik het 3 stappen-plan van Javascript.
https://github.com/Hexterty46/connect-your-tribe-squad-page/blob/14ce088c7c7e5147034da4a4cc61c0012e60a25c/views/index.liquid#L18
https://github.com/Hexterty46/connect-your-tribe-squad-page/blob/14ce088c7c7e5147034da4a4cc61c0012e60a25c/public/script.js#L1-L7


## Installatie
<!-- Bij Installatie staat stap-voor-stap beschreven hoe je de development omgeving moet inrichten om aan de repository te kunnen werken. -->
Volg deze stappen om de development omgeving in te richten om aan deze repository te kunnen werken:

Stap 1) Installeer de NodeJS ontwikkelomgeving. Kies voor NodeJS 24.13.0 (LTS, long-term support), download het installatiebestand en doorloop het installatieproces.

Stap 2) Fork deze repository, clone deze op jouw computer en open het in VSCodium/ een code editor.

Stap 3) Open de Terminal in VSCodium of VSCode, Voer in de terminal het commando npm install uit door het in te typen en op enter te drukken.

Stap 4 ) Na de installatie is de map node_modules aangemaakt, en gevuld met allerlei packages. Start de website door in de terminal het comando npm start uit te voeren. Als het goed is, komt hier een melding te staan over het opstarten van de server: Application started on http://localhost:8000 — Open deze URL in je browser.

## Gebruik


## Bronnen
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient
https://shopify.dev/docs/api/liquid/tags/assign

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
