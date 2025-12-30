<div align="center">

# 💱 Currency Converter

### Real-time Currency Exchange Rate Converter

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/yourusername/currency-converter/graphs/commit-activity)

[Demo](https://yourusername.github.io/currency-converter) • [Report Bug](https://github.com/yourusername/currency-converter/issues) • [Request Feature](https://github.com/yourusername/currency-converter/issues)

</div>

---

## 📸 Screenshots

<div align="center">

### Desktop View
![Desktop View](screenshots/desktop-view.png)

### Mobile View
<img src="screenshots/mobile-view.png" alt="Mobile View" width="300"/>

### Demo GIF
![Demo](screenshots/demo.gif)

</div>

---

## ✨ Features

- 🌍 **Real-time Exchange Rates** - Fetches live currency conversion rates
- 💱 **10 Major Currencies** - Support for USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, INR, MXN
- 🔄 **Quick Swap** - Instantly swap between currencies with animated button
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Clean gradient design with smooth animations
- ⚡ **Fast & Lightweight** - No framework dependencies, pure vanilla JavaScript
- 🔍 **Real-time Validation** - Input validation with helpful error messages
- ⌨️ **Keyboard Support** - Press Enter to convert instantly
- 🌐 **API Integration** - Powered by ExchangeRate-API

---

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A free API key from [ExchangeRate-API](https://www.exchangerate-api.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   cd currency-converter
   ```

2. **Get your FREE API Key**
   - Visit [ExchangeRate-API](https://www.exchangerate-api.com/)
   - Sign up for a free account (no credit card required)
   - Copy your API key

3. **Configure the API Key**
   
   Open `script.js` and replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

4. **Launch the application**
   
   Simply open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

5. **Visit** `http://localhost:8000` in your browser

---

## 📖 Usage

1. **Enter Amount**: Type the amount you want to convert
2. **Select Currencies**: Choose the source and target currencies from dropdowns
3. **Convert**: Click the "Convert" button or press Enter
4. **View Result**: See the converted amount and exchange rate
5. **Swap**: Use the swap button to quickly reverse currencies

### Example
```
Input:  100 USD
Output: 93.45 EUR
Rate:   1 USD = 0.9345 EUR
```

---

## 🏗️ Project Structure

```
currency-converter/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # JavaScript logic and API calls
├── README.md           # Project documentation
│
└── screenshots/        # Screenshots folder (create this)
    ├── desktop-view.png
    ├── mobile-view.png
    └── demo.gif
```

---

## 🎨 Color Palette

| Color         | Hex Code  | Usage            |
|---------------|-----------|------------------|
| Primary       | `#667eea` | Buttons, accents |
| Secondary     | `#764ba2` | Gradient end     |
| Background    | `#f8f9ff` | Result box       |
| Text          | `#333333` | Primary text     |
| Border        | `#e0e0e0` | Input borders    |

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript (ES6+)** - Async/await, Fetch API
- **ExchangeRate-API** - Real-time currency data

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1440px and up)

---

## 🔑 API Information

This project uses the [ExchangeRate-API](https://www.exchangerate-api.com/) for fetching real-time exchange rates.

**Free Tier Includes:**
- ✅ 1,500 requests per month
- ✅ Access to 160+ currencies
- ✅ No credit card required

**Alternative APIs:**
- [Fixer.io](https://fixer.io/)
- [CurrencyLayer](https://currencylayer.com/)
- [Open Exchange Rates](https://openexchangerates.org/)

---

## 🌟 Key Code Snippets

### Fetching Exchange Rates
```javascript
async function convertCurrency() {
    const response = await fetch(`${API_URL}${API_KEY}/pair/${from}/${to}`);
    const data = await response.json();
    const rate = data.conversion_rate;
    const convertedAmount = (amount * rate).toFixed(2);
}
```

### Swap Animation
```css
.swap-btn:hover {
    background: #667eea;
    color: white;
    transform: rotate(180deg);
    transition: all 0.3s;
}
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Known Issues

- [ ] API rate limit handling needs improvement
- [ ] Add more currency options
- [ ] Implement offline mode with cached rates

See the [open issues](https://github.com/yourusername/currency-converter/issues) for a full list of proposed features and known issues.

---

## 📝 Future Enhancements

- [ ] 📊 Historical exchange rate charts
- [ ] 💾 Save favorite currency pairs
- [ ] 🌙 Dark mode toggle
- [ ] 📈 Currency trend indicators
- [ ] 🔔 Rate alerts and notifications
- [ ] 🌐 Support for 100+ currencies
- [ ] 💱 Multi-currency conversion
- [ ] 📱 Progressive Web App (PWA)

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [ExchangeRate-API](https://www.exchangerate-api.com/) for providing free currency data
- [Shields.io](https://shields.io/) for the awesome badges
- [Font Awesome](https://fontawesome.com/) for icons inspiration
- The open-source community for continuous inspiration

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ and ☕

[Back to Top ↑](#-currency-converter)

</div>
