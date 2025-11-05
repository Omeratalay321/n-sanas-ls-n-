// script.js dosyası

const questionText = document.getElementById('question-text');
const initialButtons = document.getElementById('initial-buttons');
const sadButtons = document.getElementById('sad-buttons');
const resultText = document.getElementById('result-text');

// İyi veya Kötü seçildiğinde
function handleInitial(state) {
    initialButtons.style.display = 'none'; // Başlangıç butonlarını gizle

    if (state === 'iyi') {
        // İyiyim seçildi
        questionText.textContent = "Güzel! İyi olmana çok sevindim! :)";
        resultText.textContent = "Umarım günün harika geçer!";
    } else {
        // Kötüyüm seçildi
        questionText.textContent = "Ah, neden üzgünsün?";
        sadButtons.style.display = 'block'; // Üzgün butonlarını göster
    }
}

// Üzgünüm, Kırgınım veya İyi Hissetmiyorum seçildiğinde
function handleSad(reason) {
    sadButtons.style.display = 'none'; // Üzgün butonlarını gizle

    let encouragement = "";
    
    // Sana özel söz!
    const specialMessage = "Saçın turuncu olmuş! (ve bu çok yakışmış!)";

    switch(reason) {
        case 'üzgünüm':
            encouragement = "Üzgün olsan da, en kötü günün böyle olsun. Unutma, sen değerlisin!";
            break;
        case 'kırgınım':
            encouragement = "Kırgınlıklar geçer. Kim seni kırdıysa, bil ki senin değerini bilmiyordur.";
            break;
        case 'iyiHissetmiyorum':
            encouragement = "Bazen hepimiz böyle hissederiz. Önemli olan kendine iyi bakman.";
            break;
    }

    // Sonucu ekrana yazdır ve özel sözü ekle
    questionText.textContent = encouragement;
    resultText.innerHTML = `<span style="color: #007bff; font-weight: bold;">(İyi hissetmen için özel söz)</span>: ${specialMessage}`;
}