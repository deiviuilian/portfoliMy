<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Roleta de Presentes</title>
        <link rel="icon" href="icoyourgift.png" type="image/png">
        <link rel="shortcut icon" href="icoyourgift.png" type="image/png">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <h1>Roleta de Presentes</h1>
            <h2 class="text-ocasiao" style="display: none"></h2>
            <h2 class="text-gender" style="display: none"></h2>

            <div class="ocasiao-choice">
                <h2 class="h2ocasiao">Para qual é a ocasião?</h2>
                <div class="escolha-ocasiao">
                    <button class="btn gender-btn ocasiaobtn" data-gender="niver"><img class="imgsimb" src="niver.png" alt="aspiral"> Aniversário</button>
                    <button class="btn gender-btn ocasiaobtn"  data-gender="casamento"><img class="imgsimb" src="casamento.png" alt="aspiral"> Aniversário de Casamento</button>
                    <button class="btn gender-btn ocasiaobtn"  data-gender="namoro"><img class="imgsimb" src="namoro.png" alt="aspiral"> Aniversário de Namoro</button>
                    <button class="btn gender-btn ocasiaobtn" data-gender="inter"><img class="imgsimb" src="woman.png" alt="aspiral"> Dia Internacional da Mulher</button>
                    <button class="btn gender-btn ocasiaobtn" data-gender="mae"><img class="imgsimb" src="mae.png" alt="aspiral"> Dia das Mães</button>
                    <button class="btn gender-btn ocasiaobtn" data-gender="namorados"><img class="imgsimb" src="namorados.png" alt="aspiral"> Dia dos Namorados</button>
                    <button class="btn gender-btn ocasiaobtn" data-gender="pai"><img class="imgsimb" src="pai.png" alt="aspiral"> Dia dos Pais</button>
                    <button class="btn gender-btn ocasiaobtn" data-gender="natal"><img class="imgsimb" src="natal.png" alt="aspiral"> Natal</button>
                </div>
            </div>        
            <div class="gender-choice" style="display: none">
                <h2 class="h2ocasiao">Para quem é o presente?</h2>
                <div class="escolha">
                    <button class="btn gender-btn man" data-gender="homem"><img class="imgsimb" src="man.png" alt="aspiral"> Homem</button>
                    <button class="btn gender-btn woman" data-gender="mulher"><img class="imgsimb" src="woman.png" alt="aspiral"> Mulher</button>
                </div>
            </div>
            <button class="btn spin-btn" style="display: none">Girar Roleta</button>
            <div class="wheel-container">
                <div class="marker"></div>
                <div class="wheel"></div>
                <div id="btnPlay" class="btnRoleta play"><img class="aspiral" src="aspiral.png" alt="aspiral"></div>
            </div>      
                
            <div class="result"></div>
            <img class="present-image" src="" alt="Presente" style="display:none; max-width: 110px; margin-top: 10px;">
            
            <button class="btn reset-btn">Recomeçar</button>
            <button class="btn back-btn gender" style="display: none"><img class="imgsimb" src="back.png" alt="aspiral"></button>
            <button class="btn back-btn roleta" style="display: none"><img class="imgsimb" src="back.png" alt="aspiral"></button>
        </div>    
        <?php
            // Array com os presentes para homens
            $presentes_homem = [
                "Bebida" => "img/bebidas.png",
                "Jogo" => "img/jogo.png",
                "Camisa" => "img/camisa.png",
                "Perfume" => "img/perfume.png",
                "Pix R$ 100" => "img/pix.png",
                "Colar" => "img/colar.png",
                "Chapéu" => "img/chapeu.png",
                "Pagar Ifood" => "img/ifood.png"
            ];

            $presentes_mulher = [
                "Bolsa" => "img/bolsa.png",
                "Jóia" => "img/joia.png",
                "Perfume" => "img/perfume.png",
                "Sapato/Roupa" => "img/sapato_roupa.png",
                "Pix R$ 100" => "img/pix.png",
                "Flor" => "img/flor.png",
                "Chocolate" => "img/chocolates.png",
                "Ursinho" => "img/ursinho.png"
            ];

            $mulher_namorados = [
                "Brincos" => "img/brinco.png",
                "Colar" => "img/colar.png",
                "Perfume" => "img/perfume.png",
                "Jantar" => "img/restaurante.png",
                "Pix R$ 100" => "img/pix.png",
                "Flores" => "img/flor.png",
                "Chocolate" => "img/chocolates.png",
                "Ursinho" => "img/ursinho.png"
            ];
            
            // Convertendo arrays para JSON para uso no JavaScript
            $presentes_homem_json = json_encode($presentes_homem);
            $presentes_mulher_json = json_encode($presentes_mulher);
            $mulher_namorados_json = json_encode($mulher_namorados);
        ?>    
        <script src="script.js"></script>
        <script>
            const presentesHomem = JSON.parse(<?php echo json_encode($presentes_homem_json); ?>);
            const presentesMulher = JSON.parse(<?php echo json_encode($presentes_mulher_json); ?>);
        </script>
    </body>
    <footer>        				
        <div class="footer-text">
            <p class="footer-text__source">
                YourGift desenvolvido por 
                <a target="_blank"  href="https://www.deividimarangoni.wuaze.com">
					<img class="logoslabs" src="logodedev.png" alt="Logo">
				</a>                   
            </p>
        </div>
    </footer>
</html>