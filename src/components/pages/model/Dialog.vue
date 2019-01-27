<template>
  <div id="dialog">
    <div class="dialog-content">
      <div class="preview-info">
        <img :src="model.image">
        <div class="info-text">
          <p class="info-name">{{model.name}}</p>
          <span>{{model.age}} Tahun</span>
          <p class="info-desc">{{model.desc}}</p>
        </div>
      </div>
      <div class="form">
        <h3>Tertarik dengan <span>{{model.name}}</span>? Jadikan dia model anda!</h3>
        <form @submit.prevent="bookingModel">
          <div class="form-group">
            <label for="name">Nama Lengkap</label>
            <input id="name" type="text" v-model="bookingData.name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" v-model="bookingData.email">
          </div>
          <div class="form-group">
            <label for="phoneNumber">Nomor HP</label>
            <input id="phoneNumber" type="tel" v-model="bookingData.phoneNumber">
          </div>
          <div class="form-group">
            <label for="projectDesc">Deskripsi Project Yang Ingin Ditawarkan</label>
            <textarea id="projectDesc" v-model="bookingData.projectDesc"></textarea>
          </div>
          <div class="button-form">
            <button type="submit">Kirim</button>
          </div>
        </form>
      </div>
      <div class="close-button" @click="triggerClose">&times;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    model: Object
  },
  data () {
    return {
      bookingData: {
        name: '',
        email: '',
        phoneNumber: '',
        projectDesc: ''
      }
    }
  },
  methods: {
    triggerClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
#dialog {
  align-items: center;
  background: rgba($textColorPrimary, .7);
  display: flex;
  height: 100%;
  left: 0;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
}

.dialog-content {
  background: #ffffff;
  border-radius: 16px;
  overflow: auto;
  max-height: 90vh;
  position: relative;
  width: 50vw;

  @media only screen and (max-width: 1024px) {
    width: 90vw;
  }
}

.preview-info {
  align-items: center;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  padding: 32px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  img {
    border-radius: 50%;
    height: 150px;
    object-fit: cover;
    width: 150px;
  }

  .info-text {
    margin-left: 32px;

    @media only screen and (max-width: 480px) {
      margin-left: 0;
      margin-top: 16px;
      text-align: center;
    }
  }

  .info-name {
    font-size: 24px;
    margin: 0;
    margin-bottom: 8px;
    font-weight: 700;
  }

  .info-desc {
    line-height: 1.2;
    margin-bottom: 0;
  }
}

.form {
  padding: 0 32px 32px 32px;

  h3 {
    font-size: 28px;
    text-align: center;

    @media only screen and (max-width: 480px) {
      font-size: 20px;
    }

    span {
      color: $colorPrimary;
    }
  }
}

.form-group {
  margin-top: 16px;

  input, textarea {
    border: 1px solid #bbbbbb;
    display: block;
    margin-top: 8px;
    padding: 8px;
    width: 100%;

    &:focus {
      outline-color: $colorPrimary;
    }
  }

  textarea {
    height: 150px;
  }
}

.button-form {
  margin-top: 16px;
  text-align: center;

  button {
    background: #af0404;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    padding: 10px 30px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .3s ease-in-out;

    &:hover {
      background: $colorPrimary;
    }
  }
}

.close-button {
  cursor: pointer;
  font-size: 36px;
  position: absolute;
  right: 16px;
  top: 8px;
}
</style>
