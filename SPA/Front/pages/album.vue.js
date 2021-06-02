let Album = Vue.component('Album',{
    template:`
    <div class="body">
        <div class="imagehautpagefond Album">
        </div>
        <div class="page">
            <section>
                <img src="css/img/Albums/fearless.jpg"  class="imagehautpage biographie" alt="">
            </section>
            <div class="bodyfondnoir">
                <div class="flecheid">
                    <a href="index.html#sectionbiographie">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.228 48.688">
                            <path id="Icon_awesome-chevron-down" data-name="Icon awesome-chevron-down" d="M37.394,56.079l-35.7-35.7a4.409,4.409,0,0,1,0-6.236L5.854,9.975a4.409,4.409,0,0,1,6.228-.007l28.43,28.3,28.43-28.3a4.409,4.409,0,0,1,6.228.007l4.164,4.164a4.409,4.409,0,0,1,0,6.236l-35.7,35.7A4.41,4.41,0,0,1,37.394,56.079Z" transform="translate(-0.398 -8.683)" fill="#ebebeb"/>
                        </svg>
                    </a>
                </div>
                <div class="information">
                    <section class="informationgenerale">
                        <img src="css/img/Albums/fearless.jpg" alt="Album Fearless">
                        <h3>Fearless</h3>
                        <h6>Sortie</h6>
                        <p>18 mai 2015</p>
                        <h6>Nombre de titres</h6>
                        <p>22 titres</p>
                        <h6>Genre Musical</h6>
                        <p>Pop, Pop-Rock</p>
                        <h6>Certification</h6>
                        <p>Disque de platine</p>
                        <h6>Sortie</h6>
                        <a href=""><img src="css/img/Logo/spotify.svg" alt=""></a>
                        <a href=""><img src="css/img/Logo/deezer.svg" alt=""></a>
                        <a href=""><img src="css/img/Logo/youtube.svg" alt=""></a>
                        <a href=""><img src="css/img/Logo/itunes.svg" alt=""></a>
    
                    </section>
    
                    <section class="informationspecifique">
                        <h2>Titres</h2>
                        <table>
                            <thead>
    
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Titre
                                </th>
                                <th>
                                    Pop.
                                </th>
                                <th>
                                    Durée
                                </th>
                                <th>
    
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>1</p>
                                    </td>
                                    <td>
                                        <p>Homeless</p>
                                    </td>
                                    <td>
                                        <img src="css/img/svg/pophuit.svg" alt="popularité">
    
                                    </td>
                                    <td>
                                        <p>03:43</p>
                                    </td>
                                    <td>
                                        <a href="titre.html"><img src="css/img/svg/chevron-right-white.svg" alt="direction"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>2</p>
                                    </td>
                                    <td>
                                        <p>Dancing With The Devil</p>
                                    </td>
                                    <td>
                                        <img src="css/img/svg/popsix.svg" alt="popularité">
    
                                    </td>
                                    <td>
                                        <p>03:39</p>
                                    </td>
                                    <td>
                                        <a href="titre.html"><img src="css/img/svg/chevron-right-white.svg" alt="direction"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>3</p>
                                    </td>
                                    <td>
                                        <p>Freeze You Out</p>
                                    </td>
                                    <td>
                                        <img src="css/img/svg/popsix.svg" alt="popularité">
                                    </td>
                                    <td>
                                        <p>04:06</p>
                                    </td>
                                    <td>
                                        <a href="titre.html"><img src="css/img/svg/chevron-right-white.svg" alt="direction"></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>4</p>
                                    </td>
                                    <td>
                                        <p>Mirror Mirror</p>
                                    </td>
                                    <td>
                                        <img src="css/img/svg/popcinq.svg" alt="popularité">
    
                                    </td>
                                    <td>
                                        <p>03:50</p>
                                    </td>
                                    <td>
                                        <a href="titre.html"><img src="css/img/svg/chevron-right-white.svg" alt="direction"></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h2>Description</h2>
                        <p>Le premier single de l’album, Homeless est sorti le 19 mai 2014, soit un an avant Fearless. Il a
                            rencontré un succès puisqu’il a atteint la 1re place du Top Singles en France et s’est bien classé en
                            Belgique et en Suisse. Sounds Like Heaven en featuring avec Lindsey Stirling est sorti en tant que
                            single promotionnel le 11 mai 2015 mais il fut un échec commercial en se classant seulement à la 134e
                            place du Top Single en France. Dancing with the Devil est le 2e single issu de l’album. Sorti le
                            27 juin 2015, il réalise une performance dans les charts mitigée puisqu’il se positionne à la 57e place
                            du Top Single en France. Le 3e single Mirror, Mirror est envoyé aux radios française en septembre 2015.
                            Freeze You Out sort le 6 janvier 2016 et se classe à la 69ème place du Top Singles.
                        </p>
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
