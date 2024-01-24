<template>
  <div id="index" @mousemove="mouseMove" @scroll="handleScroll">
    <nodeBackground :mouseEvent="mouseEvent"/>
    <navBar :over="over" :items="pageItems" :show="show"/>
    <!--<matrixEffect :message="greeting" @matrixOver="matrixOver"/>-->
    <vSection :contents="sections[0]"></vSection>
    <vTechnologies :technologies="technologies"/>
    <!--Skills-->
    <!--Projects-->
    <contactForm/>
    <pageFooter/>
  </div>
</template>

<script>
import matrixEffect from '@/components/Matrix.vue'
import vSection from '@/components/Section.vue'
import vTechnologies from '@/components/Technologies.vue'
import navBar from '@/components/NavBar.vue'
import nodeBackground from '@/components/NodeBackground.vue'
import contactForm from '@/components/ContactForm.vue'
import pageFooter from '@/components/Footer.vue'


export default {
  name: 'App',
  components: {
    matrixEffect,
    vSection,
    vTechnologies,
    navBar,
    nodeBackground,
    contactForm,
    pageFooter,
  },
  data: () => ({
    pageItems: [
      {
        name: 'Quién soy',
        href: '#hachimarukei',
      },
      {
        name: 'Tecnologías',
        href: '#technologies',
      },
      {
        name: 'Proyectos',
        href: '#projects',
      },
      {
        name: 'Contacto',
        href: '#contact',
      },
    ],
    theme: {
      primary: '#22A2A2',
      backgroundDark: '#040404',
      background: '#121212',
      error: '#DB4437',
      success: '#0F9D58',
      warning: '#F4B400',
    },
    greeting: 'Hola, soy Kei',
    sections: [
      {
        id: 'hachimarukei',
        title: 'Hachimaru Kei',
        text: 'Apasionado por la ingeniería desde siempre, encontré mi verdadera vocación en la programación. Me encanta aprender, esforzarme y sobre todo, plantearme nuevos desafíos. La programación me permite relacionar y combinar mis vocaciones más profundas en una gran pasión, la creación de Software.',
        image: require('@/assets/Retrato_Kei.webp'),
      }
    ],
    technologies: [
      {
        name: 'Vue',
        icon: 'vue.webp',
      },
      {
        name: 'Vuetify',
        icon: 'vuetify.webp',
      },
      {
        name: 'Django',
        icon: 'django.webp',
      },
      {
        name: 'HTML',
        icon: 'html.webp',
      },
      {
        name: 'CSS',
        icon: 'css.webp',
      },
      {
        name: 'JavaScript',
        icon: 'javascript.webp',
      },
      {
        name: 'Node',
        icon: 'node.webp',
      },
      {
        name: 'Electron',
        icon: 'electron.webp',
      },
      {
        name: 'Python',
        icon: 'python.webp',
      },
    ],
    over: false,
    mouseEvent: true,
    show: false,
  }),
  methods: {
    matrixOver() {
      this.over = true
    },
    mouseMove(event) {
      this.mouseEvent = event
    },
    handleScroll() {
      this.show = parseInt(document.getElementById("index").scrollTop) > 300
    }
  },
  mounted() {
    document.documentElement.style.setProperty('--primary', this.theme.primary)
    document.documentElement.style.setProperty('--background-dark', this.theme.backgroundDark)
    document.documentElement.style.setProperty('--background', this.theme.background)
    document.documentElement.style.setProperty('--error', this.theme.error)
    document.documentElement.style.setProperty('--success', this.theme.success)
  }
}
</script>

<style scoped>

  #index {
    height: 100vh;
    width: 100h;
    background: transparent;
    position: relative;
  }
  #index::-webkit-scrollbar {
    width: 6px;
    background: var(--background-dark);
  }
   #index::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 8px;
  }
   #index {
    overflow-y: scroll;
    overflow-x: hidden;
  }

   @media only screen and (max-width: 767px) {
      #index {
        border: 1px solid transparent;
      }
      #index::-webkit-scrollbar {
        width: 3px;
      }
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      #index {
        border: 1px solid transparent;
      }
      #index::-webkit-scrollbar {
        width: 4px;
      }
    }
    @media only screen and (min-width: 1024px) and (max-width: 1279px) {
      #index{
        border: 1px solid transparent;
      }
      #index::-webkit-scrollbar {
        width: 5px;
      }
    }
    @media only screen and (min-width: 1280px) and (max-width: 1439px) {
      #index {
        border: 1px solid transparent;
      }
      #index::-webkit-scrollbar {
        width: 6px;
      }
    }
    @media only screen and (min-width: 1440px) {
      #index {
        border: 1px solid transparent;
      }
      #index::-webkit-scrollbar {
        width: 7px;
      }
    }
</style>
