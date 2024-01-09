import img1 from '../../assets/house.jpg';
import img2 from '../../assets/immeuble.jpg';
import img3 from '../../assets/office.jpg';
import img4 from '../../assets/electricity.jpg';
import img5 from '../../assets/gaz.jpg';
import img6 from '../../assets/wood.jpg'
import img7 from '../../assets/airEau1.jpg';
import img8 from '../../assets/airEau2.jpg';

const productsSuggestions = [
    {
      title: "Pompe à chaleur 1",
      powerRange:
        {
          min: 1000,
          max: 4999
        },
      price: 3456,
      image: img7,
      pacType: 'Air/Eau',
      gasType: "R330",
      warranty: 2,
      isPacSystemModule: true,
    },
    {
      title : "Pompe à chaleur 2",
      powerRange:
        {
          min: 5000,
          max: 10000
        },
      price: 5678,
      image: img8,
      pacType: 'Air/Air',
      gasType: "R430",
      warranty: 3,
      isPacSystemModule: true,
    },
    {
      title : "Pompe à chaleur 3",
      powerRange:
        {
          min: 10000,
          max: 15000
        },
      price: 7890,
      image: img7,
      pacType: 'Air/Eau',
      gasType: "R380",
      warranty: 4,
      isPacSystemModule: true,
    },
    {
      title : "Pompe à chaleur 4",
      powerRange:
        {
          min: 15000,
          max: 30000
        },
      price: 1234,
      image: img8,
      pacType: 'Air/Air',
      gasType: "R380",
      warranty: 5,
      isPacSystemModule: true,
    }

  ] 

  const buildingSelection = [
    {
      question: "Quel Type De Batiment Souhaitez Vous Chauffer?",
      options: [
        {
          id: 1,
          title: "Maison individuelle",
          imgPath: img1,
        },
        { 
          id: 2, 
          title: "Immeuble", 
          imgPath: img2,
      },
        { 
          id: 3, 
          title: "Bureaux", 
          imgPath: img3, 
      },
      ],
    },
  ];

  const HeatingTypeStep = [
    {
      question: "Quel le Type De Chauffage Pricipame ?",
      options: [
        {
          id: 1,
          title: "electricité ",
          imgPath: img4,
        },
        { 
          id: 2, 
          title: "gaz", 
          imgPath: img5,
      },
        { 
          id: 3, 
          title: "Bois", 
          imgPath: img6, 
      },
      ],
    },
  ];
export default {buildingSelection,HeatingTypeStep,productsSuggestions}