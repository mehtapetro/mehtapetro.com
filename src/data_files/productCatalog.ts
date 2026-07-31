import type { ImageMetadata } from 'astro';
import productImage1 from '@images/product-image-1.avif';
import productImage2 from '@images/product-image-2.avif';
import productImage3 from '@images/product-image-3.avif';
import productImage4 from '@images/product-image-4.avif';
import productMainImage1 from '@images/product-image-main-1.avif';
import productMainImage2 from '@images/product-image-main-2.avif';
import productMainImage3 from '@images/product-image-main-3.avif';
import productMainImage4 from '@images/product-image-main-4.avif';
import blueprint1 from '@images/blueprint-1.avif';
import blueprint2 from '@images/blueprint-2.avif';

export interface ProductInfoRow {
  title: string;
  subTitle: string;
}

export interface ProductTableRow {
  feature: string[];
  description: string[][];
}

export interface ProductCatalogItem {
  slug: string;
  title: string;
  description: string;
  mainContent: string;
  imgCard: ImageMetadata;
  imgMain: ImageMetadata;
  imgAlt: string;
  longDescriptionTitle: string;
  longDescriptionSubTitle: string;
  ctaTitle: string;
  ctaURL: string;
  descriptionList: ProductInfoRow[];
  specificationsLeft: ProductInfoRow[];
  specificationsRight?: ProductInfoRow[];
  tableData?: ProductTableRow[];
  blueprints: {
    first?: ImageMetadata;
    second?: ImageMetadata;
  };
}

const categoryAssets: Record<
  string,
  { imgCard: ImageMetadata; imgMain: ImageMetadata; imgAlt: string }
> = {
  'aromatic-hydrocarbon-solvents': {
    imgCard: productImage1,
    imgMain: productMainImage1,
    imgAlt: 'Aromatic hydrocarbon solvent sample',
  },
  'aliphatic-hydrocarbon-solvents': {
    imgCard: productImage2,
    imgMain: productMainImage2,
    imgAlt: 'Aliphatic hydrocarbon solvent sample',
  },
  'dearomatized-hydrocarbon-fluids': {
    imgCard: productImage3,
    imgMain: productMainImage3,
    imgAlt: 'Dearomatized hydrocarbon fluid sample',
  },
  'petroleum-ethers': {
    imgCard: productImage4,
    imgMain: productMainImage4,
    imgAlt: 'Petroleum ether sample',
  },
  'rubber-process-oil': {
    imgCard: productImage1,
    imgMain: productMainImage1,
    imgAlt: 'Rubber process oil sample',
  },
  glycols: {
    imgCard: productImage2,
    imgMain: productMainImage2,
    imgAlt: 'Glycol sample',
  },
  'base-oils': {
    imgCard: productImage3,
    imgMain: productMainImage3,
    imgAlt: 'Base oil sample',
  },
  'printing-ink-coating-oils': {
    imgCard: productImage4,
    imgMain: productMainImage4,
    imgAlt: 'Printing ink and coating oil sample',
  },
  'industrial-greases-esters': {
    imgCard: productImage1,
    imgMain: productMainImage1,
    imgAlt: 'Industrial grease and ester sample',
  },
  'drilling-fluids': {
    imgCard: productImage2,
    imgMain: productMainImage2,
    imgAlt: 'Drilling fluid sample',
  },
  'esters-derivatives': {
    imgCard: productImage3,
    imgMain: productMainImage3,
    imgAlt: 'Ester derivative sample',
  },
  'acid-corrosion-inhibitors': {
    imgCard: productImage4,
    imgMain: productMainImage4,
    imgAlt: 'Acid corrosion inhibitor sample',
  },
  'trading-solvents': {
    imgCard: productImage1,
    imgMain: productMainImage1,
    imgAlt: 'Trading solvent sample',
  },
};

function withAssets(
  categoryId: string,
  item: Omit<
    ProductCatalogItem,
    'imgCard' | 'imgMain' | 'imgAlt' | 'blueprints'
  >
): ProductCatalogItem {
  const assets =
    categoryAssets[categoryId] || categoryAssets['aromatic-hydrocarbon-solvents'];

  return {
    ...item,
    ...assets,
    blueprints: {
      first: blueprint1,
      second: blueprint2,
    },
  };
}

