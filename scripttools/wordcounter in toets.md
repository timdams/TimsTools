* Kies essay vraag
* In de vraagtekst, zet de editor in "html" modes en plak er volgende code:

```javascript
<p><strong>Aantal woordenteller (update automatisch):</strong> <span id="wc">0</span></p>

<script>
    document.addEventListener("input", function(e) {
        const textarea = document.querySelector("textarea");
        if (!textarea) return;

        const text = textarea.value.trim();
        const words = text === "" ? 0 : text.split(/\s+/).length;
        document.getElementById("wc").textContent = words;
    });
</script>
```
* Zet bij de antwoordopties het *Antwoord formaat* op **Platte tekst**.