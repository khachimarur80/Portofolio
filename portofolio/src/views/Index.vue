<template>
  <div id="index" @mousemove="mouseMove" @scroll="handleScroll">
    <nodeBackground :mouseEvent="mouseEvent"/>
    <navBar :over="over" :items="pageItems" :show="show"/>
    <matrixEffect :message="greeting" @matrixOver="matrixOver"/>
    <vSection :contents="sections[0]"></vSection>
    <vTechnologies :technologies="technologies"/>
    <vProjects :projects="filteredProjects"/>
    <contactForm/>
    <pageFooter/>
  </div>
</template>

<script>
import matrixEffect from '@/components/Matrix.vue'
import vSection from '@/components/Section.vue'
import vTechnologies from '@/components/Technologies.vue'
import vProjects from '@/components/vProjects.vue'
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
    vProjects
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
        image: require('@/assets/images/Retrato_Kei.webp'),
      }
    ],
    technologies: [
      {
        name: 'Vue',
        icon: 'icons/vue.webp',
      },
      {
        name: 'Vuetify',
        icon: 'icons/vuetify.webp',
      },
      {
        name: 'Django',
        icon: 'icons/django.webp',
      },
      {
        name: 'HTML',
        icon: 'icons/html.webp',
      },
      {
        name: 'CSS',
        icon: 'icons/css.webp',
      },
      {
        name: 'JavaScript',
        icon: 'icons/javascript.webp',
      },
      {
        name: 'Node',
        icon: 'icons/node.webp',
      },
      {
        name: 'Electron',
        icon: 'icons/electron.webp',
      },
      {
        name: 'Python',
        icon: 'icons/python.webp',
      },
    ],
    projects: [
      {
        'title' : 'Aurie',
        'text' : 'Página web de un negocio con <span class="aurie">diseño responsivo</span> y dinámico. Testeado con <span class="aurie">PageSpeed Insights</span> de Google para un óptimo <span class="aurie">rendimiento</span>, <span class="aurie">accesibilidad</span> y <span class="aurie">SEO</span>. Demuestra mi habilidad para crear páginas webs dinámicas y eficientes siguiendo las <span class="aurie">buenas prácticas</span>.',
        'images' : [
          {
            image: require('@/assets/logos/Aurie.webp'),
            lazy: require('@/assets/logos/Aurie-lazy.webp'),
          }
        ],
        'more' : ['Ver en vivo', 'https://www.aurie.es'],
        'repo' : 'https://github.com/khachimarur80/Aurie',
      },
      {
        'title' : 'StackLit',
        'text' : 'Plataforma en línea donde los usuarios pueden estudiar programación con un sistema flashcards. Usa la <span class="stacklit">REST API</span> de <span class="stacklit">StackExchange</span> para generar las preguntas. Es únicamente una web <span class="stacklit">frontend</span> hecha con <span class="stacklit">Vue3</span> y <span class="stacklit">Vue-Cli</span> para mayor comodidad. Incluye leaderboards, profile, dashboard ...',
        'images' : [
          {
            image: require('@/assets/logos/StackLit.webp'),
            lazy: require('@/assets/logos/StackLit-lazy.webp'),
          }
        ],
        'more' : ['Ver en vivo', 'https://stack-lit.vercel.app'],
        'repo' : 'https://github.com/khachimarur80/StackLit',
      },
      {
        'title' : 'Luhmann',
        'text' : 'Una plataforma donde los usuarios pueden trabajar conjuntamente trabajando con conceptos en un <span class="luhmann">árbol de nodos</span> donde puedes añadir tareas, <span class="luhmann">PDFs</span>, distintos estilos, links, <span class="luhmann">imágenes</span>, comentarios, reorganizar bloques y trabajo en <span class="luhmann">tiempo real</span>. Aplicación <span class="luhmann">fullstack</span> que usa <span class="luhmann">JavaScript</span> y <span class="luhmann">Python</span>.',
        'images' : [
          {
            image: require('@/assets/logos/Luhmann.webp'),
            lazy: require('@/assets/logos/Luhmann-lazy.webp'),
          }
        ],
        'more' : ['Ver más', 'https://khachimarur80.github.io/Luhmann/'],
        'repo' : 'https://github.com/khachimarur80/Luhmann',
      },
      {
        'title' : 'Diamond',
        'text' : '<span class="diamond">Aplicación de escritorio</span> inspirada en <span class="diamond">Obsidian</span>, donde editas tus <span class="diamond">MD</span>s. Trabajas con archivos locales de <span class="diamond">MD</span> y tiene una interfaz muy limpia e intuitiva, con un diseño idéntico a Obsidian. Demuestra mi capacidad para crear <span class="diamond">UI</span>s y trabajar un <span class="diamond">backend</span> con <span class="diamond">Node.js</span>.',
        'images' : [
          {
            image: require('@/assets/logos/Diamond.webp'),
            lazy: require('@/assets/logos/Diamond-lazy.webp'),
          }
        ],
        'more' : ['Ver más', 'https://khachimarur80.github.io/Diamond/'],
        'repo' : 'https://github.com/khachimarur80/Diamond',
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
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => project.text)
    }
  }
}
</script>

<style scoped>

  #index {
    height: 100vh;
    width: 100h;
    background: transparent;
    position: relative;
    scroll-behavior: smooth;
    scroll-margin-top: -80px;
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
