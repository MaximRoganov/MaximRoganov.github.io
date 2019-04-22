<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';





$text = 'Текст сообщения:<br>';
foreach($_POST as $key => $value ){
	$text.= '<p>';
	$text.= '<b>';
	$text.= $key;
	$text.= '</b>';
	$text.= ' : ';
	$text.= $value;
	$text.= '</p>';
	$text.= '</br>';

}


$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {

	$mail->CharSet = 'utf-8';
    //Recipients
    $mail->setFrom('arutyunyan.artem121094@gmail.com', 'PHOENIX -web studio');
    $mail->addAddress('arutyunyan.artem121094@gmail.com', 'Owner - PHOENIX');
    $mail->addAddress('total.on.off@gmail.com', 'Owner - PHOENIX');


    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments

    //Content
    $output = array();
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Сообщение с сайта - PHOENIX -web studio';
    $mail->Body    = $text;
    $mail->AltBody = $text;
    if($_FILES){
         $mail->addAttachment($_FILES["file"]["tmp_name"],$_FILES["file"]["name"]);
    }
   


    $mail->send();
 
	$output['response'] = 'success';

} catch (Exception $e) {
	$output['response'] = 'error';
    //echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

echo json_encode($output);


?>