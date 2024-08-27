document.getElementById("encryptBtn").addEventListener("click", function() {
    var text = document.getElementById("textToEncrypt").value;
    if (text.trim() === "") {
        document.getElementById("validationMessage").textContent = "Por favor, introduce un texto para cifrar.";
        return;
    }
    // Aquí iría la lógica de cifrado
    var encryptedText = btoa(text); // Ejemplo básico usando Base64
    document.getElementById("outputText").value = encryptedText;
    document.getElementById("validationMessage").textContent = "";
});

document.getElementById("decryptBtn").addEventListener("click", function() {
    var text = document.getElementById("textToEncrypt").value;
    if (text.trim() === "") {
        document.getElementById("validationMessage").textContent = "Por favor, introduce un texto para descifrar.";
        return;
    }
    // Aquí iría la lógica de descifrado
    try {
        var decryptedText = atob(text); // Ejemplo básico usando Base64
        document.getElementById("outputText").value = decryptedText;
        document.getElementById("validationMessage").textContent = "";
    } catch (e) {
        document.getElementById("validationMessage").textContent = "Texto no válido para descifrar.";
    }
});

document.getElementById("copyBtn").addEventListener("click", function() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    document.getElementById("validationMessage").textContent = "Resultado copiado al portapapeles.";
});
