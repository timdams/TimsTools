# Trajectgesprek capturer

Een Windows-desktopapplicatie om trajectgesprekken automatisch te verwerken:

* Audio-opnames uploaden of **live opnemen** via microfoon, inclusief in bulk (bv tijdens PDT dagen)
* Tekst-bestanden (VTT, TXT, MD, DOCX) direct importeren zonder transcriptie
* Automatische transcriptie via **OpenAI Whisper API** (vast model: `whisper-1`)
* Automatische samenvatting (OpenAI Chat API, model instelbaar)
* Review en edit door gebruiker (per sectie)
* Opslag als Markdown-bestand met metadata
* Optioneel audio opslaan als MP3
* Mailtekst klaarzetten (kopieer naar clipboard, manueel plakken in mailclient)

De applicatie is ontworpen als **workflow-accelerator voor trajectbegeleiders** (single-user).

![alt text](inontwikkeling/tbcapture1.png)
![alt text](inontwikkeling/tbcapture2.png)
![alt text](inontwikkeling/tbcapture3.png)