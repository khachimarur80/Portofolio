<template>
    <div class="section" id="technologies">
      <div class="section-inner">
        <h1>Tecnologías que uso</h1>
        <div class="technologies-inner">
          <div class="technology" v-for="(technology, i) in technologies" :key="i">
            <img :alt="technology.name" :src="require('@/assets/'+technology.icon)" height="100%" width="100%">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'vTechnologies',
  props: {
    technologies: {
      required: true,
    }
  }
}
</script>

<style scoped>
  .technologies-inner {
    aspect-ratio: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
  }
  .technology {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  hr {
    border-top: none;
    border-bottom: 1px solid #333;
    width: 80%;
    margin-left: 0%;
  }
  .section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .section-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 90%;
    flex-direction: column;
  }
  h1 {
    color: #ccc;
    font-size: 40px;
    margin-bottom: 20px;
    width: 100%;
    margin-left: 50px;
  }

  @media only screen and (max-width: 767px) {
    .section {
      height: 300px;
      padding: 20px;
    }
    .section-inner {
      width: 80%;
      min-width: 400px;
    }
    h1 {
      font-size: 26px;
      text-align: center;
      margin-left: 0px;
    }
    .technologies-inner {
      height: 200px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .section {
      height: 300px;
      padding: 35px;
    }
    h1 {
      font-size: 30px;
    }
    .technologies-inner {
      height: 200px;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    .section {
      height: 400px;
      padding: 50px;
    }
    h1 {
      font-size: 40px;
    }
    .technologies-inner {
      height: 250px;
    }
  }
  @media only screen and (min-width: 1280px) and (max-width: 1439px) {
    .section {
      height: 450px;
      padding: 70px;
    }
    h1 {
      font-size: 50px;
    }
    .technologies-inner {
      height: 300px;
    }
  }
  @media only screen and (min-width: 1440px) {
    .section {
      height: 500px;
      padding: 100px;
    }
    h1 {
      font-size: 60px;
    }
    .section-inner {
      gap: 80px;
    }
    .technologies-inner {
      height: 400px;
    }
  }
</style>
