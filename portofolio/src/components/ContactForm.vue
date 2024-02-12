<template>
  <div class="section" id="contact">
      <div class="section-inner">
        <h1>Contacto</h1>
        <form class="contact-form" id="contact-form" @submit="submitForm" ref="contactForm">
          <div class="form-row">
            <label for="from_name">Nombre:</label>
            <input 
              type="text" 
              id="from_name" 
              name="from_name" 
              required 
              aria-describedby="username-error" 
              placeholder="Introduce tu nombre" 
              v-model="formData.from_name" 
              @focusout="validateField('from_name')" 
              @keyup="validateField('from_name')">
            <div id="name-error" class="error-message" aria-live="polite">{{ errors.from_name }}</div>
          </div>
          <div class="form-row">
            <label for="user_email">Email:</label>
            <input 
              type="email" 
              id="user_email" 
              name="user_email" 
              required 
              aria-describedby="email-error" 
              placeholder="Introduce tu email" 
              v-model="formData.user_email" 
              @focusout="validateField('user_email')" 
              @keyup="validateField('user_email')">
            <div id="email-error" class="error-message" aria-live="polite">{{ errors.user_email }}</div>
          </div>
          <div class="form-row">
            <label for="message">Mensaje:</label>
            <textarea
              type="text" 
              id="message" 
              name="message" 
              required 
              aria-describedby="message-error" 
              placeholder="Introduce tu mensaje" 
              v-model="formData.message" 
              @focusout="validateField('message')" 
              @keyup="validateField('message')"></textarea>
            <div id="message-error" class="error-message" aria-live="polite">{{ errors.message }}</div>
          </div>
          <div style="display: flex; width: 100%">
            <div style="flex-grow: 1;"></div>
            <button
              type="submit"
              :style="{'--color' : sendColor}"
              id="send"
              tabindex="-1" 
              :disabled="!validForm"
            >
              <span v-if="!sending">{{ sendText }}</span>
              <span class="loader" v-else></span>
            </button>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',

  methods: {
    resetForm() {
      this.$refs.contactForm.reset();
      this.formData = {
        from_name: '',
        user_email: '',
        message: '',
      };
    },
    submitForm(event) {
      event.preventDefault()
      this.sending = true
      const vm = this
      emailjs.init('Ifjg_oR_H0mMlRnTI')

      emailjs.sendForm("service_p4b392o", "template_wokpaeh", '#contact-form')
      .then(function () {
        vm.sendColor = vm.theme.success
        vm.sendText = 'Enviado!'
        document.getElementById('send').classList.add('noevent')

        setTimeout(()=>{
          vm.sendColor = vm.theme.primary
          vm.sendText = 'Enviar'
          vm.resetForm();
          vm.validForm = false
          document.getElementById('send').classList.remove('noevent')
        }, 3000)

        vm.sending = false
      })
      .catch(function () {
        vm.sendColor = vm.theme.error
        vm.sendText = 'Error'
        document.getElementById('send').classList.add('noevent')

        setTimeout(()=>{
          vm.sendColor = vm.theme.primary
          vm.sendText = 'Enviar'
          vm.resetForm();
          vm.validForm = false
          document.getElementById('send').classList.remove('noevent')
        }, 3000)

        vm.sending = false
      });
    },
    validateAllFields() {
      let valid = true

      if (!this.formData.user_email.trim()) {
        valid = false
      } 
      else if (!/\S+@\S+\.\S+/.test(this.formData.user_email)) {
        valid = false
      } 
      if (!this.formData.from_name.trim()) {
        valid = false
      } 
      if (!this.formData.message.trim()) {
        valid = false
      } 

      return valid
    },
    validateField(field) {
      let fields = ['user_email', 'from_name', 'message']

      switch (fields.indexOf(field)) {
        case 0:
          if (!this.formData.user_email.trim()) {
            this.errors.email = 'Introduce tu email!';
          } 
          else if (!/\S+@\S+\.\S+/.test(this.formData.user_email)) {
            this.errors.user_email = 'Email inválido!';
          } 
          else {
            this.errors.user_email = '';
          }
          break;
        case 1:
          if (!this.formData.from_name.trim()) {
            this.errors.from_name = 'Introduce tu  nombre!';
          } 
          else {
            this.errors.from_name = '';
          }
          break;
        case 2:
          if (!this.formData.message.trim()) {
            this.errors.message = 'Escribe tu mensaje!';
          } 
          else {
            this.errors.message = '';
          }
          break;
      }

      this.validForm = this.validateAllFields()

      if (this.validForm) {
        this.sendColor = "var(--primary)"
      }
    },
  },

  data: () => ({
    theme: {
      primary: '#22A2A2',
      backgroundDark: '#040404',
      background: '#121212',
      error: '#DB4437',
      success: '#0F9D58',
      warning: '#F4B400',
    },
    validForm: false,
    formData: {
      from_name: '',
      user_email: '',
      message: '',
    },    
    errors: {
      from_name: '',
      user_email: '',
      message: '',
    },
    sending: false,
    sendText: 'Enviar',
    sendColor: 'var(--primary)',
  }),

  computed: {
    validFields() {
      const isNameValid = this.nameRules.every(rule => rule(this.formData.from_name) === true);
      const isEmailValid = this.emailRules.every(rule => rule(this.formData.user_email) === true);
      const isMessageValid = this.messageRules.every(rule => rule(this.formData.message) === true);

      return isNameValid && isEmailValid && isMessageValid;
    }
  }

};
</script>
<style scoped>
  textarea, input {
    background: var(--background);
    color: #ccc;
    border: 1px solid #333;
    outline: none;
    border-radius: 5px;
    padding: 5px;
  }
  textarea:focus, input:focus {
    outline: 1px solid var(--primary);
  }
  textarea {
    resize: none;
  }

  .contact-form {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    height: fit-content;
    width: fit-content;
    flex-direction: column;
    background: var(--background);
    margin: 20px;
    padding: 30px;
    border-radius: 10px;
    outline: 1px solid var(--primary);
  }
  .form-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }

  #send {
    cursor: pointer;
    background: var(--color);
    padding: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 8px;
    border: none;
    width: 80px;
    height: 35px;
    color: white;
  }

  #send:not([disabled]) {
    cursor: pointer;
  }

  #send:not([disabled]):active {
    outline: 1px solid var(--primary);
    background: var(--background-dark);
    color: var(--primary);
  }

  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
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
  textarea {
    height: 100px;
  }
  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 26px;
      text-align: center;
      margin-left: 0px;
    }
    .contact-form {
      max-width: 80%;
    }
    input, textarea {
      max-width: 100%;
      width: 300px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .section {
      padding: 35px;
    }
    h1 {
      font-size: 30px;
    }
    input, textarea {
      width: 400px;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    .section {
      padding: 50px;
    }
    h1 {
      font-size: 40px;
    }
    input, textarea {
      width: 433px;
    }
  }
  @media only screen and (min-width: 1280px) and (max-width: 1439px) {
    .section {
      padding: 70px;
    }
    h1 {
      font-size: 50px;
    }
    input, textarea {
      width: 466px;
    }
  }
  @media only screen and (min-width: 1440px) {
    .section {
      padding: 100px;
    }
    h1 {
      font-size: 60px;
    }
    input, textarea {
      width: 500px;
    }
  }

  .error-message {
    color: var(--error);
    font-size: 12px;
    margin: 0px;
    margin-top: -15px;
    margin-bottom: -10px;
    width: 100%;
    height: 24px;
    font-weight: bold;
  }
  #send[disabled] {
    cursor: not-allowed;
    filter: brightness(.5);
  }

  .loader {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 3px solid var(--primary);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }

  .noevent {
    pointer-events: none;
  }
</style>
