import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'

const Werkenbijid = () => {
 
    const originalContent = [
        {
          id: 1,
          city: 'Utrecht',
          text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een tijdelijke EN reguliere Docent Engels (ca. 0,80 fte). De school…",
          header: "Docent Engels Tijdelijk EN Regulier",
          cat: 'Engels'
        },
        {
          id: 2,
          city: 'Oost-Brabant',
          text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Leraar AVO (ca. 1,0 fte). De school is gevestigd…",
          header: "Leraar AVO",
          cat: 'Algemeen Vormend Onderwijs (AVO)'
          },
          {
          id: 3,
          city: 'Utrecht',
          text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Engels (ca. 1,0 fte). De school is gevestigd…",
          header: "Docent Engels",
          cat: 'Engels'
          },
          {
          id: 4,
          city: 'Utrecht',
          text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Natuurkunde (ca. 0,60 fte). De school is gevestigd…",
          header: "Docent Natuurkunde",
          cat: 'Natuurkunde'
          },
          {
          id: 5,
          city: 'Utrecht',
          text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Nederlands (ca. 1,0 fte). De school is gevestigd…",
          header: "Docent Nederlands",
          cat: 'Nederlands'
          },
          {
          id: 6,
          city: 'Limburg',
          text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Praktijkbegeleider Metaaltechniek (ca. 0,40 fte). De school is gevestigd…",
          header: "Praktijkbegeleider Metaaltechniek",
          cat: 'Techniek'
          },
    
        ];

  return (
    <div>
        <Header></Header>
        <Hero bg="hero pregnant" video={false} buttons={false} header_second="ONZE ONDERWIJSBANEN" header="Samen voor het onderwijs" text="Hieronder zie je een overzicht van onze onderwijsbanen. Solliciteer direct op de vacature waar je enthousiast over bent of stuur een open sollicitatie!"></Hero>
    </div>
  )
}

export default Werkenbijid