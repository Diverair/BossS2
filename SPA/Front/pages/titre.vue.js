let Titre = Vue.component('Titre',{
    template:`
    <div class="body">
        <div class="imagehautpagefond Titre">
        </div>
        <div class="page">
            <section>
                <img src="css/img/Titre/Homeless.jpg"  class="imagehautpage biographie" alt="">
            </section>
            <div class="bodyfondnoir">
                <div class="flecheid">
                    <a href="titre.html#information">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.228 48.688">
                            <path id="Icon_awesome-chevron-down" data-name="Icon awesome-chevron-down" d="M37.394,56.079l-35.7-35.7a4.409,4.409,0,0,1,0-6.236L5.854,9.975a4.409,4.409,0,0,1,6.228-.007l28.43,28.3,28.43-28.3a4.409,4.409,0,0,1,6.228.007l4.164,4.164a4.409,4.409,0,0,1,0,6.236l-35.7,35.7A4.41,4.41,0,0,1,37.394,56.079Z" transform="translate(-0.398 -8.683)" fill="#ebebeb"/>
                        </svg>
                    </a>
                </div>
                <div id="information" class="information">
                    <section class="informationgenerale">
                        <img src="css/img/Titre/Homeless.jpg" class="image-info-générale" alt="Album Fearless">
                        <h4>Homeless</h4>
                        <h6>Sortie</h6>
                        <p>19 mai 2014</p>
                        <h6>Album</h6>
                        <p>Fearless</p>
                        <h6>Durée</h6>
                        <p>03:43</p>
                        <h6>Genre Musical</h6>
                        <p>Pop, Pop Rock</p>
                        <h6>Distinction</h6>
                        <p>Meilleur vente Française 2015</p>
                    </section>
    
                    <section class="informationspecifique">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pwKkjLOHd7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Clip officiel</p>
                        <h4>Écouter</h4>
                        <img src="css/img/Logo/spotify.svg" alt="">
                        <img src="css/img/Logo/deezer.svg" alt="">
                        <img src="css/img/Logo/youtube.svg" alt="">
                        <img src="css/img/Logo/itunes.svg" alt="">
                    </section>
                </div>
            </div>
        </div>
    </div>
     `,
    data(){
        return{
        }
    },
    mounted(){

    },
    methods:{

    }
})
