<template>
  <section id="service" class="service offset">
    <h3>Crafted For</h3>
    <h6>Stop wasting time and money designing and<br> managing a website that doesn't get results. Happiness guaranteed!</h6>

    <div class="service-content">
      <div class="box">
        <div class="box-one">
          <div class="services">
            <div class="service-icon">
              <font-awesome-icon class="icon" :icon="['fas', 'chart-bar']" />  
            </div>
            <div class="service-content">
              <h4 class="services-title">SaaS Business</h4>
              <p class="text">Short description for the ones<br> who look for something new.</p>
            </div>
          </div>

          <div class="services">
            <div class="service-icon">
              <font-awesome-icon class="icon" :icon="['fas', 'chart-area']" />
            </div>
            <div class="service-content">
              <h4 class="services-title">SaaS Business</h4>
              <p class="text">Short description for the ones<br> who look for something new.</p>
            </div>
          </div>
        </div>

        <div class="box-one">
          <div class="services">
            <div class="service-icon">
              <font-awesome-icon class="icon" :icon="['fas', 'bell']" />
            </div>
            <div class="service-content">
              <h4 class="services-title">SaaS Business</h4>
              <p class="text">Short description for the ones<br> who look for something new.</p>
            </div>
          </div>

          <div class="services">
            <div class="service-icon">
              <font-awesome-icon class="icon" :icon="['fas', 'coffee']" />
            </div>
            <div class="service-content">
              <h4 class="services-title">SaaS Business</h4>
              <p class="text">Short description for the ones<br> who look for something new.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="service-img">
        <img src="../assets/images/1.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Service',
}
</script>

<style scoped>
.service {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 7rem;
}

.service h6 {
  margin-bottom: 6rem;
}

.service .service-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.service .service-content .service-img {
  width: 40%;
}

.service .service-content .service-img img {
  width: 100%;
}

.service .service-content .box {
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.service .service-content .box .box-one {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.service .service-content .box .box-one .services {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.service .service-content .box .box-one .services .icon {
  font-size: 3rem;
  margin-bottom: 10px;
  color: #535CF1;
}

.service .service-content .box .box-one .services .service-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: justify;
}

@media only screen and (max-width: 946px) {
  .service {
    margin-bottom: 3rem;
  }

  .service h6 {
    margin-bottom: 3rem;
  }

  .service .service-content {
    flex-direction: column-reverse;
    justify-content: center;
  }

  .service .service-content .box {
    width: 100%;
  }

  .service .service-content .box .box-one {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .service .service-content .service-img {
    width: 90%;
    margin-bottom: 4rem;
  }
}

@media only screen and (max-width: 774px) {
  .service h3 {
    font-size: 33px;
  }

  .service h6 {
    font-size: 16px;
  }

  .service .service-content .service-img {
    width: 80%;
    margin-bottom: 4rem;
  }
}

@media only screen and (max-width: 541px) {
  .service {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .service h6 {
    text-align: justify;
  }

  .service .service-content .box {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  .service .service-content .box .box-one {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
