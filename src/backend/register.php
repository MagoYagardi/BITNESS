<?php
// Agregar encabezados CORS
header("Access-Control-Allow-Origin: *"); // Permite solicitudes desde cualquier origen. Cambia "*" por un dominio específico si es necesario.
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type"); // Encabezados permitidos

// Manejo de solicitud OPTIONS (Preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit; // Termina el script para las solicitudes OPTIONS (preflight)
}

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
$confirmPassword = $data['confirmPassword'] ?? ''; // Solo para validación
$rol = $data['rol'] ?? 'cliente'; // Valor por defecto 'cliente'

// Validar que todos los campos estén presentes
if (empty($email) || empty($password) || empty($confirmPassword)) {
    echo json_encode(['status' => 'error', 'message' => 'Todos los campos son obligatorios.']);
    exit;
}

// Validar que las contraseñas coincidan
if ($password !== $confirmPassword) {
    echo json_encode(['status' => 'error', 'message' => 'Las contraseñas no coinciden.']);
    exit;
}

// Validar rol
$validRoles = ['admin', 'cliente', 'entrenador', 'contable'];
if (!in_array($rol, $validRoles)) {
    echo json_encode(['status' => 'error', 'message' => 'Rol inválido']);
    exit;
}

// Verificar si el usuario ya existe
$stmt = $pdo->prepare('SELECT * FROM USUARIO WHERE email = :email');
$stmt->execute(['email' => $email]);
if ($stmt->rowCount() > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Email ya registrado.']);
    exit;
}

// Insertar el nuevo usuario
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
$stmt = $pdo->prepare('INSERT INTO USUARIO (email, contraseña, rol) VALUES (:email, :contraseña, :rol)');
try {
    $stmt->execute([
        'email' => $email,
        'contraseña' => $hashedPassword,
        'rol' => $rol
    ]);
    // Obtener el ID del nuevo usuario
    $id_usuario = $pdo->lastInsertId();
    echo json_encode(['status' => 'success', 'message' => 'Usuario registrado exitosamente.', 'id_usuario' => $id_usuario, 'rol' => $rol]);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Registro fallido.']);
}
?>
