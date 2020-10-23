// (function() {

const LET_ME_IN_GIF_SRC = "https://media1.giphy.com/media/yx400dIdkwWdsCgWYp/giphy.gif?cid=ecf05e47v8yic6beau4ihsmrr8eukadyvdy9zo2stsd149t4&rid=giphy.gif"
const COOKIE_IMAGE_SRC = "cookie-consent/cookie.png"
const NEULAND_GIF_SRC = "https://media1.tenor.com/images/e19c37aba799d79779eed12c28ee2f4c/tenor.gif"
const DISAPPOINTED_IMAGE_SRC = "https://de.meming.world/images/de/thumb/b/bc/Mike_Wazowski-Sulley_Face_Swap.jpg/300px-Mike_Wazowski-Sulley_Face_Swap.jpg"
const DOWNLOAD_CHROME_URL = "https://www.google.com/intl/de_de/chrome/"

const IS_CHROME = /chrome/i.test(navigator.userAgent)

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

const stylesheet = document.createElement("style")
document.head.appendChild(stylesheet)

HTMLElement.prototype.css = function (...args) {
    if (!this.cssClass) {
        this.cssClass = makeid()
        this.classList.add(this.cssClass)
        const index = stylesheet.sheet.insertRule(`.${this.cssClass} {}`)
        this.cssRules = stylesheet.sheet.cssRules[index]
    }

    let rules = this.cssRules
    let cssObject = args[0]

    if (typeof args[0] === "string") {
        cssObject = args[1]
        const index = stylesheet.sheet.insertRule(`.${this.cssClass}${args[0]} {}`)
        rules = stylesheet.sheet.cssRules[index]
    }

    Object.keys(cssObject).forEach(key => {
        let value = cssObject[key]

        if (typeof value === "number") {
            value = value + "px"
        }

        rules.style[key] = value
    })
}

const e = document.createElement.bind(document)

// Handle open / close dialog
const initialOverflow = getComputedStyle(document.body).overflow
document.body.style.overflow = "hidden"

function close() {
    document.body.removeChild(root)
    document.body.style.overflow = initialOverflow
}

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
    transition: "all 150ms"
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
    whiteSpace: "pre"
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
    transition: "all 150ms"
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

document.body.appendChild(root)

// })()