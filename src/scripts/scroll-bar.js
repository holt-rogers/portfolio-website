const projectStart  = 560;



export function setupScrollCheck(){
    window.addEventListener('scroll', updateUnderLines);
}

function updateUnderLines(){
    const offset = window.pageYOffset;

    if (offset < projectStart){
        document.getElementById("about-button").style.textDecoration = "underline";
        document.getElementById("projects-button").style.textDecoration = "none";
    }else{
        document.getElementById("projects-button").style.textDecoration = "underline";
        document.getElementById("about-button").style.textDecoration = "none";
    }
}