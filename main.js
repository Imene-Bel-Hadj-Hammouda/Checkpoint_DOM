$(document).ready(function() {
 //increment
    for (var i = 0; i< document.getElementsByClassName('cart-qty-plus').length; i++){

        document.getElementsByClassName('cart-qty-plus')[i].onclick = function(e){
            
        e.target.nextElementSibling.value = parseInt(e.target.nextElementSibling.value) + 1
                
                var quantity = e.target.nextElementSibling.value
                
                var price = e.target.parentElement.parentElement.nextElementSibling.children[0].value
                
               var amount = parseInt(quantity * price)

                // document.getElementsByClassName("amount").innerText = amount
                e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerText = amount
             
         }       
        
        }

 //decrement
 for (var i = 0; i< document.getElementsByClassName('cart-qty-minus').length; i++){

    document.getElementsByClassName('cart-qty-minus')[i].onclick = function(e){
        if(e.target.previousElementSibling.value > 0 ) {
            e.target.previousElementSibling.value = parseInt(e.target.previousElementSibling.value) - 1

            var quantity = e.target.previousElementSibling.value
                var price = e.target.parentElement.parentElement.nextElementSibling.children[0].value

                var amount = parseInt(quantity * price)

                // document.getElementsByClassName("amount").innerText = amount
                e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerText = amount
               
        }
   
    }
    
    }

   


    })



//     update_amounts();
//     $('.qty, .price').on('keyup keypress blur change',
//      function(e) {
//      update_amounts();
 
//              });
//     });
// function update_amounts() {
//     var sum = 0.0;
//     $('#myTable > tbody > tr').each(function() {
//         var qty = $(this).find('.qty').val();
//         var price = $(this).find('.price').val();
//         var amount = (qty*price);
//         sum+=amount;
//         $(this).find('.amount').text(''+amount);

//     });
//       $('.total').text(sum);
// }

//like btn//
$('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
 });


 //delete btn//
 $('.delete-btn').on('click', function() {
    $(this).toggleClass('is-active');
 });


// //---for inc et dec---//
// var incrementQty;
// var decrementQty;
// var plusBtn = document.getElementsByClassName('cart-qty-plus');
// var minusBtn = document.getElementsByClassName('cart-qty-minus');

// var incrementQty = plusBtn.click(function() {
//     var $n = $(this)
//     .parent(".button-container")
//     .find(".qty");
//     $n.val(Number($n.val())+1 );
//     update_amounts();
// });

// var decrementQty = minusBtn.click(function() {
//     var $n = $(this)
//     .parent(".button-container")
//     .find(".qty");
//     var QtyVal = Number($n.val());
//     if (QtyVal > 0) {
//         $n.val(QtyVal-1 );
//     }
//     update_amounts();
// });





// var incrementButton = document.getElementsByClassName('cart-qty-plus');
// var decrementButton = document.getElementsByClassName('cart-qty-minus');
// for(var i=0; i<incrementButton.length;i++){
//     var button = incrementButton[i];
//     button.addEventListener('click',function(event){
//         var buttonClicked = event.target;
//         var input = buttonClicked.parentElement.children[2];
//         var inputValue= input.Value;
//         var newValue= parseInt(inputValue) + 1 ;
//         input.value= newValue;
//     })
// }


