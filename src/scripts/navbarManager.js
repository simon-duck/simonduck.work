class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <script>navbarContextHighlight.js</script>
        <body>
            <header
      class="hidden landscape:flex justify-center text-center sticky top-0 z-51 "
    >
      <nav id="navBar"
        class="fixed flex font-mono justify-center align-center bg-linear-to-r from-[#086375] to-[#78c3fb] text-[#ffffff] shadow-lg m-[5vh] w-90% md:w-[60%] rounded-2xl overflow-hidden"
      >
        <ul
          class="flex flex-row text-center p-0 overflow-hidden list-none m-2 text-sm lg:text-base xl:text-xl gap-1"
        >
          <li id="homeLink"
            class="rounded-2xl hover:bg-[rgba(244,116,59,0.6)] text-center transition-colors duration-200"
          >
            <a href="/" class="text-white navBarElement block px-4 py-2 hover:text-[#086375] rounded-2xl transition-colors duration-200"
              >Home</a
            >
          </li>
          <li id="electronicsLink" class="rounded-2xl hover:bg-[rgba(244,116,59,0.6)] transition-colors duration-200">
            <a
              href="/electronics.html"
              class="navBarElement block px-4 py-2 hover:text-[#086375] rounded-2xl transition-colors duration-200"
              >Electronics</a
            >
          </li>
          <li 
            class="rounded-2xl hover:bg-[rgba(244,116,59,0.6)] transition-colors duration-200"
          >
            <a href="/soundart.html" id="SoundArtLink" class="navBarElement block px-4 py-2 hover:text-[#086375] rounded-2xl transition-colors duration-200"
              >Sound Art</a
            >
          </li>
          <li  class="rounded-2xl hover:bg-[rgba(244,116,59,0.6)] transition-colors duration-200">
            <a 
              href="/robotriddims.html"
              id="RobotRiddimsLink"
              class="navBarElement block px-4 py-2 hover:text-[#086375] rounded-2xl transition-colors duration-200"
              >Robot Riddims</a
            >
          </li>

          <li class="rounded-2xl hover:bg-[rgba(244,116,59,0.6)] transition-colors duration-200">
            <a
              href="/bambamsound.html"
              id="bamBamSoundLink"
              class="navBarElement block px-4 py-2 text-center hover:text-[#086375] rounded-2xl transition-colors duration-200"
              >Bam Bam Sound</a
            >
          </li>
          <li class="rounded-2xl hover:bg-[rgba(244,116,59,0.6)] transition-colors duration-200">
            <a
              href="contactform.html"
              id="contactLink"
              class="navBarElement block px-4 py-2 text-center hover:text-[#086375] rounded-2xl transition-colors duration-200"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </header>
       
    <!--Navigation for portrait screens in the form of a hamburger drop down menu. Simple animation from CSS styles-->


    <label class="hamburger-menu hidden portrait:flex portrait:flex-col items-center drop-shadow-md">
      <input type="checkbox">
    </label>
      <aside class="sidebar bg-[rgba(244,116,59,0.6)] landscape:hidden">
        <nav class="font-mono text-center font-size-[3em]">
          <div class="py-4 font-bold text-center"><a href="index.html" class="navBarElement transition-colors duration-200 inline-block py-3 px-4">Home</a></div>
          <div class="py-4 font-bold text-center"><a href="electronics.html" class="navBarElement transition-colors duration-200 inline-block py-3 px-4">Electronics</a></div>
          <div class="py-4 font-bold text-center"><a href="soundart.html" class="navBarElement transition-colors duration-200 inline-block py-3 px-4">Sound Art</a></div>
          <div class="py-4 font-bold text-center"><a href="robotriddims.html" class="navBarElement transition-colors duration-200 inline-block py-3 px-4">Robot Riddims</a></div>
          <div class="py-4 font-bold text-center"><a href="bambamsound.html" class="navBarElement transition-colors duration-200 inline-block py-3 px-4">Bam Bam Sound</a></div>
          <div class="py-4 font-bold text-center"><a href="contactform.html" class="navBarElement transition-colors duration-200 inline-block py-3 px-4">Contact</a></div>
        </nav>


      </aside>

<div class="block overflow-hidden top-0 w-[100%] fixed h-[9vh] bg-[#F2EDE1] z-3 "></div>`;
  }
}

customElements.define("nav-bar", Navbar);
