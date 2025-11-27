const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const https = require('https');

// Manually load .env
let API_KEY = "";
try {
    const envContent = fs.readFileSync('.env', 'utf-8');
    const match = envContent.match(/VITE_GEMINI_API_KEY=["']?([^"'\n]+)["']?/);
    if (match) {
        API_KEY = match[1];
    }
} catch (e) {
    console.error("Error reading .env:", e);
}

console.log("Testing Gemini API...");

if (!API_KEY) {
    console.error("Error: VITE_GEMINI_API_KEY not found in .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

// Helper for fetch since it might not be available
function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

async function test() {
    try {
        console.log("Fetching available models via REST API...");
        const data = await fetchJson(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);

        if (data.error) {
            console.error("API Error:", data.error);
            fs.writeFileSync('error.log', JSON.stringify(data.error, null, 2));
            return;
        }

        console.log("Available models:");
        const models = data.models || [];
        const modelNames = models.map(m => m.name);
        fs.writeFileSync('models.log', JSON.stringify(models, null, 2));
        models.forEach(m => console.log(`- ${m.name}`));

        // Try gemini-1.5-flash-001 specifically if available, otherwise fallback
        let targetModel = "gemini-1.5-flash";
        if (modelNames.some(n => n.includes("gemini-1.5-flash-001"))) {
            targetModel = "gemini-1.5-flash-001";
        } else if (modelNames.some(n => n.includes("gemini-1.0-pro"))) {
            targetModel = "gemini-1.0-pro";
        }

        console.log(`Testing with model: ${targetModel}...`);
        const model = genAI.getGenerativeModel({ model: targetModel });
        const result = await model.generateContent("Hello?");
        const response = await result.response;
        console.log("Success! Response:", response.text());

    } catch (error) {
        console.error("Error testing API:", error);
        fs.writeFileSync('error.log', JSON.stringify(error, null, 2) + "\n" + error.toString());
    }
}

test();
