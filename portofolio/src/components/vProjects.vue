<template>
  <div class="section" id="projects">
    <div class="section-inner" v-if="projects">
      <h1>Mis proyectos</h1>
      <div class="project" v-for="(project, i) in projects" :key="i">
        <div class="project-photo">
          <img :src="project.images[0].image" height="100%"/>
        </div>
        <div class="project-info">
          <h2>{{ project.title }}</h2>
          <hr>
          <p v-html="project.text">
          </p><br>
          <div class="project-actions">
            <a :href="project.repo" target="_blank">
              Repo
            </a>
            <a :href="project.more[1]" target="_blank">
              {{ project.more[0] }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vProjects',
  props: {
    projects: {
      required: true,
    }
  },
}
</script>

<style scoped>
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
    gap: 30px;
  }
  #proyectos {
  }
  h1 {
    color: #ccc;
    font-size: 40px;
    margin-bottom: 20px;
    width: 90%;
    margin-left: 30px;
  }

  .project {
    width: 800px;
    border-radius: 10px;
    background: #121212;
    height: 320px;
    display: flex;
    border: 1px solid var(--primary);
  }
  .project-photo {
    aspect-ratio: 1;
    padding: 30px;
    width: 30%;
    display: flex;
    border-right: 1px solid var(--primary);
    justify-content: center;
    align-items: center;
  }
  .project-info {
    width: 100%;
    padding: 30px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .project-info hr {
    width: 100%;
    border-bottom: none;
  }
  .project-info p {
    color: #ccc;
  }
  .project-info h2 {
    color: #ccc;
  }
  .project-actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
  .project-actions a {
    border-radius: 5px;
    border: 1px solid var(--primary);
    padding: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: var(--primary);
    text-decoration: none;
    transition: background .15s ease-out, color .2s ease-out;
  }
  .project-actions a:hover {
    background: var(--primary);
    color: var(--text);
  }

  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 26px;
      text-align: center;
      margin-left: 0px;
    }
    .project {
      flex-direction: column;
      width: 100%;
      height: 600px;
      justify-content: center;
      padding-top: 30px;
    }
    .project-photo {
      width: 100%;
      padding: 0px;
      overflow: hidden;
    }
    .project-info {
      width: calc(100% - 60px);
      height: fit-content;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    h1 {
      font-size: 30px;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    h1 {
      font-size: 40px;
    }
  }
  @media only screen and (min-width: 1280px) and (max-width: 1439px) {
    h1 {
      font-size: 50px;
    }
  }
  @media only screen and (min-width: 1440px) {
    h1 {
      font-size: 60px;
    }
  }
</style>
