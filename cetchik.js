<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Счетчик посещений</title>
</head>
<body>

<div id="visitCount">Загрузка счетчика посещений...</div>

<script>
// Эта функция вызывается, когда страница загружена
window.onload = function() {
  fetch('https://example.com/path-to-your-backend/visits', {
    method: 'POST'
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('visitCount').textContent = Количество посещений: ${data};
  })
  .catch(err => console.error('Ошибка:', err));
};
</script>

</body>
</html>
