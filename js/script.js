
$(function(){
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/php");
    editor.on('change', function(data){
        var code = editor.getSession().getValue();
        localStorage.setItem('aceCode', code);
    });

    var savedCode = localStorage.getItem('aceCode') || ('<' + '?php\n');
    editor.getSession().setValue(savedCode);

    $("#execute-form").submit(function(){
        var code = editor.getSession().getValue();
        $("#code-sender").val(code);
    });

    $("#clear-log").click(function(){
        $.ajax({
            url: window.location.href,
            data: {
                action: 'clear-log'
            },
            success: function() {
                $("#log").val('');
            }
        });
    });

    var log = $("#log");
    log.scrollTop(log[0].scrollHeight);
});
