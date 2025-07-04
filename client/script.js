
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('message');
const responseDiv = document.getElementById('response');

sendBtn.addEventListener('click', async () => {
  const message = messageInput.value.trim();
  if (!message) {
    alert('يرجى كتابة رسالة قبل الإرسال');
    return;
  }

  responseDiv.textContent = 'جارٍ إرسال الرسالة...';

  try {
    const res = await fetch('https://www.kr-x.life/api/openai/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) throw new Error('فشل الاتصال بالخادم');

    const data = await res.json();
    responseDiv.textContent = data.error ? 'خطأ من السيرفر: ' + data.error : data.reply;
  } catch (error) {
    responseDiv.textContent = 'حدث خطأ: ' + error.message;
  }
});
