"Generate code"
function getCreativeMode() {
  if (typeof window !== 'undefined' && window.mc) {
    window.mc.setPlayerMode("creative");
    return true;
  } else if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('playerMode', 'creative');
    return true;
  } else {
    return false;
  }
}
getCreativeMode();
