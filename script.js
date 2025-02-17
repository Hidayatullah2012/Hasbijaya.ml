document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        document.getElementById("warning").textContent = "⚠️ Wah, hampir ketipu! Ini hanya contoh phishing.";
    }
});