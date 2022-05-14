<?php

$to = 'ulyibka.el@mail.ru';
$subject = 'Заявка с сайта';



function clear_data($value) {
    $value = trim($value);
    $value = stripslashes($value);
    $value = htmlspecialchars($value);
    return $value;
}


$userMail = clear_data($_POST['user_email']);
$userName = clear_data($_POST['user_name']);
$userTel = clear_data($_POST['user_phone']);
$userMessage = clear_data($_POST['user_message']);


$headers = [
    "From" => $userMail,
    "Reply-To" => $userMail,
    "X-Mailer" => "PHP/" . phpversion(),
    "Content-type" => "text/html; charset=utf-8"
];


$message = '
    <html>
    <body>
    <table border="1" cellpadding="6" cellspacing="0" width="100%" bordercolog="black">

    <tr><td colspan="2" align="center" bgcolor="gray"><b>Информация о клиенте</b></td></tr>

';


$message .= '
<tr>
    <td>
        <b>Имя клиента</b>
    </td>
    <td>'. $userName .'</td>
</tr>

<tr>
    <td>
        <b>почта</b>
    </td>
    <td>'. $userMail .'</td>
</tr>

<tr>
    <td>
        <b>телефон</b>
    </td>
    <td>'. $userTel .'</td>
</tr>

<tr>
    <td>
        <b>Сообщение</b>
    </td>
    <td>'. $userMessage .'</td>
</tr>
';



mail($to, $subject, $message, $headers);
