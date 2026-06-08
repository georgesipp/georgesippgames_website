<script>
	import { base } from '$app/paths';

	import 'tailwindcss/tailwind.css';
	import '../app.postcss';
</script>

<div class="flex flex-col min-h-screen overflow-x-hidden">
  <header class="navbar bg-primary text-neutral-content justify-center py-8 mt-8">
    <h1 class="text-4xl font-semibold"><a href={base + '/'}>GeorgeSippGames</a></h1>
  </header>

  <main class="flex-1 flex flex-col items-center justify-center">
    <slot />
  </main>

  <footer class="footer p-10 bg-neutral text-neutral-content"></footer>
</div>
