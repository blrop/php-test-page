$(function() {
    // подгрузка лога
    function updateLog() {
        $.ajax({
            url: window.location.href,
            method: 'post',
            data: {
                action: 'get-log'
            },
            success: function(response) {
                logField.val(response);
            }
        });
    }

    var logField = $("#log"),
        serverErrorIndicator = $('#server-error-indicator'),
        codeOutput = $("#output");

    // прокручиваем поле лога в конец
    logField.scrollTop(logField[0].scrollHeight);

    // запускаем AceEditor
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/php");
    editor.on('change', function() {
        // сохраняем код при его редактировании
        var code = editor.getSession().getValue();
        localStorage.setItem('aceCode', code);
    });

    // загружаем введённый ранее код
    var savedCode = localStorage.getItem('aceCode') || ('<' + '?php\n');
    editor.getSession().setValue(savedCode);

    // клик по кнопке "Выполнить"
    $("#execute-code").click(function() {
        $.ajax({
            url: window.location.href,
            method: 'post',
            dataType: 'json',
            data: {
                action: 'execute',
                code: editor.getSession().getValue()
            },
            success: function(response) {
                codeOutput.html(response.codeOutput);
                logField.val(response.log);
                serverErrorIndicator.hide();
            },
            error: function() {
                serverErrorIndicator.show();
                updateLog(); // в случае ошибки сервер не вернёт лог, поэтому запрашиваем его отдельно
            }
        });
    });

    // клик по кнопке "очистить лог"
    $("#clear-log").click(function() {
        $.ajax({
            url: window.location.href,
            data: {
                action: 'clear-log'
            },
            method: 'post',
            success: function() {
                logField.val('');
            }
        });
    });
});
