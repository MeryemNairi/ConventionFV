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
      <ul style={{ listStyleType: 'none', padding: 0, marginLeft: '20px' }}>
        <li>. Pour les collaborateurs de CNEXIA : Ils bénéficient de remises sur les produits de KITEA, y compris les meubles en kit et les accessoires de décoration.</li>
        <li>. Pour KITEA : Ce partenariat lui permet d'attirer une clientèle supplémentaire et de renforcer sa présence sur le marché.</li>
      </ul>

      <h3>Éligibilité :</h3>
      <p>. Seuls les collaborateurs de CNEXIA munis de leur carte professionnelle et de leur pièce d'identité peuvent bénéficier des avantages de cette convention.</p>

      <h3>Remises :</h3>
      <ul style={{ listStyleType: 'none', padding: 0, marginLeft: '20px' }}>
        <li>. Une remise de 10% sur les produits hors promotion, soldes, liquidation et prix expo.</li>
        <li>. Une remise de 5% sur les produits en promotion.</li>
        <li>. Aucune remise n'est accordée sur les produits en soldes, liquidation et prix expo.</li>
      </ul>

      <h3>Durée :</h3>
      <p>. La convention est conclue pour une durée d'un an, renouvelable par tacite reconduction, sauf résiliation par l'une des parties avec un préavis de 30 jours.</p>

      <h3>Informations et Communications :</h3>
      <p>. CNEXIA s'engage à informer et promouvoir les offres de KITEA auprès de ses collaborateurs par différents moyens de communication après la signature de la convention.</p>

      <h3>Résiliation :</h3>
      <p>. En cas de non-respect des termes de la convention, chaque partie a le droit de résilier le contrat moyennant un préavis d'un mois, sans indemnité.</p>

      <h3>Élection de domicile :</h3>
      <p>. Les adresses mentionnées dans la convention sont désignées comme domiciles des parties.</p>

      <h3>Stipulations Générales :</h3>
      <p>. Si l'une des stipulations de la convention est jugée nulle, cela n'entraînera pas la nullité des autres dispositions. Le silence d'une partie sur un droit n'implique pas une renonciation à ce droit.</p>

      <h3>Protection des Données Personnelles :</h3>
      <p>. Les parties s'engagent à respecter les obligations légales relatives à la protection des données personnelles conformément à la loi marocaine. Aucun transfert de données personnelles des bénéficiaires de CNEXIA en dehors du Maroc n'est autorisé.</p>

      <h3>Droit Applicable et Règlement des Différends :</h3>
      <p>. La convention est régie par le droit marocain. Tout différend sera résolu à l'amiable dans un délai de trente jours à compter de la notification de l'existence d'un différend par l'une des parties à l'autre.</p>
    </div>
  );

}
