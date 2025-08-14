import React from 'react';
import { TrendingUp, Users, Calendar, MessageSquare, AlertTriangle, ChevronLeft, ChevronRight, Music, X, ExternalLink, MapPin, Clock } from 'lucide-react';
import { IndividualPubData } from '../../types';

interface LeadingIndicatorsProps {
  data: IndividualPubData['leadingIndicators'];
  alerts?: Array<{
    type: 'revenue' | 'booking' | 'operational';
    message: string;
    priority: 'urgent' | 'important' | 'opportunity';
  }>;
}

export default function LeadingIndicators({ data, alerts = [] }: LeadingIndicatorsProps) {
  const bookingAlerts = alerts.filter(alert => alert.type === 'booking');
  
  // Entertainment carousel state
  const [selectedWeekIndex, setSelectedWeekIndex] = React.useState(4); // Default to current week (index 4 in 0-6 range)
  const [selectedAct, setSelectedAct] = React.useState<any>(null);
  const [showActPanel, setShowActPanel] = React.useState(false);
  
  // Mock band database for each entertainment category
  const bandDatabase = {
    'Industry Night': [
      { 
        name: 'DJ Marcus', 
        type: 'Solo', 
        cost: 144,
        photo: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/djmarcus',
        bandcampUrl: 'https://djmarcus.bandcamp.com',
        recentGigs: [
          { venue: 'The Alchemist', location: 'Manchester', date: '2024-01-08' },
          { venue: 'Revolution', location: 'Liverpool', date: '2024-01-02' },
          { venue: 'Slug & Lettuce', location: 'Birmingham', date: '2023-12-28' }
        ]
      },
      { 
        name: 'DJ Sarah', 
        type: 'Solo', 
        cost: 160,
        photo: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/djsarah',
        bandcampUrl: 'https://djsarah.bandcamp.com',
        recentGigs: [
          { venue: 'Dirty Martini', location: 'London', date: '2024-01-10' },
          { venue: 'Be At One', location: 'Manchester', date: '2024-01-05' },
          { venue: 'All Bar One', location: 'Birmingham', date: '2023-12-30' }
        ]
      },
      { 
        name: 'DJ Alex', 
        type: 'Solo', 
        cost: 152,
        photo: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/djalex',
        bandcampUrl: 'https://djalex.bandcamp.com',
        recentGigs: [
          { venue: 'Revolucion de Cuba', location: 'Liverpool', date: '2024-01-07' },
          { venue: 'The Botanist', location: 'Manchester', date: '2024-01-01' },
          { venue: 'Turtle Bay', location: 'Birmingham', date: '2023-12-27' }
        ]
      },
      { 
        name: 'DJ Chris', 
        type: 'Solo', 
        cost: 168,
        photo: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/djchris',
        bandcampUrl: 'https://djchris.bandcamp.com',
        recentGigs: [
          { venue: 'Pitcher & Piano', location: 'London', date: '2024-01-09' },
          { venue: 'The Refinery', location: 'Manchester', date: '2024-01-04' },
          { venue: 'Cosy Club', location: 'Liverpool', date: '2023-12-29' }
        ]
      },
      { 
        name: 'DJ Luna', 
        type: 'Solo', 
        cost: 176,
        photo: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/djluna',
        bandcampUrl: 'https://djluna.bandcamp.com',
        recentGigs: [
          { venue: 'Malmaison Bar', location: 'Birmingham', date: '2024-01-11' },
          { venue: 'The Living Room', location: 'Liverpool', date: '2024-01-06' },
          { venue: 'Rosylee', location: 'Manchester', date: '2024-01-03' }
        ]
      },
      { 
        name: 'DJ Storm', 
        type: 'Solo', 
        cost: 184,
        photo: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/djstorm',
        bandcampUrl: 'https://djstorm.bandcamp.com',
        recentGigs: [
          { venue: 'Hawksmoor Bar', location: 'London', date: '2024-01-12' },
          { venue: 'The Alchemist', location: 'Manchester', date: '2024-01-08' },
          { venue: 'Revolution', location: 'Birmingham', date: '2024-01-01' }
        ]
      }
    ],
    'Kunst Kabaret': [
      { 
        name: 'The Velvet Collective', 
        type: 'Duo', 
        cost: 336,
        photo: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/velvetcollective',
        bandcampUrl: 'https://velvetcollective.bandcamp.com',
        recentGigs: [
          { venue: 'Crazy Coqs', location: 'London', date: '2024-01-09' },
          { venue: 'The Lowry', location: 'Manchester', date: '2024-01-02' },
          { venue: 'Birmingham Rep', location: 'Birmingham', date: '2023-12-26' }
        ]
      },
      { 
        name: 'Midnight Cabaret', 
        type: 'Duo', 
        cost: 360,
        photo: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/midnightcabaret',
        bandcampUrl: 'https://midnightcabaret.bandcamp.com',
        recentGigs: [
          { venue: 'Proud Cabaret', location: 'London', date: '2024-01-11' },
          { venue: 'The Cavern Club', location: 'Liverpool', date: '2024-01-04' },
          { venue: 'The Old Joint Stock', location: 'Birmingham', date: '2023-12-28' }
        ]
      },
      { 
        name: 'Artisan Performers', 
        type: 'Duo', 
        cost: 384,
        photo: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/artisanperformers',
        bandcampUrl: 'https://artisanperformers.bandcamp.com',
        recentGigs: [
          { venue: 'The Shard', location: 'London', date: '2024-01-10' },
          { venue: 'HOME', location: 'Manchester', date: '2024-01-03' },
          { venue: 'The Electric Cinema', location: 'Birmingham', date: '2023-12-29' }
        ]
      },
      { 
        name: 'Berlin Cabaret', 
        type: 'Duo', 
        cost: 368,
        photo: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/berlincabaret',
        bandcampUrl: 'https://berlincabaret.bandcamp.com',
        recentGigs: [
          { venue: 'Ronnie Scotts', location: 'London', date: '2024-01-08' },
          { venue: 'Band on the Wall', location: 'Manchester', date: '2024-01-01' },
          { venue: 'The Sunflower Lounge', location: 'Birmingham', date: '2023-12-27' }
        ]
      },
      { 
        name: 'Rouge & Noir', 
        type: 'Duo', 
        cost: 352,
        photo: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/rougenoir',
        bandcampUrl: 'https://rougenoir.bandcamp.com',
        recentGigs: [
          { venue: 'The Jazz Cafe', location: 'London', date: '2024-01-12' },
          { venue: 'Matt & Phreds', location: 'Manchester', date: '2024-01-05' },
          { venue: 'The Blue Note', location: 'Liverpool', date: '2023-12-30' }
        ]
      },
      { 
        name: 'Cabaret Mystique', 
        type: 'Duo', 
        cost: 376,
        photo: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/cabaretmystique',
        bandcampUrl: 'https://cabaretmystique.bandcamp.com',
        recentGigs: [
          { venue: 'The Hippodrome', location: 'Birmingham', date: '2024-01-07' },
          { venue: 'The Philharmonic', location: 'Liverpool', date: '2023-12-31' },
          { venue: 'Palace Theatre', location: 'Manchester', date: '2023-12-24' }
        ]
      }
    ],
    'Bertie\'s Band': [
      { 
        name: 'The Harmonics', 
        type: 'Band', 
        cost: 520,
        photo: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/theharmonics',
        bandcampUrl: 'https://theharmonics.bandcamp.com',
        recentGigs: [
          { venue: 'The Savoy', location: 'London', date: '2024-01-10' },
          { venue: 'The Midland Hotel', location: 'Manchester', date: '2024-01-03' },
          { venue: 'Hotel du Vin', location: 'Birmingham', date: '2023-12-28' }
        ]
      },
      { 
        name: 'Jazz Collective', 
        type: 'Band', 
        cost: 544,
        photo: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/jazzcollective',
        bandcampUrl: 'https://jazzcollective.bandcamp.com',
        recentGigs: [
          { venue: 'The Ritz', location: 'London', date: '2024-01-09' },
          { venue: 'The Principal', location: 'Manchester', date: '2024-01-02' },
          { venue: 'Grand Hotel', location: 'Birmingham', date: '2023-12-26' }
        ]
      },
      { 
        name: 'Acoustic Trio', 
        type: 'Band', 
        cost: 496,
        photo: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/acoustictrio',
        bandcampUrl: 'https://acoustictrio.bandcamp.com',
        recentGigs: [
          { venue: 'Claridges', location: 'London', date: '2024-01-11' },
          { venue: 'The Lowry Hotel', location: 'Manchester', date: '2024-01-04' },
          { venue: 'Malmaison', location: 'Birmingham', date: '2023-12-29' }
        ]
      },
      { 
        name: 'Easy Listening Trio', 
        type: 'Band', 
        cost: 512,
        photo: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/easylisteningtrio',
        bandcampUrl: 'https://easylisteningtrio.bandcamp.com',
        recentGigs: [
          { venue: 'The Dorchester', location: 'London', date: '2024-01-08' },
          { venue: 'Stock Exchange Hotel', location: 'Manchester', date: '2024-01-01' },
          { venue: 'The Cube', location: 'Birmingham', date: '2023-12-27' }
        ]
      },
      { 
        name: 'The Melody Makers', 
        type: 'Band', 
        cost: 528,
        photo: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/themelodymakers',
        bandcampUrl: 'https://themelodymakers.bandcamp.com',
        recentGigs: [
          { venue: 'The Langham', location: 'London', date: '2024-01-12' },
          { venue: 'King Street Townhouse', location: 'Manchester', date: '2024-01-05' },
          { venue: 'Hotel Indigo', location: 'Birmingham', date: '2023-12-30' }
        ]
      },
      { 
        name: 'Swing Society', 
        type: 'Band', 
        cost: 536,
        photo: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/swingsociety',
        bandcampUrl: 'https://swingsociety.bandcamp.com',
        recentGigs: [
          { venue: 'The Connaught', location: 'London', date: '2024-01-07' },
          { venue: 'Dakota Hotel', location: 'Manchester', date: '2023-12-31' },
          { venue: 'AC Hotel', location: 'Birmingham', date: '2023-12-24' }
        ]
      }
    ],
    'Baby Grand Slam': [
      { 
        name: 'Piano Pete & Sally', 
        type: 'Duo', 
        cost: 304,
        photo: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/pianopetesally',
        bandcampUrl: 'https://pianopetesally.bandcamp.com',
        recentGigs: [
          { venue: 'Piano Bar Soho', location: 'London', date: '2024-01-11' },
          { venue: 'The Ivy', location: 'Manchester', date: '2024-01-04' },
          { venue: 'Opus Restaurant', location: 'Birmingham', date: '2023-12-28' }
        ]
      },
      { 
        name: 'The Piano Twins', 
        type: 'Duo', 
        cost: 320,
        photo: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/pianotwins',
        bandcampUrl: 'https://pianotwins.bandcamp.com',
        recentGigs: [
          { venue: 'Sketch', location: 'London', date: '2024-01-10' },
          { venue: 'The French', location: 'Manchester', date: '2024-01-03' },
          { venue: 'Purnells', location: 'Birmingham', date: '2023-12-27' }
        ]
      },
      { 
        name: 'Piano Masters', 
        type: 'Duo', 
        cost: 336,
        photo: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/pianomasters',
        bandcampUrl: 'https://pianomasters.bandcamp.com',
        recentGigs: [
          { venue: 'Annabels', location: 'London', date: '2024-01-09' },
          { venue: 'The Refuge', location: 'Manchester', date: '2024-01-02' },
          { venue: 'The Edgbaston', location: 'Birmingham', date: '2023-12-26' }
        ]
      },
      { 
        name: 'Keys & Harmony', 
        type: 'Duo', 
        cost: 312,
        photo: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/keysharmony',
        bandcampUrl: 'https://keysharmony.bandcamp.com',
        recentGigs: [
          { venue: 'Chiltern Firehouse', location: 'London', date: '2024-01-12' },
          { venue: 'Hawksmoor', location: 'Manchester', date: '2024-01-05' },
          { venue: 'The Wilderness', location: 'Birmingham', date: '2023-12-30' }
        ]
      },
      { 
        name: 'Double Ivory', 
        type: 'Duo', 
        cost: 328,
        photo: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/doubleivory',
        bandcampUrl: 'https://doubleivory.bandcamp.com',
        recentGigs: [
          { venue: 'Zuma', location: 'London', date: '2024-01-08' },
          { venue: 'Tattu', location: 'Manchester', date: '2024-01-01' },
          { venue: 'The Oyster Club', location: 'Birmingham', date: '2023-12-29' }
        ]
      },
      { 
        name: 'Piano Forte Duo', 
        type: 'Duo', 
        cost: 344,
        photo: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/pianoforteduo',
        bandcampUrl: 'https://pianoforteduo.bandcamp.com',
        recentGigs: [
          { venue: 'Nobu', location: 'London', date: '2024-01-07' },
          { venue: 'The Ivy Spinningfields', location: 'Manchester', date: '2023-12-31' },
          { venue: 'Lasan', location: 'Birmingham', date: '2023-12-24' }
        ]
      }
    ],
    'Friday Fröhlich': [
      { 
        name: 'Bavarian Beats', 
        type: 'Band', 
        cost: 680,
        photo: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/bavarianbeats',
        bandcampUrl: 'https://bavarianbeats.bandcamp.com',
        recentGigs: [
          { venue: 'Oktoberfest London', location: 'London', date: '2024-01-06' },
          { venue: 'Albert Hall', location: 'Manchester', date: '2023-12-30' },
          { venue: 'German Christmas Market', location: 'Birmingham', date: '2023-12-23' }
        ]
      },
      { 
        name: 'Alpine Express', 
        type: 'Band', 
        cost: 720,
        photo: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/alpineexpress',
        bandcampUrl: 'https://alpineexpress.bandcamp.com',
        recentGigs: [
          { venue: 'Bierschenke', location: 'London', date: '2024-01-12' },
          { venue: 'Katsouris Deli', location: 'Manchester', date: '2024-01-05' },
          { venue: 'The German Market', location: 'Birmingham', date: '2023-12-29' }
        ]
      },
      { 
        name: 'Oktoberfest Band', 
        type: 'Band', 
        cost: 704,
        photo: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/oktoberfestband',
        bandcampUrl: 'https://oktoberfestband.bandcamp.com',
        recentGigs: [
          { venue: 'Bavarian Beerhouse', location: 'London', date: '2024-01-11' },
          { venue: 'Brewdog', location: 'Manchester', date: '2024-01-04' },
          { venue: 'The Stable', location: 'Birmingham', date: '2023-12-28' }
        ]
      },
      { 
        name: 'German Folk Collective', 
        type: 'Band', 
        cost: 696,
        photo: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/germanfolkcollective',
        bandcampUrl: 'https://germanfolkcollective.bandcamp.com',
        recentGigs: [
          { venue: 'The Roundhouse', location: 'London', date: '2024-01-10' },
          { venue: 'Gorilla', location: 'Manchester', date: '2024-01-03' },
          { venue: 'The Institute', location: 'Birmingham', date: '2023-12-27' }
        ]
      },
      { 
        name: 'The Lederhosen', 
        type: 'Band', 
        cost: 712,
        photo: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/thelederhosen',
        bandcampUrl: 'https://thelederhosen.bandcamp.com',
        recentGigs: [
          { venue: 'Electric Brixton', location: 'London', date: '2024-01-09' },
          { venue: 'Academy 2', location: 'Manchester', date: '2024-01-02' },
          { venue: 'O2 Institute', location: 'Birmingham', date: '2023-12-26' }
        ]
      },
      { 
        name: 'Munich Madness', 
        type: 'Band', 
        cost: 688,
        photo: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/munichmadness',
        bandcampUrl: 'https://munichmadness.bandcamp.com',
        recentGigs: [
          { venue: 'KOKO', location: 'London', date: '2024-01-08' },
          { venue: 'Deaf Institute', location: 'Manchester', date: '2024-01-01' },
          { venue: 'The Flapper', location: 'Birmingham', date: '2023-12-25' }
        ]
      }
    ],
    'Pleasure Palace': [
      { 
        name: 'House Band + DJ Max', 
        type: 'Band', 
        cost: 760,
        photo: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/housebanddjmax',
        bandcampUrl: 'https://housebanddjmax.bandcamp.com',
        recentGigs: [
          { venue: 'Fabric', location: 'London', date: '2024-01-13' },
          { venue: 'Warehouse Project', location: 'Manchester', date: '2024-01-06' },
          { venue: 'Rainbow Venues', location: 'Birmingham', date: '2023-12-30' }
        ]
      },
      { 
        name: 'House Band + DJ Luna', 
        type: 'Band', 
        cost: 784,
        photo: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/housebandjluna',
        bandcampUrl: 'https://housebanddjluna.bandcamp.com',
        recentGigs: [
          { venue: 'Ministry of Sound', location: 'London', date: '2024-01-12' },
          { venue: 'Sankeys', location: 'Manchester', date: '2024-01-05' },
          { venue: 'Lab 11', location: 'Birmingham', date: '2023-12-29' }
        ]
      },
      { 
        name: 'House Band + DJ Storm', 
        type: 'Band', 
        cost: 816,
        photo: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/housebanddjstorm',
        bandcampUrl: 'https://housebanddjstorm.bandcamp.com',
        recentGigs: [
          { venue: 'XOYO', location: 'London', date: '2024-01-11' },
          { venue: 'Hidden', location: 'Manchester', date: '2024-01-04' },
          { venue: 'The Night Owl', location: 'Birmingham', date: '2023-12-28' }
        ]
      },
      { 
        name: 'House Band + DJ Vibe', 
        type: 'Band', 
        cost: 792,
        photo: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/housebanddjvibe',
        bandcampUrl: 'https://housebanddjvibe.bandcamp.com',
        recentGigs: [
          { venue: 'Printworks', location: 'London', date: '2024-01-10' },
          { venue: 'Albert Hall', location: 'Manchester', date: '2024-01-03' },
          { venue: 'Hare & Hounds', location: 'Birmingham', date: '2023-12-27' }
        ]
      },
      { 
        name: 'House Band + DJ Pulse', 
        type: 'Band', 
        cost: 808,
        photo: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/housebanddjpulse',
        bandcampUrl: 'https://housebanddjpulse.bandcamp.com',
        recentGigs: [
          { venue: 'Egg London', location: 'London', date: '2024-01-09' },
          { venue: 'Sound Control', location: 'Manchester', date: '2024-01-02' },
          { venue: 'The Tunnel Club', location: 'Birmingham', date: '2023-12-26' }
        ]
      },
      { 
        name: 'House Band + DJ Echo', 
        type: 'Band', 
        cost: 776,
        photo: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/housebanddjecho',
        bandcampUrl: 'https://housebanddjecho.bandcamp.com',
        recentGigs: [
          { venue: 'Village Underground', location: 'London', date: '2024-01-08' },
          { venue: 'YES', location: 'Manchester', date: '2024-01-01' },
          { venue: 'Mama Roux\'s', location: 'Birmingham', date: '2023-12-25' }
        ]
      }
    ],
    'Sunday Service': [
      { 
        name: 'Gospel Collective', 
        type: 'Band', 
        cost: 576,
        photo: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/gospelcollective',
        bandcampUrl: 'https://gospelcollective.bandcamp.com',
        recentGigs: [
          { venue: 'Royal Festival Hall', location: 'London', date: '2024-01-07' },
          { venue: 'Bridgewater Hall', location: 'Manchester', date: '2023-12-31' },
          { venue: 'Symphony Hall', location: 'Birmingham', date: '2023-12-24' }
        ]
      },
      { 
        name: 'Sunday Singers', 
        type: 'Band', 
        cost: 600,
        photo: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/sundaysingers',
        bandcampUrl: 'https://sundaysingers.bandcamp.com',
        recentGigs: [
          { venue: 'St Pauls Cathedral', location: 'London', date: '2024-01-14' },
          { venue: 'Manchester Cathedral', location: 'Manchester', date: '2024-01-07' },
          { venue: 'Birmingham Cathedral', location: 'Birmingham', date: '2023-12-31' }
        ]
      },
      { 
        name: 'Choir Harmony', 
        type: 'Band', 
        cost: 624,
        photo: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/choirharmony',
        bandcampUrl: 'https://choirharmony.bandcamp.com',
        recentGigs: [
          { venue: 'Southwark Cathedral', location: 'London', date: '2024-01-13' },
          { venue: 'The Monastery', location: 'Manchester', date: '2024-01-06' },
          { venue: 'St Philips Cathedral', location: 'Birmingham', date: '2023-12-30' }
        ]
      },
      { 
        name: 'Sacred Sounds', 
        type: 'Band', 
        cost: 592,
        photo: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/sacredsounds',
        bandcampUrl: 'https://sacredsounds.bandcamp.com',
        recentGigs: [
          { venue: 'Westminster Abbey', location: 'London', date: '2024-01-12' },
          { venue: 'John Rylands Library', location: 'Manchester', date: '2024-01-05' },
          { venue: 'Aston University Chapel', location: 'Birmingham', date: '2023-12-29' }
        ]
      },
      { 
        name: 'Divine Voices', 
        type: 'Band', 
        cost: 608,
        photo: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/divinevoices',
        bandcampUrl: 'https://divinevoices.bandcamp.com',
        recentGigs: [
          { venue: 'St Martins in the Fields', location: 'London', date: '2024-01-11' },
          { venue: 'The Whitworth', location: 'Manchester', date: '2024-01-04' },
          { venue: 'Birmingham Oratory', location: 'Birmingham', date: '2023-12-28' }
        ]
      },
      { 
        name: 'Spiritual Symphony', 
        type: 'Band', 
        cost: 584,
        photo: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
        spotifyUrl: 'https://open.spotify.com/artist/spiritualsymphony',
        bandcampUrl: 'https://spiritualsymphony.bandcamp.com',
        recentGigs: [
          { venue: 'Temple Church', location: 'London', date: '2024-01-10' },
          { venue: 'Chetham\'s School', location: 'Manchester', date: '2024-01-03' },
          { venue: 'Birmingham Town Hall', location: 'Birmingham', date: '2023-12-27' }
        ]
      }
    ]
  };
  
  // Generate 6 weeks of entertainment data (4 historic + current + 2 forecast)
  const generateEntertainmentWeeks = () => {
    const weeks = [];
    const categories = ['Industry Night', 'Kunst Kabaret', 'Bertie\'s Band', 'Baby Grand Slam', 'Friday Fröhlich', 'Pleasure Palace', 'Sunday Service'];
    
    for (let weekOffset = -4; weekOffset <= 2; weekOffset++) {
      const weekType = weekOffset < 0 ? 'historical' : weekOffset === 0 ? 'current' : 'forecast';
      const weekNumber = 47 + weekOffset; // Current week is 47
      
      const weekData = categories.map((category, dayIndex) => {
        const bands = bandDatabase[category as keyof typeof bandDatabase];
        const randomBand = bands[Math.floor(Math.random() * bands.length)];
        
        // Generate start times: 7-9pm Mon-Sat, 11am Sunday
        const startTime = dayIndex === 6 ? '11:00' : // Sunday at 11am
          ['19:00', '19:30', '20:00', '20:30', '21:00'][Math.floor(Math.random() * 5)]; // Mon-Sat between 7-9pm
        
        // Calculate percentage lift over baseline (non-performance) revenue
        const baselineRevenue = 800; // Normal revenue without entertainment
        const performanceMultiplier = weekType === 'forecast' ? 
          (1.04 + Math.random() * 0.27) : // Forecast: 4-31% lift
          (1.04 + Math.random() * 0.27); // Historical: 4-31% lift
        
        const totalRevenue = baselineRevenue * performanceMultiplier;
        const revenueLiftPercentage = Math.round((performanceMultiplier - 1) * 100);
        const targetLiftPercentage = 12; // Target 12% lift over baseline
        
        return {
          day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][dayIndex],
          category,
          band: randomBand,
          startTime,
          revenueLiftPercentage,
          targetLiftPercentage,
          weekType
        };
      });
      
      weeks.push({
        weekNumber,
        weekType,
        weekData
      });
    }
    
    return weeks;
  };
  
  const entertainmentWeeks = generateEntertainmentWeeks();
  const selectedWeek = entertainmentWeeks[selectedWeekIndex];
  
  const canGoBack = selectedWeekIndex > 0;
  const canGoForward = selectedWeekIndex < entertainmentWeeks.length - 1;
  
  const navigateWeek = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && canGoBack) {
      setSelectedWeekIndex(selectedWeekIndex - 1);
    } else if (direction === 'next' && canGoForward) {
      setSelectedWeekIndex(selectedWeekIndex + 1);
    }
  };
  
  const handleActClick = (dayData: any) => {
    setSelectedAct(dayData);
    setShowActPanel(true);
  };
  
  const closeActPanel = () => {
    setShowActPanel(false);
    setSelectedAct(null);
  };
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Industry Night': return 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600';
      case 'Kunst Kabaret': return 'bg-red-100 dark:bg-red-800/50 border-red-300 dark:border-red-600';
      case 'Bertie\'s Band': return 'bg-blue-100 dark:bg-blue-800/50 border-blue-300 dark:border-blue-600';
      case 'Baby Grand Slam': return 'bg-amber-100 dark:bg-amber-800/50 border-amber-300 dark:border-amber-600';
      case 'Friday Fröhlich': return 'bg-green-100 dark:bg-green-800/50 border-green-300 dark:border-green-600';
      case 'Pleasure Palace': return 'bg-purple-100 dark:bg-purple-800/50 border-purple-300 dark:border-purple-600';
      case 'Sunday Service': return 'bg-teal-100 dark:bg-teal-800/50 border-teal-300 dark:border-teal-600';
      default: return 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600';
    }
  };
  
  const getWeekTypeLabel = (weekType: string) => {
    switch (weekType) {
      case 'historical': return 'Historical';
      case 'current': return 'Current Week';
      case 'forecast': return 'Forecast';
      default: return '';
    }
  };
  
  const getWeekTypeColor = (weekType: string) => {
    switch (weekType) {
      case 'historical': return 'text-gray-600 bg-gray-100';
      case 'current': return 'text-indigo-600 bg-indigo-100';
      case 'forecast': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-colors duration-200">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Leading Indicators</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Guest Momentum */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">Guest Momentum</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-700 dark:text-blue-300">This Week</span>
              <span className="text-lg font-bold text-blue-900 dark:text-blue-100">{data.guestMomentum.checkinsThisWeek}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-700 dark:text-blue-300">Growth vs Last Week</span>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm font-bold text-green-600">+{data.guestMomentum.checkinsGrowth}%</span>
              </div>
            </div>
            
            <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-800/50 rounded text-xs text-blue-800 dark:text-blue-200">
              Forecast: {data.guestMomentum.trendForecast}
            </div>
            <p className="text-xs text-blue-500 dark:text-blue-400 mt-2">Source: Pubble</p>
          </div>
        </div>

        {/* Booking Health */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h3 className="font-semibold text-green-900 dark:text-green-100">Booking Health</h3>
            {bookingAlerts.length > 0 && (
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            )}
          </div>
          
          {/* Booking Alerts */}
          {bookingAlerts.length > 0 && (
            <div className="mb-3 p-2 bg-amber-100 dark:bg-amber-800/50 rounded text-xs">
              {bookingAlerts.map((alert, index) => (
                <p key={index} className="text-amber-800 dark:text-amber-200 font-medium">
                  {alert.message}
                </p>
              ))}
            </div>
          )}
          
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-green-700 dark:text-green-300">This Week</p>
                <p className="font-bold text-green-900 dark:text-green-100">{data.bookingHealth.forwardBookings.thisWeek}</p>
              </div>
              <div>
                <p className="text-xs text-green-700 dark:text-green-300">Next Week</p>
                <p className="font-bold text-green-900 dark:text-green-100">{data.bookingHealth.forwardBookings.nextWeek}</p>
              </div>
              <div>
                <p className="text-xs text-green-700 dark:text-green-300">Week After</p>
                <p className="font-bold text-green-900 dark:text-green-100">{data.bookingHealth.forwardBookings.weekAfter}</p>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-green-700 dark:text-green-300">Conversion Rate</span>
                <span className="font-medium text-green-900 dark:text-green-100">{data.bookingHealth.conversionRate}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-green-700 dark:text-green-300">No-Show Rate</span>
                <span className="font-medium text-green-900 dark:text-green-100">{data.bookingHealth.noShowRate}%</span>
              </div>
            </div>
            <p className="text-xs text-green-500 dark:text-green-400 mt-2">Source: Design my Night</p>
          </div>
        </div>

        {/* Social Pulse */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h3 className="font-semibold text-purple-900 dark:text-purple-100">Social Pulse</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-700 dark:text-purple-300">Weekly Mentions</span>
              <span className="text-lg font-bold text-purple-900 dark:text-purple-100">{data.socialPulse.weeklyMentions}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-700 dark:text-purple-300">Sentiment Score</span>
              <span className="text-lg font-bold text-purple-900 dark:text-purple-100">{data.socialPulse.sentimentScore}/10</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-purple-700 dark:text-purple-300">Engagement Rate</span>
                <span className="font-medium text-purple-900 dark:text-purple-100">{data.socialPulse.engagementRate}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-purple-700 dark:text-purple-300">Reviews/Week</span>
                <span className="font-medium text-purple-900 dark:text-purple-100">{data.socialPulse.reviewVelocity}</span>
              </div>
            </div>
            <p className="text-xs text-purple-500 dark:text-purple-400 mt-2">Source: Reputation</p>
          </div>
        </div>
      </div>
      
      {/* Music/Entertainment Weekly Overview */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <Music className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">Music & Entertainment Calendar</h3>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigateWeek('prev')}
                disabled={!canGoBack}
                className={`p-2 rounded-lg transition-colors ${
                  canGoBack 
                    ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="text-center min-w-[120px]">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Week {selectedWeek.weekNumber}</div>
                <div className={`text-xs px-2 py-1 rounded-full ${getWeekTypeColor(selectedWeek.weekType)}`}>
                  {getWeekTypeLabel(selectedWeek.weekType)}
                </div>
              </div>
              
              <button
                onClick={() => navigateWeek('next')}
                disabled={!canGoForward}
                className={`p-2 rounded-lg transition-colors ${
                  canGoForward 
                    ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-purple-700 dark:text-purple-300">Weekly Entertainment Programming</p>
            <p className="text-xs text-purple-600 dark:text-purple-400">
              Total Week Cost: £{selectedWeek.weekData.reduce((sum, day) => sum + day.band.cost, 0).toLocaleString()}
            </p>
          </div>
        </div>
        
        {/* Entertainment Week View */}
        <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-purple-200 dark:border-purple-600">
          {/* Week Header */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
              <div key={day} className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center p-2">
                {day}
              </div>
            ))}
          </div>
          
          {/* Entertainment Week Grid */}
          <div className="grid grid-cols-7 gap-2">
            {selectedWeek.weekData.map((dayData, index) => (
              <div
                key={index}
                className={`rounded-lg p-3 text-xs border-2 transition-all duration-200 cursor-pointer hover:shadow-lg hover:scale-105 ${getCategoryColor(dayData.category)} ${
                  selectedWeek.weekType === 'current' ? 'ring-2 ring-indigo-500' : ''
                }`}
                onClick={() => handleActClick(dayData)}
              >
                <div className="space-y-2">
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    {dayData.category}
                  </div>
                  
                  <div className="text-gray-700 dark:text-gray-300">
                    {dayData.band.name}
                  </div>
                  
                  <div className="text-gray-600 dark:text-gray-400">
                    {dayData.band.type} • £{dayData.band.cost}
                  </div>
                  
                  <div className="text-gray-600 dark:text-gray-400">
                    Starts: {dayData.startTime}
                  </div>
                  
                  <div className={`font-medium ${
                    selectedWeek.weekType === 'forecast' 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-green-600 dark:text-green-400'
                  }`}>
                    {selectedWeek.weekType === 'forecast' ? (
                      <span className="text-blue-600 dark:text-blue-400" style={{ opacity: 0.5 }}>
                        Est. +{dayData.revenueLiftPercentage}%
                      </span>
                    ) : (
                      <span className={dayData.revenueLiftPercentage >= dayData.targetLiftPercentage ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        +{dayData.revenueLiftPercentage}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Legend */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-4 flex-wrap">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded"></div>
                  <span>Historical</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-500 rounded"></div>
                  <span>Current Week</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-600 rounded opacity-80"></div>
                  <span>Forecast</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                <div>Use ← → to navigate weeks</div>
                <div>Format: Band • Type • Cost • Start Time • Revenue Lift %</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Entertainment Act Lightbox Panel */}
      {showActPanel && selectedAct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Music className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedAct.band.name}</h2>
              </div>
              <button
                onClick={closeActPanel}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {/* Band Photo */}
              <div className="mb-6">
                <img
                  src={selectedAct.band.photo}
                  alt={selectedAct.band.name}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              
              {/* Band Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Performance Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Event:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAct.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Type:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAct.band.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                      <span className="font-bold text-green-600 dark:text-green-400">£{selectedAct.band.cost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Start Time:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAct.startTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Day:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedAct.day}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Revenue Impact</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Revenue Lift:</span>
                      <span className={`font-bold ${
                        selectedAct.weekType === 'forecast' 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : selectedAct.revenueLiftPercentage >= selectedAct.targetLiftPercentage 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-red-600 dark:text-red-400'
                      }`}>
                        {selectedAct.weekType === 'forecast' ? 'Est. ' : ''}+{selectedAct.revenueLiftPercentage}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Target:</span>
                      <span className="font-medium text-gray-900 dark:text-white">+{selectedAct.targetLiftPercentage}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Performance:</span>
                      <span className={`font-medium ${
                        selectedAct.weekType === 'forecast' 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : selectedAct.revenueLiftPercentage >= selectedAct.targetLiftPercentage 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-red-600 dark:text-red-400'
                      }`}>
                        {selectedAct.weekType === 'forecast' 
                          ? 'Projected' 
                          : selectedAct.revenueLiftPercentage >= selectedAct.targetLiftPercentage 
                            ? 'Above Target' 
                            : 'Below Target'
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Music Links */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Listen to Their Music</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedAct.band.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Listen on Spotify</span>
                  </a>
                  <a
                    href={selectedAct.band.bandcampUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Listen on Bandcamp</span>
                  </a>
                </div>
              </div>
              
              {/* Recent Gigs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recent Performances</h3>
                <div className="space-y-3">
                  {selectedAct.band.recentGigs.map((gig: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{gig.venue}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{gig.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{new Date(gig.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}