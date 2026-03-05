Companion tool voor het handboek en oefeningenecosysteem 

Het is een terminalapplicatie die een eerstejaars TI-student stap voor stap begeleidt bij het maken van codeeroefeningen. De student installeert de tool eenmalig en typt daarna gewoon `ziescherp` in zijn terminal.

**De tool doet concreet dit, in volgorde:**

1. **Oefening starten** — de student kiest een oefening uit een menu. De tool maakt een map aan met startcode en unit tests. De student navigeert naar die map.
2. **Quiz** — de student runt `ziescherp` opnieuw. De tool herkent de oefening en stelt 3–5 theorievragen over de leerstof. Pas als de quiz klaar is, kan de student beginnen met coderen.
3. **Feedback op code** — de student runt `ziescherp` opnieuw na het coderen. De tool voert de unit tests uit en analyseert de code op structuur en naamgeving. De student ziet wat werkt en wat niet, met gerichte tips.
4. **Opgave bekijken** — `ziescherp opgave` opent de oefenomschrijving als HTML-pagina in de browser, volledig offline.

De tool doet **geen** score bijhouden, geen rapportering aan de lesgever, geen login, geen server. Alles blijft lokaal op de machine van de student.