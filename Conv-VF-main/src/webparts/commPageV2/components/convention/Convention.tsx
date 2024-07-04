import * as React from 'react';
import HotelsVoyages from './HotelsVoyages';
//import ImmobilierLogement from './ImmobilierLogement';
//import SolutionsAssurance from './SolutionsAssurance';
import MaisonArtCulinaire from './MaisonArtCulinaire';
import LoisirsDetenteAquatique from './LoisirsDetenteAquatique';
import Eprogramme from './Eprogramme';
import { sp } from "@pnp/sp";
import  { useState } from 'react';


const categories = [
  {
    id: 1,
    name: 'Hôtels  & Voyages',
    icon: (
      <svg width="25" height="25" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_25)">
          <path d="M0 1.875C0 0.837891 0.89375 0 2 0H30C31.1063 0 32 0.837891 32 1.875C32 2.91211 31.1063 3.75 30 3.75V26.25C31.1063 26.25 32 27.0879 32 28.125C32 29.1621 31.1063 30 30 30H19V27.1875C19 25.6348 17.6562 24.375 16 24.375C14.3438 24.375 13 25.6348 13 27.1875V30H2C0.89375 30 0 29.1621 0 28.125C0 27.0879 0.89375 26.25 2 26.25V3.75C0.89375 3.75 0 2.91211 0 1.875ZM6 6.5625V8.4375C6 8.95313 6.45 9.375 7 9.375H9C9.55 9.375 10 8.95313 10 8.4375V6.5625C10 6.04687 9.55 5.625 9 5.625H7C6.45 5.625 6 6.04687 6 6.5625ZM15 5.625C14.45 5.625 14 6.04687 14 6.5625V8.4375C14 8.95313 14.45 9.375 15 9.375H17C17.55 9.375 18 8.95313 18 8.4375V6.5625C18 6.04687 17.55 5.625 17 5.625H15ZM22 6.5625V8.4375C22 8.95313 22.45 9.375 23 9.375H25C25.55 9.375 26 8.95313 26 8.4375V6.5625C26 6.04687 25.55 5.625 25 5.625H23C22.45 5.625 22 6.04687 22 6.5625ZM7 11.25C6.45 11.25 6 11.6719 6 12.1875V14.0625C6 14.5781 6.45 15 7 15H9C9.55 15 10 14.5781 10 14.0625V12.1875C10 11.6719 9.55 11.25 9 11.25H7ZM14 12.1875V14.0625C14 14.5781 14.45 15 15 15H17C17.55 15 18 14.5781 18 14.0625V12.1875C18 11.6719 17.55 11.25 17 11.25H15C14.45 11.25 14 11.6719 14 12.1875ZM23 11.25C22.45 11.25 22 11.6719 22 12.1875V14.0625C22 14.5781 22.45 15 23 15H25C25.55 15 26 14.5781 26 14.0625V12.1875C26 11.6719 25.55 11.25 25 11.25H23ZM20.5 22.5C21.3313 22.5 22.0187 21.8613 21.8125 21.1055C21.15 18.6738 18.8 16.875 16 16.875C13.2 16.875 10.8438 18.6738 10.1875 21.1055C9.98125 21.8555 10.675 22.5 11.5 22.5H20.5Z" fill="#00966C" />
        </g>
        <defs>
          <clipPath id="clip0_30_25">
            <rect width="32" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  },

  {
    id: 5, name: 'Maison & Art Culinaire',
    icon: (<svg width="30" height="30" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.5864 10.8797C27.4294 10.7267 27.2205 10.6413 27.0032 10.6413C26.7859 10.6413 26.5769 10.7267 26.4199 10.8797L7.00311 29.772C6.92065 29.8523 6.85505 29.9489 6.81027 30.0558C6.7655 30.1627 6.74248 30.2777 6.7426 30.3939L6.73944 48.125C6.73944 49.0367 7.09502 49.911 7.72796 50.5557C8.36089 51.2003 9.21934 51.5625 10.1144 51.5625H20.25C20.6975 51.5625 21.1268 51.3814 21.4432 51.0591C21.7597 50.7368 21.9375 50.2996 21.9375 49.8438V35.2344C21.9375 35.0065 22.0264 34.7879 22.1846 34.6267C22.3429 34.4655 22.5575 34.375 22.7812 34.375H31.2187C31.4425 34.375 31.6571 34.4655 31.8154 34.6267C31.9736 34.7879 32.0625 35.0065 32.0625 35.2344V49.8438C32.0625 50.2996 32.2403 50.7368 32.5567 51.0591C32.8732 51.3814 33.3024 51.5625 33.75 51.5625H43.8813C44.7764 51.5625 45.6349 51.2003 46.2678 50.5557C46.9007 49.911 47.2563 49.0367 47.2563 48.125V30.3939C47.2564 30.2777 47.2334 30.1627 47.1887 30.0558C47.1439 29.9489 47.0783 29.8523 46.9958 29.772L27.5864 10.8797Z" fill="#00966C"/>
      <path d="M51.7757 26.2271L43.8866 18.5399V6.875C43.8866 6.41916 43.7088 5.98199 43.3924 5.65966C43.0759 5.33733 42.6467 5.15625 42.1991 5.15625H37.1366C36.6891 5.15625 36.2598 5.33733 35.9434 5.65966C35.6269 5.98199 35.4491 6.41916 35.4491 6.875V10.3125L29.3404 4.36348C28.7687 3.7748 27.9186 3.4375 27 3.4375C26.0845 3.4375 25.2366 3.7748 24.6649 4.36455L2.23173 26.2249C1.57571 26.8694 1.49345 27.9297 2.0904 28.6279C2.2403 28.8042 2.42385 28.9475 2.62987 29.0492C2.83589 29.1509 3.06008 29.2089 3.28878 29.2195C3.51748 29.2302 3.74592 29.1933 3.9602 29.1112C4.17447 29.029 4.37009 28.9034 4.53517 28.7418L26.4199 7.44219C26.577 7.2892 26.7859 7.20381 27.0032 7.20381C27.2205 7.20381 27.4294 7.2892 27.5864 7.44219L49.4733 28.7418C49.7957 29.0567 50.2275 29.2286 50.6741 29.2197C51.1208 29.2108 51.5457 29.022 51.8558 28.6945C52.5034 28.0113 52.4496 26.8834 51.7757 26.2271Z" fill="#00966C"/>
      </svg>
      
    )
  },
  {
    id: 6, name: 'Loisirs & Détente Aquatique',
    icon: (<svg width="27" height="27" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_49_27)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C17.713 0 21.274 1.63303 23.8995 4.53984C26.525 7.44666 28 11.3891 28 15.5C28 19.6109 26.525 23.5533 23.8995 26.4602C21.274 29.367 17.713 31 14 31C10.287 31 6.72601 29.367 4.1005 26.4602C1.475 23.5533 0 19.6109 0 15.5C0 11.3891 1.475 7.44666 4.1005 4.53984C6.72601 1.63303 10.287 0 14 0ZM21.78 18.3077C21.78 18.0141 21.6746 17.7325 21.4871 17.5248C21.2996 17.3172 21.0452 17.2006 20.78 17.2006H7.22C6.95478 17.2006 6.70043 17.3172 6.51289 17.5248C6.32536 17.7325 6.22 18.0141 6.22 18.3077C6.22 19.6806 6.812 21.5472 8.05 23.0684C9.32 24.6339 11.282 25.8496 14 25.8496C16.72 25.8496 18.68 24.6317 19.95 23.0706C21.188 21.5472 21.78 19.6828 21.78 18.3077ZM18.97 6.81557C18.8057 6.81557 18.643 6.85144 18.4912 6.92113C18.3394 6.99081 18.2015 7.09295 18.0854 7.2217C17.9693 7.35044 17.8773 7.50327 17.8146 7.67143C17.7519 7.83959 17.7197 8.01979 17.72 8.20171V9.28893H16.74C16.4085 9.28893 16.0905 9.43473 15.8561 9.69427C15.6217 9.95381 15.49 10.3058 15.49 10.6729C15.49 11.0399 15.6217 11.3919 15.8561 11.6514C16.0905 11.911 16.4085 12.0568 16.74 12.0568H17.72V13.1418C17.72 13.5088 17.8517 13.8608 18.0861 14.1204C18.3205 14.3799 18.6385 14.5257 18.97 14.5257C19.3015 14.5257 19.6195 14.3799 19.8539 14.1204C20.0883 13.8608 20.22 13.5088 20.22 13.1418V12.0568H21.204C21.5355 12.0568 21.8535 11.911 22.0879 11.6514C22.3223 11.3919 22.454 11.0399 22.454 10.6729C22.454 10.3058 22.3223 9.95381 22.0879 9.69427C21.8535 9.43473 21.5355 9.28893 21.204 9.28893H20.22V8.20171C20.22 7.83467 20.0883 7.48267 19.8539 7.22313C19.6195 6.96359 19.3015 6.81557 18.97 6.81557ZM9.03 6.81557C9.72 6.81557 10.28 7.43557 10.28 8.1995V9.28893H11.26C11.5915 9.28893 11.9095 9.43473 12.1439 9.69427C12.3783 9.95381 12.51 10.3058 12.51 10.6729C12.51 11.0399 12.3783 11.3919 12.1439 11.6514C11.9095 11.911 11.5915 12.0568 11.26 12.0568H10.28V13.1418C10.28 13.5088 10.1483 13.8608 9.91388 14.1204C9.67946 14.3799 9.36152 14.5257 9.03 14.5257C8.69848 14.5257 8.38054 14.3799 8.14612 14.1204C7.9117 13.8608 7.78 13.5088 7.78 13.1418V12.0568H6.796C6.46448 12.0568 6.14654 11.911 5.91212 11.6514C5.6777 11.3919 5.546 11.0399 5.546 10.6729C5.546 10.3058 5.6777 9.95381 5.91212 9.69427C6.14654 9.43473 6.46448 9.28893 6.796 9.28893H7.78V8.1995C7.78 7.43557 8.34 6.81557 9.03 6.81557Z" fill="#00966C" />
      </g>
      <defs>
        <clipPath id="clip0_49_27">
          <rect width="28" height="31" fill="white" />
        </clipPath>
      </defs>
    </svg>

    )
  },
  {
    id: 7, name: 'eProgram',
    icon: (<svg width="31" height="31" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 6H17C17 3.2 14.8 1 12 1C9.2 1 7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3ZM19 20H5V8H19V20ZM12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14C14.8 14 17 11.8 17 9H15C15 10.7 13.7 12 12 12Z" fill="#00966C"/>
      </svg>
      
      
    )
    
  }

];


