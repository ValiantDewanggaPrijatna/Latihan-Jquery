$(document).ready(function(){

     //Panduan semua selector dan Jquery lainnya ada di website w3school

    //selector tag
    $('h1').css('color','green');
    $('p').css('color','blue');

    //selector class
    $('.subjudul').css('background-color','yellow');
    $('.p2').css('color','red');

    //selector id
    $('#subjudul2').css('border','4px solid salmon');
    $('#p3').css('background-color','magenta');
    $('#p3').css('border','4px solid black');

    //selector all elemen
    $('*').css('background-color','skyblue');

    //Event Click
    $('#click').css('background-color','purple');
    $('#click').click(function(){
        alert('Hasil event click tombol ini, memunculkan tulisan ini')
    });

    //Event Double Click
    $('#dblclick').dblclick(function(){
        $('*').css('background-color','red')
    });
    
    //Event Mouse Leave
    $('.mouse').mouseleave(function(){
        $(this).css('background-color','green')
    });

    //Event Mouse Enter
    $('.mouse').mouseenter(function(){
        $(this).css('background-color','lime')
    });

    //Event Keydown
    $('#testkeydown').keydown(function(){
        $('#pesan_keydown').text($(this).val())
        $('#pesan_keydown').css('color','white')
    });

        //Event Keyup
        $('#testkeyup').keyup(function(){
            $('#pesan_keyup').text($(this).val())
            $('#pesan_keyup').css('color','darkred')
        });
})