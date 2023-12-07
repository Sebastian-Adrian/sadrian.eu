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
          <div class="modal-body" >
            <slot name="body">
              <h2>Redaktionell Verantwortlicher:</h2>
                <br>
                Sebastian Adrian
                <br>
                Mozartstraße 5
                <br>
                64625 Bensheim
                <br>
                Kontakt: mail@sadrian.eu
                <br><br>
              <h2>Datenschutz:</h2>
              <br>
              <h3>Allgemeine Hinweise</h3>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              <br>
              <br>
              <h3>SSL- bzw. TLS-Verschlüsselung</h3>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              <br><br>
              <h3>Externes Hosting</h3>
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              <br>
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
              <br>
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
              <br>
              Wir setzen folgenden Hoster ein:
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
      modalBodyMaxHeight: '100%',
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
  left: 0
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
  width: 85vw
  height: 80vh
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
  overflow-y: auto
  max-height: 90%

.modal-default-button
  float: right
  width: 5rem
  height: 2rem

.modal-footer

.modal-enter-from
  opacity: 0

.modal-leave-to
  opacity: 0

.modal-enter-from .modal-container,
.modal-leave-to .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)

</style>
