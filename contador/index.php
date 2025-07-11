<!DOCTYPE html>
<html lang="pt-BR">
    <head>       
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <title>CONTADOR</title>
        <link rel="icon" href="image/icon-timer.jpeg" type="image/jpeg">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css">
        <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="styleshee" type="text/css">
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="common/cute-alert-master/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link rel="stylesheet" href="common/bootstrap.css">
        <link rel="stylesheet" href="common/bootstrap.min.css">
        <link rel="stylesheet" href="css/style.css">
        <!--include 'conexao/conexao.php';-->
    </head>    
    <body>
        <img id="img-background" class="imgbkgrd" src="image/time.jpg">
        <video autoplay loop muted id="video-background" class="videobkgrd">
            <source src="videos/time.mp4" type="video/mp4">
            Seu navegador não suporta vídeos em HTML5.
        </video> 
        <div class="divbuttoncalendar">
            <i class="fa fa-calendar iconcalendar" aria-hidden="true"></i>
        </div>  
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar" id="btnModalCloseNovo">
                        <span class="closespan" aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="modalLabel"> <label for="datepicker"></label></h4>					
                </div>
                <div class="modal-body">
                    <div id="divcamponome" class="inputboxatualusercamp">
                        <label class="labelformusuariosnobg">Nome </label>                                        
                        <div class="displayflex">
                            <div class="input-group2">
                                <input list="datanome" id="nome" name="nome" class="campo-formnm">
                            </div>							
                        </div>
                        <datalist id="datanome"></datalist>	                   
                    </div>		
                    <div class="inputboxatualusercamp">
                        <label class="labelformusuariosnobg">Momento</label>
                        <select class="campo-formnm" id="Moment">	
                            <option value="" selected></option>							
                            <option value="ferias">FÉRIAS</option>	
                            <option value="aniversario">ANIVERSÁRIO</option>
                            <option value="namoro">ANIVERSÁRIO DE NAMORO</option>	
                            <option value="casamento">ANIVERSÁRIO DE CASAMENTO</option>	                            	
                            <option value="anonovo">ANO NOVO</option>	
                            <option value="sexta">SEXTA-FEIRA</option>
                            <option value="final">FINAL EXPEDIENTE</option>				
                        </select>
                    </div>
                    <div id="divcamponomecompa" class="inputboxatualusercamp" style="display: none;">
                        <label class="labelformusuariosnobg">Nome Companheiro(a)</label>                                        
                        <div class="displayflex">
                            <div class="input-group2">
                                <input list="datanomecompa" id="nomecompa" name="nomecompa" class="campo-formnm" hide>
                            </div>							
                        </div>
                        <datalist id="datanomecompa"></datalist>	                   
                    </div>	
                    <div class="inputboxatualuserdate">
                        <label class="labelformusuariosnobgdate">Data</label>
                        <span class="input-icon fa fa-calendar"></span>
                        <input type="datePicker" id="datepicker" class="campo-formnm" maxlength="10">
                    </div>

                    <div class="divcampclock"  style="display: none;">                       
                        <div class="inputboxatualuser">
                            <label class="labelformusuariosnobg">Horas</label>                            
                            <input type="number" id="hour" class="campo-formnm2" min="00" max="23" value="0">
                        </div>
                    
                        <div class="inputboxatualuser">
                            <label class="labelformusuariosnobg">Minutos</label>                    
                            <input type="number" id="minute" class="campo-formnm2" min="00" max="59" value="0">
                        </div> 
                    </div>
                </div>
                <div class="modal-footer">
                    <!--<button id="savemoment" class="btn save">
                        <i class="fa-regular fa-floppy-disk"></i> Salvar
                    </button>-->
                    <button class="btn confirmDate">Confirmar</button>                    
                </div>
            </div>
        </div>
        <div class="divcontainer">          
            
            <h1 class="sucesso">CHEGOU O MOMENTO ESPERADO!!!</h1>
            <div class="dadoscontagem">
                <h1 class="title">Contagem 
                    <a class="carregamomento"></a>
                    <div class="divnomes">
                        <p class="carreganome"></p><p class="carregacompanheiro"></p>
                    </div>
                    <p class="exibirdata"></p>
                </h1>
                
                <div class="clock">
                    <div class="days"></div>
                    <div class="colon">:</div>
                    <div class="hours"></div>
                    <div class="colon">:</div>
                    <div class="minutes"></div>
                    <div class="colon">:</div>
                    <div class="seconds"></div>
                </div>
            </div>
        </div>
        <footer>        				
            <div class="footer-text">
                <p class="footer-text__source">
                    Contador desenvolvido por 
                    <a target="_blank"  href="https://www.deividimarangoni.wuaze.com">
					    <img class="logoslabs" src="image/logodedev.png" alt="Logo">
				    </a>                  
                </p>
            </div>
        </footer>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>    
        <script type="text/javascript" src="common/jquery.js"></script>  
        <script type="text/javascript" src="common/jquery.min.js"></script> 
        <script type="text/javascript" src="common/bootstrap.min.js"></script>
        <script type="text/javascript" src="common/bootstrap.js"></script> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>   
        <script type="text/javascript" src="common/cute-alert-master/cute-alert.js"></script>
        <script type="text/javascript" src="js/script.js"></script>    
    </body>
</html>
