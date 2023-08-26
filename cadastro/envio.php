<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'naoresponda@rabiconsignados.com';
    $mail->Password   = 'Psl#07092014';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom('naoresponda@rabiconsignados.com', 'Cadastro');
    $mail->addAddress('naoresponda@rabiconsignados.com', 'Rabi');
    $mail->addReplyTo('naoresponda@rabiconsignados.com', 'Rabi');

    $mail->CharSet = 'UTF-8';

    $body = "<h3>INFORMAÇÕES PESSOAIS:</h3><br>
            <br>
            <b>Nome:</b> ". $_POST['nome']."<br>
            <b>Data de Nascimento:</b> ". $_POST['data_nascimento']."<br>
            <b>CPF:</b> ". $_POST['cpf']."<br>
            <b>E-mail:</b> ". $_POST['email']."<br>
            <b>Whatsapp:</b> ". $_POST['whatsapp']."<br>
            <b>Restrição:</b> ". $_POST['restricao']."<br>
            <b>Onde nos conheceu:</b> ". $_POST['conheceu']."<br>
            <br>
            <br>
            <h3>ENDEREÇO RESIDENCIAL:</h3><br>
            <br>
            <b>CEP:</b> ". $_POST['cep']."<br>
            <b>Endereço:</b> ". $_POST['endereco']."<br>
            <b>Número:</b> ". $_POST['numero']."<br>
            <b>Ponto de Referência:</b> ". $_POST['ponto_referencia']."<br>
            <b>Bairro:</b> ". $_POST['bairro']."<br>
            <b>Cidade:</b> ". $_POST['cidade']."<br>
            <b>Estado:</b> ". $_POST['estado'];

    $mail->isHTML(true);
    $mail->Subject = 'Formulário de Cadastro';
    $mail->Body    = $body;

    $mail->send();

    header("Location: sucesso.html");
    exit();
    
} catch (Exception $e) {
    header("Location: caminho/para/erro.html");
    exit();
}