<template>
  <div class="section" :id="contents.id">
    <div class="section-inner">
      <div class="section-text">
        <h1>{{ contents.title }}</h1>
        <hr>
        <p>
          {{ contents.text }}
        </p>
      </div>
      <div class="section-image">
        <img 
          :src="contents.image" 
          alt="Foto retrato de kei" 
          loading="lazy" 
          height="100%"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vSection',
  props: {
    contents: {
      required: true
    }
  }
}
</script>

<style scoped>
  hr {
    border-top: none;
    border-bottom: 1px solid #333;
    width: 80%;
  }
  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
  .section-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 90%;
  }
  .section-image {
    object-fit: cover;
    display: flex;
    justify-content: center;
    overflow: hidden;
    aspect-ratio: 1;
    border-radius: 20px;
    outline: 1px solid var(--primary);
    box-shadow: 0px 0px 6px 1px var(--primary);
  }
  .section-text {
    flex: 1;
    color: #ccc;
    margin: 30px;
  }
  .section-text  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  .section-text p {
    font-size: 20px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: justify;
  }

  @media only screen and (max-width: 767px) {
    .section {
      height: 600px;
      padding: 20px;
    }
    .section-inner {
      width: 80%;
      min-width: 400px;
    }
    .section-image {
      height: 400px;
    }
    .section-text  h1 {
      font-size: 26px;
      text-align: center;
    }
    .section-text p {
      font-size: 16px;
    }
    .section-inner {
      flex-direction: column-reverse;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .section {
      height: 400px;
      padding: 35px;
    }
    .section-image {
      height: 300px;
    }
    .section-text  h1 {
      font-size: 30px;
    }
    .section-text p {
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    .section {
      height: 400px;
      padding: 50px;
    }
    .section-image {
      height: 400px;
    }
    .section-text  h1 {
      font-size: 40px;
    }
    .section-text p {
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 1280px) and (max-width: 1439px) {
    .section {
      height: 500px;
      padding: 70px;
    }
    .section-image {
      height: 500px;
    }
    .section-text  h1 {
      font-size: 50px;
    }
    .section-text p {
      font-size: 22px;
    }
  }
  @media only screen and (min-width: 1440px) {
    .section {
      height: 600px;
      padding: 100px;
    }
    .section-text  h1 {
      font-size: 60px;
    }
    .section-text p {
      font-size: 24px;
    }
    .section-inner {
      gap: 80px;
    }
    .section-image {
      height: 550px;
    }
  }

</style>
