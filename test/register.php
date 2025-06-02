<?php
require 'dbconnect.php';

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$password = $_POST['password'];
$role = 'user';

$sql = "INSERT INTO users (name, surname, email, password, role) VALUES(?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt -> bind_param("sssss", $name, $surname, $email, $password, $role);


if ($stmt->execute()) {
    echo "Регистрация прошла успешно <a href='login.php'>Войти</a>";
} else {
    echo "Ошибка: " . $stmt->error;
}
?>