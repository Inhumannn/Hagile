import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Home() {
  return (
    <>    
    <Header />
    <main>
      <section id="section-1">
        <article id="section-1_article">
          <h1>hagile®</h1>
          <p>
            Co-entrepreneurs auprès des TPE-PME afin d’accompagner les
            dirigeants à traverser cette période d’incertitudes durables
          </p>
          <a href="#" class="button-1">
            En savoir plus
          </a>
        </article>
        <img
          src="/img/section-1_img.png"
          alt="image représentative du contenu"
        />
      </section>

      <img
        src="/img/cropped-Logo-Hagile.png"
        alt="Logo de la marque"
        class="img-logo"
      />

      <section id="section-2">
        <article>
          <p>
            Hagile® est née d’un savoureux mélange de compétences permettant
            d’offrir une démarche globale, <br /> pertinente, pérenne et qui
            offre du « sur-mesure » pour chaque entreprise afin de renouer avec
            la croissance.
          </p>
        </article>
      </section>

      <section id="section-3">
        <div id="background-01">
          <article>
            <h2>Vos souhaits</h2>
            <p>
              Gagnez en sérénité, en performance et en fiabilité tout en étant
              entouré d’équipes motivées et efficaces
            </p>
          </article>
        </div>
        <div id="background-02">
          <article>
            <h2>Notre démarche</h2>
            <p>
              À l’aide de questionnaires spécifiques et d’entretiens avec vous
              en physique ou par visio-conférence nous priorisons vos besoins
              selon notre analyse et nos échanges
            </p>
          </article>
        </div>
        <div id="background-03">
          <article>
            <h2>En route vers l'agilité</h2>
            <p>
              Nous vous accompagnons afin de rendre votre entreprise agile d’un
              point de vue stratégique, organisationnel et financier
            </p>
          </article>
        </div>
      </section>

      <section id="section-4">
        <div class="background-opacity">
          <article>
            <p>
              Connaissez-vous les 3 clés pour renouer avec la croissance dans
              cette période d'incertitudes durables et à optimiser les talents
              de votre entreprise ?
            </p>
          </article>
          <a href="#" class="button-2">
            En savoir plus
          </a>
        </div>
        <div class="background-opacity"></div>
      </section>
      <section id="section-5">
        <div id="form-infor">
          <div id="border-form">
            <form action="" id="form">
              <h2>Nous Contacter</h2>
              <div id="border-form2">
                <p>Votre Société</p>
                <input
                  type="text"
                  placeholder="  Comment se nomme votre Société ?"
                  class="inputext"
                />
                <p>Vos informations</p>
                <input
                  type="text"
                  placeholder="  Comment vous appellez-vous ?"
                  class="inputext"
                />
                <p>Votre mail</p>
                <input
                  type="text"
                  placeholder="  À quel adresse pouvons-nous vous joindre ?"
                  class="inputext"
                />
                <p>Votre numéro de téléphone</p>
                <input
                  type="text"
                  placeholder="  Sur quel numéro pouvons-nous vous joindre ?"
                  class="inputext"
                />
                <p>Votre demande</p>
                <textarea
                  name=""
                  id=""
                  placeholder="  Dites-nous pour quelle raison vous nosu contactez ?"
                  class="inputext"
                  rows="10"
                />
                <p>Protection de données</p>
                <p id="checkboxtext">
                  <label for="scales">
                    <input type="checkbox" name="scales" /> En soumettant ce
                    formulaire, j'accepte que les informations saisies soient
                    transmises par mail au seul destinataire de Hagile® dans le
                    but d'être recontacté concernant la demande effectuée. Je
                    comprends que j'ai un droit de modification, d'accès et de
                    suppression de mes informations personnelles.
                  </label>
                </p>
                <a href="#" class="button-1">
                  Envoyer
                </a>
              </div>
            </form>
          </div>
          <div id="border-infor">
            <article id="infor">
              <p>
                Vous êtes intéressé par notre méthode et notre démarche et vous
                souhaitez faire appel à nous afin de profiter de nos compétences
                ? Utilisez notre formulaire de contact pour que nous puissions
                nous mettre en relation et commencer une belle aventure
                ensemble.
              </p>
              <p>Coaching individuel ou cohésion d’équipe, appelez-nous :</p>
              <p>Lucile Havet – 06 30 56 07 25</p>
              <p>Contactez-nous par mail :</p>
              <p>lucile@hagile.fr</p>
              <p>Retrouvez-nous sur les réseaux sociaux</p>
              <p>LinkedIn</p>
            </article>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
