function volume_sphere() {
	 event.preventDefault();
    var calRadius = parseFloat(document.getElementById("radius").value);         
    var result = 'NaN';
    if (!isNaN(calRadius) && calRadius >= 0) {
        var result = (4/3) * Math.PI * Math.pow(calRadius, 3);
        result = result.toFixed(4);
    }
    var calVolume = document.getElementById("volume"); 
    calVolume.value = result;  
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
}
