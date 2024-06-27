import * as React from 'react';

export default function MaisonArtCulinaire() {
  return (
    <div style={{ lineHeight: '1.6'  }}>
      <h2 style={{ textAlign: 'center'}}>Convention de Partenariat entre CNEXIA et KITEA</h2>
      <img
        src="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets/Carrousel')/Files('KITEA.png')/$value"
        style={{ display: 'block', margin: '0 auto' }}
      />
      <p><strong>Définition de la Convention :</strong><br />
        La convention établie entre CNEXIA et KITEA définit les modalités d'un partenariat visant à offrir des avantages aux collaborateurs de CNEXIA lors de leurs achats dans les magasins de KITEA au Maroc.
      </p>

      <h3>Avantages offerts :</h3>
      <ul style={{ listStyleType: 'circle', marginLeft: '20px', marginBottom: '20px'  }}>
        <li>Pour les collaborateurs de CNEXIA : Ils bénéficient de remises sur les produits de KITEA, y compris les meubles en kit et les accessoires de décoration.</li>
        <li>Pour KITEA : Ce partenariat lui permet d'attirer une clientèle supplémentaire et de renforcer sa présence sur le marché.</li>
      </ul>

      <h3>Éligibilité :</h3>
      <p style={{ listStyleType: 'circle', marginLeft: '20px', marginBottom: '20px'  }}>Seuls les collaborateurs de CNEXIA munis de leur carte professionnelle et de leur pièce d'identité peuvent bénéficier des avantages de cette convention.</p>

      <h3>Remises :</h3>
      <ul style={{ listStyleType: 'circle', marginLeft: '20px', marginBottom: '20px'  }}>
        <li> Une remise de 10% sur les produits hors promotion, soldes, liquidation et prix expo.</li>
        <li> Une remise de 5% sur les produits en promotion.</li>
        <li> Aucune remise n'est accordée sur les produits en soldes, liquidation et prix expo.</li>
      </ul>

      <h3>Durée :</h3>
      <p style={{  marginLeft: '20px', marginBottom: '20px'  }}> La convention est conclue pour une durée d'un an, renouvelable par tacite reconduction, sauf résiliation par l'une des parties avec un préavis de 30 jours.</p>

      <h3>Informations et Communications :</h3>
      <p style={{  marginLeft: '20px', marginBottom: '20px'  }}> CNEXIA s'engage à informer et promouvoir les offres de KITEA auprès de ses collaborateurs par différents moyens de communication après la signature de la convention.</p>

      <h3>Résiliation :</h3>
      <p style={{  marginLeft: '20px', marginBottom: '20px'  }}> En cas de non-respect des termes de la convention, chaque partie a le droit de résilier le contrat moyennant un préavis d'un mois, sans indemnité.</p>

      <h3>Élection de domicile :</h3>
      <p style={{  marginLeft: '20px', marginBottom: '20px'  }}> Les adresses mentionnées dans la convention sont désignées comme domiciles des parties.</p>

      
     </div>
  );

}
