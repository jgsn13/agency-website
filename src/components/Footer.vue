<template>
  <div>
    <footer>

      <div class="row-one">
        <a href="#" class="logo">
          <img src="../assets/images/logo.png">
        </a>
        <ul>
          <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
          <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
          <li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
          <li><a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
        </ul>
      </div>

      <div class="second-row">
        <div class="first-row">
          <h6 class="footer-title">Company</h6>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div class="first-row">
          <h6 class="footer-title">Product & Services</h6>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Developer</a></li>
          </ul>
        </div>

        <div class="first-row">
          <h6 class="footer-title">Help & Support</h6>
          <ul>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div class="first-row">
          <h6 class="footer-title">Subscribe Newsletter</h6>
          <div class="newsletter">
            <input type="text" name="" placeholder="Your Email">
            <button type="submit"><font-awesome-icon :icon="['fas', 'angle-double-right']" /></button>
          </div>
          <p class="text">Subscribe weekly newsletter to stay up to date. We don't send spam.</p>
        </div>
      </div>

    </footer>

    <div class="copyright">
      <p>&copy; All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
  background-color: #F4F6F7;
  padding: 7rem;
}

footer .row-one {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

footer .row-one ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

footer .row-one a {
  padding-right: 20px;
  font-size: 26px;
  color: #c6c6c6;
}

footer .row-one a:hover {
  color: #566EC4;
}

footer .second-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

footer .second-row h6 {
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #6c6c6c;
  padding-bottom: 20px;
}

footer .second-row li {
  padding-bottom: 12px;
}

footer .second-row li a {
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #121212;
}

footer .second-row .first-row:nth-child(4) {
  max-width: 300px;
}

footer .second-row .newsletter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 5px;
}

footer .second-row .newsletter input {
  width: 100%;
  height: 44px;
  border-radius: 50px;
  padding: 0 24px;
  border: 0;
  background-color: rgba(33, 33, 33, 0.12);
  font-weight: 500;
  outline: none;
}

footer .second-row .newsletter input::placeholder {
  opacity: 1;
  color: #6c6c6c;
}

footer .second-row .newsletter button {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  border-radius: 0 50px 50px 0;
  border: 0;
  font-size: 20px;
  color: #121212;
  background-color: none;
  cursor: pointer;
}

footer .second-row .text {
  margin-top: 16px;
}

.copyright {
  background-color: #2B354F;
  padding: 23px 0;
}

.copyright p {
  text-align: center;
  color: #ffffff;
}

@media only screen and (max-width: 946px) {
  footer {
    padding: 5rem 2.5rem;
  }
}

@media only screen and (max-width: 774px) {
  footer {
    padding: 4rem 1rem;
  }

  footer .second-row {
    flex-wrap: wrap;
  }

  footer .second-row .first-row {
    margin-bottom: 1rem;
  }
}
</style>
