$(function(){


    $('#backG').on('change',function(){
        $('#main').css('background-color', $('#backG').val())
    })


    $('#txt').on('change',function(){
        switch($('#txt').val()){
            case "normal":
                $('p').css({'font-style':'normal', 'text-decoration':'none', 'font-weight':'normal'})
                break
            case "underln":
                $('p').css({'font-style':'normal', 'text-decoration':'underline', 'font-weight':'normal'})
                break
            case "it":
                $('p').css({'font-style':'italic', 'text-decoration':'none', 'font-weight':'normal'})
                break
            case "bold":
                $('p').css({'font-style':'normal', 'text-decoration':'none', 'font-weight':'bold'})
                break
            default:
                $('p').css({'font-style':'normal', 'text-decoration':'none', 'font-weight':'normal'})
        }
    })


    $('#font').on('change',function(){
        $('p').css('font-family', $('#font').val())
    })
    

    $('#fontFirst').on('change',function(){
        $('p:first').css('font-family', $('#fontFirst').val())
    })

    $('#firstChar').on('change', function(){
        $('.firstLet').css('font-weight', $('#firstChar').val())
    })

    $('#red').on('click', function(){
        for(var i = 0; i < $('p').length; i++){
            var words = $( "p" ).eq(i).text().split(/\s+/)
            var text = words.join( "</span> <span>" )
            $( "p" ).eq(i).html( "<span>" + text + "</span>" )
        }
        var index = $('#redWord').val() -1
        $('span').eq(index).css('color', 'red')
    })

    $('#imgBorder').on('change',function(){
        $('#img').css({'border-width':'10px', 'border-color':'orange','border-radius':'5%'}).css('border-style',$("#imgBorder").val())
        console.log($('img').css('border'))
    })
    

    $('#btn').on('click', function(){
        $('p').css({
            'text-decoration':'',
            'font-weight':'',
            'font-family':'Times New Roman',
            'font-style':'',
        })
        $('span').css('color','')
        $('#img').css('border','')
    })
})