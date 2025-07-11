$(document).ready(function() {
    // Recebe os arrays de presentes do PHP
 
    let genderSelected = false;
    let isSpinning = false;
    let selectedGender = "";
    let selectedPresents = [];
    let wheelColors = [
        "#ff6b6b", "#4ecdc4", "#45b7d1", "#f7d275", "#ff8c42",
        "#98d4bb", "#a685e2", "#ffadad", "#6bbcff", "#d37676"
    ];

    $(".ocasiaobtn").click(function() {
        selectedGender = $(this).data("gender");
        if (selectedGender === "niver"){
            selectedGender = "Aniversário";
        } else if (selectedGender === "natal"){
            selectedGender = "Natal";
        } else if (selectedGender === "namoro"){
            selectedGender = "Aniversário de Namoro";
        } else if (selectedGender === "casamento"){
            selectedGender = "Aniversário de Casamento";
        } else if (selectedGender === "pai"){
            selectedGender = "Dia dos Pais";
        } else if (selectedGender === "inter"){
            selectedGender = "Dia Internacional da Mulher"; 
        } else if (selectedGender === "mae"){
            selectedGender = "Dia das Mães";      
        } else if (selectedGender === "namorados"){
            selectedGender = "Dia dos Namorados";                       
        }
        $("h2.text-ocasiao").text(selectedGender);
    });
    
    // Quando um gênero é selecionado
    $(".gender-btn").click(function() {
        if (isSpinning) return;        

        $(".ocasiao-choice").hide();      
        
        selectedGender = $(this).data("gender");
        $(".gender-btn").removeClass("active");
        $(this).addClass("active");

        $(".gender").show(); 
      
        // Define os presentes com base no gênero selecionado
        
        if(selectedGender === "homem"){
            selectedPresents = presentesHomem;
            $(".spin-btn").show();
            createWheel();            
            $(".wheel-container").show();
            $(".spin-btn").prop("disabled", false);  
            $(".gender-choice").hide();             
            genderSelected = true;
            $(".gender").hide(); 
            $(".roleta").show(); 
            $(".text-ocasiao").show();
            $(".text-gender").show();         
            $("h2.text-gender").text("Homem");
        }else if(selectedGender === "mulher"){
            selectedPresents = presentesMulher; 
            $(".spin-btn").show();       
            createWheel();          
            $(".wheel-container").show();
            $(".spin-btn").prop("disabled", false);
            $(".gender-choice").hide();            
            genderSelected = true;
            $(".gender").hide(); 
            $(".roleta").show(); 
            $(".text-ocasiao").show();
            $(".text-gender").show();
            $("h2.text-gender").text("Mulher");
        }else{
            $(".gender-choice").show();
            selectedPresents = presentesMulher;
            $(".gender").show();             
            $(".roleta").hide();
            $(".text-ocasiao").show();
            $(".text-gender").hide();
            $("h2.text-gender").text(selectedGender);
        } 
    });

    $(".gender").click(function() {
        $(".gender").hide(); 
        $(".ocasiao-choice").show(); 
        $(".gender-choice").hide();   
        $(".roleta").hide();  
        $(".text-ocasiao").hide();
        $(".text-gender").hide();   
    });

    $(".roleta").click(function() {
        $(".gender").show(); 
        $(".ocasiao-choice").hide(); 
        $(".gender-choice").show();  
        $(".roleta").hide();  

        $(".text-ocasiao").show();
        $(".text-gender").hide(); 
        $("h2.text-gender").text("");  
        
        $(".wheel-container").hide();
        $(".result").hide();
        $(".reset-btn").hide();
        $(".spin-btn").hide(); 
        $(".gender-btn").prop("disabled", false);
        $(".spin-btn").prop("disabled", true);
        $(".wheel").css({
            "transition": "none",
            "transform": "rotate(0deg)"
        });
        $("h2").show();
        $(".present-image").hide();
        $(".gender-btn").show();
        genderSelected = false;
        isSpinning = false;
    });


    function createWheel() {
        $(".wheel").empty();
        // Classes de triângulos com seus estilos CSS
        const boxClasses = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8"];
        selectedPresents = selectedGender === "homem"
            ? Object.keys(presentesHomem)
            : Object.keys(presentesMulher);

        const presentsToShow = selectedPresents.slice(0, 8);
        const customAngles = [23, 70, 115, 158, 205, 250, 292, 336];
        const radius = 160; // menor para 400x400 roleta (metade do container - margem)
        const center = 200; // metade de 400

        for (let i = 0; i < presentsToShow.length; i++) {
         
            const boxClass = boxClasses[i];  
            const angleDeg = customAngles[i];  
            const angleRad = (angleDeg - 90) * (Math.PI / 180);         
            const x = center + radius * Math.cos(angleRad);
            const y = center + radius * Math.sin(angleRad);
            // Elemento da "fatia" do presente (visual da roda)
            const boxItem = $("<div>")
                .addClass("wheel-item")
                .addClass(boxClass);

            // Texto do presente posicionado corretamente
            const textItem = $("<div>")
                .addClass("wheel-text")
                .css({
                    "transform": `translate(-50%, -50%) rotate(${angleDeg}deg)`,
                    "transform-origin": `center`,
                    "top": `${y}px`,
                    "left": `${x}px`,                  
                    "position": "absolute",
                    "color": "#fff", // Ajustável conforme necessário
                    "font-weight": "bold",
                })
                .text(presentsToShow[i]);

            $(".wheel").append(boxItem, textItem);
        }
    }

    
    // Quando o botão de girar é clicado
    // Adapte para usar os ângulos reais da roda
    const customAngles = [25, 55, 115, 160, 200, 240, 297, 333];  

    $(".spin-btn").click(function () {
        if (!genderSelected || isSpinning) return;

        isSpinning = true;
        $(".gender-btn").prop("disabled", true);
        $(".result").hide();     
        $(".gender-btn").hide();
        $(".spin-btn").hide();
        $(".roleta").hide();
        $(".marker").addClass("animando");
        const numItems = selectedPresents.length;

        // Sorteia um índice aleatório
        const randomIndex = Math.floor(Math.random() * numItems);
        const targetAngle = customAngles[randomIndex];

        const extraRotation = 1800;
        const finalRotation = extraRotation + (360 - targetAngle);

        console.log(">>> Sorteio iniciado");
        console.log("Random index sorteado:", randomIndex);
        console.log("Ângulo do item sorteado:", targetAngle);
        console.log("Rotação final aplicada:", finalRotation);

        $(".wheel").css({
            transition: "transform 5s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
            transform: `rotate(${finalRotation}deg)`
        });

        setTimeout(function () {
              $(".marker").removeClass("animando");
            const finalAngle = finalRotation % 360;
            const correctedAngle = (360 - finalAngle) % 360;

            console.log(">>> Após rotação");
            console.log("Ângulo final real da rotação:", finalAngle);
            console.log("Ângulo no topo (sob a seta):", correctedAngle);

            // Encontra o ângulo mais próximo do topo
            let closestIndex = 0;
            let smallestDiff = 360;

            for (let i = 0; i < customAngles.length; i++) {
                const diff = Math.abs(customAngles[i] - correctedAngle);
                console.log(`Comparando com item ${i} (angle: ${customAngles[i]}), diff: ${diff}`);
                if (diff < smallestDiff) {
                    smallestDiff = diff;
                    closestIndex = i;
                }
            }

            const presentName = selectedPresents[closestIndex];
            const presentImage = selectedGender === "homem"
                ? presentesHomem[presentName]
                : presentesMulher[presentName];
            $(".result").text(`Presente sorteado: ${presentName}`).fadeIn();

            if (presentImage) {
                $(".present-image").attr("src", presentImage).fadeIn();
            } else {
                $(".present-image").hide();
            }
            $(".reset-btn").fadeIn();
            $(".roleta").show();
            isSpinning = false;
        }, 5000);
    });
    
    // Botão de reiniciar
    $(".reset-btn").click(function() {
        $(".wheel-container").hide();
        $(".result").hide();
        $(".roleta").hide();
        $(".ocasiao-choice").show();
        $(".reset-btn").hide();
        $(".gender-btn").prop("disabled", false);
        $(".spin-btn").prop("disabled", true);
        $(".wheel").css({
            "transition": "none",
            "transform": "rotate(0deg)"
        });
        $("h2").show();
        $(".present-image").hide();
        $(".gender-btn").show();
        genderSelected = false;
        isSpinning = false;
        $(".text-ocasiao").hide();
        $(".text-gender").hide(); 
    });
});