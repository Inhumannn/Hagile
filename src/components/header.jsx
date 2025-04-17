export function Header() {
  return (
    <header id="header">
      <a href="#">
        <img src="/img/cropped-Logo-Hagile.png" alt="Logo de la marque" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="#" class="active">
              Accueil
            </a>
          </li>
          <li>
            <a href="#">Hagile</a>
          </li>
          <li>
            <a href="#">Coaching</a>
          </li>
          <li>
            <a href="#">Formations</a>
          </li>
          <li>
            <a href="#">DAF externalisé</a>
          </li>
          <li>
            <a href="#">Consulting</a>
          </li>
          <li>
            <a href="#form">Contact</a>
          </li>
        </ul>
      </nav>
      <i class="fa-solid fa-bars"></i>
    </header>
  );
}
