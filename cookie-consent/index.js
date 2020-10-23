(function() {

    /**
     * Define Constants
     */

    const LET_ME_IN_GIF_SRC = "https://media1.giphy.com/media/yx400dIdkwWdsCgWYp/giphy.gif?cid=ecf05e47v8yic6beau4ihsmrr8eukadyvdy9zo2stsd149t4&rid=giphy.gif"
    const COOKIE_IMAGE_SRC = "cookie-consent/cookie.png"
    const NEULAND_GIF_SRC = "https://media1.tenor.com/images/e19c37aba799d79779eed12c28ee2f4c/tenor.gif"
    const DISAPPOINTED_IMAGE_SRC = "https://de.meming.world/images/de/thumb/b/bc/Mike_Wazowski-Sulley_Face_Swap.jpg/300px-Mike_Wazowski-Sulley_Face_Swap.jpg"
    const DOWNLOAD_CHROME_URL = "https://www.google.com/intl/de_de/chrome/"

    const LOCALSTORAGE_FLAG_NAME = "wer_das_liest_ist_doof"

    const IS_CHROME = /chrome/i.test(navigator.userAgent)
    const IS_ACCEPTED = !!localStorage.getItem(LOCALSTORAGE_FLAG_NAME)

    const stylesheet = document.createElement("style")
    document.head.appendChild(stylesheet)

    /**
     * Define Utilities
     */

    // Source: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    function makeid(length = 8) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // Add Rule (.class {...}) to stylesheet
    HTMLStyleElement.prototype.createRules = function(selector) {
        const index = this.sheet.insertRule(selector + " {}")
        return this.sheet.cssRules[index]
    }

    // Assign object to ruleset
    CSSStyleRule.prototype.assignCSSObject = function(cssObject) {
        Object.keys(cssObject).forEach(key => {
            let value = cssObject[key]

            if (typeof value === "number") {
                value = value + "px"
            }

            this.style[key] = value
        })
    }

    // Assign object to mediaquery ruleset
    CSSMediaRule.prototype.assignCSSObject = function(cssClass, cssObject) {
        const attributes = Object.entries(cssObject).map(([key, value]) => {
            if (typeof value === "number") {
                value = value + "px"
            }

            key = key.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase())

            return key + ":" + value
        }).join(";")
        
        this.insertRule(`.${cssClass} {${attributes}}`, 0)
    }

    // Create random class
    HTMLElement.prototype.createCSSClass = function() {
        this.cssClass = makeid()
        this.classList.add(this.cssClass)
    }

    // Assign css values of object to html element's class in stylesheet
    HTMLElement.prototype.css = function(...args) {
        if (!this.cssClass) {
            this.createCSSClass()
            this.cssRules = stylesheet.createRules("." + this.cssClass)
        }

        let rules = this.cssRules
        let cssObject = args[0]

        if (typeof args[0] === "string") {
            cssObject = args[1]
            const index = stylesheet.sheet.insertRule(`.${this.cssClass}${args[0]} {}`)
            rules = stylesheet.sheet.cssRules[index]
        }

        rules.assignCSSObject(cssObject)
    }

    // Create mediaquery for given DOM Element in stylesheet
    HTMLElement.prototype.mediaQuery = function(query, cssObject) {
        if (!this.cssClass) {
            this.createCSSClass()
        }

        const rules = stylesheet.createRules("@media only screen and " + query)

        rules.assignCSSObject(this.cssClass, cssObject)
    }

    const e = document.createElement.bind(document)

    // Handle open / close dialog
    const initialOverflow = getComputedStyle(document.body).overflow

    function open() {
        document.body.appendChild(root)
        document.body.style.overflow = "hidden"
        localStorage.removeItem(LOCALSTORAGE_FLAG_NAME)
    }

    function close() {
        document.body.removeChild(root)
        document.body.style.overflow = initialOverflow
        localStorage.setItem(LOCALSTORAGE_FLAG_NAME, true)
    }

    /**
     * Define DOM Elements
     */

    // Root container
    const root = e("div")

    // Inner container
    const innerContainer = e("div")

    // Top Row
    const topRow = e("div")

    // Let Me In GIF
    const letmeinGif = e("img")
    letmeinGif.setAttribute("src", LET_ME_IN_GIF_SRC)

    // Top Row
    const topButtonContainer = e("div")

    // Main Action Button
    const topButton = e("button")
    topButton.textContent = "JA JA, LECK MICH*"
    topButton.addEventListener("click", close)

    // Middle Row
    const middleRow = e("div")

    // Left Row
    const leftRow = e("div")

    // Right Row
    const rightRow = e("div")

    // Cookie Text
    const cookieText = e("div")
    cookieText.textContent = "Wir verwenden Cookies! Wenn Sie damit nicht einverstanden sind, verlassen Sie jetzt das Internet."

    // Neuland GIF
    const neulandGif = e("img")
    neulandGif.setAttribute("src", NEULAND_GIF_SRC)

    // Fun Text
    const funText = e("div")
    const spaces = " ".repeat(20)
    funText.innerHTML = `FF ist doof ${spaces} Safari auch ${spaces} Nur Chrome ist toll <3`

    // Cookie Image
    const cookieImage = e("img")
    cookieImage.setAttribute("src", COOKIE_IMAGE_SRC)

    // Proceed Button
    const proceedButton = e("button")
    proceedButton.textContent = "WEIDER ->"
    proceedButton.addEventListener("click", close)

    // Helper Text
    const helperText = e("p")
    helperText.textContent = "* Mit Klick auf 'JA JA, LECK MICH' verkaufen Sie ihre Seele an den Teufel."

    // Not Chrome Text
    const notChromeText = e("h3")
    notChromeText.textContent = "Wenn du nicht Chrome verwendest"

    // Disappointed Image
    const disappointedImage = e("img")
    disappointedImage.setAttribute("src", DISAPPOINTED_IMAGE_SRC)

    // Download Chrome Text
    const downloadChrome = e("a")
    downloadChrome.setAttribute("href", DOWNLOAD_CHROME_URL)
    downloadChrome.setAttribute("target", "_blank")
    downloadChrome.textContent = "Wechsle zur guten Seite"

    /**
     * Style Elements
     */

    const button = {
        background: "none",
        border: "none",
        fontWeight: "bold",
        padding: 10
    }

    root.css({
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
        backgroundColor: "rgba(0, 0, 0, .5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    })

    innerContainer.css({
        width: 700,
        backgroundColor: "hotpink",
        padding: 10
    })

    topRow.css({
        display: "flex",
        paddingBottom: 10,
        marginBottom: 10,
        borderBottom: "1px solid black"
    })

    letmeinGif.css({
        width: 300
    })

    topButtonContainer.css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    })

    topButton.css({
        ...button,
        background: "#00FF00",
        border: "5px solid #FF0000",
        fontSize: 32,
        transition: "transform 150ms"
    })

    topButton.css(":hover", {
        transform: "scale(1.2)"
    })

    middleRow.css({
        display: "flex"
    })

    leftRow.css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%"
    })

    rightRow.css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minWidth: 200
    })

    neulandGif.css({
        width: 230,
        margin: "0 auto"
    })

    funText.css({
        fontSize: 12,
        whiteSpace: "pre-wrap"
    })

    cookieImage.css({
        width: "100%"
    })

    proceedButton.css({
        ...button,
        fontSize: 32,
        background: "white",
        border: "2px solid black",
        marginTop: 10,
        transition: "transform 150ms"
    })

    proceedButton.css(":hover", {
        transform: "scale(.9)"
    })

    helperText.css({
        fontSize: 10,
        margin: 0
    })

    notChromeText.css({
        textAlign: "center"
    })

    disappointedImage.css({
        width: 300,
        margin: "20px auto 10px auto",
        display: "block"
    })

    downloadChrome.css({
        fontSize: 16,
        fontWeight: "bold",
        display: "block",
        textAlign: "center",
        marginBottom: 20
    })

    /**
     * Create Responsive Styles
     */

    const breakpoint = "(max-width: 700px)"

    innerContainer.mediaQuery(breakpoint, {
        width: "80% !important",
        maxHeight: "80vh",
        overflowY: "scroll"
    })

    topRow.mediaQuery(breakpoint, {
        flexDirection: "column",
        alignItems: "center"
    })

    letmeinGif.mediaQuery(breakpoint, {
        marginBottom: 10,
        width: "100% !important"
    })

    topButton.mediaQuery(breakpoint, {
        width: "100%"
    })

    topButton.mediaQuery("(max-width: 415px)", {
        fontSize: "26px !important"
    })

    middleRow.mediaQuery(breakpoint, {
        flexDirection: "column"
    })
    
    cookieText.mediaQuery(breakpoint, {
        marginBottom: 10
    })

    rightRow.mediaQuery(breakpoint + " and (min-width: 421px)", {
        flexDirection: "row !important"
    })

    rightRow.mediaQuery("(max-width: 420px)", {
        flexDirection: "column !important"
    })

    neulandGif.mediaQuery(breakpoint, {
        width: "100% !important"
    })

    proceedButton.mediaQuery(breakpoint, {
        fontSize: "20px !important",
        margin: "0 !important"
    })

    funText.mediaQuery(breakpoint, {
        margin: "10px 0"
    })
    
    helperText.mediaQuery(breakpoint, {
        marginTop: "10px !important"
    })

    disappointedImage.mediaQuery(breakpoint, {
        width: "100% !important"
    })

    /**
     * Compose Elements
     */

    topButtonContainer.appendChild(topButton)

    topRow.appendChild(letmeinGif)
    topRow.appendChild(topButtonContainer)

    if (!IS_CHROME) {
        innerContainer.appendChild(topRow)
        innerContainer.appendChild(notChromeText)
        innerContainer.appendChild(disappointedImage)
        innerContainer.appendChild(downloadChrome)
        innerContainer.appendChild(helperText)
    } else {
        leftRow.appendChild(cookieText)
        leftRow.appendChild(neulandGif)
        leftRow.appendChild(funText)

        rightRow.appendChild(cookieImage)
        rightRow.appendChild(proceedButton)

        middleRow.appendChild(leftRow)
        middleRow.appendChild(rightRow)

        innerContainer.appendChild(topRow)
        innerContainer.appendChild(middleRow)
        innerContainer.appendChild(helperText)
    }

    root.appendChild(innerContainer)

    if (!IS_ACCEPTED) {
        open()
    }

    // Expose function to window object
    window.openCookieConsent = open
    window.closeCookieConsent = close
})()