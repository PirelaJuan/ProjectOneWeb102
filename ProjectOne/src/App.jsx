// eslint-disable-next-line no-unused-vars
import './App.css'
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Event from './components/Event'; 
import losverdes from './assets/losVerdes.jpeg';
import pizza from './assets/pizza.jpg';
import american from './assets/burger.jpg';
import china from './assets/hongkong.jpg';
import aja from './assets/aja.jpg';
import cuban from './assets/kauchos.jpg';
import shawarma from './assets/shawarma.jpg';
import brazilian from './assets/brazilian.png';
import peru from './assets/unnamed.jpg';
import sushi from './assets/ohana.jpg';




function App () {
  const events = [
    {
      title: 'Los Verdes',
      category: 'Colombian',
      image: losverdes,
      url:'https://losverdes.com/',
    },
    {
      title: 'Pizzarello',
      category: 'Italian',
      image: pizza,
      url:'https://www.pizzarellomiami.com/',
    },
    {
      title: 'Fat boy ricks',
      category: 'American',
      image: american,
      url:'https://fatboyricks.com/',
    },
    {
      title: 'HONG KONG RESTAURANT',
      category: 'Chinese',
      image: china,
      url:'https://www.hongkongmiamifl.com/',
    },

    {
      title: 'aja!',
      category: 'Venezuelan',
      image: aja,
      url:'https://ajafoodtrucks.com/',
    },

    {
      title: 'Kauchos 305',
      category: 'Cuban-American',
      image: cuban,
      url:'https://kuachos305.com/',
    },
    {
      title: 'KENDALL SHAWARMA',
      category: 'mediterranean',
      image: shawarma,
      url:'',
    },

    {
        title: 'El Toro Loco Churrascaria',
        category: ' Brazilian',
        image: brazilian,
        url:'https://eltoroloco.com/',
    },
    {
      title: 'El Ceviche Del Rey',
      category: 'Peruvian',
      image: peru,
      url:'https://elcevichedelrey.com/',
    },
    {
      title: 'Ohana Sushi',
      category: 'Japanese',
      image: sushi,
      url:'https://ohanasushimiami.com/',
    },
      
  ];

  const boardStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
  };

  return (
    <div className='App'>
      <h2>Food Near Kendall🚩</h2>
      <div style={boardStyle}>
        {events.map((event, index) => (
          <Event
            key={index}
            title={event.title}
            category={event.category}
            image={event.image}
            url = {event.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;