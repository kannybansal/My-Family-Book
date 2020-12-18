var images = [ "depositphotos_26930203-stock-illustration-cartoon-dad.jpg","mother-png-clipart-arm-boy-cartoon-cartoon-mother-child-free-cartoon-mother-png-728_1019.jpg","83226998-big-brother-doing-piggyback-ride-younger-brother.jpg","grandfather-playing-with-baby-flat-cartoon-illustration-grandpa-grandchild-together-ready-use-2d-character-template-commercial-animation-printing-design-isolated-comic-hero_151150-1654.jpg","7ecf1629515f7cbf656b6d9508d3f0a3.jpg"
];

 
var reasons = [ "Saurabh Bansal", "Nikita Bansal", "Pratham , Sarthak and Adhrit", "N.K Agarwal","Ranjana Agarwal" ];

var conter=0 ;

function nextslide() {
document.getElementById("image1").src=images[conter];
document.getElementById("reasons").innerHTML=reasons[conter];
conter++;
}