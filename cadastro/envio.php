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

    $body = "<b>Informação Pessoal:</b><br>
            <br>
            Nome:  ". $_POST['nome']."<br>
            Data de Nascimento:  ". $_POST['data_nascimento']."<br>
            CPF:  ". $_POST['cpf']."<br>
            E-mail:  ". $_POST['email']."<br>
            Whatsapp:  ". $_POST['whatsapp']."<br>
            Restrição:  ". $_POST['restricao']."<br>
            Onde nos conheceu:  ". $_POST['conheceu']."<br>
            <br>
            <br>
            <b>Endereço Residencial:</b><br>
            <br>
            CEP:  ". $_POST['cep']."<br>
            Endereço:  ". $_POST['endereco']."<br>
            Número:  ". $_POST['numero']."<br>
            Ponto de Referência:  ". $_POST['ponto_referencia']."<br>
            Bairro:  ". $_POST['bairro']."<br>
            Cidade:  ". $_POST['cidade']."<br>
            Estado:  ". $_POST['estado'];

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