<template>
  <div class="nav">

    <!--Navbar logo-->
    <a class="logo" href="#">
      <img src="../assets/images/logo.png" alt="Logo">
    </a>

    <!--Navbar Button-->
    <div class="navbar-toggler" type="button" id="bar">
      <span class="toggler-icon"></span>
      <span class="toggler-icon"></span>
      <span class="toggler-icon"></span>
    </div>

    <!--Navbar Items-->
    <div class="menu-bar">
      <ul class="menu-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
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
  padding: 1rem 6.5rem;
  background: transparent;
  transition: all 0.5s ease;
  z-index: 100000;
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
</style>