const enCatalog: Record<string, ProductCatalogItem[]> = {
  'aromatic-hydrocarbon-solvents': [
    withAssets('aromatic-hydrocarbon-solvents', {
      slug: 'toluene',
      title: 'Toluene',
      description:
        'Industrial aromatic solvent used in paints, coatings, adhesives, and chemical processing.',
      mainContent:
        'Toluene offers strong solvency and consistent quality for industrial manufacturing, blending, and formulation requirements.',
      longDescriptionTitle: 'Reliable aromatic solvent performance',
      longDescriptionSubTitle:
        'Suitable for industrial coatings, thinners, adhesives, and general chemical applications where dependable solvency is required.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'High solvency', subTitle: 'Supports paint, resin, and adhesive systems.' },
        { title: 'Consistent quality', subTitle: 'Supplied with dependable batch control.' },
        { title: 'Industrial ready', subTitle: 'Suitable for large-scale commercial use.' },
      ],
      specificationsLeft: [
        { title: 'Purity', subTitle: '99.5% min' },
        { title: 'Boiling point', subTitle: '110-111°C' },
        { title: 'Specific gravity', subTitle: '0.865-0.870 at 20°C' },
        { title: 'Flash point', subTitle: '4°C' },
      ],
      specificationsRight: [
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Water content', subTitle: '0.05% max' },
        { title: 'Aromatic content', subTitle: 'High' },
        { title: 'Packaging', subTitle: 'Bulk, drums, tankers' },
      ],
    }),
    withAssets('aromatic-hydrocarbon-solvents', {
      slug: 'xylene',
      title: 'Xylene',
      description:
        'Mixed aromatic solvent for printing inks, rubber processing, coatings, and cleaning applications.',
      mainContent:
        'Xylene delivers dependable evaporation characteristics and solvent strength for formulation-heavy industrial applications.',
      longDescriptionTitle: 'Strong mixed aromatic solvent',
      longDescriptionSubTitle:
        'Well suited for coatings, cleaning, chemical manufacturing, and blending operations that require aromatic strength.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Balanced evaporation', subTitle: 'Supports controlled drying and workability.' },
        { title: 'Good resin compatibility', subTitle: 'Works across many industrial systems.' },
        { title: 'B2B supply support', subTitle: 'Available for recurring industrial demand.' },
      ],
      specificationsLeft: [
        { title: 'Purity', subTitle: '98.5% min' },
        { title: 'Boiling range', subTitle: '137-144°C' },
        { title: 'Specific gravity', subTitle: '0.860-0.870 at 20°C' },
        { title: 'Flash point', subTitle: '27°C min' },
      ],
      specificationsRight: [
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Water content', subTitle: '0.05% max' },
        { title: 'Odor', subTitle: 'Characteristic aromatic' },
        { title: 'Packaging', subTitle: 'Bulk, drums, tankers' },
      ],
    }),
  ],
  'aliphatic-hydrocarbon-solvents': [
    withAssets('aliphatic-hydrocarbon-solvents', {
      slug: 'n-hexane',
      title: 'n-Hexane',
      description:
        'Fast-evaporating aliphatic solvent for extraction, cleaning, and industrial process use.',
      mainContent:
        'n-Hexane is widely used where clean evaporation and low aromatic content are important for efficient processing.',
      longDescriptionTitle: 'Fast drying aliphatic solvent',
      longDescriptionSubTitle:
        'Designed for industrial extraction, cleaning, and process use where light hydrocarbon performance matters.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Low aromatic content', subTitle: 'Suitable for sensitive applications.' },
        { title: 'Quick evaporation', subTitle: 'Helps speed up process cycles.' },
        { title: 'Consistent supply', subTitle: 'Built for regular industrial requirements.' },
      ],
      specificationsLeft: [
        { title: 'Purity', subTitle: '97% min' },
        { title: 'Boiling point', subTitle: '68-69°C' },
        { title: 'Specific gravity', subTitle: '0.655-0.665 at 20°C' },
        { title: 'Flash point', subTitle: '-22°C' },
      ],
      specificationsRight: [
        { title: 'Aromatics', subTitle: '0.1% max' },
        { title: 'Water', subTitle: '0.01% max' },
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Packaging', subTitle: 'Drums, bulk' },
      ],
    }),
    withAssets('aliphatic-hydrocarbon-solvents', {
      slug: 'mineral-spirits',
      title: 'Mineral Spirits',
      description:
        'General-purpose aliphatic solvent for paints, maintenance cleaning, and industrial thinning.',
      mainContent:
        'Mineral spirits provide reliable cleaning and thinning performance with balanced volatility for broad industrial use.',
      longDescriptionTitle: 'Versatile petroleum solvent',
      longDescriptionSubTitle:
        'Commonly selected for cleaning, degreasing, and thinning operations across industrial environments.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Multi-purpose use', subTitle: 'Supports cleaning, thinning, and degreasing.' },
        { title: 'Controlled drying', subTitle: 'Balanced evaporation supports usability.' },
        { title: 'Commercially practical', subTitle: 'Suitable for routine plant consumption.' },
      ],
      specificationsLeft: [
        { title: 'Distillation range', subTitle: '140-200°C' },
        { title: 'Specific gravity', subTitle: '0.765-0.785 at 15°C' },
        { title: 'Flash point', subTitle: '38°C min' },
        { title: 'Aromatics', subTitle: '18-22%' },
      ],
      specificationsRight: [
        { title: 'Color', subTitle: 'Water white to pale' },
        { title: 'Residue', subTitle: 'Low' },
        { title: 'Odor', subTitle: 'Mild petroleum' },
        { title: 'Packaging', subTitle: 'Drums, bulk' },
      ],
    }),
  ],
  'dearomatized-hydrocarbon-fluids': [
    withAssets('dearomatized-hydrocarbon-fluids', {
      slug: 'dearomatized-fluid-d60',
      title: 'Dearomatized Fluid D60',
      description:
        'Low-odor hydrocarbon solvent for applications requiring reduced aromatic content.',
      mainContent:
        'D60 is a dearomatized fluid developed for industrial users who need cleaner odor profile and stable process performance.',
      longDescriptionTitle: 'Cleaner low-odor process fluid',
      longDescriptionSubTitle:
        'A suitable option for sensitive industrial use where lower aromatics and improved workplace comfort matter.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Low odor', subTitle: 'Helps create a more comfortable handling environment.' },
        { title: 'Reduced aromatics', subTitle: 'Supports cleaner process selection.' },
        { title: 'Good stability', subTitle: 'Dependable in routine plant use.' },
      ],
      specificationsLeft: [
        { title: 'Flash point', subTitle: '60°C min' },
        { title: 'Specific gravity', subTitle: '0.780-0.800 at 15°C' },
        { title: 'Aromatics', subTitle: '0.5% max' },
        { title: 'Boiling range', subTitle: '180-220°C' },
      ],
      specificationsRight: [
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Color', subTitle: 'Water white' },
        { title: 'Aniline point', subTitle: '70-80°C' },
        { title: 'Packaging', subTitle: 'Drums, bulk' },
      ],
    }),
    withAssets('dearomatized-hydrocarbon-fluids', {
      slug: 'dearomatized-fluid-d80',
      title: 'Dearomatized Fluid D80',
      description:
        'Higher flash point dearomatized hydrocarbon fluid for safer industrial handling.',
      mainContent:
        'D80 offers a reduced-aromatic solvent profile with improved handling comfort and suitability for demanding industrial processes.',
      longDescriptionTitle: 'Higher flash point dearomatized solvent',
      longDescriptionSubTitle:
        'Useful in applications where process safety, lower odor, and dependable solvency are all important.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Safer handling profile', subTitle: 'Higher flash point supports operational safety.' },
        { title: 'Low odor profile', subTitle: 'Suitable for indoor and enclosed work areas.' },
        { title: 'Industrial consistency', subTitle: 'Supplied for repeat commercial use.' },
      ],
      specificationsLeft: [
        { title: 'Flash point', subTitle: '80°C min' },
        { title: 'Specific gravity', subTitle: '0.790-0.810 at 15°C' },
        { title: 'Aromatics', subTitle: '0.5% max' },
        { title: 'Boiling range', subTitle: '210-250°C' },
      ],
      specificationsRight: [
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Color', subTitle: 'Water white' },
        { title: 'Odor', subTitle: 'Very mild' },
        { title: 'Packaging', subTitle: 'Drums, bulk' },
      ],
    }),
  ],
  'petroleum-ethers': [
    withAssets('petroleum-ethers', {
      slug: 'petroleum-ether-40-60',
      title: 'Petroleum Ether 40/60',
      description:
        'Light petroleum fraction for extraction, cleaning, and controlled evaporation use.',
      mainContent:
        'Petroleum Ether 40/60 is selected for light-duty extraction and cleaning processes that need quick evaporation.',
      longDescriptionTitle: 'Light industrial petroleum ether',
      longDescriptionSubTitle:
        'Useful for extraction and process cleaning applications requiring narrow boiling range behavior.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Narrow boiling range', subTitle: 'Supports predictable solvent behavior.' },
        { title: 'Fast evaporation', subTitle: 'Suitable for quick turnaround processes.' },
        { title: 'Clean finish', subTitle: 'Low residue after use.' },
      ],
      specificationsLeft: [
        { title: 'Boiling range', subTitle: '40-60°C' },
        { title: 'Specific gravity', subTitle: '0.620-0.650 at 20°C' },
        { title: 'Flash point', subTitle: 'Below 0°C' },
        { title: 'Aromatics', subTitle: '0.1% max' },
      ],
      specificationsRight: [
        { title: 'Residue', subTitle: 'Very low' },
        { title: 'Water', subTitle: '0.01% max' },
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Packaging', subTitle: 'Drums, cans' },
      ],
    }),
    withAssets('petroleum-ethers', {
      slug: 'petroleum-ether-60-80',
      title: 'Petroleum Ether 60/80',
      description:
        'Medium boiling petroleum ether for laboratory, extraction, and industrial cleaning.',
      mainContent:
        'Petroleum Ether 60/80 provides a balanced evaporation rate for industrial users who need clean solvent performance.',
      longDescriptionTitle: 'Balanced evaporation petroleum ether',
      longDescriptionSubTitle:
        'Suitable for extraction, formulation support, and industrial cleaning applications.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Process flexibility', subTitle: 'Works across multiple industrial uses.' },
        { title: 'Stable range', subTitle: 'Controlled volatility supports consistency.' },
        { title: 'Low residue', subTitle: 'Leaves cleaner surfaces after evaporation.' },
      ],
      specificationsLeft: [
        { title: 'Boiling range', subTitle: '60-80°C' },
        { title: 'Specific gravity', subTitle: '0.640-0.660 at 20°C' },
        { title: 'Flash point', subTitle: '-20°C approx' },
        { title: 'Aromatics', subTitle: '0.1% max' },
      ],
      specificationsRight: [
        { title: 'Residue', subTitle: 'Very low' },
        { title: 'Water', subTitle: '0.01% max' },
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Packaging', subTitle: 'Drums, cans' },
      ],
    }),
  ],
  'rubber-process-oil': [
    withAssets('rubber-process-oil', {
      slug: 'aromatic-rpo',
      title: 'Aromatic Rubber Process Oil',
      description:
        'Processing oil developed for rubber compounding and improved polymer workability.',
      mainContent:
        'Aromatic rubber process oil supports compounding efficiency and helps improve the handling and processing of rubber blends.',
      longDescriptionTitle: 'Rubber compounding support oil',
      longDescriptionSubTitle:
        'Chosen by manufacturers for dependable compatibility and process support in rubber operations.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Good polymer compatibility', subTitle: 'Suitable for rubber compounding lines.' },
        { title: 'Process support', subTitle: 'Helps improve workability and handling.' },
        { title: 'Industrial consistency', subTitle: 'Supports repeatable manufacturing output.' },
      ],
      specificationsLeft: [
        { title: 'Viscosity at 100°C', subTitle: '15-25 cSt' },
        { title: 'Specific gravity', subTitle: '0.950-0.970 at 15°C' },
        { title: 'Flash point', subTitle: '220°C min' },
        { title: 'Pour point', subTitle: '-15°C max' },
      ],
      specificationsRight: [
        { title: 'Aromatic content', subTitle: '25-35%' },
        { title: 'Color', subTitle: 'Dark amber' },
        { title: 'Aniline point', subTitle: '50-70°C' },
        { title: 'Packaging', subTitle: 'Bulk, drums' },
      ],
    }),
    withAssets('rubber-process-oil', {
      slug: 'paraffinic-rpo',
      title: 'Paraffinic Rubber Process Oil',
      description:
        'Cleaner process oil option for selected rubber and polymer applications.',
      mainContent:
        'Paraffinic rubber process oil is used where a lighter, cleaner profile is preferred while maintaining dependable process behavior.',
      longDescriptionTitle: 'Cleaner process oil for rubber use',
      longDescriptionSubTitle:
        'Supports selected rubber applications with a balanced handling profile and good consistency.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Cleaner profile', subTitle: 'Suitable where lower aromatic character is preferred.' },
        { title: 'Stable handling', subTitle: 'Supports smooth production use.' },
        { title: 'Consistent quality', subTitle: 'Designed for commercial processing needs.' },
      ],
      specificationsLeft: [
        { title: 'Viscosity at 100°C', subTitle: '10-18 cSt' },
        { title: 'Specific gravity', subTitle: '0.870-0.900 at 15°C' },
        { title: 'Flash point', subTitle: '210°C min' },
        { title: 'Pour point', subTitle: '-12°C max' },
      ],
      specificationsRight: [
        { title: 'Aromatic content', subTitle: 'Low to moderate' },
        { title: 'Color', subTitle: 'Pale amber' },
        { title: 'Odor', subTitle: 'Mild' },
        { title: 'Packaging', subTitle: 'Bulk, drums' },
      ],
    }),
  ],
  glycols: [
    withAssets('glycols', {
      slug: 'monoethylene-glycol',
      title: 'Monoethylene Glycol (MEG)',
      description:
        'Industrial glycol for coolants, antifreeze systems, and chemical intermediate applications.',
      mainContent:
        'MEG is widely used across industrial cooling systems, antifreeze formulations, and downstream chemical manufacturing.',
      longDescriptionTitle: 'Widely used industrial glycol',
      longDescriptionSubTitle:
        'A dependable product for process plants, coolant systems, and formulation-based applications.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'High purity', subTitle: 'Suitable for demanding industrial use.' },
        { title: 'System support', subTitle: 'Common choice for coolant formulations.' },
        { title: 'Multi-industry use', subTitle: 'Used across manufacturing segments.' },
      ],
      specificationsLeft: [
        { title: 'Purity', subTitle: '99.8% min' },
        { title: 'Specific gravity', subTitle: '1.115 at 20°C' },
        { title: 'Water', subTitle: '0.1% max' },
        { title: 'Color', subTitle: '10 APHA max' },
      ],
      specificationsRight: [
        { title: 'Diethylene glycol', subTitle: '0.04% max' },
        { title: 'Chloride', subTitle: 'Low' },
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Packaging', subTitle: 'Bulk, drums' },
      ],
    }),
    withAssets('glycols', {
      slug: 'diethylene-glycol',
      title: 'Diethylene Glycol (DEG)',
      description:
        'Industrial glycol used in resins, plasticizers, coolants, and processing applications.',
      mainContent:
        'DEG provides useful hygroscopic and solvency characteristics for chemical manufacturing and formulation work.',
      longDescriptionTitle: 'Flexible glycol for industrial processing',
      longDescriptionSubTitle:
        'Supports resin, coolant, and formulation industries with reliable commercial-grade quality.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Useful solvency', subTitle: 'Works well in multiple industrial systems.' },
        { title: 'Hygroscopic behavior', subTitle: 'Suitable for moisture-sensitive uses.' },
        { title: 'Consistent supply', subTitle: 'Available for routine B2B demand.' },
      ],
      specificationsLeft: [
        { title: 'Purity', subTitle: '99.0% min' },
        { title: 'Specific gravity', subTitle: '1.118 at 20°C' },
        { title: 'Boiling point', subTitle: '245°C approx' },
        { title: 'Water', subTitle: '0.2% max' },
      ],
      specificationsRight: [
        { title: 'Color', subTitle: '15 APHA max' },
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Odor', subTitle: 'Mild' },
        { title: 'Packaging', subTitle: 'Bulk, drums' },
      ],
    }),
  ],
  'base-oils': [
    withAssets('base-oils', {
      slug: 'base-oil-sn150',
      title: 'Base Oil SN150',
      description:
        'Light base oil for lubricant blending, hydraulic oils, and industrial fluid applications.',
      mainContent:
        'SN150 is a commonly used light neutral base oil that supports lubricant formulation and general industrial blending.',
      longDescriptionTitle: 'Light viscosity base oil',
      longDescriptionSubTitle:
        'Used in lubricant manufacturing where stable viscosity and reliable blending performance are required.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Blending friendly', subTitle: 'Works well in industrial lubricant manufacture.' },
        { title: 'Stable quality', subTitle: 'Dependable for recurring production needs.' },
        { title: 'Broad use case', subTitle: 'Suitable for multiple fluid systems.' },
      ],
      specificationsLeft: [
        { title: 'Viscosity at 40°C', subTitle: '28-32 cSt' },
        { title: 'Viscosity at 100°C', subTitle: '4.5-5.5 cSt' },
        { title: 'Viscosity index', subTitle: '90 min' },
        { title: 'Pour point', subTitle: '-12°C max' },
      ],
      specificationsRight: [
        { title: 'Flash point', subTitle: '200°C min' },
        { title: 'Color', subTitle: '1.0 ASTM max' },
        { title: 'Sulfur', subTitle: '0.4% max' },
        { title: 'Packaging', subTitle: 'Bulk, drums' },
      ],
    }),
    withAssets('base-oils', {
      slug: 'base-oil-sn500',
      title: 'Base Oil SN500',
      description:
        'Heavier base oil for gear oils, marine lubricants, greases, and industrial blends.',
      mainContent:
        'SN500 supports heavier-duty lubricant applications where higher viscosity and stronger oil film are important.',
      longDescriptionTitle: 'Heavy viscosity base oil',
      longDescriptionSubTitle:
        'A practical base stock for industrial and marine lubricant blending requirements.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Higher viscosity', subTitle: 'Suitable for heavier lubrication needs.' },
        { title: 'Strong film strength', subTitle: 'Supports equipment protection.' },
        { title: 'Industrial suitability', subTitle: 'Used in demanding lubricant systems.' },
      ],
      specificationsLeft: [
        { title: 'Viscosity at 40°C', subTitle: '90-110 cSt' },
        { title: 'Viscosity at 100°C', subTitle: '10.5-12.5 cSt' },
        { title: 'Viscosity index', subTitle: '85 min' },
        { title: 'Pour point', subTitle: '-9°C max' },
      ],
      specificationsRight: [
        { title: 'Flash point', subTitle: '240°C min' },
        { title: 'Color', subTitle: '2.5 ASTM max' },
        { title: 'Sulfur', subTitle: '0.5% max' },
        { title: 'Packaging', subTitle: 'Bulk, drums' },
      ],
    }),
  ],
  'printing-ink-coating-oils': [
    withAssets('printing-ink-coating-oils', {
      slug: 'printing-ink-oil',
      title: 'Printing Ink Oil',
      description:
        'Specialty process oil for printing ink manufacture and formulation support.',
      mainContent:
        'Printing Ink Oil is developed to support ink flow, pigment interaction, and commercial-scale production consistency.',
      longDescriptionTitle: 'Specialty oil for ink systems',
      longDescriptionSubTitle:
        'Designed for printing ink manufacturers looking for steady formulation performance and supply reliability.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Ink formulation support', subTitle: 'Assists flow and processing behavior.' },
        { title: 'Stable quality', subTitle: 'Built for recurring manufacturing cycles.' },
        { title: 'Commercial supply', subTitle: 'Suitable for industrial production environments.' },
      ],
      specificationsLeft: [
        { title: 'Viscosity at 40°C', subTitle: '30-40 cSt' },
        { title: 'Specific gravity', subTitle: '0.900-0.920 at 15°C' },
        { title: 'Flash point', subTitle: '220°C min' },
        { title: 'Pour point', subTitle: '-10°C max' },
      ],
      specificationsRight: [
        { title: 'Color', subTitle: 'Light to medium' },
        { title: 'Odor', subTitle: 'Mild' },
        { title: 'Aromatic content', subTitle: 'Controlled' },
        { title: 'Packaging', subTitle: 'Drums, bulk' },
      ],
    }),
    withAssets('printing-ink-coating-oils', {
      slug: 'coating-process-oil',
      title: 'Coating Process Oil',
      description:
        'Industrial oil for coating and surface treatment formulations.',
      mainContent:
        'Coating Process Oil supports coating manufacture with dependable viscosity behavior and process consistency.',
      longDescriptionTitle: 'Support oil for coating systems',
      longDescriptionSubTitle:
        'Useful in coating and treatment applications where stable processing and formulation control matter.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Consistent flow', subTitle: 'Supports blending and manufacturing stability.' },
        { title: 'Industrial fit', subTitle: 'Suitable for coating process lines.' },
        { title: 'Supply reliability', subTitle: 'Built around B2B repeat demand.' },
      ],
      specificationsLeft: [
        { title: 'Viscosity at 40°C', subTitle: '35-50 cSt' },
        { title: 'Specific gravity', subTitle: '0.890-0.915 at 15°C' },
        { title: 'Flash point', subTitle: '210°C min' },
        { title: 'Pour point', subTitle: '-6°C max' },
      ],
      specificationsRight: [
        { title: 'Color', subTitle: 'Light amber' },
        { title: 'Odor', subTitle: 'Mild petroleum' },
        { title: 'Residue', subTitle: 'Low' },
        { title: 'Packaging', subTitle: 'Drums, bulk' },
      ],
    }),
  ],
  'industrial-greases-esters': [
    withAssets('industrial-greases-esters', {
      slug: 'synthetic-ester-additive',
      title: 'Synthetic Ester Additive',
      description:
        'High-performance ester additive for grease, lubricant, and specialty fluid formulations.',
      mainContent:
        'Synthetic Ester Additive helps improve lubricity, temperature performance, and formulation stability in demanding industrial systems.',
      longDescriptionTitle: 'Performance additive for advanced formulations',
      longDescriptionSubTitle:
        'Selected for applications that require stronger lubricity and dependable performance under thermal stress.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Enhanced lubricity', subTitle: 'Supports smoother operating conditions.' },
        { title: 'Thermal stability', subTitle: 'Suitable for high-temperature service.' },
        { title: 'Formulation value', subTitle: 'Improves premium product performance.' },
      ],
      specificationsLeft: [
        { title: 'Viscosity at 40°C', subTitle: '30-50 cSt' },
        { title: 'Viscosity index', subTitle: '140 min' },
        { title: 'Pour point', subTitle: '-40°C max' },
        { title: 'Flash point', subTitle: '250°C min' },
      ],
      specificationsRight: [
        { title: 'Acid number', subTitle: '0.2 mg KOH/g max' },
        { title: 'Water', subTitle: '0.05% max' },
        { title: 'Color', subTitle: '2.0 ASTM max' },
        { title: 'Packaging', subTitle: 'Drums, pails' },
      ],
    }),
    withAssets('industrial-greases-esters', {
      slug: 'grease-base-fluid',
      title: 'Grease Base Fluid',
      description:
        'Base fluid for industrial grease manufacture and heavy-duty lubrication systems.',
      mainContent:
        'Grease Base Fluid is developed for grease makers seeking dependable structure support and industrial consistency.',
      longDescriptionTitle: 'Dependable base fluid for grease systems',
      longDescriptionSubTitle:
        'Works in grease formulation programs where stable viscosity and repeatable blending are required.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Formulation stability', subTitle: 'Supports repeatable grease manufacturing.' },
        { title: 'Good base characteristics', subTitle: 'Suitable for various grease chemistries.' },
        { title: 'Commercial grade', subTitle: 'Designed for ongoing B2B production.' },
      ],
      specificationsLeft: [
        { title: 'Viscosity at 40°C', subTitle: '80-120 cSt' },
        { title: 'Viscosity index', subTitle: '95 min' },
        { title: 'Pour point', subTitle: '-9°C max' },
        { title: 'Flash point', subTitle: '230°C min' },
      ],
      specificationsRight: [
        { title: 'Color', subTitle: 'Amber' },
        { title: 'Oxidation stability', subTitle: 'Good' },
        { title: 'Odor', subTitle: 'Mild' },
        { title: 'Packaging', subTitle: 'Bulk, drums' },
      ],
    }),
  ],
  'drilling-fluids': [
    withAssets('drilling-fluids', {
      slug: 'oil-based-drilling-fluid',
      title: 'Oil-Based Drilling Fluid',
      description:
        'Specialized drilling fluid for lubricity, wellbore stability, and challenging field conditions.',
      mainContent:
        'Oil-Based Drilling Fluid is designed to support drilling efficiency, cuttings transport, and performance in demanding operating environments.',
      longDescriptionTitle: 'Advanced support for drilling operations',
      longDescriptionSubTitle:
        'Useful where lubrication, stability, and field-ready fluid behavior are essential to performance.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Improved lubricity', subTitle: 'Helps reduce torque and drag.' },
        { title: 'Operational stability', subTitle: 'Supports difficult drilling conditions.' },
        { title: 'Field-ready performance', subTitle: 'Suitable for industrial project requirements.' },
      ],
      specificationsLeft: [
        { title: 'Density range', subTitle: 'Customizable' },
        { title: 'Viscosity', subTitle: 'Project specific' },
        { title: 'Flash point', subTitle: '200°C min' },
        { title: 'Pour point', subTitle: '-15°C max' },
      ],
      specificationsRight: [
        { title: 'Lubricity', subTitle: 'Excellent' },
        { title: 'Water tolerance', subTitle: 'Controlled' },
        { title: 'Appearance', subTitle: 'Dark process fluid' },
        { title: 'Supply mode', subTitle: 'Bulk project supply' },
      ],
    }),
    withAssets('drilling-fluids', {
      slug: 'drilling-base-oil',
      title: 'Drilling Base Oil',
      description:
        'Base oil for drilling fluid systems and energy-sector industrial applications.',
      mainContent:
        'Drilling Base Oil is supplied for fluid-system preparation where stable base performance and dependable project supply are required.',
      longDescriptionTitle: 'Base oil for field fluid systems',
      longDescriptionSubTitle:
        'A practical product for drilling-related formulations that need stable, repeatable oil characteristics.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Project suitability', subTitle: 'Supports oilfield fluid preparation.' },
        { title: 'Stable quality', subTitle: 'Helps maintain process consistency.' },
        { title: 'Commercial supply', subTitle: 'Available for large-volume requirements.' },
      ],
      specificationsLeft: [
        { title: 'Flash point', subTitle: '160°C min' },
        { title: 'Specific gravity', subTitle: '0.790-0.820 at 15°C' },
        { title: 'Viscosity at 40°C', subTitle: '2-4 cSt' },
        { title: 'Pour point', subTitle: '-15°C max' },
      ],
      specificationsRight: [
        { title: 'Aromatics', subTitle: 'Controlled' },
        { title: 'Sulfur', subTitle: 'Low' },
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Supply mode', subTitle: 'Bulk, drums' },
      ],
    }),
  ],
  'esters-derivatives': [
    withAssets('esters-derivatives', {
      slug: 'dibutyl-phthalate',
      title: 'Dibutyl Phthalate (DBP)',
      description:
        'Industrial ester used in plasticizers, coatings, adhesives, and specialty formulations.',
      mainContent:
        'DBP is a versatile ester derivative used across industrial sectors that require plasticization, flexibility, and formulation performance.',
      longDescriptionTitle: 'Flexible industrial ester derivative',
      longDescriptionSubTitle:
        'Commonly selected for industrial compounding and formulation systems needing dependable softening performance.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Formulation flexibility', subTitle: 'Supports multiple industrial uses.' },
        { title: 'Plasticizing action', subTitle: 'Helps improve softness and workability.' },
        { title: 'Commercial consistency', subTitle: 'Suitable for recurring plant demand.' },
      ],
      specificationsLeft: [
        { title: 'Purity', subTitle: '99.0% min' },
        { title: 'Specific gravity', subTitle: '1.043-1.048 at 20°C' },
        { title: 'Flash point', subTitle: '157°C min' },
        { title: 'Moisture', subTitle: '0.1% max' },
      ],
      specificationsRight: [
        { title: 'Color', subTitle: '50 APHA max' },
        { title: 'Acidity', subTitle: '0.01% max' },
        { title: 'Appearance', subTitle: 'Clear oily liquid' },
        { title: 'Packaging', subTitle: 'Drums, IBCs' },
      ],
    }),
    withAssets('esters-derivatives', {
      slug: 'dioctyl-phthalate',
      title: 'Dioctyl Phthalate (DOP)',
      description:
        'Widely used ester plasticizer for PVC and industrial formulation applications.',
      mainContent:
        'DOP provides reliable plasticizing characteristics for industries requiring flexibility, durability, and commercial-scale supply.',
      longDescriptionTitle: 'Widely used ester plasticizer',
      longDescriptionSubTitle:
        'A practical choice for manufacturers looking for dependable ester performance in industrial formulations.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Good plasticizing efficiency', subTitle: 'Supports flexible formulation design.' },
        { title: 'Broad industrial use', subTitle: 'Selected across multiple manufacturing sectors.' },
        { title: 'Stable quality', subTitle: 'Suitable for repeat commercial supply.' },
      ],
      specificationsLeft: [
        { title: 'Purity', subTitle: '99.5% min' },
        { title: 'Specific gravity', subTitle: '0.982-0.988 at 20°C' },
        { title: 'Flash point', subTitle: '190°C min' },
        { title: 'Moisture', subTitle: '0.1% max' },
      ],
      specificationsRight: [
        { title: 'Color', subTitle: '40 APHA max' },
        { title: 'Acidity', subTitle: '0.01% max' },
        { title: 'Appearance', subTitle: 'Clear oily liquid' },
        { title: 'Packaging', subTitle: 'Drums, IBCs' },
      ],
    }),
  ],
  'acid-corrosion-inhibitors': [
    withAssets('acid-corrosion-inhibitors', {
      slug: 'acid-inhibitor-ci-101',
      title: 'Acid Inhibitor CI-101',
      description:
        'Corrosion control additive for acidizing and drilling-related industrial applications.',
      mainContent:
        'CI-101 is formulated to help protect metal surfaces in acid service and drilling-related systems where corrosion risk must be controlled.',
      longDescriptionTitle: 'Targeted corrosion protection support',
      longDescriptionSubTitle:
        'Built for industrial users requiring dependable acid-system protection and practical field application.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Corrosion control', subTitle: 'Helps protect metal equipment in acid conditions.' },
        { title: 'Operational support', subTitle: 'Suitable for field and plant use.' },
        { title: 'Application flexibility', subTitle: 'Can be matched to project requirements.' },
      ],
      specificationsLeft: [
        { title: 'Appearance', subTitle: 'Amber liquid' },
        { title: 'Solubility', subTitle: 'Dispersible in acid systems' },
        { title: 'Specific gravity', subTitle: '0.95-1.05 at 25°C' },
        { title: 'pH', subTitle: 'Product specific' },
      ],
      specificationsRight: [
        { title: 'Recommended dosage', subTitle: 'As per system requirement' },
        { title: 'Application', subTitle: 'Drilling and acid treatment' },
        { title: 'Storage', subTitle: 'Cool, dry place' },
        { title: 'Packaging', subTitle: 'Canes, drums' },
      ],
    }),
    withAssets('acid-corrosion-inhibitors', {
      slug: 'corrosion-inhibitor-ci-205',
      title: 'Corrosion Inhibitor CI-205',
      description:
        'Industrial inhibitor designed for harsher corrosion environments in drilling operations.',
      mainContent:
        'CI-205 supports equipment protection in more demanding corrosion environments and is supplied for project-based industrial needs.',
      longDescriptionTitle: 'Stronger support for challenging conditions',
      longDescriptionSubTitle:
        'Useful where process severity requires more robust corrosion-management support.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Enhanced protection', subTitle: 'Designed for tougher operating conditions.' },
        { title: 'Field suitability', subTitle: 'Supports drilling and treatment operations.' },
        { title: 'Project supply', subTitle: 'Available for industrial procurement cycles.' },
      ],
      specificationsLeft: [
        { title: 'Appearance', subTitle: 'Dark amber liquid' },
        { title: 'Solubility', subTitle: 'Process compatible' },
        { title: 'Specific gravity', subTitle: '0.98-1.08 at 25°C' },
        { title: 'pH', subTitle: 'Product specific' },
      ],
      specificationsRight: [
        { title: 'Recommended dosage', subTitle: 'As per system requirement' },
        { title: 'Application', subTitle: 'Acid service and drilling' },
        { title: 'Storage', subTitle: 'Cool, dry place' },
        { title: 'Packaging', subTitle: 'Canes, drums' },
      ],
    }),
  ],
  'trading-solvents': [
    withAssets('trading-solvents', {
      slug: 'solvent-blend-1425',
      title: 'Solvent Blend 1425',
      description:
        'Commercial solvent blend supplied for broad industrial cleaning and process use.',
      mainContent:
        'Solvent Blend 1425 is supplied as a practical trading solvent option for customers needing flexible industrial-use material.',
      longDescriptionTitle: 'Flexible commercial solvent blend',
      longDescriptionSubTitle:
        'A useful option for customers looking for dependable trading-grade solvent support across multiple applications.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Broad usability', subTitle: 'Suitable for many routine industrial tasks.' },
        { title: 'Commercial value', subTitle: 'Practical for trading and repeat purchase.' },
        { title: 'Supply support', subTitle: 'Built around customer procurement needs.' },
      ],
      specificationsLeft: [
        { title: 'Blend type', subTitle: 'Custom commercial grade' },
        { title: 'Boiling range', subTitle: 'Application dependent' },
        { title: 'Specific gravity', subTitle: 'Product dependent' },
        { title: 'Flash point', subTitle: 'As per grade' },
      ],
      specificationsRight: [
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Odor', subTitle: 'Grade dependent' },
        { title: 'Use case', subTitle: 'Cleaning and process support' },
        { title: 'Packaging', subTitle: 'Bulk, drums' },
      ],
    }),
    withAssets('trading-solvents', {
      slug: 'cleaning-solvent-blend',
      title: 'Cleaning Solvent Blend',
      description:
        'Trading solvent blend for industrial equipment cleaning and maintenance tasks.',
      mainContent:
        'Cleaning Solvent Blend is offered for plant cleaning, maintenance operations, and general industrial handling requirements.',
      longDescriptionTitle: 'Practical maintenance solvent blend',
      longDescriptionSubTitle:
        'Developed for industrial buyers who need routine cleaning support with dependable commercial availability.',
      ctaTitle: 'Request Product Information',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Maintenance use', subTitle: 'Supports routine plant cleaning activity.' },
        { title: 'Process practical', subTitle: 'Simple and reliable for industrial use.' },
        { title: 'B2B availability', subTitle: 'Suitable for regular procurement demand.' },
      ],
      specificationsLeft: [
        { title: 'Blend type', subTitle: 'Commercial solvent blend' },
        { title: 'Evaporation', subTitle: 'Balanced' },
        { title: 'Flash point', subTitle: 'As per grade' },
        { title: 'Residue', subTitle: 'Low' },
      ],
      specificationsRight: [
        { title: 'Appearance', subTitle: 'Clear liquid' },
        { title: 'Odor', subTitle: 'Mild to moderate' },
        { title: 'Primary use', subTitle: 'Cleaning and maintenance' },
        { title: 'Packaging', subTitle: 'Bulk, drums' },
      ],
    }),
  ],
};

const frCatalog: Record<string, ProductCatalogItem[]> = {};

export function getProductCatalog(locale: 'en' | 'fr', categoryId: string) {
  const catalog = locale === 'fr' ? frCatalog : enCatalog;
  return catalog[categoryId] ?? [];
}

export function getCatalogItem(
  locale: 'en' | 'fr',
  categoryId: string,
  productSlug: string
) {
  return getProductCatalog(locale, categoryId).find(
    item => item.slug === productSlug
  );
}
