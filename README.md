# UltraTravel

UltraTravel är en reseapp där du kan utforska länder och läsa om bland annat deras huvudstad, befolkning, språk och valutor. På detaljsidan visas även aktuellt väder och en kort introduktion från Wikipedia.

## Funktioner

- Landlista med flagga, namn, region och huvudstad.
- Sökning på landsnamn, regionfilter och paginering.
- Sökord, region och sidnummer sparas i URL:en så att vyn kan delas och återställas vid omladdning.
- Detaljsidor med landinformation, väder och Wikipedia-text med bild när den finns tillgänglig.
- Laddningsindikatorer med skeletons och separata felmeddelanden för väder och Wikipedia.

Länderna hämtas i ett gemensamt anrop för listan. Sökning, filtrering och paginering görs sedan lokalt i appen.

## Teknikval

Projektet använder **React med TypeScript och Vite**. React gör det möjligt att dela upp gränssnittet i återanvändbara komponenter, till exempel landkort, sökfält och paginering. TypeScript beskriver vilken data komponenterna och API-anropen förväntar sig. Vite används för att köra projektet under utveckling och skapa en produktionsbuild.

- **React Router** hanterar sidnavigering och URL-parametrar.
- **TanStack Query** hanterar hämtning, cache, laddningslägen och fel för API-data.
- **Tailwind CSS och shadcn/ui** används för styling och UI-komponenter.

API-anrop ligger i `src/services`, återanvändbar hook-logik i `src/hooks` och gränssnittet i `src/components` och `src/pages`.

## API:er

- **countries.dev** – landinformation och flaggor.
- **Open-Meteo** – koordinater för huvudstäder och aktuellt väder.
- **Wikipedia** – introduktionstext och bild när sådan finns.

## Starta projektet

Du behöver ha Node.js och npm installerade. Kör följande i projektmappen:

```bash
npm install
npm run dev
```

Öppna sedan den lokala adress som Vite visar i terminalen. Inga API-nycklar behöver anges för de nuvarande anropen.

För att bygga projektet och förhandsvisa produktionsversionen:

```bash
npm run build
npm run preview
```

## Publicerad app

[UltraTravel.](https://ultratravel.netlify.app/)

## AI-redovisning

ChatGPT/Codex har använts som stöd under arbetet för att förklara bland annat TypeScript-typer, props, hooks, API-anrop och URL-state. Arbetet har delvis skett steg för steg med frågor och kodexempel. AI har också hjälp till bland annat buildfel, felhantering, navbar, skeletons och styling.

## Reflektion

Jag har lärt mig mer om strukturen i react, lärt mig mer om typer och hur de fungerar i API anrop. Jag gillar att jobba med olika tydliga delar som sedan går att sättas ihop. Som ett pussel,
så jag tycker det är väldigt intressant hur /components, /hooks, /services, /pages osv hänger ihopa. Det som är svårast är att skilja mellan objekt och array.