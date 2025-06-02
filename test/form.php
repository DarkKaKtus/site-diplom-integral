<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
    <h1>Клининговый центр</h1>
    </header>
<main>
    <div class="form">
    <form action="form.php" method="POST">
        <label for="time"> Время получения </label>
        <input id="time" type="date" name="time" required>
        <label for="adres"> Адрес </label>
        <input id="adres" type="text" name="adres">
        <label for="number"> Контактные данные </label>
        <input placeholder="+7..." id="number" type="text" name="number" required>
        <label for="service"> Выбор услуги </label>
        <select class="select-css" id="options">
            <option value="">Общий клининг</option>
            <option value="">Генеральная уборка</option>
            <option value="">Послестроительная уборка</option>
            <option value="">Химчистка ковров и мебели</option>
        </select>
        <label for="pay"> Тип оплаты </label>
        <select class="select-css" id="pay">
            <option value="">Банковская карта</option>
            <option value="">Наличные</option>
        </select>
        <button type="submit" value="Отправить">Отправить</button>
    </form>

</div>
</main>
<footer>
    <p>Тесляк Игорь 711.722 ТТЖТ</p>
</footer>
</body>
</html>