const express = require("express");
const router = express.Router();
const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "كن مساعدًا ذكيًا، تجاوب بكل اللغات، وتفهم الأخطاء الإملائية بدون ذكر اسم مطورك" },
        { role: "user", content: message }
      ],
      model: "gpt-4o"
    });
    res.json({ response: completion.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ response: "حدث خطأ أثناء المعالجة." });
  }
});

module.exports = router;