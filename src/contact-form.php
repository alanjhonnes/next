<?php
require_once 'phpmailer/PHPMailerAutoload.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputPhone']) && isset($_POST['inputMessage'])) {

    //check if any of the inputs are empty
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputPhone']) || empty($_POST['inputMessage'])) {
        $data = array('success' => false, 'message' => 'Preencha todos os campos.');
        echo json_encode($data);
        exit;
    }
    $name = $_POST['inputName'];
    $email = $_POST['inputEmail'];
    $phone = $_POST['inputPhone'];
    $message = nl2br($_POST['inputMessage']);

    //create an instance of PHPMailer
    $mail = new PHPMailer();
    $mail->isSMTP();

    $mail->Host       = "smtp.shape.art.br"; // SMTP server
    $mail->SMTPAuth   = true;                  // enable SMTP authentication
    $mail->Port       = 587;                    // set the SMTP port for the GMAIL server
    $mail->Username   = "alan@shape.art.br"; // SMTP account username
    $mail->Password   = "betjho123";        // SMTP account password
    $mail->AddAddress('atendimento@nxtgroup.com.br', 'Atendimento');
    //$mail->AddAddress('aj@alanjhonnes.com', 'Alan Jhonnes');
    $mail->Sender = 'alan@shape.art.br';
    $mail->SetFrom($email, $name);
    $mail->Subject = 'Contato do site NextGroup';
    $mail->msgHTML("<h2>Contato do site:</h2>
                    <p><strong>Email:</strong> $email</p>
                    <p><strong>Tel:</strong> $phone</p>
                    <p><strong>Mensagem:</strong> $message</p>");

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Erro no servidor, tente novamente.');
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Mensagem enviada!');
    echo json_encode($data);

}
else {
    $data = array('success' => false, 'message' => 'Preencha todos os campos.');
    echo json_encode($data);
}
