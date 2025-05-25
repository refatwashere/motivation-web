async function getOnlineQuote() {
    try {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        return data.content;
    } catch {
        return "Stay strong — you are your own universe.";
    }
}

function getRandomMessage() {
    const messages = [
        "You are destined for greatness!",
        "Today, the stars align just for you.",
        "Believe in your journey; you're on the right path.",
        "Every challenge shapes your cosmic strength."
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

document.getElementById('getQuote').addEventListener('click', async () => {
    const name = document.getElementById('username').value;
    const birthdate = document.getElementById('birthdate').value;
    const partner = document.getElementById('partner').value;

    let message = `${name}, born on ${birthdate}, your horoscope shines bright today.`;

    if (partner) {
        message += ` With ${partner}, your stars suggest a strong bond and shared dreams.`;
    }

    const randomMsg = getRandomMessage();
    const onlineQuote = await getOnlineQuote();

    document.getElementById('result').innerHTML = `✨ ${message} ✨<br><br>${randomMsg}<br><br>💬 Online Quote: "${onlineQuote}"`;
});