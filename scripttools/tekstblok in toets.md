

OPGELET: als de student naar een andere vraag gaat of de pagina refresht zal de inhoud van dit tekstveld verwijderd worden. Zet er dus zeker een duidelijke waarschuwing bij als je dit gebruikt.


Je plakt deze html in je vraagtekst (zet je editor in "code"-modus uiteraard):

´´´text
<div class="scratchpad-container" style="margin-top:1em;">
    <label style="font-weight:bold;">
        Kladberekeningen (wordt niet opgeslagen!)
    </label>
    <textarea rows="6" style="width:100%; font-family:monospace;" placeholder="Gebruik dit veld voor je berekeningen.
Let op: dit wordt NIET opgeslagen."></textarea>
    <div style="font-size:0.8em; color:#a00; margin-top:0.3em;">
        ⚠️ OPGELET: Dit kladveld wordt niet bewaard bij verzenden of herladen. Van zodra je dus naar andere vraag gaat ben je de zaken die hier staan kwijt.
    </div>
</div>
´´´

Voorbeeld hoe dit eruit zal zien:

<div class="scratchpad-container" style="margin-top:1em;">
    <label style="font-weight:bold;">
        Kladberekeningen (wordt niet opgeslagen!)
    </label>
    <textarea rows="6" style="width:100%; font-family:monospace;" placeholder="Gebruik dit veld voor je berekeningen.
Let op: dit wordt NIET opgeslagen."></textarea>
    <div style="font-size:0.8em; color:#a00; margin-top:0.3em;">
        ⚠️ OPGELET: Dit kladveld wordt niet bewaard bij verzenden of herladen. Van zodra je dus naar andere vraag gaat ben je de zaken die hier staan kwijt.
    </div>
</div>
