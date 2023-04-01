const answer = "Impact Byte";

let guess = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");

while (guess !== answer) {
  guess = prompt("Maaf, jawaban kamu salah. Silakan coba lagi. Sebutkan kepanjangan dari nama IB (Impact Byte)?");
}

alert("Selamat jawaban kamu benar!");