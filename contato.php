<?
$nome=$_POST['nome'];
$email=$_POST['email'];
$titulo=$_POST['titulo'];
$texto=$_POST['texto'];

$Destinatario="alesefs@gmail.com";

$Titulo="$titulo";

$mensagem1="
Uma mensagem vinda do site !
Algum vistante mandou essa mensagem pelo site.
Nome: $nome
Email: $email
Mensagem: $texto";

mail("$Destinatario","$Titulo", "$mensagem1","From:$email");
?>
<html>
<body>
Enviado com sucesso !
</body>
</html>
