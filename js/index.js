// //article1, article3, 부분

// let article1Near = $('.article1').offset().top - $(window).height()/2

// let article3Near = $('.article3').offset().top - $(window).height()/2


// $(window).on('scroll', function(){
//    let sct =  $(this).scrollTop()
//    if(sct >= article1Near){
//     $('.rule').addClass('on')
//    }else{
//     $('.rule').removeClass('on')
//    }


//    if(sct >= article3Near){
//     $('.list').addClass('on')
//    }else{
//     $('.list').removeClass('on')
//    }

// })



// article4 이미지 클릭하면 모달창에서 크게 보기

$('.article4 .movie .img img').on('click', function(){
    let src = $(this).attr('data-src')
    let modal = '<div class="modal">'
    modal += `<div class="imgbox">`
    modal += `<iframe src="${src}" width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    modal += `<button type="button"><i class="fa-solid fa-x"></i></button>`
    modal += `</div>`
    modal += `</div>`

    $('body').append(modal)

    $('.modal').css({
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        // height:'100%',
        paddingTop:'56.25%',
        background:'rgba(0,0,0,0.7)'
    })

   
     $('.modal .imgbox').css({
         position:'absolute',
         width:'45%',
         height:'45%',
         top:'200px',
         left:'200px',
         right:'200px',
         bottom:'200px',
         
     })
    
    $('.imgbox button').css({
        position:'absolute',
        top:'0',
        right:'0',
        background:'#000',
        color:'#fff',
        padding:'4px 4px',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer'
    })

})

// 모달창의 닫기 버튼 클릭하면 모달창 닫게 하기
$('body').on('click', '.modal button, .modal', function(){
    $('.modal').remove()
})

