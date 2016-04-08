<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tester</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/ace/ace.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/script.js" type="text/javascript" charset="utf-8"></script>
</head>
<body>
    <div id="editor-wrapper">
        <div id="editor">&lt;?php&#xd;<?=$code?></div>
    </div>
    <div class="error-log-wrapper">
        <textarea id="log"><?=$log?></textarea>
    </div>
    <div class="col-2">
        <form action="" method="post" id="execute-form">
            <input type="hidden" name="action" value="execute">
            <input type="hidden" name="code" id="code-sender">
            <button type="submit">Отправить</button>
        </form>
    </div>
    <div class="col-2 log-button-wrapper">
        <button id="clear-log">Очистить лог</button>
    </div>
    <div class="clear"></div>

    <div id="output">
        <?=$output?>
    </div>

</body>
</html>