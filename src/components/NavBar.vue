<template>
  <div :class="navClasses">

    <!--Navbar logo-->
    <a class="logo" href="#">
      <img src="../assets/images/logo.png" alt="Logo">
    </a>

    <!--Navbar Button-->
    <div @click="toggleMenu" class="navbar-toggler" type="button" id="bar">
      <span class="toggler-icon"></span>
      <span class="toggler-icon"></span>
      <span class="toggler-icon"></span>
    </div>

    <!--Navbar Items-->
    <div :style="{right: toggleMenuClick ? '0' : '-360px'}" class="menu-bar" id="navbar">
      <ul class="menu-items">
        <li><a @click="closeToggleMenu" href="#home">Home</a></li>
        <li><a @click="closeToggleMenu" href="#service">Service</a></li>
        <li><a @click="closeToggleMenu" href="#pricing">Pricing</a></li>
        <li><a @click="closeToggleMenu" href="#contact">Contact</a></li>
      </ul>
    </div>

    <!--NavBar Icons-->
    <div class="navbar-social">
      <span>FOLLOW US</span>
      <ul>
        <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
        <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
        <li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
        <li><a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navClasses: {
        'nav': true
      },
      toggleMenuClick: false
    };
  },
  methods: {
    addNavScrolled() {
      const winSize = window.scrollY;
      this.navClasses['scrolled'] = winSize > 0;
    },
    toggleMenu() {
      this.toggleMenuClick = !this.toggleMenuClick;
    },
    closeToggleMenu() {
      this.toggleMenuClick = false;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.addNavScrolled);
  },
  unmounted() {
    window.addEventListener('scroll', this.addNavScrolled);
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.4rem 5rem;
  background: transparent;
  transition: all 0.5s ease;
  z-index: 100000;
}

.nav.scrolled {
  background-color: #ffffff !important;
  transition: background-color 200ms linear;
  box-shadow: 7px 10px 15px rgba(0, 0, 0, 0.3);
}

.nav .navbar-toggler {
  display: none;
  border: none;
  outline: none;
}

.nav .navbar-toggler .toggler-icon {
  width: 27px;
  height: 3px;
  background-color: #121212;
  margin: 5px 0;
  position: relative;
  display: block;
  transition: all 0.3s ease-out 0s;
}

.nav .menu-bar .menu-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav .menu-bar .menu-items li {
  margin: 0 15px;
}
 
.nav .menu-bar .menu-items li a {
  color: #000000;
  font-size: 18px;
  font-weight: 600;
}

.nav .menu-bar .menu-items li a:hover {
  color: #4F47E4;
}

.nav .navbar-social {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav .navbar-social span {
  font-size: 18px;
  font-weight: 600;
  padding-right: 10px;
  color: #6c6c6c;
}

.nav .navbar-social ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav .navbar-social ul li {
  margin: 0 7px;
}

.nav .navbar-social ul li a {
  color: #6c6c6c;
  font-size: 22px;
}

.nav .navbar-social ul li a:hover {
  color: #4F47E4;
}

@media only screen and (max-width: 946px) {
  .nav {
    padding: 0.3rem 3rem;
  }

  .nav .navbar-social {
    display: none;
  }
}

@media only screen and (max-width: 774px) {
  .nav {
    padding: 0.3rem 1rem;
  }

  .nav .navbar-toggler {
    display: block;
    position: absolute;
    top: 26px;
    right: 16px;
    z-index: 1000000;
  }

  .nav .menu-bar {
    position: fixed;
    top: 55px;
    right: -360px;
    width: 300px;
    height: 100vh;
    background-color: rgba(256, 256, 256, 0.9);
    transition: all 0.6s ease;
  }

  .nav .menu-bar .menu-items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: justify;
    padding: 40px 0;
  }

  .nav .menu-bar .menu-items li {
    margin: 2rem 30px;
  }
}
</style>
