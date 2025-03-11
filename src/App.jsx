import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { moyen } from './data/data.jsx';
import { getImgUrl } from './utils/utils';
import About from './about/About'

export function MyButton({ count, onClick }) {
  // const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count + 1);
  // }

  return (
    <button onClick={onClick}>Clique {count} fois</button>
  );
}

export function AboutPage() {
  return (
    <>
      <h1 className='AboutPage'>Home Page</h1>
      <p>
        <h2> {user.desc} {user.name}</h2>
        <img className='image' src={user.url} alt={''}
          style={{
            width: user.imgSize,
            height: user.imgSize
          }}
        />
      </p>

    </>
  )
}

export function AdminPanel() {
  return (
    <>
      <p> Panel de l'administrateur</p>
    </>
  )
}

export function LoginForm() {
  return (
    <>
      <p> Formulaire de connexion</p>
    </>
  )
}



export function Conditionnel() {
  let content;
  if (false) {
    content = <AdminPanel />
  } else {
    content = <LoginForm />;
  }
  return (
    <>
      {content}
    </>
  );
}


export function AfficherListe() {

  // const [count, setCount] = useState(0)
  const listItems = <p className='liste-product'> {products.map(product => (<div key={product.id}>{product.title}</div>))}</p>

  return (
    <>
      <div>
        <h1 style={{ backgroundColor: 'blue', color: 'yellowgreen', textDecoration: 'underline' }}>Les produits disponibles sont:</h1>
        <p>        {listItems}</p>
      </div>

    </>
  )
}

export function ShoppingList() {
  const listItems = products.map(product => (<li key={product.id} style={{
    color: product.isFruit ? 'magenta' : 'darkolivegreen'
  }}>
    {product.title}
  </li>));
  return (<>
    <h1 style={{ textDecoration: 'underline', backgroundColor: 'orangered' }}><strong>Liste des fruits avec couleur</strong></h1>

    <ul>{listItems}</ul>
  </>);
}

export function MyApp() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1> Des compteurs synchonises</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );

}


export function Profile() {
  return (
    <img
      src="/src/assets/land.jpeg"
      alt="une voiture de reve"
    />
  );
}

export function Gallery() {
  return (
    <>
      <section style={{ display: 'inline-table' }}>
        {/* <h1 style={{ backgroundColor: 'blue', textDecoration: 'underline', textSizeAdjust: 'auto' }}>liste des voitures</h1>
        <div style={{ backgroundColor: 'green' }}><Profile /><strong style={{ color: 'yellow' }}>{moyen1.name}</strong><hr />{moyen1.desc}</div>
        <div style={{ backgroundColor: 'orange' }}><Profile /><strong style={{ color: 'black' }}>{moyen2.name}</strong><hr />{moyen2.desc}</div>
        <div style={{ backgroundColor: 'yellow' }}><Profile /><strong style={{ color: 'pink' }}>{moyen3.name}</strong><hr />{moyen3.desc}</div>
        <div style={{ backgroundColor: 'red' }}><Profile /><strong style={{ color: 'green' }}>{moyen.name}</strong><hr />{moyen.desc}</div> */}
      </section>
    </>
  );
}

export function TodoList() {
  return (
    // <>
    <div style={moyen.theme}>

      <h1>Liste de tache {moyen.name} </h1>
      <img
        src='/src/assets/kawa.jpeg'
        alt='kawasaki'
        className="photo"
      />
      <ul>
        <li>Course a Moto</li>
        <li>Prier</li>
        <li>Dormir</li>
        <li>Coder</li>
      </ul>
    </div>

    // </>
  );
}

export function List() {
  const listItems = moyen.map(moy =>
    <div key={moy.id}>
      <h1 style={{ backgroundColor: 'blue', textDecorationStyle: 'underline' }}>{moy.name}</h1>
      <img src={getImgUrl(moy)}
        alt={moy.name}
      />
      <p>
        <b>{moy.name}:</b> {'' + moy.desc + ''} Voiture tous terrains pour {moy.name}
      </p>
    </div>);
  return (
    <article>
      <h1> Mes voitures </h1>
      <ul>{listItems}</ul>
    </article>
  )
}

function App() {
  return (
    <div>
      {/* <ShoppingList /> */}
      {/* <MyButton /> */}
      {/* <MyApp /> */}
      {/* <Gallery /> */}
      {/* <TodoList /> */}

      <List />
    </div>

  )
}

export default App
