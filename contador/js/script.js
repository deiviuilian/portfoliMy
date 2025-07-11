
$(document).ready(function(){
    /*$.ajax({
        url: 'conexao/carrega_nomes.php',
        type: "GET",
        dataType: 'json',
        success: function(data) {
          //console.log(data); 
          $('#datanome').empty();
          var options = '<option value="">Selecione um Nome</option>';
          if(data.length > 0) {
            $.each(data, function(key, value) {
              options += '<option>'+ value.nome + '</option>';
            });                
          } 
          $('#datanome').html(options);
        },
        error: function(xhr, status, error) {
            console.error("Status: " + status);
            console.error("Error: " + error);
            console.error("Response: " + xhr.responseText);
        }
    });*/

    $("#nomecompa").on("input", function() {
        let companheiro = " & " + $(this).val();
        $(".carregacompanheiro").text(companheiro); 
    });

     $("#nome").on("input", function() {
        nome = $("#nome").val();
        $(".carreganome").text(nome); 
    });
    
    $("#Moment").on("change",function(){
        nome = $("#nome").val();
        companheiro = " & " + $("#nomecompa").val();
        var momento = $(this).val();
        $(".carregamomento").text(momento);
        $(".carreganome").text(nome);      
        $("#divcamponome").removeClass("opacity0");

        /*$.post(
            "conexao/carrega_momento.php",
            {
                nome: nome,         
                momento: momento
            },
            function (result) {            
              resultm = result.split("|");

              console.log(resultm);

              $("#datepicker").val(resultm[1]);
              $("#hour").val(resultm[2]);
              $("#minute").val(resultm[3]);
            }
        )*/

        if(momento == 'ferias'){      
            $('#divcamponomecompa').hide();   
            $('.divcampclock').hide(); 
            $(".carregacompanheiro").hide();   
            $(".carreganome").show();           
        }
        else if(momento == ''){    
            $('#divcamponomecompa').hide();  
            $('.divcampclock').hide();  
            $(".carregacompanheiro").hide(); 
            $(".carreganome").hide(); 
        }
        else if(momento == 'aniversario'){        
            $('#divcamponomecompa').hide();  
            $('.divcampclock').hide();    
            $(".carregacompanheiro").hide();  
            $(".carreganome").show();            
        }
        else if(momento == 'namoro'){                       
            $('#divcamponomecompa').show(); 
            $('.divcampclock').hide(); 
            $(".carregacompanheiro").show(); 
        }
        else if(momento == 'casamento'){           
            $('#divcamponomecompa').show();  
            $('.divcampclock').hide();  
            $(".carregacompanheiro").show();     
        }
        else if(momento == 'anonovo'){          
            $('#divcamponomecompa').hide();
            $('.divcampclock').hide();   
            $(".carregacompanheiro").hide();  
            $(".carreganome").hide(); 
        }
        else if(momento == 'sexta'){           
            $('#divcamponomecompa').hide();
            $('.divcampclock').show();
            $(".carregacompanheiro").hide();  
            $(".carreganome").hide();    
        }
        else if(momento == 'final'){            
            $('#divcamponomecompa').hide();   
            $('.divcampclock').hide(); 
            $(".carregacompanheiro").hide();
            $(".carreganome").hide();            
        } else {
            $('#divcamponomecompa').hide(); 
            $('.divcampclock').hide(); 
            $(".carregacompanheiro").hide();  
            $(".carreganome").hide(); 
        }
       
    });   

    $('[type=datePicker]').datepicker({
        dateFormat: "dd/mm/yy",
        regional: "pt-BR",
        onSelect: function(dateText, inst) {
            // Formatar a data no formato "dd/mm/yyyy"
            $(this).val(dateText);
        }
    });
    
    $("#myModal").show();
    $("#datepicker").datepicker();       

    $(".iconcalendar").click(function() {
      $("#myModal").css("display", "block");
      $("#datepicker").datepicker(); // Adicionando o datepicker ao input
    });
  
    // Fechar o modal ao clicar fora dele
    $(window).click(function(event) {
      if (event.target == $("#myModal")[0]) {
        $("#myModal").css("display", "none");
      }
    }); 
  
    // Fechar o modal ao clicar no botão de "Confirmar"
    $(".confirmDate").click(function() {
        $('.dadoscontagem').show();
        $('.sucesso').hide();
        
        var nomeDoMomento = $("#Moment").find("option:selected").text();

        momento = $("#Moment").val();
        $(".carregamomento").text(nomeDoMomento);
        $(".carreganome").text(nome);
        $('#video-background').hide();
        
        if(momento == 'ferias'){
            document.querySelector('body').classList.add('videosucess');
            document.getElementById('img-background').src = 'image/vocation.jpg';
             $('#divcamponomecompa').hide();   
        }
        else if(momento == ''){
            document.querySelector('body').classList.add('videosucess');
            document.getElementById('img-background').src = 'image/time.jpg';
             $('#divcamponomecompa').hide();   
        }
        else if(momento == 'aniversario'){
            document.querySelector('body').classList.add('videosucess');
            document.getElementById('img-background').src = 'image/niver.jpg';
            $('#divcamponomecompa').hide();           
        }
        else if(momento == 'namoro'){
            document.querySelector('body').classList.add('videosucess');
            document.getElementById('img-background').src = 'image/love.jpg';              
            $('#divcamponomecompa').show();  
        }
        else if(momento == 'casamento'){
            document.querySelector('body').classList.add('videosucess');
            document.getElementById('img-background').src = 'image/lovetwo.jpg';   
             $('#divcamponomecompa').show();        
        }
        else if(momento == 'anonovo'){
            document.querySelector('body').classList.add('videosucess');
            document.getElementById('img-background').src = 'image/newyear.jpg';
            $(".carreganome").text("");
            $("#divcamponome").addClass("opacity0");
            $('#divcamponomecompa').hide();   
        }
        else if(momento == 'sexta'){
            document.querySelector('body').classList.add('videosucess');
            document.getElementById('img-background').src = 'image/endfriday.jpg';
            $(".carreganome").text("");
            $("#divcamponome").addClass("opacity0");
            $('#divcamponomecompa').hide();   
        }
        else if(momento == 'final'){
            document.querySelector('body').classList.add('videosucess');
            document.getElementById('img-background').src = 'image/endday.jpg';
            $(".carreganome").text("");
            $("#divcamponome").addClass("opacity0");
            $('#divcamponomecompa').hide();   
           
        } else {
            $('#divcamponomecompa').hide();  
        }

        var selectedDate = $("#datepicker").datepicker("getDate");

        var hour = $("#hour").val().padStart(2, '0');
        var minute = $("#minute").val().padStart(2, '0');  
        selectedDate.setHours(hour);
        selectedDate.setMinutes(minute);
        selectedDate.setSeconds(0);
        to = selectedDate;
        var options = {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        };
        var dataFormatada = selectedDate.toLocaleDateString('pt-BR', options);
        dataFormatada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
        
        var dataParaExibir = `${dataFormatada} às ${hour}:${minute}`;
        $(".exibirdata").html(dataParaExibir);      
      
        $("#myModal").css("display", "none");

        update();
    });
    
    $("#btnModalCloseNovo").click(function() {
        $("#myModal").css("display", "none");
    });
   
});  

