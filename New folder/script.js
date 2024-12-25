const quotes = [
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", author: "James Baldwin" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const refreshButton = document.getElementById('refresh-btn');
const translateButton = document.getElementById('translate-btn');

// Lấy trích dẫn ngẫu nhiên
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    quoteElement.textContent = `"${selectedQuote.quote}"`;
    authorElement.textContent = `- ${selectedQuote.author}`;
}

// Dịch trích dẫn ra tiếng Việt (có thể sử dụng dịch thủ công hoặc API)
function translateToVietnamese() {
    const quoteText = quoteElement.textContent;
    const translatedQuote = translateQuote(quoteText);
    quoteElement.textContent = `"${translatedQuote}"`;
}

// Hàm dịch trích dẫn thủ công (thay vì sử dụng API dịch)
function translateQuote(quote) {
    const translations = {
        "The best time to plant a tree was 20 years ago. The second best time is now.": "Thời gian tốt nhất để trồng một cây là 20 năm trước. Thời gian tốt thứ hai là ngay bây giờ.",
        "Your time is limited, don’t waste it living someone else’s life.": "Thời gian của bạn là có hạn, đừng lãng phí nó vào việc sống cuộc đời của người khác.",
        "Not everything that is faced can be changed, but nothing can be changed until it is faced.": "Không phải mọi thứ đối diện đều có thể thay đổi, nhưng không có gì có thể thay đổi cho đến khi nó được đối mặt.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.": "Thành công không phải là cuối cùng, thất bại không phải là chết người: Điều quan trọng là lòng can đảm để tiếp tục.",
        "The only way to do great work is to love what you do.": "Cách duy nhất để làm công việc vĩ đại là yêu thích những gì bạn làm.",
        "You miss 100% of the shots you don’t take.": "Bạn sẽ bỏ lỡ 100% các cơ hội mà bạn không thử.",
        "Hardships often prepare ordinary people for an extraordinary destiny.": "Khó khăn thường chuẩn bị cho những người bình thường một số phận phi thường.",
        "Believe you can and you’re halfway there.": "Hãy tin rằng bạn có thể và bạn đã đi được một nửa chặng đường."
    };

    return translations[quote] || quote;
}

// Sự kiện khi người dùng nhấn nút "Get Another Quote"
refreshButton.addEventListener('click', getRandomQuote);

// Sự kiện khi người dùng nhấn nút "Translate to Vietnamese"
translateButton.addEventListener('click', translateToVietnamese);

// Khởi tạo trang web với một trích dẫn ngẫu nhiên
getRandomQuote();
