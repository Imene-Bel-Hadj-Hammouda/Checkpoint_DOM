



$(document).ready(function() {
    //delete button
var removeCartItemButtons =document.getElementsByClassName('delete')
for (var i = 0; i<removeCartItemButtons.length;i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event)  {
        var buttonClicked = event.target
         buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
         updateCartTotal()
    }
    )}
 //increment
    for (var i = 0; i< document.getElementsByClassName('cart-qty-plus').length; i++){

        document.getElementsByClassName('cart-qty-plus')[i].onclick = function(e){
            
        e.target.nextElementSibling.value = parseInt(e.target.nextElementSibling.value) + 1
                
                var quantity = e.target.nextElementSibling.value
                
                var price = e.target.parentElement.parentElement.nextElementSibling.children[0].value
                
               var amount = parseInt(quantity * price)

                // document.getElementsByClassName("amount").innerText = amount
                e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerText = amount
                updateCartTotal()
             
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
                updateCartTotal()
               
        }
   
    }
    
    }

   //update total
   function updateCartTotal(){
      
      
      const amounts = document.getElementsByClassName('amount');
      var total= 0;
      for (let i = 0; i < amounts.length; i++) {
          total = total+parseInt(amounts[i].innerHTML);
          
      }
    document.getElementById('total').innerText = total
   }


    })


let btnlike=document.getElementsByClassName('fa-heart')
console.log(btnlike)
for(i=0;i<btnlike.length;i++)
{
    btnlike[i].addEventListener('click',(e)=>{
        e.target.classList.toggle('like')
    })
}





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


