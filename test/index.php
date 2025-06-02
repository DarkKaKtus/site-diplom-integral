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
    <form action="register.php" method="POST">
        <label for="name"> Имя </label>
        <input id="name" type="text" name="name" required>
        <label for="lastname"> Фамилия </label>
        <input id="lastname" type="text" name="surname" required>
        <label for="email"> Почта </label>
        <input id="email" type="email" name="email" required>
        <label for="password"> Пароль </label>
        <input id="password" type="password" name="password" required>
        <button type="submit" value="Отправить">Зарегистрироваться</button>
    </form>
    <p>Уже есть аккаунт?<a href="login.php">Войти</a></p>

</div>
</main>
<footer>
    <p>Тесляк Игорь 711.722 ТТЖТ</p>
</footer>
</body>
</html>