document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nameInputs = document.querySelectorAll(".nameInput");
    const names = Array.from(nameInputs)
        .map(input => input.value.trim())
        .filter(name => name !== "");

    if (names.length === 0) {
        alert("Preencha pelo menos um nome.");
        return;
    }

    const message = document.getElementById("message").value;
    const body = { names, message };

    try {
        const response = await fetch("https://fsdt-contact.onrender.com/contact", {
        //const response = await fetch("https://eoki5cawskca7ra.m.pipedream.net", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
        } else {
            alert("Erro ao enviar mensagem.");
        }
    } catch (error) {
        alert("Falha na requisição.");
    }
});
