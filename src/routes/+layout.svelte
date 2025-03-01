


<script>
  import {base} from '$app/paths'

  import "tailwindcss/tailwind.css";
  import '../app.postcss'

</script>


<div  class="overflow-x-hidden" >

<h1 class="ml-8 mt-8 text-xl"> <a href={base+"/"}> Jonas Olbrich </a></h1>


<div class="navbar lg:h-28 bg-primary place-content-end  ~mt-2/8  drop-shadow-md relative z-10 ~xs:~space-x-0/24  ~xs:~pr-0/24 ">

    

    <div class="dropdown dropdown-hover relative overflow-visible">

        <div tabindex="0" role="button" class="btn lg:btn-lg btn-ghost lg:text-4xl font-medium">Projekte <!--<a href={base +"/projekte"}></a>--></div>

        <ul class="dropdown-content z-[1] menu p-2 shadow bg-neutral rounded-box w-52 lg:w-80 lg:text-2xl overflow-visible">
          <li><a href="{base}/projekte/gewinne!" >Gewinne! Gewinne! Gewinne!</a></li>
          <li><a href="{base}/projekte/marionette" >Interface Marionette</a></li>
          <li><a href="{base}/projekte/playingemissions" >Playing Emissions</a></li>
          <li><a href={base +"/projekte/cloudfactory"}>Cloudfactory</a></li>
          <li><a href={base +"/projekte/jeffersonsarcadia"}>Jeffersons Arcadia</a></li>
          <li><a href={base +"/projekte/magicshell"}>Magic Shell</a></li>
          <li><a href={base +"/projekte/cubemaze"}>Cube Maze</a></li>
          <li><a href={base +"/projekte/modemaker"}>Mode Maker</a></li>



        </ul>
      </div>

  <a class="btn btn-ghost lg:btn-lg lg:text-4xl font-medium" href={base +"/aboutme"}>About me</a>

    <a class="btn lg:btn-lg btn-ghost lg:text-4xl font-medium" href={base +"/impressum"}>Imprint</a>
  </div>
  

<slot />

<footer class="footer p-10 bg-secondary text-neutral-content mb-4 self-end">

</footer>
</div>