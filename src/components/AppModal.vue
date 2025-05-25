<template>
  <Transition name="modal">
    <div v-if="showModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="closeModal">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    showModal(newVal) {
      if (newVal) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:showModal', false);
    },
  },
  beforeUnmount() {
    document.body.classList.remove('no-scroll');
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/function.scss";
@import "@/assets/style/style.scss";

.modal-mask {
  position: fixed;
  z-index: 10002;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 85vw;
  height: 80vh;
  margin: 0 auto;
  padding: 20px 30px;
  background: #2a2a2a url(../assets/noise.svg);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  margin-top: 0;
  color: $ciYellow;
  text-shadow: 1px 0 5px #fff200;
}

.modal-body {
  margin-top: 20px;
  padding-left: 0.5rem;
  overflow-y: auto;
  max-height: 85%;
  ul {
    font-size: 0.9rem;
    color: $ciWhite;
    margin-left: 0.8rem;
    li {
      margin-left: 0.5rem;
    }
  }
  a {
    color: adjust-text-color($ciYellow, -20%);
  }
  p {
    color: $ciWhite;
  }
  h2,
  h3,
  h4 {
    text-shadow: 1px 0 1px #b6af00;
  }
  h2 {
    color: adjust-text-color($ciYellow, 10%);
  }
  h3 {
    color: adjust-text-color($ciYellow, 20%);
  }
  h4 {
    color: adjust-text-color($ciYellow, 30%);
  }
}

.modal-default-button {
  display: inline-block;
  width: 5rem;
  height: 2rem;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
