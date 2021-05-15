<template>
  <NavBar/>
  <Home/>
  <section id="wrapper">
    <Service />
    <Pricing />
    <CallToAct />
    <Contact />
  </section>
  <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import Service from './components/Service.vue'
import Pricing from './components/Pricing.vue'
import CallToAct from './components/CallToAct.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    Service,
    Pricing,
    CallToAct,
    Contact,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
}

.offset:before {
  display: block;
  content: "";
  height: 10rem;
  margin-top: -2rem;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

h3 {
  font-size: 44px;
  line-height: 55px;
  color: #121212;
  font-weight: 600;
}

h6 {
  font-size: 20px;
  line-height: 32px;
  color: #6c6c6c;
  margin-top: 16px;
  font-weight: normal;
}

.main-btn {
  display: inline-block;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 2px solid transparent;
  padding: 0 32px;
  font-size: 16px;
  line-height: 48px;
  color: #0067f4;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  z-index: 5;
}

#wrapper {
  margin: 1rem 7rem 10rem 7rem;
}

@media only screen and (max-width: 946px) {
  #wrapper {
    margin: 1rem 3rem 9rem 3rem;
  }
}

@media only screen and (max-width: 774px) {
  #wrapper {
    margin: 1rem 1rem 8rem 1rem;
  }
}
</style>
