# Cookie Consent

### [Demo](https://suspicious-yalow-e02968.netlify.app/)

### Content

* [How To Use](#how-to-use)
* [API](#api)
* [Erläuterung](#erlauterung)

<a name="how-to-use">
### How To Use

1. Download folder: ``cookie-consent``
2. Move folder into root directory of your website
2. Insert at the end of ``<body>``: ``<script src="cookie-consent/index.js"></script>``

<a name="api">
### API

##### Open

Add ``data-open-cc`` to a button

Example: 
```html
<button data-open-cc>Popup Öffnen</button>
```

``window.openCookieConsent()``

##### Close

``window.closeCookieConsent()``

<a name="erlauterung">
### Erläuterung
Mir ist es wichtig, dass, sofern ein Popup für die Cookies verwendet wird, es

1. den Nutzer nicht langweilt, und es
2. einen einfachen, schnellen Weg gibt es zu schließen.

Da Internetnutzer heutzutage eine Reizüberflutung gewöhnt sind und dementsprechend nur durch eine solche befriedigt werden können, verwendet mein Popup eine penetrante Hintergrundfarbe sowie einige bewegte sowie schnelle Animationen.

Um den Nutzer nicht zu überfodern, beinhaltet das Popup nur sehr wenig Text und arbeitet mehr mit visuellen Reizen. Ein weiteres Phänomen der Neuzeit ist es, seinen Kindern schon von Geburt an den Umgang mit Computern beizubringen. Da diese Kinder noch nicht lesen können, werden alle Inhalte des Popups durch selbsterklärende Kurzvideos (GIFs) zusätzlich dargestellt (z.B. ein großer Knopf zum Schließen des Popups wird durch ein Video erläutert, dass die Begierde zum Eindringen deutlich darstellt. Wait what?)

Der einzige Browser, mit dem dieses Popup garantiert fehlerfrei funktioniert, ist Google Chrome, weshalb das Popup für jeden anderen Browser (sei es Firefox, Safari oder Internet Explorer) nur einen traurigen Mike anzeigt. Mit Internet Explorer funktioniert das Popup sogar überhaupt nicht (Ist ein Feature, kein Bug). Um den Nutzer auf diese Beschränkung aufmerksam zu machen, findet er unten links im Popup einen Hinweistext (sofern er einen der unterstützten Browser verwendet). 

Da die meisten Webentwickler nur in HTML und CSS programmieren können und keine Berührungspunkte mit Javacript haben wollen, können, oder dürfen (denen fallen viele Ausreden ein), braucht es nur ein HTML Attribut (``data-open-cc``) um einen Button zum Öffnen des Popups fähig zu machen.

> Der "JA JA, LECK MICH" Button ist eine Anspielung an die Känguru Chroniken ^^