function formatarData(data) {
    // Array para os nomes dos meses
    var meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Obtendo o mês, dia, ano, hora e minuto
    var mes = meses[data.getMonth()];
    var dia = data.getDate();
    var ano = data.getFullYear();
    var hora = ("0" + data.getHours()).slice(-2);
    var minuto = ("0" + data.getMinutes()).slice(-2);

    // Formatando a string final
    var dataFormatada = dia + " " +  " de " + mes + " de " + ano + " às " + hora + ":" + minuto;

    return dataFormatada;
}

function update(){    
    let from = new Date();
    diff = to-from; 
    if(diff>0){
        let days = setTwoDigit(Math.floor(diff/1000/60/60/24)),
        hours = setTwoDigit(Math.floor(diff/1000/60/60)%24),
        minutes = setTwoDigit(Math.floor(diff/1000/60)%60),
        seconds = setTwoDigit(Math.floor(diff/1000)%60)
        document.querySelector('.days').innerText=days
        document.querySelector('.hours').innerText=hours
        document.querySelector('.minutes').innerText=minutes
        document.querySelector('.seconds').innerText=seconds

        if (prevDays !== days) {
            prevDays = days;
            animateUnit('.clock .days div');
        }
        if (prevHours !== hours) {
            prevHours = hours;
            animateUnit('.clock .hours div');
        }
        if (prevMinutes !== minutes) {
            prevMinutes = minutes;
            animateUnit('.clock .minutes div');
        }
        if (prevSeconds !== seconds) {
            prevSeconds = seconds;
            animateUnit('.clock .seconds div');
        }
    }else{
        clearInterval(interval);
        document.querySelector('body').classList.add('videosucess');
        document.getElementById('video-background').src = 'videos/firework.mp4';
        $('.dadoscontagem').hide();
        $('.sucesso').show();
        $('#video-background').show();
    }    
    
}

let interval=setInterval(update,1000);

function setTwoDigit(argument) {
    return argument>9?argument:'0'+argument;
}

function animateUnit(selector) {
    let element = document.querySelector(selector);
    if (element) {
        element.classList.add("animate");
        setTimeout(function () {
            element.classList.remove("animate");
        }, 800);
    }
}

$("#savemoment").on("click",function(){
    nome = $("#nome").val();
    momento = $("#Moment").val();
    data = $("#datepicker").val();
    hora = $("#hour").val();
    minuto = $("#minute").val();
   
    console.log(nome, momento, data, hora, minuto);

    $.ajax({
        type: "POST",
        url: "conexao/inserir_momento.php", // Endpoint do seu backend
        data: { 
            nome: nome, 
            momento: momento, 
            data: data, 
            hora: hora, 
            minuto: minuto 
        },
        dataType: "json",
        success: function(response) {
            console.log(response);           
            if (response.type === "success") {
                cuteToast({
                    type: "success",
                    message: response.message,
                    timer: 3000,
                }); 
            } else {
                cuteToast({
                    type: "error",
                    message: response.message,
                    timer: 3000,
                });
            }  
        },
        error: function(xhr, status, error) {
            console.error("Status: " + status);
            console.error("Error: " + error);
            console.error("Response: " + xhr.responseText);
            cuteToast({
                type: "error",
                message: "Erro ao comunicar com o servidor. Status: " + status + ", Error: " + error,
                timer: 3000,
            });
        }
    });
}); 


