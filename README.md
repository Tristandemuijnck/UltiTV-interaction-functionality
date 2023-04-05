# 📣 UltiTV Commentary Tool
<!-- Geef je project een titel en schrijf in één zin wat het is -->
UltiTV commentary tool - Een tool met alle benodigde info voor het geven van commentaar op een ultimate frisbee wedstrijd.

## 🗃️ Inhoudsopgave

  * [Beschrijving](#-beschrijving)
  * [Kenmerken](#-kenmerken)
  * [Installatie](#-installatie)
  * [Gebruik](#-gebruik)
  * [Bronnen](#-bronnen)
  * [Licentie](#-licentie)

## 📜 Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

Dit is de repository van mijn uitvoering van "the-web-is-for-everyone-interactive-functionality" - UltiTV

Dit project omvat een tool met alle benodigde info voor het geven van commentaar op een ultimate frisbee wedstrijd. Denk hierbij aan team informatie, scores, spelers informatie en game informatie. Ook bevat het een mogelijkheid om verschillende info van teams en spelers te bekijken. 

<img src="https://user-images.githubusercontent.com/43402897/229906723-8781ffd1-6e43-4d90-8530-41cb64f968eb.png" width=600 >

Voor een live versie van de tool: https://ultitv-tristan.cyclic.app/

## 🎭 Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

Dit project is gemaakt met: 

**Tools**
  * 💻 Visual Studio Code
  * 🎨 Concepts

**Tech**
  * ⚙️ NodeJS
  * 🖼️ EJS
  * 📡 ExpressJS
  * 🖌️ CSS  

### NodeJS
NodeJS is een JavaScript runtime omgeving waarmee JavaScript buiten de browser kan worden uitgevoerd. Met Node js kun je gebruik maken van server side scripting en command-line tools.

### EJS
EJS is een templating language voor het genereren van HTML met JavaScript. Het zorgt ervoor dat ik HTML files kan renderen met JavaScript data. Ook kan ik gebruik maken van partials om mijn HTML code zo DRY mogelijk te maken.

### ExpressJS
ExpressJS is een NodeJS framework. Express helpt binnen dit project bij het verwerken van API requests en responses.

### Progressive enhancement
Progressive enhancement zorgt ervoor dat een website voor iedereen toegankelijk is. Het begint met de core functionaliteiten van de website. Dit betekent dat puur de html is opgebouwd zonder styling of client side scripting. Ook hoort hier het afhandelen van formulieren met NodeJS bij. Vervolgens wordt de CSS toegevoegd om de html en formulieren mooi te maken. Tenslotte wordt er JavaScript toegevoegd om de user experience te verbeteren. Voor dit project heb ik dat in de vorm van een modal gedaan voor het speler toevoegen formulier.

De core functionaliteit van deze functie is een `<a>` naar een andere page met het formulier. 
De verbeterde user experience is het gebruik van `e.preventDefault()` om ervoor te zorgen dat de gebruiker niet naar een andere page gaat, maar op dezelfde page blijft. Daarnaast wordt er een modal geopend met hetzelfde formulier als de core functionaliteit.

[Progressive enhancement binnen dit project.](https://github.com/Tristandemuijnck/UltiTV-interaction-functionality/wiki/Bouwen#enhancement)

## 📥 Installatie

1. Clone of download deze repository naar de gewenste folder.
2. Open de root directory van dit project en open het project in een code editor naar keuze.
3. Gebruik ```npm install``` om de benodigde packages te downloaden voor dit project.
4. Start een server met ```npm run start```. 

## 🪚 Gebruik
Deze tool is zowel lokaal te gebruiken als online. Lokaal gebruik is bedoeld voor developers en zorgt ervoor dat er mogelijke verbeteringen kunnen worden toegepast op het project. Online gebruik is bedoeld voor de eindgebruiker.

[UltiTV Commentary Tool](https://ultitv-tristan.cyclic.app/)

## 📘 Bronnen

[ExpressJS](https://expressjs.com/en/4x/api.html)

[EJS](https://ejs.co/#docs)

[Fetch API](https://www.javascripttutorial.net/javascript-fetch-api/)

## 🪪 Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
