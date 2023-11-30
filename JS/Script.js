

var newImageDialog = document.getElementById("newImageDialog");
var openImageDialog = document.getElementById("openImageDialog");
var settingsDialog = document.getElementById("settingsDialog");
var helpDialog = document.getElementById("helpDialog");
var downloadDialog = document.getElementById("downloadDialog");

function openNewImageDialog() {
    newImageDialog.style.display = "block";
}

function openOpenImageDialog() {
    openImageDialog.style.display = "block";

}

function imageToCanvas(input){

     var fileInput = event.target;
     var file = fileInput.files[0];

    if (file) {
         var img = new Image();

        img.onload = function() {

        canvas.width=img.width;
        canvas.height=img.height;

            
            ctx.clearRect(0, 0, canvas.width, canvas.height);

           
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        
        img.src = URL.createObjectURL(file);

        
    }
}

 var fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', imageToCanvas);




function openSettingsDialog() {
    settingsDialog.style.display = "block";
}

function openHelpDialog() {
    helpDialog.style.display = "block";
}





function openDownloadDialog() {
    downloadDialog.style.display = "block";
}

function downloadPNG() {
    var canvasDownloader = document.getElementById("canvas");
    var dataUrl = canvasDownloader.toDataURL("image/png");

    var a = document.createElement("a");
    a.href = dataUrl;
    a.download = "canvas-download.png";

    
    var downloadButton = document.getElementById("downloadPNGButton");
    downloadButton.addEventListener("click", downloadPNG);

   
    var event = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    a.dispatchEvent(event);

    

}

function downloadJPG(){
  var canvasDownloader=document.getElementById("canvas");
  var dataUrl=canvasDownloader.toDataURL("image/jpeg");

  var a=document.createElement("a");
  a.href=dataUrl;
  a.download="canvas-download.jpg";

  var event=new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  a.dispatchEvent(event);

}












function closeNewImageDialog() {
    newImageDialog.style.display = "none";
}

function closeOpenImageDialog() {
    openImageDialog.style.display = "none";
}

function closeSettingsDialog() {
    settingsDialog.style.display = "none";
}

function closeHelpDialog() {
    helpDialog.style.display = "none";
}

function closeDownloadDialog() {
    downloadDialog.style.display = "none";
}

 var newImageButton = document.getElementById("newImageButton");
newImageButton.addEventListener("click", openNewImageDialog);

 var openImageButton = document.getElementById("openImageButton");
openImageButton.addEventListener("click", openOpenImageDialog);

document.getElementById("openImageToCanvasButton")

 var settingsButton = document.getElementById("settingsButton");
settingsButton.addEventListener("click", openSettingsDialog);

 var helpButton = document.getElementById("helpButton");
helpButton.addEventListener("click", openHelpDialog);

 var downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", openDownloadDialog);

//o canvas

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');




var generateCanvasSize=document.getElementById("canvas");
generateCanvasSize.style.display="none";

 var hideDialog=document.getElementById("welcomeDialog");

//gerar canvas quadrados
function generateCanvas100x100(){
    generateCanvasSize.style.display="block";
    generateCanvasSize.width="100";
    generateCanvasSize.height="100";
    
    hideDialog.style.display="none";
 
    colorPicker.value="#000000";
    sizePicker.value="1";

    ctx.fillStyle="white";
    ctx.fillRect(0,0,500,500);
}

function generateCanvas500x500(){
    generateCanvasSize.style.display="block";
    generateCanvasSize.width="500";
    generateCanvasSize.height="500";
    
    hideDialog.style.display="none";
 
    colorPicker.value="#000000";
    sizePicker.value="1";

    ctx.fillStyle="white";
    ctx.fillRect(0,0,500,500);
}

function generateCanvas1080x1080(){
    generateCanvasSize.style.display="block";
    generateCanvasSize.width="1080";
    generateCanvasSize.height="1080";
    
    hideDialog.style.display="none";
 
    colorPicker.value="#000000";
    sizePicker.value="1";

    ctx.fillStyle="white";
    ctx.fillRect(0,0,1080,1080);
}

//gerar canvas retangulares em paisagem
 function generateCanvas800x600(){
    generateCanvasSize.style.display="block";
    generateCanvasSize.width="800";
    generateCanvasSize.height="600";

    hideDialog.style.display="none";

    colorPicker.value="#000000";
    sizePicker.value="1";  
    
    ctx.fillStyle="white";
    ctx.fillRect(0,0,800,600);    

   
    


 }

function generateCanvas1280x720(){
    generateCanvasSize.style.display="block";
    generateCanvasSize.width="1280";
    generateCanvasSize.height="720";

    hideDialog.style.display="none";

    colorPicker.value="#000000";
    sizePicker.value="1";  
    
    ctx.fillStyle="white";
    ctx.fillRect(0,0,1280,720);    

   
    


 }
 
 function generateCanvas1920x1080(){
    generateCanvasSize.style.display="block";
    generateCanvasSize.width="1920";
    generateCanvasSize.height="1080";

    hideDialog.style.display="none";

    colorPicker.value="#000000";
    sizePicker.value="1";  
    
    ctx.fillStyle="white";
    ctx.fillRect(0,0,1920,1080);    

   
    


 }
 
//gerar canvas retangulares em retrato
 function generateCanvas600x800(){
    generateCanvasSize.style.display="block";
    generateCanvasSize.width="600";
    generateCanvasSize.height="800";

    hideDialog.style.display="none";
 
    colorPicker.value="#000000";
    sizePicker.value="1";

    ctx.fillStyle="white";
    ctx.fillRect(0,0,600,800);
}

 function generateCanvas720x1280(){
    generateCanvasSize.style.display="block";
    generateCanvasSize.width="720";
    generateCanvasSize.height="1280";

    hideDialog.style.display="none";
 
    colorPicker.value="#000000";
    sizePicker.value="1";

    ctx.fillStyle="white";
    ctx.fillRect(0,0,720,1280);
}

function generateCanvas1080x1920(){
    generateCanvasSize.style.display="block";
    generateCanvasSize.width="1080";
    generateCanvasSize.height="1920";

    hideDialog.style.display="none";
 
    colorPicker.value="#000000";
    sizePicker.value="1";

    ctx.fillStyle="white";
    ctx.fillRect(0,0,1080,1920);
    
}

//gerar canvas personalizado

function generateCanvasPersonalized(){
  generateCanvasSize.style.display="block";

  var myPersonalizedCanvasWidth=document.getElementById("personalizedCanvasWidthInput");
  var myPersonalizedCanvasHeight=document.getElementById("personalizedCanvasHeightInput");


  generateCanvasSize.width=myPersonalizedCanvasWidth.value;
  generateCanvasSize.height=myPersonalizedCanvasHeight.value;

  hideDialog.style.display="none";

  colorPicker.value="#000000";
  sizePicker.value="1";  
  
  ctx.fillStyle="white";
  ctx.fillRect(0,0,1080, 1920);    

 
  


}


//funcionalidade da barra da esquerda
var brushButton=document.getElementById("brushButton");
var showBrushOptions=document.getElementsByClassName("leftBarBrush");

showBrushOptions.style

function showPaste(){
  var showingPaste=document.getElementById("leftBarPaste");
  
  showingPaste.style.display="block";
  
}
function hidePaste(){
  var hidingPaste=document.getElementById("leftBarPaste");
  
  hidingPaste.style.display="none";
}

//parte do colar de
var myPastedImage=document.getElementById("myPastedImageInput");

    
        function applyPastedImage() {
             var input = document.getElementById('myPastedImageInput');

            var myPastedImageXPosition=document.getElementById("movePastedImageFromXInput").value;
            
            var myPastedImageYPosition=document.getElementById("movePastedImageFromYInput").value;
            
            var myPastedImageWidth=document.getElementById("pastedImageWidthInput").value;

            var myPastedImageHeight=document.getElementById("pastedImageHeightInput").value;

             var imagem = new Image();
            imagem.onload = function() {
                ctx.drawImage(imagem, myPastedImageXPosition, myPastedImageYPosition, myPastedImageWidth,myPastedImageHeight);
            }

            if (input.files && input.files[0]) {
                 var file = input.files[0];
                 var reader = new FileReader();
                reader.onload = function(e) {
                    imagem.src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        }
//parte do pincel da barra da esquerda
function showBrush(){
    var showingBrush=document.getElementById("leftBarBrush");
    showingBrush.style.display="block";

    //deixando os beregejonsons tudo no padrao
    

}

function hideBrush(){
    var hidingBrush=document.getElementById("leftBarBrush");
    hidingBrush.style.display="none";
}


//pincel


if (isWritingText=false){
}

var colorPicker = document.getElementById('brushColorPicker');
var sizePicker = document.getElementById('brushSizePicker');
var screenCleaner=document.getElementById("clearButton")
let isBrushDrawing = false;

ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = sizePicker.value;

canvas.addEventListener('mousedown', (e) => {
    isBrushDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
});

canvas.addEventListener('touchstart', (e) => {
    isBrushDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.touches[0].clientX - canvas.getBoundingClientRect().left, e.touches[0].clientY - canvas.getBoundingClientRect().top);
});

canvas.addEventListener('mousemove', (e) => {
    if (!isBrushDrawing) return;

    ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
});

canvas.addEventListener('touchmove', (e) => {
    if (!isBrushDrawing) return;

    ctx.lineTo(e.touches[0].clientX - canvas.getBoundingClientRect().left, e.touches[0].clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
});

canvas.addEventListener('mouseup', () => {
    isBrushDrawing = false;
    ctx.closePath();
});

canvas.addEventListener('touchend', () => {
    isBrushDrawing = false;
    ctx.closePath();
});



colorPicker.addEventListener('input', (e) => {
    ctx.strokeStyle = e.target.value;
});

sizePicker.addEventListener('input', (e) => {
    ctx.lineWidth = e.target.value;
});

document.getElementById("clearBrushButton").addEventListener("click", function(){ 
	ctx.fillStyle="white";
	ctx.fillRect(0, 0, canvas.width, canvas.height)
 });

//lapis
function showPencil(){
    var showingPencil=document.getElementById("leftBarPencil");
    showingPencil.style.display="block";
}

function hidePencil(){
    var hidingPencil=document.getElementById("leftBarPencil");
    hidingPencil.style.display="none";
}

 var pencilColorPicker = document.getElementById('pencilColorPicker');
 var pencilSizePicker = document.getElementById('pencilSizePicker');
 var pencilScreenCleaner=document.getElementById("clearPencilButton")
let isPencilDrawing = false;

ctx.strokeStyle = pencilColorPicker.value;
ctx.lineWidth = pencilSizePicker.value;

canvas.addEventListener('mousedown', (e) => {
    isPencilDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
});

canvas.addEventListener('mousemove', (e) => {
    if (!isPencilDrawing) return;

    ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
});

canvas.addEventListener('mouseup', () => {
    isPencilDrawing = false;
    ctx.closePath();
});


pencilColorPicker.addEventListener('input', (e) => {
    ctx.strokeStyle = e.target.value;
});

pencilSizePicker.addEventListener('input', (e) => {
    ctx.lineWidth = e.target.value;
});

document.getElementById("clearPencilButton").addEventListener("click", function(){ 
	ctx.fillStyle="white";
	ctx.fillRect(0, 0, canvas.width, canvas.height)
 });

//Spray (não funcional)
/*function showSpray(){
    var showingSpray = document.getElementById("leftBarSpray");
    showingSpray.style.display = "block";
}

function hideSpray(){
    var hidingSpray = document.getElementById("leftBarSpray");
    hidingSpray.style.display = "none";
}

 var sprayColorPicker = document.getElementById('sprayColorPicker');
 var spraySizePicker = document.getElementById('spraySizePicker');
 var sprayButton = document.getElementById("clearSprayButton");
let isSprayDrawing = false;

ctx.strokeStyle = sprayColorPicker.value;
ctx.lineWidth = spraySizePicker.value;

canvas.addEventListener('mousedown', (e) => {
    isSprayDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
});

canvas.addEventListener('mousemove', (e) => {
    if (!isSprayDrawing) return;

    // Substitua a lógica de desenho do lápis pela lógica do spray aqui.
if (!isSprayDrawing) return;

    for (let i = 0; i < 5; i++) {
         var offsetX = Math.random() * 20 - 10; // Valor aleatório entre -10 e 10
         var offsetY = Math.random() * 20 - 10; // Valor aleatório entre -10 e 10

        ctx.beginPath();
        ctx.arc(e.clientX - canvas.getBoundingClientRect().left + offsetX, e.clientY - canvas.getBoundingClientRect().top + offsetY, ctx.lineWidth / 2, 0, 2 * Math.PI);
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
    }

    ctx.stroke();
});

canvas.addEventListener('mouseup', () => {
    isSprayDrawing = false;
    ctx.closePath();
});

sprayColorPicker.addEventListener('input', (e) => {
    ctx.strokeStyle = e.target.value;
});

spraySizePicker.addEventListener('input', (e) => {
    ctx.lineWidth = e.target.value;
});

sprayButton.addEventListener("click", function(){ 
    // Substitua a lógica de limpeza do lápis pela lógica do spray aqui.
 });

*/
//borracha
function showEraser(){
    var showingEraser=document.getElementById("leftBarEraser");
    showingEraser.style.display="block";
}

function hideEraser(){
    var hidingEraser=document.getElementById("leftBarEraser");
    hidingEraser.style.display="none";
}


 var eraserSizePicker = document.getElementById('eraserSizePicker');
 var eraserScreenCleaner=document.getElementById("clearEraserButton")
let isEraserDrawing = false;

ctx.strokeStyle = "white";
ctx.lineWidth = eraserSizePicker.value;


canvas.addEventListener('mousedown', (e) => {
    isEraserDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
});

canvas.addEventListener('touchstart', (e) => {
    isEraserDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    event.preventDefault();
});

canvas.addEventListener('mousemove', (e) => {
    if (!isEraserDrawing) return;

    ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
});

canvas.addEventListener('touchmove', (e) => {
    if (!isEraserDrawing) return;

    ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
    event.preventDefault();
});


canvas.addEventListener('mouseup', () => {
    isEraserDrawing = false;
    ctx.closePath();
});

canvas.addEventListener('touchend', () => {
    isEraserDrawing = false;
    ctx.closePath();
    event.preventDefault();
});


eraserColorPicker.addEventListener('input', (e) => {
    ctx.strokeStyle = "white";
    
});

eraserSizePicker.addEventListener('input', (e) => {
    ctx.lineWidth = e.target.value;

});


//gambiarra pra borracha funcionar
document.getElementById("eraserButton").addEventListener("click", function(){
    ctx.strokeStyle="white";
    eraserSizePicker.value="1";
 })


document.getElementById("clearEraserButton").addEventListener("click", function(){
    ctx.fillStyle="white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})


//texto
function showText(){
    var showingLeftBarText=document.getElementById("leftBarText");
    showingLeftBarText.style.display="block";
}

function hideText(){
    var hidingLeftBarText=document.getElementById("leftBarText");
    hidingLeftBarText.style.display="none";
}


document.getElementById("sansSerifFontButton").addEventListener("click", function(){

  var myText=document.getElementById("textInput").value;
  var myTextXValue=document.getElementById("myTextXValue").value;
  var myTextYValue=document.getElementById("myTextYValue").value;
  var myTextColor=document.getElementById("myTextColor").value;
  var myTextSize=document.getElementById("myTextSize").value;


  ctx.font = myTextSize+'px Sans-Serif';
  ctx.fillStyle = myTextColor;

  // Desenha o texto no canvas
  ctx.fillText(myText, myTextXValue, myTextYValue);
});


document.getElementById("serifFontButton").addEventListener("click", function(){
  var myText=document.getElementById("textInput").value;
  var myTextXValue=document.getElementById("myTextXValue").value;
  var myTextYValue=document.getElementById("myTextYValue").value;
  var myTextColor=document.getElementById("myTextColor").value;
  var myTextSize=document.getElementById("myTextSize").value;


  ctx.font = myTextSize+'px Serif';
  ctx.fillStyle = myTextColor;

  // Desenha o texto no canvas
  ctx.fillText(myText, myTextXValue, myTextYValue);


});

document.getElementById("cursiveFontButton").addEventListener("click", function(){
  var myText=document.getElementById("textInput").value;
  var myTextXValue=document.getElementById("myTextXValue").value;
  var myTextYValue=document.getElementById("myTextYValue").value;
  var myTextColor=document.getElementById("myTextColor").value;
  var myTextSize=document.getElementById("myTextSize").value;


  ctx.font = myTextSize+'px Cursive';
  ctx.fillStyle = myTextColor;

  // Desenha o texto no canvas
  ctx.fillText(myText, myTextXValue, myTextYValue);


});

document.getElementById("fantasyFontButton").addEventListener("click", function(){
  var myText=document.getElementById("textInput").value;
  var myTextXValue=document.getElementById("myTextXValue").value;
  var myTextYValue=document.getElementById("myTextYValue").value;
  var myTextColor=document.getElementById("myTextColor").value;
  var myTextSize=document.getElementById("myTextSize").value;


  ctx.font = myTextSize+'px Fantasy';
  ctx.fillStyle = myTextColor;

  // Desenha o texto no canvas
  ctx.fillText(myText, myTextXValue, myTextYValue);


});

document.getElementById("monospaceFontButton").addEventListener("click", function(){
  var myText=document.getElementById("textInput").value;
  var myTextXValue=document.getElementById("myTextXValue").value;
  var myTextYValue=document.getElementById("myTextYValue").value;
  var myTextColor=document.getElementById("myTextColor").value;
  var myTextSize=document.getElementById("myTextSize").value;


  ctx.font = myTextSize+'px Monospace';
  ctx.fillStyle = myTextColor;

  // Desenha o texto no canvas
  ctx.fillText(myText, myTextXValue, myTextYValue);


});

//AIN CABECINHA
function sendText(){


    var myText=document.getElementById("textInput").value;
    var myTextXValue=document.getElementById("myTextXValue").value;
    var myTextYValue=document.getElementById("myTextYValue").value;
    var myTextColor=document.getElementById("myTextColor").value;
    var myTextSize=document.getElementById("myTextSize").value;
  

    ctx.font = myTextSize+'px Arial';
    ctx.fillStyle = myTextColor;

    // Desenha o texto no canvas
    ctx.fillText(myText, myTextXValue, myTextYValue);
    
    

}


//filtros/efeitos
var leftBarEffects=document.getElementById("leftBarEffects");

leftBarEffects.style.display="none";

function showEffects(){
  var showingEffects=document.getElementById("leftBarEffects");
  
  showingEffects.style.display="block";
}

function hideEffects(){
  var hidingEffects=document.getElementById("leftBarEffects");

  hidingEffects.style.display="none";
}


//escala de cinza
document.getElementById("applyGrayscaleFilter0").addEventListener("click", function(){
  ctx.filter="grayscale(0%)";
});

document.getElementById("applyGrayscaleFilter25").addEventListener("click", function(){
  ctx.filter="grayscale(25%)";
});

document.getElementById("applyGrayscaleFilter50").addEventListener("click", function(){
  ctx.filter="grayscale(50%)";
});

document.getElementById("applyGrayscaleFilter75").addEventListener("click", function(){
  ctx.filter="grayscale(75%)";
});

document.getElementById("applyGrayscaleFilter100").addEventListener("click", function(){
  ctx.filter="grayscale(100%)";
});


//desfoque
document.getElementById("applyBlurFilter0").addEventListener("click", function(){
    ctx.filter="blur(0px)";
  });

  document.getElementById("applyBlurFilter25").addEventListener("click", function(){
    ctx.filter="blur(25px)";
  });

  document.getElementById("applyBlurFilter50").addEventListener("click", function(){
    ctx.filter="blur(50px)";
  });

  document.getElementById("applyBlurFilter75").addEventListener("click", function(){
    ctx.filter="blur(75px)";
  });

document.getElementById("applyBlurFilter100").addEventListener("click", function(){
  ctx.filter="blur(100px)";
});

//sepia
document.getElementById("applySepiaFilter0Button").addEventListener("click", function(){
    ctx.filter="sepia(0%)";
  });

document.getElementById("applySepiaFilter25Button").addEventListener("click", function(){
    ctx.filter="sepia(25%)";
  });

document.getElementById("applySepiaFilter50Button").addEventListener("click", function(){
  ctx.filter="sepia(50%)";
});

document.getElementById("applySepiaFilter75Button").addEventListener("click", function(){
    ctx.filter="sepia(75%)";
  });

document.getElementById("applySepiaFilter100Button").addEventListener("click", function(){
  ctx.filter="sepia(100%)";
});


//saturacao
document.getElementById("applySaturateFilter0Button").addEventListener("click", function(){
    ctx.filter="saturate(0%)";
  });

  document.getElementById("applySaturateFilter25Button").addEventListener("click", function(){
    ctx.filter="saturate(25%)";
  });

  document.getElementById("applySaturateFilter50Button").addEventListener("click", function(){
    ctx.filter="saturate(50%)";
  });

  document.getElementById("applySaturateFilter75Button").addEventListener("click", function(){
    ctx.filter="saturate(75%)";
  });

  document.getElementById("applySaturateFilter100Button").addEventListener("click", function(){
    ctx.filter="saturate(100%)";
  });

  document.getElementById("applySaturateFilter125Button").addEventListener("click", function(){
    ctx.filter="saturate(125%)";
  });

  document.getElementById("applySaturateFilter150Button").addEventListener("click", function(){
    ctx.filter="saturate(150%)";
  });

  document.getElementById("applySaturateFilter175Button").addEventListener("click", function(){
    ctx.filter="saturate(175%)";
  });

document.getElementById("applySaturateFilter200Button").addEventListener("click", function(){
  ctx.filter="saturate(200%)";
});

//brilho
document.getElementById("applyBrightnessFilter0Button").addEventListener("click", function(){
    ctx.filter = "brightness(0%)";
  });
  
  document.getElementById("applyBrightnessFilter25Button").addEventListener("click", function(){
    ctx.filter = "brightness(25%)";
  });
  
  document.getElementById("applyBrightnessFilter50Button").addEventListener("click", function(){
    ctx.filter = "brightness(50%)";
  });
  
  document.getElementById("applyBrightnessFilter75Button").addEventListener("click", function(){
    ctx.filter = "brightness(75%)";
  });
  
  document.getElementById("applyBrightnessFilter100Button").addEventListener("click", function(){
    ctx.filter = "brightness(100%)";
  });
  
  document.getElementById("applyBrightnessFilter125Button").addEventListener("click", function(){
    ctx.filter = "brightness(125%)";
  });
  
  document.getElementById("applyBrightnessFilter150Button").addEventListener("click", function(){
    ctx.filter = "brightness(150%)";
  });
  
  document.getElementById("applyBrightnessFilter175Button").addEventListener("click", function(){
    ctx.filter = "brightness(175%)";
  });
  
  document.getElementById("applyBrightnessFilter200Button").addEventListener("click", function(){
    ctx.filter = "brightness(200%)";
  });
  
//contraste
  document.getElementById("applyContrastFilter0Button").addEventListener("click", function(){
    ctx.filter = "contrast(0%)";
  });
  
  document.getElementById("applyContrastFilter25Button").addEventListener("click", function(){
    ctx.filter = "contrast(25%)";
  });
  
  document.getElementById("applyContrastFilter50Button").addEventListener("click", function(){
    ctx.filter = "contrast(50%)";
  });
  
  document.getElementById("applyContrastFilter75Button").addEventListener("click", function(){
    ctx.filter = "contrast(75%)";
  });
  
  document.getElementById("applyContrastFilter100Button").addEventListener("click", function(){
    ctx.filter = "contrast(100%)";
  });
  
  document.getElementById("applyContrastFilter125Button").addEventListener("click", function(){
    ctx.filter = "contrast(125%)";
  });
  
  document.getElementById("applyContrastFilter150Button").addEventListener("click", function(){
    ctx.filter = "contrast(150%)";
  });
  
  document.getElementById("applyContrastFilter175Button").addEventListener("click", function(){
    ctx.filter = "contrast(175%)";
  });
  
  document.getElementById("applyContrastFilter200Button").addEventListener("click", function(){
    ctx.filter = "contrast(200%)";
  });
  
//matriz
document.getElementById("applyHueFilter0Button").addEventListener("click", function(){
    ctx.filter="hue-rotate(0deg)";
  });

  document.getElementById("applyHueFilter90Button").addEventListener("click", function(){
    ctx.filter="hue-rotate(90deg)";
  });

  document.getElementById("applyHueFilter180Button").addEventListener("click", function(){
    ctx.filter="hue-rotate(180deg)";
  });

  document.getElementById("applyHueFilter270Button").addEventListener("click", function(){
    ctx.filter="hue-rotate(270deg)";
  });

document.getElementById("applyHueFilter360Button").addEventListener("click", function(){
  ctx.filter="hue-rotate(360deg)";
});

//inverter
document.getElementById("applyInvertFilter0Button").addEventListener("click", function(){
    ctx.filter="invert(0%)";
  });

  document.getElementById("applyInvertFilter25Button").addEventListener("click", function(){
    ctx.filter="invert(25%)";
  });

  document.getElementById("applyInvertFilter50Button").addEventListener("click", function(){
    ctx.filter="invert(50%)";
  });

  document.getElementById("applyInvertFilter75Button").addEventListener("click", function(){
    ctx.filter="invert(75%)";
  });

  document.getElementById("applyInvertFilter100Button").addEventListener("click", function(){
    ctx.filter="invert(100%)";
  });

  //opacidade
  document.getElementById("applyOpacityFilter0Button").addEventListener("click", function(){
    ctx.filter="opacity(0%)";
  });

  document.getElementById("applyOpacityFilter25Button").addEventListener("click", function(){
    ctx.filter="opacity(25%)";
  });

  document.getElementById("applyOpacityFilter50Button").addEventListener("click", function(){
    ctx.filter="opacity(50%)";
  });

  document.getElementById("applyOpacityFilter75Button").addEventListener("click", function(){
    ctx.filter="opacity(75%)";
  });

  document.getElementById("applyOpacityFilter100Button").addEventListener("click", function(){
    ctx.filter="opacity(100%)";
  });

//acessibilidade

var myTopBar=document.querySelector(".topBar");
    var myLeftbar=document.querySelector("#leftBar");
    var myBody=document.querySelector("body");
    var myWelcomeDialog=document.querySelector("#welcomeDialog");
    var myNewImageDialog=document.querySelector("#newImageDialog");
    var myOpenImageDialog=document.querySelector("#openImageDialog");
    var mySettingsDialog=document.querySelector("#settingsDialog");
    var myHelpDialog=document.querySelector("#helpDialog");
    var myDownloadDialog=document.querySelector("#downloadDialog");
    var myCanvas=document.querySelector("canvas");
    var myDialogs=document.querySelector(".dialog");
    var myDialogsButtons=document.querySelector("button");
    var myButtons=document.querySelector(".topBar ");
    var myTexts=document.querySelector("p");
    

document.getElementById("highContrastButton").addEventListener("click", function(){
    myTopBar.style.border="3px solid white";
    myLeftbar.style.border="3px solid white";
    myLeftbar.style.backgroundColor="black";
    myBody.style.backgroundColor="black";
    myWelcomeDialog.style.border="3px solid white";
    myNewImageDialog.style.border="3px solid white";
    myOpenImageDialog.style.border="3px solid white";
    mySettingsDialog.style.border="3px solid white";
    myHelpDialog.style.border="3px solid white";
    myDownloadDialog.style.border="3px solid white";
    myCanvas.style.border="3px solid white";
    myButtons.style.backgroundColor="black";
    myTopBar.style.border="3px solid white";
    myDialogsButtons.style.border="0px solid white";
    myTexts.style.color="white";
    myTexts.style.fontWeight="bold";
    myDialogs.style.border="3px solid white";

  });

  document.getElementById("bigIconsButton").addEventListener("click", function(){
    document.body.style.zoom = "125%";
    


  });

  

  document.getElementById("resetAcessbilityButton").addEventListener("click", function(){
    document.body.style.zoom = "100%";
    

    myTopBar.style.border="0px";
    myLeftbar.style.border="0px";
    myLeftbar.style.backgroundColor="#171717";
    myBody.style.backgroundColor="#272727";
    myWelcomeDialog.style.border="0px";
    myNewImageDialog.style.border="0px";
    myOpenImageDialog.style.border="0px";
    mySettingsDialog.style.border="0px";
    myHelpDialog.style.border="0px";
    myDownloadDialog.style.border="0px";
    myCanvas.style.border="1px solid black";
  })


  //formas geometricas
  function showGeometricShapes(){
    var showingGeometricShapes=document.getElementById("leftBarGeometricShapes");
    
    showingGeometricShapes.style.display="block";
    
  }
  function hideGeometricShapes(){
    var hidingGeometricShapes=document.getElementById("leftBarGeometricShapes");
    
    hidingGeometricShapes.style.display="none";
  } 
