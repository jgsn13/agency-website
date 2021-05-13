<template>
  <div>
    <div class="back">
      <div class="overlay"></div>
      <div class="hero-shape">
        <img src="../assets/images/header-shape.svg">
      </div>
    </div>

    <div class="hero-text">
      <h3>We Are A Strategic Marketing, Media And Ideas Agency</h3>
      <h6>A simple, customizable, and beautiful SaaS business focused landing page to make your project closer to launch</h6>
      <ul class="header-btn">
        <li><a href="#" class="main-btn btn-one">GET IN TOUCH</a></li>
        <li><a href="#" class="main-btn btn-two">WATCH THE VIDEO <font-awesome-icon class="play-icon" :icon="['fas', 'play']" /></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.back {
  background-image: url(../assets/images/6.jpg);
  width: 100%;
  height: 120vh;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

.back .overlay {
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.005) 8%, rgba(255,255,255,1) 78%);
  width: 100%;
  height: 100%;
}

.back .hero-shape {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.back .hero-shape img {
  width: 100%;
  display: block;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.hero-text h6 {
  color: #1d1d1d;
}

.hero-text .header-btn {
  margin-top: 22px;
}

.hero-text .header-btn li { 
  display: inline-block;
  margin: 10px 10px 0 0;
}

.hero-text .header-btn li a.main-btn {
  border-radius: 50px;
  overflow: hidden;
  background-color: #ffffff;
  border: 0;
  line-height: 50px;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
} 

.hero-text .header-btn li a.main-btn .play-icon{
  margin-left: 5px;
  color: #646EE5;
}

.hero-text .header-btn .btn-one {
  color: #ffffff;
}

.hero-text .header-btn .btn-one::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #535CF1, #A147E4);
  z-index: -1;
  transition: all 0.3s ease;
  background-position: right center;
}

.hero-text .header-btn .btn-one:hover::before {
  background-image: linear-gradient(to left, #535CF1, #A147E4);
  background-position: left center;
}

.hero-text .header-btn .btn-two:hover {
  box-shadow: 0 3px 30px 0 rgba(0,0,0,0.16);
}
</style>
