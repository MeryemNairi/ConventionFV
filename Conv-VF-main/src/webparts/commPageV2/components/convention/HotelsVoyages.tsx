import * as React from 'react';
import styles from './Convention.module.scss';
import { FiveStars, FourStars, ThreeStars } from './stars';

interface HotelData {
    name: string;
    stars: number;
    imageUrl: string;
}

interface HotelsByCity {
    [key: string]: HotelData[];
}

const Hotel = ({ name, stars, imageUrl }: HotelData) => {
    const renderStars = () => {
        switch (stars) {
            case 5:
                return <FiveStars />;
            case 4:
                return <FourStars />;
            case 3:
                return <ThreeStars />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.hotel}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={imageUrl} alt={name} />
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                {renderStars()}
            </div>
        </div>
    );
};

const HotelsVoyages = () => {
    const hotelsByCity: HotelsByCity = {
        Agadir: [
            { name: "The View Agadir", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'AmadilBeachOcean.jpg\')/$value' },
            { name: "Amadil Beach Ocean", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'RAmadilBeachOcean.jpg\')/$value' },
            { name: "Dunes d'Or Beach Club", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'DunesdOrBeaClub.jpg\')/$value' },
        ],
        Marrakech: [
            { name: "Jaal Riad Resort", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'RAmadilBeachOcean.jpg\')/$value' },
            { name: "Palais Medina Riad Resort", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'PalaisMedinaRiadResort.jpg\')/$value' },
        ],
        Fes: [
            { name: "Atlas Essaouira Riad Resort", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'AtlasEssaouiraRiadResort.jpg\')/$value' },
            { name: "Atlas Volubilis", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'hotel-volubilis.jpg\')/$value' },
        ],
        Oujda: [
            { name: "Terminus City Center", stars: 5, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'Terminus-City-Center-Oujda-Exterior.jpg\')/$value' },
            { name: "Atlas Orient", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'AtlaOrient.jpg\')/$value' },
        ],
        Tanger: [
            { name: "Marina Bay City Center", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'Terrassevuemer.jpg\')/$value' },
        ],
        Kenitra: [
            { name: "Relax Hotel", stars: 3, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'Relax-Hôtel-Kenitra3-768x512.jpg\')/$value' },
        ],
        Casablanca: [
            { name: "Sky Casa Airport", stars: 4, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'atlas-sky-airport.jpg\')/$value' },
            { name: "Relax Airport Hotel", stars: 3, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'RelaxAirportHotel.jpg\')/$value' },
            { name: "Relax Casa Voyageurs Hotel", stars: 3, imageUrl: 'https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl(\'/sites/CnexiaForEveryone/Assets\')/Files(\'RelaxCasaoyageursHotel.jpg\')/$value' },
        ],
    };

    const [selectedCity, setSelectedCity] = React.useState<string>('Agadir');

    const handleCityChange = (city: string) => {
        setSelectedCity(city);
    };

    return (
        <div>
            <img
                className={styles.headerImage}
                src="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets')/Files('Gazel.png')/$value"
                alt="Gazelles Destination"
            />
            <div className={styles.space}></div>
            <div className={styles.headerContent}>
                <h2 style={{ textAlign: 'center', width: '100%' }}>Partenariat 2022 avec GAZELLES DESTINATION</h2>
                <div className={styles.space}></div>

                <div style={{ fontSize: '15px', fontWeight: 600 }}>
                    <p>
                        Ensemble, CNEXIA et GAZELLES DESTINATION, agence de voyages affiliée à l'IATA, unissent leurs efforts pour offrir
                        des voyages à prix réduits aux employés de CNEXIA.
                    </p>
                    <p>
                        Tous les employés de CNEXIA peuvent profiter de cette offre en présentant simplement une preuve de leur emploi lors
                        de la réservation d'un voyage.
                    </p>
                    <p>
                        Pourcentage de Réduction: Les employés de CNEXIA bénéficient d'une réduction immédiate de 5 % sur le prix de base des
                        voyages organisés par GAZELLES DESTINATION.
                    </p>
                </div>
            </div>
            <div className={styles.space}></div>
            <div className={styles.buttonsContainer}>
                <button className={styles.cityButton} onClick={() => handleCityChange('Agadir')}>Agadir</button>
                <button className={styles.cityButton} onClick={() => handleCityChange('Marrakech')}>Marrakech</button>
                <button className={styles.cityButton} onClick={() => handleCityChange('Fes')}>Fes</button>
                <button className={styles.cityButton} onClick={() => handleCityChange('Oujda')}>Oujda</button>
                <button className={styles.cityButton} onClick={() => handleCityChange('Tanger')}>Tanger</button>
                <button className={styles.cityButton} onClick={() => handleCityChange('Kenitra')}>Kenitra</button>
                <button className={styles.cityButton} onClick={() => handleCityChange('Casablanca')}>Casablanca</button>
                <button className={styles.cityButton} onClick={() => setSelectedCity('')}>Tous</button>
            </div>
            <div className={styles.hotelsContainer}>
                {(selectedCity === '' ? Object.values<HotelData[]>(hotelsByCity).flat() : hotelsByCity[selectedCity]).map((hotel: HotelData, index: number) => (
                    <Hotel key={index} name={hotel.name} stars={hotel.stars} imageUrl={hotel.imageUrl} />
                ))}
            </div>
        </div>
    );
}

export default HotelsVoyages;
