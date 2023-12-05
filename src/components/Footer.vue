<template>
  <div class="footer">
    <a @click="openModal">Impressum & Datenschutz</a>
  </div>
  <Transition name="modal">
    <div v-if="showModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"><h1>Impressum & Datenschutz</h1></slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <h2>Redaktionell Verantwortlicher:</h2>
                Sebastian Adrian
                <br>
                Mozartstraße 5
                <br>
                64625 Bensheim
                <br>
                Kontakt: mail@sadrian.eu
                <br><br>
                SSL- bzw. TLS-Verschlüsselung
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                <br>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                <br>
                <br>
                <ul>
                  <li>
                    Browsertyp und Browserversion
                  </li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <br>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner
                Website – hierzu müssen die Server-Log-Files erfasst werden.
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button
                  class="modal-default-button"
                  @click="closeModal"
              >OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
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

<style lang="sass" scoped>

a
  cursor: pointer


p
  color: black

.footer
  width: 100vw
  height: 1.2em
  text-align: center
  display: block
  position: fixed
  bottom: 0
  line-height: 1
  z-index: 10000
  background-color: rgb(64, 64, 64)
  box-shadow: 0 -4px 10px 2px rgba(187, 187, 187, 0.25)

.modal-mask
  position: fixed
  z-index: 10002
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  display: table
  transition: opacity 0.3s ease


.modal-wrapper
  display: table-cell
  vertical-align: middle


.modal-container
  width: 75vw
  height: 75vh
  margin: 0 auto
  padding: 20px 30px
  background-color: #fff
  border-radius: 2px
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
  transition: all 0.3s ease


.modal-header h3
  margin-top: 0
  color: #42b983


.modal-body
  margin: 20px 0


.modal-default-button
  float: right


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from
  opacity: 0


.modal-leave-to
  opacity: 0


.modal-enter-from .modal-container,
.modal-leave-to .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)

</style>
