window.addEventListener("ready", (event) => {
  const divConts=document.querySelectorAll(".qrCode");
  var qrArray=Array(divConts.length).fill(0);
  //i=1;
  for (let i = 0; i < divConts.length; i++) {
    qrArray[i] = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "svg",
    data: divConts[i].getAttribute("name"),
    image: "FiguresGeneral/crest_logo.svg",
    imageOptions:{
        hideBackgroundDots:true,
        imageSize:0.6,
        margin:0.2
    },
    dotsOptions:{
        type:"dots",
        color:"#000080",
        gradient:null,
    },
    backgroundOptions: {
        color: "#fff",
    },
    dotsOptionsHelper:{
        colorType:{
            single:true,
            gradient:false,
        },
        gradient:{
            linear:true,
            radial:false,
            color1:"#6a1a4c",
            color2:"#6a1a4c",
            rotation:"0",
        },
    },
    cornersSquareOptions:{
        type:"extra-rounded",
        color:"#2ea5de",
        gradient:null,
    },
    cornersSquareOptionsHelper:{
        colorType:{
            single:true,
            gradient:false},
        gradient:{
            linear:true,
            radial:false,
            color1:"#000000",
            color2:"#000000",
            rotation:"0"},
    },
    cornersDotOptions:{
        type:"dot",
        color:"#0a03fc"
    },
    cornersDotOptionsHelper:{
        colorType:{
            single:true,
            gradient:false},
        gradient:{
            linear:true,
            radial:false,
            color1:"#000000",
            color2:"#000000",
            rotation:"0"},
    },
    backgroundOptionsHelper:{
        colorType:{
            single:true,
            gradient:false},
        gradient:{
            linear:true,
            radial:false,
            color1:"#ffffff",
            color2:"#ffffff",
            rotation:"0"},
    },
        });		
    qrArray[i].append(divConts[i]);		
    } ;
});

