<template>
  <section id="pricing" class="pricing">
    <h3>Our Pricing</h3>
    <h6>Stop wasting time and money designing and<br> managing a website that doesn't get results. Happiness guaranteed!</h6>

    <div class="table">


      <div class="basic">
        <div class="b-head">
          <h3>Basic</h3>
        </div>
        <div class="price">
          <span class="sing">$</span>
          <span class="currency">99</span>
          <span class="cent">.99/</span>
          <span class="month">MON</span>
        </div>

        <ul>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Carefully crafted components
          </li>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Amazing page exemples
          </li>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Super friendly support team
          </li>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Awesome Support
          </li>
        </ul>

        <ul class="header-btn">
          <a class="main-btn btn-two" href="">See More</a>
        </ul>
      </div>


      <div class="basic standard">
        <div class="b-head">
          <h3>STANDARD</h3>
        </div>
        <div class="price">
          <span class="sing">$</span>
          <span class="currency">199</span>
          <span class="cent">.99/</span>
          <span class="month">MON</span>
        </div>

        <ul>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Carefully crafted components
          </li>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Amazing page exemples
          </li>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Super friendly support team
          </li>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Awesome Support
          </li>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Amazing page exemples
          </li>
        </ul>

        <ul class="header-btn">
          <a class="main-btn btn-two" href="">See More</a>
        </ul>
      </div>


      <div class="basic">
        <div class="b-head">
          <h3>UNLIMITED</h3>
        </div>
        <div class="price">
          <span class="sing">$</span>
          <span class="currency">199</span>
          <span class="cent">.99/</span>
          <span class="month">MON</span>
        </div>

        <ul>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Carefully crafted components
          </li>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Amazing page exemples
          </li>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Super friendly support team
          </li>
          <li>
            <font-awesome-icon class="icon" :icon="['fas', 'check-circle']" />
            Awesome Support
          </li>
        </ul>

        <ul class="header-btn">
          <a class="main-btn btn-two" href="">See More</a>
        </ul>
      </div>


    </div>
    
  </section>
</template>

<script>
export default {
  name: 'Pricing',
}
</script>

<style scoped>
.pricing {
  display: block;
  text-align: center;
}

.pricing h6 {
  margin-bottom: 6rem;
}

.pricing .table {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.pricing .basic {
  width: 355px;
  height: 100%;
  border: 1px solid #535CF1;
  border-radius: 20px;
}

.pricing .basic h3 {
  text-align: center;
  font-weight: 300;
  padding: 40px 0;
  background-color: #ECF0F1;
  transition: all ease 0.6s;
  border-radius: 20px 20px 0 0;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}

.pricing .basic:hover h3 {
  background-image: linear-gradient(to right, #535CF1, #A147E4);
  color: #ffffff;
}

.pricing .standard h3 {
  background-image: linear-gradient(to right, #535CF1, #A147E4);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  color: #ffffff;
}

.pricing .basic .price {
  display: block;
  text-align: center;
  padding: 20px 0;
}

.pricing .basic .price .sing {
  display: inline-block;
  font-size: 28px;
  font-weight: 400;
  vertical-align: middle;
}

.pricing .basic .price .currency {
  font-size: 60px;
  font-weight: 300;
  letter-spacing: -2px;
  line-height: 60px;
  padding: 0;
  vertical-align: middle;
}

.pricing .basic .price .cent {
  display: inline-block;
  font-size: 24px;
  font-weight: 400;
  vertical-align: bottom;
}

.pricing .basic .price .month {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
  vertical-align: bottom;
}

.pricing .basic ul li {
  border-top: 1px solid #cccccc;
  padding: 18px 0;
  border-bottom: 1px solid #cccccc;
  color: #7F8C8D;
}

.pricing .basic ul li .icon {
  padding-right: 5px;
  color: #535CF1;
}

.pricing .header-btn {
  margin: 2rem auto;
  width: 170px;
}

.pricing .header-btn a {
  font-weight: normal;
  font-size: 18px;
  border-radius: 50px;
  outline: medium none;
  border: 1px solid #2ECC71;
  color: #1D1D1D;
}

.pricing .basic:hover .header-btn a {
  background-image: linear-gradient(to right, #535CF1, #A147E4);
  color: #ffffff;
  border: 1px solid #2ECC71;
}

.pricing .standard .header-btn a {
  background-image: linear-gradient(to right, #535CF1, #A147E4);
  color: #ffffff;
  border: 1px solid #2ECC71;
}
</style>
