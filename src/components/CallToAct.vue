<template>
  <section class="call-to-act">

    <div class="parallax">
      <div class="call-content">
        <h3 class="call-title">Courious to Learn More? Stay Tuned</h3>
        <p class="text">You let us know whenever you want us to update anything or think something can be optimised.</p>
        <div class="call-news">
          <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />  
          <input type="email" placeholder="example@email.com">
          <button type="submit">SUBSCRIBE</button>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'CallToAct',
}
</script>

<style scoped>
.call-to-act {
  background-image: linear-gradient(to right, rgba(255,0,0,0), #910AFA), url(../assets/images/2.jpg);
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.call-to-act .parallax {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.call-to-act .parallax h3, .call-to-act .parallax p {
  color: #ffffff;
}

.call-to-act .parallax p {
  font-size: 18px;
  padding: 20px 0;
}

.call-to-act .parallax .call-news {
  background-color: #ffffff;
  max-width: 450px;
  margin: auto;
  border-radius: 50px;
  padding: 12px 0 12px 15px;
  position: relative;
}

.call-to-act .parallax .call-news .icon {
  color: #535CF1;
  font-size: 18px;
  margin-right: 10px;
}

.call-to-act .parallax .call-news .input {
  border: none;
  outline: none;
  font-size: 18px;
}

.call-to-act .parallax .call-news button {
  background-image: linear-gradient(to right, #535CF1, #A147E4);
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  padding: 15px 20px;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 50px;
} 
</style>
