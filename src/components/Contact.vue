<template>
  <section class="contact offset" id="contact">
    <h3>Get In Touch</h3>
    <h6>Stop wasting time and money designing and<br> managing a website that doesn't get results. Happiness guaranteed!</h6>

    <div class="form">
      <div class="first-row">
        <input type="text" placeholder="Name" name="">
        <input type="email" placeholder="Email" name="">
      </div>
      <div class="first-row">
        <input type="text" placeholder="Subject" name="">
        <input type="tel" placeholder="Phone" name="">
      </div>

      <textarea placeholder="Message" rows="5"></textarea>

      <ul class="header-btn">
        <a href="#" class="main-btn btn-two">Submit</a>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cantact',
}
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.contact h6 {
  margin-bottom: 3rem;
}

.contact .form {
  width: 70%;
}

.contact .form .first-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
}

.contact .form .first-row input {
  width: 47%;
  height: 56px;
  border: 1px solid #CBCED1;
  border-radius: 5px;
  padding: 0 25px;
  font-size: 16px;
  outline: none;
}

.contact .form textarea {
  width: 100%;
  resize: none;
  border: 1px solid #CBCED1;
  border-radius: 5px;
  padding: 0 25px;
  font-size: 16px;
  outline: none;
  font-family: "Poppins", sans-serif;
  padding-top: 15px;
}

.contact .form .header-btn {
  margin: 2rem auto;
  width: 170px;
}

.contact .form .header-btn a {
  background-image: linear-gradient(to right, #535CF1, #A147E4);
  color: #ffffff;
  border: none;
  font-size: 18px;
  font-weight: normal;
  outline: none;
}

@media only screen and (max-width: 946px) {
  .contact .form {
    width: 80%;
  }
}

@media only screen and (max-width: 774px) {
  .contact h3 {
    font-size: 33px;
  }

  .contact h6 {
    font-size: 16px;
  }

  .contact .form {
    width: 80%;
  }

  .contact .form .header-btn a {
    font-size: 16px;
  }
}

@media only screen and (max-width: 541px) {
  .contact .form {
    width: 100%;
  }

  .contact .form .first-row {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 0;
  }

  .contact .form .first-row input {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
