<?php

$LOG_LOCATION = '/home/hosts/logs/main-error.log';

$code = '';
$output = '';

switch (@$_REQUEST['action']) {
    case 'execute':
        $code = $_POST['code'];
        $code = str_replace('<?php', '', $code);
        ob_start();
        eval($code);
        $output = ob_get_clean();
        break;
    case 'clear-log':
        file_put_contents($LOG_LOCATION, '');
        break;
}
$log = file_get_contents($LOG_LOCATION);

require 'tpl.php';
