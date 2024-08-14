<?php
// Agregar encabezados CORS
header("Access-Control-Allow-Origin: *"); // Permite solicitudes desde cualquier origen. Puedes especificar un dominio específico si lo prefieres.
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type"); // Encabezados permitidos

// Manejo de solicitud OPTIONS (Preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit; // Termina el script para las solicitudes OPTIONS (preflight)
}

// Configuración de la base de datos
$host = 'localhost';
$dbname = 'BITness_GYM';
$username = 'root'; 
$password = ''; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Conexión fallida']);
    exit;
}

// Obtener datos del POST
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (empty($email) || empty($password)) {
    echo json_encode(['status' => 'error', 'message' => 'Se requiere el email y la contraseña']);
    exit;
}

// Verificar las credenciales del usuario
$stmt = $pdo->prepare('SELECT * FROM USUARIO WHERE email = :email');
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['contraseña'])) {
    echo json_encode([
        'status' => 'success',
        'message' => 'Login exitoso',
        'user' => $user
    ]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Email o contraseña inválidos']);
}
?>
