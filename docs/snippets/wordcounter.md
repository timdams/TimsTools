---
title: "💯 Wordcounter bij toetsvragen"
sidebar_label: "💯 Wordcounter"
sidebar_position: 1
description: JavaScript-snippet voor een essayvraag in Toets.AP of Moodle met een live woordenteller.
tags: [AP, Moodle, Snippet]
---

JavaScript-code voor een essayvraag in Toets.AP of Moodle met een **live woordenteller**.

## Stappen

1. Kies een essayvraag.
2. In de vraagtekst, zet de editor in **"html"-modus** en plak deze code:

```html
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

3. Zet bij de antwoordopties het *Antwoordformaat* op **Platte tekst**.