export default function Convention() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showTitle, setShowTitle] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");



  React.useEffect(() => {
    sp.web.currentUser.get().then(user => {
      setUsername(user.Title);
    }).catch(error => {
      console.error('Erreur lors de la récupération du nom d\'utilisateur SharePoint :', error);
    });
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setShowTitle(categoryName !== 'eProgram');
  };

  const handleLogoClick = () => {
    setSelectedCategory("");
    setShowTitle(true);
  };



  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{
          background: 'linear-gradient(to bottom, #03B586, #FFFFFF)', // Dégradé de rouge à blanc
        }}>
          <div style={{
            marginRight: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'inline-block',
            cursor: 'pointer',
            width: '100%'
          }}>
            <div style={{
              textAlign: 'center'
            }}>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <h3 style={{ fontWeight: 'bold', }}>
                Bienvenue {username} !
              </h3>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Plongez avec nous dans l'univers des pratiques conventionnelles réinventées par Cnexia.</p>
            </div>
          </div>

          <span>&nbsp;</span>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {selectedCategory && (
                <button
                  style={{
                    backgroundColor: 'transparent',
                    marginRight: '10px',
                    marginBottom: '5px',
                    borderRadius: '4px',
                    border: 'none',
                    alignItems: 'center',
                    fontWeight: 'bold',
                  }}
                  onClick={handleLogoClick}
                >
                  <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1_11" maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="38">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M42 35.836C37.107 29.863 32.762 26.474 28.964 25.668C25.167 24.863 21.552 24.741 18.118 25.303V36L2 18.545L18.118 2V12.167C24.467 12.217 29.864 14.495 34.31 19C38.755 23.505 41.319 29.117 42 35.836Z" fill="#555555" stroke="white" stroke-width="4" stroke-linejoin="round" />
                    </mask>
                    <g mask="url(#mask0_1_11)">
                      <path d="M-2 -5H46V43H-2V-5Z" fill="#03B586" />
                    </g>
                  </svg>
                </button>
              )}
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.name)}
                  style={{
                    padding: '10px 15px',
                    cursor: 'pointer',
                    backgroundColor: selectedCategory === category.name ? '#e0e0e0' : '#EEFFF6',
                    marginBottom: '5px',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    marginLeft: index > 0 ? '10px' : '0',
                  }}
                >
                  {category.icon}
                  <span style={{ marginLeft: '10px' }}>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          {selectedCategory ? (
            <>
              {showTitle && (
                <h1 style={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: '40px',
                  marginBottom: '20px',
                }}>{selectedCategory}</h1>
              )}
              {selectedCategory === 'Hôtels & Voyages' && <HotelsVoyages />}
              {selectedCategory === 'Maison & Art Culinaire' && <MaisonArtCulinaire />}
              {selectedCategory === 'Loisirs & Détente Aquatique' && <LoisirsDetenteAquatique />}
              {selectedCategory === 'eProgram' && <Eprogramme />}
            </>
          ) : (
            <div>
              <h1 style={{
                textAlign: 'center',
                width: '100%',
                fontSize: '40px',
              }}><strong>Découvrez l'univers des conventions avec Cnexia</strong></h1>
              <img
                src="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets')/Files('convention-removebg-preview.png')/$value"
                alt="Convention Image"
                style={{
                  display: 'block',
                  height: '300px',
                  margin: '0 auto',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <div>
                <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '10px' }}>
                  Chers collaborateurs,<br /><br />
                  Nous sommes heureux de vous informer que, grâce à des conventions établies avec différents établissements, vous pouvez désormais bénéficier de divers avantages et remises simplement en présentant votre badge professionnel. Ces conventions ont été mises en place pour vous offrir des opportunités supplémentaires de bien-être et d'économie au quotidien.<br /><br />
                </p>
                <h3 style={{ marginBottom: '10px' }}>Comment bénéficier des avantages ?</h3>
                <ul style={{ fontSize: '15px', fontWeight: 400, listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>Vérifiez les établissements partenaires.</li>
                  <li>Prenez connaissance des offres.</li>
                  <li>Présentez votre badge.</li>
                </ul>
                <h3 style={{ marginBottom: '10px' }}>Avantages des conventions</h3>
                <ul style={{ fontSize: '15px', fontWeight: 400, listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                  <li><strong>Économies :</strong> Profitez de réductions significatives sur une variété de produits et services, allant de l'alimentation aux loisirs, en passant par le bien-être et la technologie.</li>
                  <li><strong>Simplicité :</strong> L'accès aux avantages est direct et ne nécessite aucune démarche compliquée. La présentation de votre badge suffit.</li>
                  <li><strong>Variété :</strong> Les conventions couvrent un large éventail d'établissements et de services, vous permettant de trouver des offres pertinentes pour presque tous vos besoins.</li>
                </ul>
                <h3 style={{ marginBottom: '10px' }}>Important à retenir</h3>
                <ul style={{ fontSize: '15px', fontWeight: 400, listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                  <li>Les offres peuvent varier selon les périodes et les établissements. Il est donc crucial de vérifier les conditions spécifiques de chaque offre avant d'en profiter.</li>
                  <li>En cas de doute ou pour toute question relative aux conventions et aux avantages, n'hésitez pas à contacter le service des ressources humaines.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}