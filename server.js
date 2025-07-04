const express = require('express');
const path = require('path');
const openaiRoute = require('./routes/openai');

const app = express();
const PORT = process.env.PORT || 3000;

// إعداد الميدل وير
app.use(express.json());

// مسار API الخاص بـ OpenAI
app.use('/api/openai', openaiRoute);

// تقديم ملفات الواجهة (Frontend)
app.use(express.static(path.join(__dirname, 'client')));

// أي مسار غير معروف يرجع index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
// تشغيل السيرفر
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
