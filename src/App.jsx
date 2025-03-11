import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './about/About'
// import { About } from './about/About.jsx'

const user = {
  name: 'soumaila',
  url: '/src/assets/gym.jpeg',
  imgSize: 100,
  desc: 'image de salle de gym de reve'

};

export function MyButton() {
  // const [count, setCount] = useState(0)

  return (
    <button>Click moi</button>
  )
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
  const products = [
    { title: 'Chou', id: 1 },
    { title: 'Ail', id: 2 },
    { title: 'Gingembre', id: 3 },
    { title: 'Pomme', id: 4 },
    { title: 'Fruit de Dragon', id: 5 },
  ];

  // const [count, setCount] = useState(0)
  const listItems = <p className='liste-product'> {products.map(product => (<div key={product.id}>{product.title}</div>))}</p>

  return (
    <>
      <div>
        <h1>Les produits disponibles sont:</h1>
        {listItems}
      </div>

    </>
  )
}

function App() {
  return (
    <div>
      <AfficherListe />
    </div>
  )
}

export default App
