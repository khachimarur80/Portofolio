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
        <v-btn icon dense small dark>
         <img :src="require(`@/assets/${social.icon}.webp`)" :alt="social.name" width="30px">
        </v-btn>
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
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/kei-rodríguez-hachimaru-849317296/',
      },
      {
        name: 'Github',
        icon: 'github',
        link: 'https://github.com/khachimarur80',
      },
    ]
  }),
}
</script>

<style scoped>
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
