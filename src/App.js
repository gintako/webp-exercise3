function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Dog Images</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
         <img src={props.src} alt="Dog!" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Gallery(props) {
  const { urls } = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
        {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}



function Main() {
  const urls = [
  "https://images.dog.ceo/breeds/greyhound-italian/n02091032_11549.jpg",
  "https://images.dog.ceo/breeds/dhole/n02115913_2338.jpg",
  "https://images.dog.ceo/breeds/bulldog-english/mami.jpg",
  "https://images.dog.ceo/breeds/cotondetulear/100_2397.jpg",
  "https://images.dog.ceo/breeds/bouvier/n02106382_4034.jpg",
  "https://images.dog.ceo/breeds/cockapoo/Scout.jpg",
  "https://images.dog.ceo/breeds/collie-border/n02106166_26.jpg",
  "https://images.dog.ceo/breeds/coonhound/n02089078_825.jpg",
  "https://images.dog.ceo/breeds/entlebucher/n02108000_121.jpg",
  "https://images.dog.ceo/breeds/schipperke/n02104365_7791.jpg",
  ];
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
      <subsection>
      このサイトは日本大学文理学部情報科学科 Webプログラミングの演習課題のため作成されたものである。
      </subsection>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Dog images are retrieved from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/">Donate to Dog API</a>
        </p>
        <p>
          日本大学文理学部情報科学科2年 学籍番号:5420035 山崎銀汰
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      
    </div>
  );
}

export default App;