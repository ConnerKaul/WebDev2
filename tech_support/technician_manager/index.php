<?php
require('../model/database.php');
require('../model/technician_db.php');

$action = filter_input(INPUT_POST, 'action');
if ($action === NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if ($action === NULL) {
        $action = 'list_technicians';
    }
}

switch($action){

    case 'list_technicians' :
        // Get technician data
        $technicians = get_technicians();

        // Display the technician list
        include('technician_list.php');
        break;
    case 'delete_technician':
        $tech_id = filter_input(INPUT_POST, 'technician_id');
        delete_technician($tech_id);
        header("Location: .");
        break;
    case 'show_add_form':
        include('technician_add.php');
        break;
    case 'add_technician': 
        $firstName = filter_input(INPUT_POST, 'first_name');
        $lastName = filter_input(INPUT_POST, 'last_name');
        $email = filter_input(INPUT_POST, 'email');
        $phone = filter_input(INPUT_POST, 'phone');
        $password = filter_input(INPUT_POST, 'password');

        // Validate the inputs
        if ( empty($firstName) || empty($lastName) || 
             empty($email) || 
             empty($password) || empty($phone)) {
            $error = "Invalid technician data. Check all fields and try again.";
            include('../errors/error.php');
        } else {
            add_technician($tech_id, $firstName, $lastName, $email, $phone, $password);
            header("Location: .");
        }
    
        
        
}
?>