<template>
  <div class="container">
      <image src="http://ata2-img.cn-hangzhou.img-pub.aliyun-inc.com/7d42775b8f0d0c86589082dc9ee179c2.png" class="bannar-image"/>
      <text @click="changeMessage" class="message">{{ message }}</text>
      <text class="quotes">{{ quotes }}</text>
  </div>
</template>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bannar-image {
    width: 200px;
    height: 200px;
  }

  .message {
    padding-top: 20px;
    padding-bottom: 40px;
    color: #0055dd;
    font-size: 28px;
  }

  .quotes {
    font-size: 16px;
    color: #666;
  }
</style>

<script>
  export default {
    data() {
      return {
        message: 'Welcome to Use Weexpack!',
        quotes: 'A Tool To Build WEEX Faster'
      };
    },
    methods: {
      changeMessage() {
        this.message = 'You click it!';
      }
    }
  }
</script>
