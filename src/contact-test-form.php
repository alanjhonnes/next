<?php
require_once 'phpmailer/PHPMailerAutoload.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['lastName']) && isset($_POST['company']) && isset($_POST['employees']) && isset($_POST['position'])) {

    //check if any of the inputs are empty
    if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['lastName']) || empty($_POST['company']) || empty($_POST['employees']) || empty($_POST['position'])) {
        $data = array('success' => false, 'message' => 'Preencha todos os campos.');
        echo json_encode($data);
        exit;
    }
    $name = $_POST['name'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $position = $_POST['position'];
    $employees = $_POST['employees'];


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
    $mail->Subject = 'Contato do site NextGroup - Teste Grátis';
    $mail->msgHTML("<h2>Contato para Teste Grátis:</h2>
                    <p><strong>Nome:</strong> $name</p>
                    <p><strong>Sobrenome:</strong> $lastName</p>
                    <p><strong>Empresa:</strong> $company</p>
                    <p><strong>Cargo:</strong> $position</p>
                    <p><strong>Nº de colaboradores:</strong> $employees</p>
                    <p><strong>Email:</strong> $email</p>
                    <p><strong>Tel:</strong> $phone</p>
                    ");

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Erro no servidor, tente novamente.');
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Pedido enviado!');
    echo json_encode($data);

}
else {
    $data = array('success' => false, 'message' => 'Preencha todos os campos.');
    echo json_encode($data);
}
