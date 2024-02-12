<template>
  <footer id="footer">
    <span class="footer-title">
      Hachimaru Kei
    </span>
    <span class="socials">
      <a
        v-for="(social, i) in socials"
        :key="i"
        :href="social.link"
        target="_blank"
        class="social-link"
      >
        <button icon dense small dark>
         <img :src="require(`@/assets/${social.icon}.webp`)" :alt="social.name" width="30px">
        </button>
      </a>
    </span>
    <span class="footer-text">
      ©2024 Hachimaru Kei - Sitio Web creado por Kei
    </span>
  </footer>
</template>

<script>
export default {
  name: 'pageFooter',
  data: ()=>({
    socials: [
      {
        name: 'LinkedIn',
        icon: 'icons/linkedin',
        link: 'https://www.linkedin.com/in/kei-rodríguez-hachimaru-849317296/',
      },
      {
        name: 'Github',
        icon: 'icons/github',
        link: 'https://github.com/khachimarur80',
      },
    ]
  }),
}
</script>

<style scoped>
  button {
    background: none;
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button:hover {
    background: rgba(0,0,0,.1);
  }
  #footer {
    user-select: none;
    height: 140px;
    padding: 20px;
    display: flex;
    background: var(--primary);
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
  .footer-title {
    font-weight: bold;
    font-size: 24px;
    color: var(--background-dark);
  }
  .footer-text {
    font-family: "HelveticaNeue";
    font-size: 14px;
    color: var(--background-dark);
  }
  .socials {
    display: flex;
    gap: 20px;
    margin: 10px;
  }
  .socials span {
    background: white;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }
</style>
