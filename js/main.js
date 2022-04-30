

function boton(){
    
    document.getElementById('boton-comprar');
       let pan= document.getElementById('pagar3').value;
       let huevo=document.getElementById('pagar1').value;
       let leche=document.getElementById('pagar2').value;
       let fruta=document.getElementById('pagar4').value;
     
    
       if(pan<=50){
        pan*=2000;
       }
       if(huevo<=30){
           huevo*=15000;
       }
       if(leche<=20){
         leche*=3500;
       }
       if(fruta<=50){
           fruta*=5000;
       }
       let valor=huevo+pan+leche+fruta;
       alert(valor);
      
    
    if(valor>=60000){
        regalo()
        descuento=valor-regalo;
    
        alert('Por superar el valor de su compra, se acaba de ganar un bono de:'+ regalo+' '+'el valor de su compra es de:'+descuento)
    
    }else{
        alert('el valor de su compra es de:'+valor)
    }
    
    }
    
    
    function regalo(){
        regalo=Math.round(Math.random()*20000);
    
    
    }
    
    