<template>
  <div id="nodes">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { TweenLite, Circ } from 'gsap';

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.originX = x
    this.originY = y
    this.closest = []
    this.dot = null
    this.weight = .3
  }
}

class Dot {
  constructor(point, size, color) {
    this.point = point
    this.size = size
    this.color = color
    this.weight = .3
  }

  display(ctx) {
    if (this.weight > 0) {
      ctx.beginPath();
      ctx.arc(this.point.x, this.point.y, this.size, 0, 4 * Math.PI, false);
      ctx.fillStyle = 'rgba(34,162,162,'+ this.weight+')';
      ctx.fill();
    }
  }
}

export default {
  name: 'nodeBackground',
  data: () => ({
    ctx: null,
    points: [],
    density: 80, //Points per px
    height: 0,
    width: 0,
    closest: 5,
    target: {
      x: 0,
      y: 0
    },
    radius: 2.5,
  }),
  props: {
    mouseEvent: {
      required: true
    }
  },
  methods: {
    calculateDistance(a, b) {
      return Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2)
    },
    initializeCanvas() {
      let width = window.innerWidth;
      let height = window.innerHeight;

      this.target = {x: width/2, y: height/2};

      let canvas = document.getElementById('canvas');
      canvas.width = width;
      canvas.height = height;

      this.height = parseInt(height)
      this.width = parseInt(width)

      this.ctx = canvas.getContext('2d');
    },
    initializePoints() {
      for (let x = 0; x < this.width; x+=this.density) {
        for (let y = 0; y < this.height; y+=this.density) {
          let xCoord = x + Math.random() * this.density;
          let yCoord = y + Math.random() * this.density;

          let point = new Point(xCoord, yCoord);
          this.points.push(point);
        }
      }

      for (let i = 0; i < this.points.length; i++) {
        let pointA = this.points[i];
        let otherPoints = this.points.filter(point => point !== pointA);

        pointA.closest = otherPoints
          .sort((point1, point2) => {
            const distance1 = this.calculateDistance(point1, pointA);
            const distance2 = this.calculateDistance(point2, pointA);
            return distance1 - distance2;
          })
          .slice(0, this.closest);
      }

      for (let i = 0; i < this.points.length; i++) {
        let dot = new Dot(this.points[i], this.radius + Math.random() * this.radius, 'rgba(34,162,162,0.3)');
        this.points[i].dot = dot;
      }
    },
    mouseMove(event) {
      let posx, posy = 0;
      if (event.pageX || event.pageY) {
          posx = event.pageX;
          posy = event.pageY;
      }
      else if (event.clientX || event.clientY)    {
        posx = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      this.target.x = posx;
      this.target.y = posy;
    },
    startAnimation() {
      this.animate()
      for (let i in this.points) {
        this.shiftPoint(this.points[i])
      }
    },
    animate() {
      this.ctx.clearRect(0, 0, this.width, this.height)
      for (let i in this.points) {
        if(this.calculateDistance(this.target, this.points[i]) < 100) {
          this.points[i].weight = 0.3;
          this.points[i].dot.weight = 0.6;
        } 
        else if(this.calculateDistance(this.target, this.points[i]) < 200) {
          this.points[i].weight = 0.1;
          this.points[i].dot.weight = 0.3;
        } 
        else if(this.calculateDistance(this.target, this.points[i]) < 300) {
          this.points[i].weight = 0.02;
          this.points[i].dot.weight = 0.1;
        } 
        else {
          this.points[i].weight = 0;
          this.points[i].dot.weight = 0;
        }

        this.drawEdges(this.points[i])
        this.points[i].dot.display(this.ctx)
      }
      requestAnimationFrame(this.animate)
    },
    drawEdges(point) {
      if (point.weight > 0) {
        for (let i in point.closest) {
          this.ctx.beginPath()
          this.ctx.moveTo(point.x, point.y)
          this.ctx.lineTo(point.closest[i].x, point.closest[i].y)
          this.ctx.strokeStyle = 'rgba(34,162,162,'+point.weight+')'
          this.ctx.stroke()
        }
      }
    },
    shiftPoint(point) {
      TweenLite.to(point, 1 + Math.random(), {
        x: point.originX - 50 + Math.random() * 100,
        y: point.originY - 50 + Math.random() * 100,
        ease: Circ.easeIn,
        onComplete: () => {
          this.shiftPoint(point);
        },
      });
    },
    setupAnimationFramePolyfill() {
      let lastTime = 0;
      let vendors = ['ms', 'moz', 'webkit', 'o'];

      for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x] + 'CancelAnimationFrame'] ||
          window[vendors[x] + 'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback) {
          let currTime = new Date().getTime();
          let timeToCall = Math.max(0, 16 - (currTime - lastTime));
          let id = window.setTimeout(function () {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };

      if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
          clearTimeout(id);
        };
    },
    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      let canvas = document.getElementById('canvas');

      canvas.width = this.width;
      canvas.height = this.height;
    }
  },
  mounted() {
    this.setupAnimationFramePolyfill()
    this.initializeCanvas()
    this.initializePoints()
    this.startAnimation()

    window.addEventListener('resize', this.resize);
  },
  watch: {
    mouseEvent: {
      handler() {
        this.mouseMove(this.mouseEvent)
      },
      deep: true,
    }
  }
}
</script>

<style scoped>
#canvas {
  background: var(--background);
}

#nodes {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 10px;
  background: var(--background-dark);
  height: calc(100vh);
  width: calc(100%);
  overflow: hidden;
  z-index: -1;
}
</style>
