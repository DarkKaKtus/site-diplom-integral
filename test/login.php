<?php
session_start();
require 'dbconnect.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc())
{
    if ($password === $user['password']){
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['name'] = $user['name'];
        $_SESSION['role'] = $user['role'];

        if ($user['role'] === 'admin') {
            header("Location: admin.php");
            exit;
        } else {
            header ("Location: form.php");
            exit;
        }
    } else {
        echo "Неверный пароль";
    }
} 
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Вход</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
    <h1>Клининговый центр</h1>
    </header>

<main>

    <div class="form">
    
    <form action="login.php" method="POST">
        <label for="email"> Почта </label>
        <input id="email" type="email" name="email" required>
        <label for="password"> Пароль </label>
        <input id="password" type="password" name="password" required>
        <button type="submit" value="Отправить">Войти</button>
    </form>
    <p>Нет аккаунта?<a href="index.php">Зарегистрироваться</a></p>

</div>
</main>
<footer>
    <p>Тесляк Игорь 711.722 ТТЖТ</p>
</footer>
</body>
</html>