function volume_sphere() {
    var calRadius = parseFloat(document.getElementById("radius").value);         
    var result = 'NaN';
    if (!isNaN(calRadius) && calRadius >= 0) {
        var result = (4/3) * Math.PI * Math.pow(calRadius, 3);
        result = result.toFixed(4);
    }
    var calVolume = document.getElementById("volume"); 
    calVolume.value = result;  
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
