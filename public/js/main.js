musicButton = document.querySelector(".Music");
movieButton = document.querySelector(".Movies");
showsButton = document.querySelector(".TvShows");
contentSection= document.querySelector(".content");
accessibility = document.querySelector("#accessibility");
var fired = false;


function showMusic(){
    if(fired){
        
    }

    contentSection.innerHTML = "";
    contentSection.innerHTML = '<audio controls class="musicplayer"> <source src="public/images/(80)Queen I_Want_It_All.mp3" type="audio/mpeg">';
    accessibility.className ="";
    accessibility.classList.add("audio");
    accessibility.innerHTML = "See Lyrics";
}

function showMovie(){
    contentSection.innerHTML = "";
    contentSection.innerHTML = '<iframe class="videoPlay" width="560" height="315" src="https://www.youtube.com/embed/-WdC4DaYIeQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    accessibility.className ="";
    accessibility.classList.add("movie");
    accessibility.innerHTML = "Show Audio description version";
}

function showShows(){
    contentSection.innerHTML = "";
    contentSection.innerHTML = '<iframe class="videoPlay" width="560" height="315" src="https://www.youtube.com/embed/7Rg0y7NT1gU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    accessibility.className ="";
    accessibility.classList.add("series");
    accessibility.innerHTML = "Show Audio description version";

}

function accessibleMovie(){
    if(accessibility.classList[0]==="audio"){
        if(fired){
            document.querySelector
        }
        contentSection.innerHTML = contentSection.innerHTML + '<h3>Lyrics</h3> <p>I want it all (Hey, yeah), I want it all <br>        I want it all, and I want it now<br>        Adventure seeker on an empty street<br>        Just an alley creeper light on his feet<br>A young fighter screaming with no time for doubt<br>        With the pain and anger, cant see a way out<br>        "It aintt much Im asking," I heard him say<br>        "Got to find me a future, move out of my way"<br>        I want it all, I want it all<br>        I want it all, and I want it now<br>        I want it all, I want it all<br>        I want it all, and I want it now<br>        Listen, all you people, come gather around<br>        I gotta get me a game plan, gotta shake you to the ground<br>        Just give me what I know is mine<br>        People, do you hear me? Just give me the sign<br>        It aint much Imm asking, if you want the truth<br>        Heres to the future for the dreams of youth<br>        I want it all, I want it all (Give it all, I want it all)<br>        I want it all, and I want it now (Hey)<br>        I want it all, I want it all (Yes, I want it all, hey)<br>        I want it all, and I want it now<br>        Im a man with a one-track mind<br>        So much to do in one lifetime (People, do you hear me?)<br>        Not a man for compromise<br>        And wheres and whys and living lies<br>        So Im living it all (Yes, Im living it all)<br>        And Im giving it all (And Im giving it all, ooh, yeah)<br>        (Yeah, yeah, yeah)<br>        It aint much Im asking, if you want the truth<br>        Heres to the future, hear the cry of youth<br>        (Hear the cry, hear the cry of youth)<br>        I want it all, I want it all<br>        I want it all, and I want it now<br>        I want it all, I want it all (Hey, yeah, yeah)<br>        I want it all, and I want it now (Ooh, ooh)<br>        I want it now<br>        I want it, I want it!<br>        Oooh, huh!<br></p>';
        fired = true;
    }
    if(accessibility.classList[0]==="series"){
    contentSection.innerHTML = "";
    contentSection.innerHTML = '<iframe class="videoPlay" width="560" height="315" src="https://www.youtube.com/embed/03RAKJipMeM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    if(accessibility.classList[0] ==="movie"){
    contentSection.innerHTML = "";
    contentSection.innerHTML = '<iframe class="videoPlay" width="560" height="315" src="https://www.youtube.com/embed/O7j4_aP8dWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';}
    
}

musicButton.addEventListener("click", showMusic);
movieButton.addEventListener("click", showMovie);
showsButton.addEventListener("click", showShows);
accessibility.addEventListener("click", accessibleMovie);
 
 
 
 
