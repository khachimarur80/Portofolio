<template>
  <div id="matrix">
    <div class="plane">
      <span class="letter" v-for="(row, i) in matrix" :key="i"> 
        {{ row.letters[row.index] }}
      </span>
    </div>
  </div>
</template>

<script>

class Row {
  constructor(target, index) {
    this.target = target
    this.length = length

    this.targetIndex = index
    this.letters = this._generateLetters()
    this.index = 0
  }
  _generateLetters() {
    let abecedary = "ABCEDEFHIJLMNOPQRSTUVXYZ?1234567890?¿<>=&%$#@abcedfghijlmnopqrstuvxyz".split('')
    abecedary = abecedary.filter(letter => letter!=this.target)

    let letters = []
    for (let i=0; i<this.targetIndex; i++) {
      letters.push(abecedary[Math.floor(Math.random()*abecedary.length)])
    }
    letters.push(this.target)
    for (let i=this.targetIndex+1; i<length; i++) {
      letters.push(abecedary[Math.floor(Math.random()*abecedary.length)])
    }

    return letters
  }

  updateLetters() {
    if (this.index < this.targetIndex) {
      this.index += 1
    }
  }
}

export default {
  name: 'matrixEffect',
  props: {
    message: {
      type: String,
      required: true,
    }
  },
  data: () => ({
    matrix: [],
    index: 0,
    iterations: 5,
  }),
  methods: {
    initializeDisplay() {
      for (let i=0; i<this.message.length; i++) {
        let row = new Row(this.message[i], this.iterations)
        this.matrix.push(row)

        this.iterations += Math.floor(Math.random()*2)+1
      }
    },
    runMatrix() {
      for (let i=0; i<this.matrix.length; i++) {
        this.matrix[i].updateLetters()
      }

      let matched = this.matrix.every(row => row.index == row.targetIndex)

      return matched
    }
  },
  mounted() {
    this.initializeDisplay()

    let completed = false

    const intervalId = setInterval(() => {
      completed = this.runMatrix()

      if (completed) {
        clearInterval(intervalId); 
      }
    }, 80);

    setTimeout(()=>{
      this.$emit('matrixOver')
    }, 80*this.iterations - 500)
  },
}
</script>

<style scoped>
#matrix {
  height: 100vh;
  width: 100h;
  background: var(--background-dark);
}
.plane {
  height: 100vh;
  width: 100h;
  display: flex;
  justify-content: center;
  align-items: center;
}
.letter {
  color: var(--primary);
  white-space: pre-wrap;
  display: inline-block; 
  text-shadow: 0px 0px 2vh var(--primary);
  user-select: none;
  text-align: center;
  font-size: 25px;
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .letter {
    font-size: 60px;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  .letter {
    font-size: 80px;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1439px) {
  .letter {
    font-size: 110px;
  }
}
@media only screen and (min-width: 1440px) {
  .letter {
    font-size: 150px;
  }
}
</style>
