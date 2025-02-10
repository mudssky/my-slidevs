import Config from './config.json'

import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: Config.deepseek_base_url,
  apiKey: Config.deepseek_api_key,
})

const system_prompt = `
The user will provide some exam text. Please parse the "question" and "answer" and output them in JSON format. 

EXAMPLE INPUT: 
Which is the highest mountain in the world? Mount Everest.

EXAMPLE JSON OUTPUT:
{
    "question": "Which is the highest mountain in the world?",
    "answer": "Mount Everest"
}
`
const res = await openai.chat.completions.create({
  model: 'deepseek-chat',
  messages: [
    { role: 'system', content: system_prompt },
    { role: 'user', content: '实现一个获取今日天气的html网页程序' },
  ],
  response_format: {
    type: 'json_object',
  },
})

console.log(res.choices[0].message.content)
// {
//     "question": "实现一个获取今日天气的html网页程序",
//     "answer": "要创建一个获取今日天气的HTML网页程序，你可以使用HTML、CSS和JavaScript。以下是一个简单的示例，它使用OpenWeatherMap API来获取天气信息。请注意，你需要注册OpenWeatherMap并 获取一个API密钥。\n\nHTML部分:\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>今日天气</title>\n    <style>\n        body { font-family: Arial, sans-serif; }\n        #weather { margin-top: 20px; }\n    </style>\n</head>\n<body>\n    <h1>今日天气</h1>\n    <input type=\"text\" id=\"city\" placeholder=\"输入城市名称\">\n    <button onclick=\"getWeather()\"> 获取天气</button>\n    <div id=\"weather\"></div>\n\n    <script>\n        function getWeather() {\n            const city = document.getElementById('city').value;\n            const apiKey = '你的API密钥'; // 替换为你的OpenWeatherMap API密钥\n            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;\n\n            fetch(url)\n                .then(response => response.json())\n                .then(data => {\n                    const weatherDiv = document.getElementById('weather');\n                    if(data.cod === 200) {\n                        weatherDiv.innerHTML = `<p>城市: ${data.name}</p>\n                                               <p>温度: ${data.main.temp}°C</p>\n                                               <p>天气: ${data.weather[0].description}</p>`;\n                    } else {\n                        weatherDiv.innerHTML = `<p>无法获取天气信息</p>`;\n                    }\n                })\n                .catch(() => {\n                    const weatherDiv = document.getElementById('weather');\n                    weatherDiv.innerHTML = `<p>无法获取天气信息</p>`;\n                });\n        }\n    </script>\n</body>\n</html>\n```\n\n这个示例创建了一个简单的网页，用户可以在输入框中输入城市名称，然后点击按钮获取该城市的今日天气信息。天气信息包括城市名称、温度和天气描述。请确保将'你的API密钥'替换为你从OpenWeatherMap获取的实际API密钥。"
// }
