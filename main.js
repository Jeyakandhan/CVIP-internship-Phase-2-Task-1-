// Function to generate a random short code
function generateShortCode() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const codeLength = 6;
    let shortCode = '';
    
    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortCode += characters.charAt(randomIndex);
    }
    
    return shortCode;
}

// Function to handle URL shortening
function shortenURL() {
    const originalLink = document.getElementById("original-link").value;
    
    // Generate a random short code
    const shortCode = generateShortCode();
    
    // For demonstration, using a simple short link format
    const shortLink = `https://short.url/${shortCode}`;
    
    const shortenedLinkContainer = document.getElementById("shortened-link");
    shortenedLinkContainer.innerHTML = `<p>Shortened Link: <a href="${shortLink}" target="_blank">${shortLink}</a></p>`;
}

// Add click event listener to the "Shorten" button
document.getElementById("shorten-button").addEventListener("click", shortenURL);
