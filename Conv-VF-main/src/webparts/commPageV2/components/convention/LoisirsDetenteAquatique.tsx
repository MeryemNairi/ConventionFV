import * as React from 'react';

export default function LoisirsDetenteAquatique() {
  return (
    <div style={{ listStyleType: 'none', padding: 0, marginBottom: '20px' }}>
      <div>
        <h2>Convention de Partenariat avec Les 3 Sources Belair</h2>
        <img
          src="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets/Carrousel')/Files('parc.png')/$value" alt="Convention Image"
          width="350"
          height="200"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <p>
          <strong style={{ marginBottom: '20px' }}>Définition de la Convention:</strong> Cette convention établit un partenariat entre CNEXIA S.A.S et Les 3 Sources Belair dans le but d'offrir des avantages aux collaborateurs de CNEXIA lors de leur visite aux parcs aquatiques.
        </p>
        <p>
          <strong style={{ marginBottom: '20px' }}>Avantages offerts:</strong><br />
          Les collaborateurs de CNEXIA bénéficient d'une réduction de 20% pour l'accès à la piscine et de 10% sur l'achat de nourriture dans les parcs aquatiques Les 3 Sources Belair.
        </p>
        <p>
          <strong style={{ marginBottom: '20px' }}>Éligibilité:</strong><br />
          Tous les employés de CNEXIA, ainsi que leurs membres de famille portant le même nom, peuvent bénéficier des réductions en présentant leur carte de travail et un document attestant le lien familial.
        </p>
      </div>
      <div>
        <h2>Convention de Partenariat avec les Parcs Aquatiques</h2>
        <img
          src="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets/Carrousel')/Files('AQUA.png')/$value"
          alt="Convention Image"
          width="350"
          height="200"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <p>
          <strong style={{ marginBottom: '20px' }}>Définition de la Convention:</strong> Cette convention établit un partenariat entre CNEXIA et les parcs aquatiques Rim Aquatique et Les 3 Sources Belair. Son objectif est d'offrir des avantages aux collaborateurs de CNEXIA pour l'accès à ces parcs aquatiques.
        </p>
        <p>
          <strong style={{ marginBottom: '20px' }}>Avantages offerts:</strong>
          <ul>
            <li>Rim Aquatique: Les collaborateurs de CNEXIA bénéficient d'une remise de 15% sur l'accès à la piscine.</li>
            <li>Les 3 Sources Belair: Les collaborateurs de CNEXIA bénéficient d'une remise de 20% sur l'accès à la piscine et de 10% sur l'achat de nourriture.</li>
          </ul>
        </p>
        <p>
          <strong style={{ marginBottom: '20px' }}>Éligibilité:</strong><br />
          Tous les employés de CNEXIA, ainsi que leur famille et cousins portant le même nom de famille, peuvent bénéficier de ces avantages en présentant leur carte de travail (badge) ou un document attestant le lien familial.
        </p>
      </div>
    </div>
  );

}
