<template>
  <div class="footer">
    <a @click="openModal">Impressum & Datenschutz</a>
  </div>
  <Modal :showModal.sync="showModal">
    <template #header>
      <h1>Impressum & Datenschutz</h1>
    </template>
    <template #body>
      <Impressum>
      </Impressum>
    </template>
    <template #footer>
      <button class="modal-default-button" @click="closeModal">OK</button>
    </template>
  </Modal>
</template>
<script>
import Modal from '@/components/AppModal.vue';
import Impressum from '/src/components/BodyImpressum.vue';

export default {
  components: {
    Impressum,
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
@import "@/assets/style/style.scss";


.footer {
  width: 100vw;
  height: 1.2em;
  text-align: center;
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  line-height: 1;
  z-index: 10000;
  background-color: rgb(64, 64, 64);
  box-shadow: 0 -4px 10px 2px rgba(187, 187, 187, 0.25);
  a {
    font-size: 0.8rem;
    cursor: pointer;
  }
}

.modal-default-button {
  float: right;
  width: 5rem;
  height: 2rem;
}


</style>
