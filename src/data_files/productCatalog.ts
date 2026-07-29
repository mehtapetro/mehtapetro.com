import type { ImageMetadata } from 'astro';
import productImage1 from '@images/product-image-1.avif';
import productImage2 from '@images/product-image-2.avif';
import productImage3 from '@images/product-image-3.avif';
import productImage4 from '@images/product-image-4.avif';
import productMain1 from '@images/product-image-main-1.avif';
import productMain2 from '@images/product-image-main-2.avif';
import productMain3 from '@images/product-image-main-3.avif';
import productMain4 from '@images/product-image-main-4.avif';
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

const categoryAssets = {
  'item-t845': {
    imgCard: productImage1,
    imgMain: productMain1,
    imgAlt: 'Machine screws product range',
  },
  'item-a765': {
    imgCard: productImage2,
    imgMain: productMain2,
    imgAlt: 'Assorted screws product range',
  },
  'item-b203': {
    imgCard: productImage3,
    imgMain: productMain3,
    imgAlt: 'Tap bolts and nuts product range',
  },
  'item-f303': {
    imgCard: productImage4,
    imgMain: productMain4,
    imgAlt: 'Hex bolts product range',
  },
} as const;

function withAssets(
  categoryId: keyof typeof categoryAssets,
  item: Omit<ProductCatalogItem, 'imgCard' | 'imgMain' | 'imgAlt' | 'blueprints'>
): ProductCatalogItem {
  return {
    ...item,
    ...categoryAssets[categoryId],
    blueprints: {
      first: blueprint1,
      second: blueprint2,
    },
  };
}

const enCatalog: Record<string, ProductCatalogItem[]> = {
  'item-t845': [
    withAssets('item-t845', {
      slug: 'standard-machine-screws',
      title: 'Standard Machine Screws',
      description: 'General-purpose machine screws for dependable everyday assembly.',
      mainContent:
        'Designed for repeatable fastening in industrial equipment, panels, and fabricated assemblies, this standard machine screw range balances accuracy, holding strength, and smooth installation.',
      longDescriptionTitle: 'Reliable fastening for day-to-day production needs',
      longDescriptionSubTitle:
        'Standard Machine Screws are built for consistent quality across maintenance, fabrication, and OEM assembly workflows where dependable fit and easy replacement matter most.',
      ctaTitle: 'Contact sales to learn more',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Consistent threading', subTitle: 'Clean thread formation helps reduce installation issues during repetitive assembly.' },
        { title: 'Balanced durability', subTitle: 'Suitable for common industrial environments requiring dependable long-term fastening.' },
        { title: 'Broad usability', subTitle: 'Works well across equipment housings, machine covers, brackets, and control panels.' },
      ],
      specificationsLeft: [
        { title: 'Material options', subTitle: 'Available in industrial-grade steel for reliable mechanical performance.' },
        { title: 'Finish', subTitle: 'Protective finishing supports longer service life in standard operating conditions.' },
        { title: 'Size range', subTitle: 'Offered in a broad range of diameters and lengths for varied assembly needs.' },
        { title: 'Applications', subTitle: 'Suitable for machinery, electrical panels, fabricated parts, and workshop repairs.' },
      ],
      specificationsRight: [
        { title: 'Drive compatibility', subTitle: 'Can be specified with head and drive configurations suited to your installation process.' },
        { title: 'Assembly efficiency', subTitle: 'Helps maintenance and production teams standardize common fastening tasks.' },
        { title: 'Replacement friendly', subTitle: 'Easy to stock and replace during preventive or breakdown maintenance.' },
        { title: 'Supply format', subTitle: 'Available in boxed quantities tailored for routine industrial consumption.' },
      ],
    }),
    withAssets('item-t845', {
      slug: 'fine-thread-machine-screws',
      title: 'Fine Thread Machine Screws',
      description: 'Precision-threaded screws for tighter fit and refined equipment assembly.',
      mainContent:
        'This fine-thread machine screw range is intended for applications where fit, alignment, and repeatable tightening quality are critical for equipment performance and finish.',
      longDescriptionTitle: 'Higher precision for controlled fastening conditions',
      longDescriptionSubTitle:
        'Fine Thread Machine Screws are well suited to assemblies that demand careful clamping, smoother engagement, and improved control during installation.',
      ctaTitle: 'Request technical assistance',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Refined engagement', subTitle: 'Fine threads support controlled tightening and improved alignment in precision applications.' },
        { title: 'Cleaner finish', subTitle: 'Useful in equipment builds where visual neatness and accurate fit both matter.' },
        { title: 'Stable performance', subTitle: 'Engineered for repeatable fastening quality in controlled production environments.' },
      ],
      specificationsLeft: [
        { title: 'Thread profile', subTitle: 'Fine-thread geometry supports smoother engagement and more precise adjustment.' },
        { title: 'Recommended use', subTitle: 'Best suited to instruments, fabricated panels, and controlled mechanical assemblies.' },
        { title: 'Tolerance focus', subTitle: 'Developed for applications where tighter assembly feel and repeatability are preferred.' },
        { title: 'Material strength', subTitle: 'Manufactured using dependable industrial-grade material selections.' },
      ],
      specificationsRight: [
        { title: 'Installation control', subTitle: 'Supports more measured tightening in applications sensitive to over-clamping.' },
        { title: 'Dimensional range', subTitle: 'Can be supplied across multiple sizes to match production requirements.' },
        { title: 'Typical sectors', subTitle: 'Useful in precision fabrication, electronics housings, light engineering, and machine building.' },
        { title: 'Supply support', subTitle: 'Packaged to simplify batch handling for workshop and production use.' },
      ],
    }),
    withAssets('item-t845', {
      slug: 'panel-assembly-machine-screws',
      title: 'Panel Assembly Machine Screws',
      description: 'Fastening solution tailored for enclosures, panels, and access assemblies.',
      mainContent:
        'Panel Assembly Machine Screws are optimized for dependable fastening in cabinet builds, equipment enclosures, access panels, and modular assemblies that require neat and repeatable closure.',
      longDescriptionTitle: 'Built for enclosure and panel fabrication workflows',
      longDescriptionSubTitle:
        'This product line supports frequent access, serviceability, and consistent fastening quality for electrical, process, and machine panel applications.',
      ctaTitle: 'Talk to our product team',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Panel-ready fit', subTitle: 'Designed for enclosure, cabinet, and access-panel fastening requirements.' },
        { title: 'Service-friendly', subTitle: 'Suitable for assemblies that may require repeated opening and closing during maintenance.' },
        { title: 'Orderly presentation', subTitle: 'Helps maintain a neat visible finish in front-facing equipment and panel systems.' },
      ],
      specificationsLeft: [
        { title: 'Use case', subTitle: 'Effective for control cabinets, process panels, fabricated covers, and access hatches.' },
        { title: 'Head options', subTitle: 'Can be aligned to the appearance and tool-access needs of the assembly.' },
        { title: 'Finish quality', subTitle: 'Protective finishing supports durability in indoor and sheltered industrial settings.' },
        { title: 'Batch supply', subTitle: 'Supplied in production-friendly packaging for assembly line usage.' },
      ],
      specificationsRight: [
        { title: 'Maintenance benefit', subTitle: 'Supports organized, repeatable removal and reinstallation during service work.' },
        { title: 'Assembly neatness', subTitle: 'Suitable where both fastening integrity and visual presentation matter.' },
        { title: 'Compatibility', subTitle: 'Adaptable to a range of panel materials and fabricated sub-assemblies.' },
        { title: 'Industry fit', subTitle: 'Used in electrical systems, machine fabrication, utilities, and industrial interiors.' },
      ],
    }),
  ],
  'item-a765': [
    withAssets('item-a765', {
      slug: 'general-purpose-assorted-screws',
      title: 'General Purpose Assorted Screws',
      description: 'A versatile assorted screw set for workshop, maintenance, and installation use.',
      mainContent:
        'This general-purpose assorted screw set gives teams immediate access to a practical mix of sizes and profiles, reducing downtime and keeping installation work moving efficiently.',
      longDescriptionTitle: 'A practical assortment for daily fastening work',
      longDescriptionSubTitle:
        'General Purpose Assorted Screws are curated to support maintenance teams, workshop operations, and multi-purpose fabrication jobs where having the right screw available saves time.',
      ctaTitle: 'Contact sales to learn more',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Useful variety', subTitle: 'Includes a balanced range of sizes and types for common assembly and repair tasks.' },
        { title: 'Time-saving stock', subTitle: 'Reduces the need to source individual screws for routine workshop requirements.' },
        { title: 'Workshop ready', subTitle: 'Supports maintenance benches, utility teams, and general industrial operations.' },
      ],
      specificationsLeft: [
        { title: 'Assortment type', subTitle: 'Mixed screw formats selected for broad day-to-day industrial usefulness.' },
        { title: 'Material selection', subTitle: 'Produced using dependable materials suitable for routine fastening needs.' },
        { title: 'Storage convenience', subTitle: 'Packaged for simple identification and quick access during active jobs.' },
        { title: 'Primary applications', subTitle: 'Useful in maintenance, assembly support, light fabrication, and on-site repairs.' },
      ],
      tableData: [
        {
          feature: ['Specification', 'Value'],
          description: [
            ['Assortment style', 'General workshop mix'],
            ['Typical usage', 'Maintenance and repair'],
            ['Packaging', 'Mixed set'],
            ['Application focus', 'Everyday fastening'],
          ],
        },
      ],
    }),
    withAssets('item-a765', {
      slug: 'precision-assorted-screws',
      title: 'Precision Assorted Screws',
      description: 'Selected screw assortment for finer installations and controlled assembly work.',
      mainContent:
        'Precision Assorted Screws are intended for jobs where fit, consistency, and cleaner installation results are especially important across smaller assemblies and refined fabrication work.',
      longDescriptionTitle: 'Curated assortment for more exact assembly requirements',
      longDescriptionSubTitle:
        'This assortment supports teams working on precision-oriented builds that call for smaller, neater, and better-matched fastening options.',
      ctaTitle: 'Request technical assistance',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Refined mix', subTitle: 'Focused on sizes and types commonly used in more controlled assembly settings.' },
        { title: 'Cleaner installations', subTitle: 'Supports neater finish quality in fabricated or enclosed assemblies.' },
        { title: 'Reduced guesswork', subTitle: 'Provides an organized set of options for repeated precision work.' },
      ],
      specificationsLeft: [
        { title: 'Assortment focus', subTitle: 'Configured for finer mechanical, panel, and light engineering applications.' },
        { title: 'Handling', subTitle: 'Conveniently grouped for easier part selection during careful assembly work.' },
        { title: 'Quality consistency', subTitle: 'Supports repeatable installation outcomes across small-batch builds.' },
        { title: 'Use environment', subTitle: 'Suitable for fabrication rooms, service workshops, and precision assembly areas.' },
      ],
      tableData: [
        {
          feature: ['Specification', 'Value'],
          description: [
            ['Assortment style', 'Precision mix'],
            ['Typical usage', 'Refined assembly'],
            ['Packaging', 'Sorted set'],
            ['Application focus', 'Controlled installation'],
          ],
        },
      ],
    }),
    withAssets('item-a765', {
      slug: 'heavy-duty-assorted-screws',
      title: 'Heavy Duty Assorted Screws',
      description: 'Mixed screw set designed for tougher workshop and site-duty fastening needs.',
      mainContent:
        'Heavy Duty Assorted Screws combine a practical range of stronger fastening options for crews handling installation, fixtures, structural support work, and rugged maintenance jobs.',
      longDescriptionTitle: 'Assortment built for more demanding fastening jobs',
      longDescriptionSubTitle:
        'This mixed set is useful where teams require harder-working screw options for frequent industrial handling and more robust applications.',
      ctaTitle: 'Talk to our product team',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Rugged selection', subTitle: 'Built around screw types commonly required in heavier workshop and site conditions.' },
        { title: 'Operational flexibility', subTitle: 'Supports mixed-duty tasks without requiring multiple separate fastener kits.' },
        { title: 'Field usefulness', subTitle: 'Practical for mobile teams, maintenance contractors, and utility works.' },
      ],
      specificationsLeft: [
        { title: 'Application range', subTitle: 'Suitable for harsher workshop tasks, utility assemblies, and field maintenance.' },
        { title: 'Packaging style', subTitle: 'Prepared for dependable storage and quick retrieval in active environments.' },
        { title: 'Material approach', subTitle: 'Selected for stronger service expectations and practical working durability.' },
        { title: 'Worksite value', subTitle: 'Helps reduce delays caused by missing screw types during multi-step jobs.' },
      ],
      tableData: [
        {
          feature: ['Specification', 'Value'],
          description: [
            ['Assortment style', 'Heavy-duty mix'],
            ['Typical usage', 'Site and workshop jobs'],
            ['Packaging', 'Mixed industrial set'],
            ['Application focus', 'Demanding fastening'],
          ],
        },
      ],
    }),
  ],
  'item-b203': [
    withAssets('item-b203', {
      slug: 'standard-tap-bolts-and-nuts',
      title: 'Standard Tap Bolts and Nuts Set',
      description: 'Versatile tap bolts and nuts for routine construction and assembly work.',
      mainContent:
        'This standard tap bolts and nuts set provides a dependable fastening option for day-to-day industrial assembly, structural support, and equipment installation tasks.',
      longDescriptionTitle: 'Trusted fastening for regular industrial assembly',
      longDescriptionSubTitle:
        'Standard Tap Bolts and Nuts are selected for practical use across fabrication, construction support, and workshop assembly where strength and fit consistency are essential.',
      ctaTitle: 'Contact sales to learn more',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Reliable hold', subTitle: 'Offers secure mechanical joining for routine industrial and construction applications.' },
        { title: 'Balanced assortment', subTitle: 'Sized to support varied day-to-day bolt-and-nut fastening requirements.' },
        { title: 'Workshop flexibility', subTitle: 'Useful across fabrication benches, maintenance areas, and assembly operations.' },
      ],
      specificationsLeft: [
        { title: 'Material composition', subTitle: 'Produced using dependable steel grades suited to everyday mechanical service.' },
        { title: 'Finish protection', subTitle: 'Surface treatment supports practical corrosion resistance in common environments.' },
        { title: 'Set format', subTitle: 'Delivered as matched bolt-and-nut quantities for organized usage.' },
        { title: 'Applications', subTitle: 'Suitable for fixtures, fabricated supports, brackets, and workshop assemblies.' },
      ],
      specificationsRight: [
        { title: 'Thread accuracy', subTitle: 'Consistent threading promotes easier installation and secure mating.' },
        { title: 'Assembly use', subTitle: 'Helps standardize regular fastening work across multiple project types.' },
        { title: 'Maintenance value', subTitle: 'Easy to keep in stock for ongoing servicing and replacement needs.' },
        { title: 'Supply support', subTitle: 'Packaged for practical handling in industrial stores and maintenance rooms.' },
      ],
    }),
    withAssets('item-b203', {
      slug: 'structural-tap-bolts-and-nuts',
      title: 'Structural Tap Bolts and Nuts Set',
      description: 'Higher-strength tap bolts and nuts for structural support and load-focused assemblies.',
      mainContent:
        'Structural Tap Bolts and Nuts are intended for more demanding support applications where fastening integrity, joint confidence, and dependable mechanical holding are priorities.',
      longDescriptionTitle: 'Built for stronger, more demanding fastening joints',
      longDescriptionSubTitle:
        'This set supports teams working on structural frames, heavy supports, and tougher industrial assemblies that require a stronger fastening profile.',
      ctaTitle: 'Request technical assistance',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Stronger joint confidence', subTitle: 'Designed for assemblies where secure structural performance is especially important.' },
        { title: 'Industrial duty focus', subTitle: 'Useful in support frames, structural brackets, and fabricated heavy-duty components.' },
        { title: 'Project readiness', subTitle: 'Helps keep essential stronger fasteners available for demanding jobs.' },
      ],
      specificationsLeft: [
        { title: 'Strength emphasis', subTitle: 'Material and sizing choices are oriented toward higher-duty structural applications.' },
        { title: 'Protective finish', subTitle: 'Surface protection supports longer service life in industrial settings.' },
        { title: 'Use cases', subTitle: 'Applicable in frame work, equipment supports, utility structures, and fabricated assemblies.' },
        { title: 'Kit utility', subTitle: 'Matched nuts and bolts improve selection speed during installation planning.' },
      ],
      specificationsRight: [
        { title: 'Mechanical performance', subTitle: 'Supports applications where secure load-bearing fastener performance is expected.' },
        { title: 'Thread quality', subTitle: 'Manufactured for reliable threading and practical site installation.' },
        { title: 'Assembly consistency', subTitle: 'Promotes repeatable fastening quality in tougher project conditions.' },
        { title: 'Industry fit', subTitle: 'Relevant to construction support, utility installations, and industrial fabrication.' },
      ],
    }),
    withAssets('item-b203', {
      slug: 'corrosion-resistant-tap-bolts-and-nuts',
      title: 'Corrosion-Resistant Tap Bolts and Nuts Set',
      description: 'Tap bolts and nuts with enhanced surface protection for harsher environments.',
      mainContent:
        'This corrosion-resistant tap bolts and nuts set is intended for installations where longer-lasting surface protection and dependable fastening performance are both required.',
      longDescriptionTitle: 'Made for installations exposed to tougher service conditions',
      longDescriptionSubTitle:
        'Corrosion-Resistant Tap Bolts and Nuts help maintenance and project teams manage assemblies exposed to moisture, handling, and more demanding industrial conditions.',
      ctaTitle: 'Talk to our product team',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Improved protection', subTitle: 'Enhanced finish helps slow corrosion effects in more exposed applications.' },
        { title: 'Longer service support', subTitle: 'Useful where reduced replacement frequency adds operational value.' },
        { title: 'Flexible deployment', subTitle: 'Can be used in site installs, maintenance upgrades, and industrial outdoor support work.' },
      ],
      specificationsLeft: [
        { title: 'Surface treatment', subTitle: 'Protection-focused finishing helps defend the fastener surface over time.' },
        { title: 'Application scope', subTitle: 'Suitable for exposed industrial areas, utilities, and maintenance-critical supports.' },
        { title: 'Matched set supply', subTitle: 'Provides coordinated bolt-and-nut quantities for efficient deployment.' },
        { title: 'Operational benefit', subTitle: 'Supports more durable fastening outcomes where environment matters.' },
      ],
      specificationsRight: [
        { title: 'Maintenance advantage', subTitle: 'Can help reduce premature fastener replacement in exposed settings.' },
        { title: 'Installation quality', subTitle: 'Retains the practical usability expected in day-to-day field installation.' },
        { title: 'Mechanical reliability', subTitle: 'Balances corrosion resistance with dependable fastening performance.' },
        { title: 'Target sectors', subTitle: 'Useful in utilities, fabrication yards, industrial exteriors, and project maintenance.' },
      ],
    }),
  ],
  'item-f303': [
    withAssets('item-f303', {
      slug: 'industrial-hex-bolts',
      title: 'Industrial Hex Bolts',
      description: 'Dependable hex bolts for general industrial fastening and fabrication use.',
      mainContent:
        'Industrial Hex Bolts are designed for regular-duty fastening across fabrication, machinery support, and workshop assembly where strong, straightforward fastening is required.',
      longDescriptionTitle: 'A dependable hex bolt range for broad industrial use',
      longDescriptionSubTitle:
        'This product line is suited to teams that need reliable, easy-to-specify hex bolts for workshop production, machine support, and general industrial installation.',
      ctaTitle: 'Contact sales to learn more',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Solid mechanical hold', subTitle: 'Provides dependable clamping strength for routine industrial connections.' },
        { title: 'Wide application value', subTitle: 'Useful across fabricated frames, equipment supports, and machine structures.' },
        { title: 'Practical specification', subTitle: 'Easy to integrate into standard workshop and project fastening requirements.' },
      ],
      specificationsLeft: [
        { title: 'Material', subTitle: 'Produced using industrial-grade material choices for reliable performance.' },
        { title: 'Thread design', subTitle: 'Engineered to support secure fastening and practical installation.' },
        { title: 'Size coverage', subTitle: 'Available across multiple dimensions to support varied structural needs.' },
        { title: 'Applications', subTitle: 'Useful in fabrication, machinery, structures, and utility support installations.' },
      ],
      specificationsRight: [
        { title: 'Service suitability', subTitle: 'Appropriate for regular-duty industrial and project environments.' },
        { title: 'Installation ease', subTitle: 'Hex-head format supports familiar tooling and efficient site handling.' },
        { title: 'Procurement value', subTitle: 'Simple to stock for routine project and workshop demand.' },
        { title: 'Operational fit', subTitle: 'Balances fastening strength with practical day-to-day usability.' },
      ],
    }),
    withAssets('item-f303', {
      slug: 'high-tensile-hex-bolts',
      title: 'High-Tensile Hex Bolts',
      description: 'High-strength hex bolts for demanding structural and mechanical assemblies.',
      mainContent:
        'High-Tensile Hex Bolts are intended for more demanding applications where stronger fastening performance and greater confidence in load-focused assemblies are required.',
      longDescriptionTitle: 'High-strength fastening for critical load-bearing applications',
      longDescriptionSubTitle:
        'This range is relevant for industrial users who need a stronger hex bolt option for structural systems, fabricated heavy assemblies, and mechanically demanding installations.',
      ctaTitle: 'Request technical assistance',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Stronger performance', subTitle: 'Developed for applications needing greater fastening confidence under heavier duty.' },
        { title: 'Structural suitability', subTitle: 'Useful in supports, frames, and mechanical assemblies with stronger performance expectations.' },
        { title: 'Engineering-ready', subTitle: 'Supports projects where fastening specification matters more closely.' },
      ],
      specificationsLeft: [
        { title: 'Strength focus', subTitle: 'Designed around higher-strength expectations for demanding installations.' },
        { title: 'Use environment', subTitle: 'Suitable for industrial structures, fabricated assemblies, and load-conscious mechanical work.' },
        { title: 'Thread integrity', subTitle: 'Manufactured to support secure engagement and fastening consistency.' },
        { title: 'Range options', subTitle: 'Can be matched to multiple size and assembly requirements.' },
      ],
      specificationsRight: [
        { title: 'Load confidence', subTitle: 'Better suited to assemblies that demand stronger fastening behaviour.' },
        { title: 'Project fit', subTitle: 'Relevant to infrastructure support, heavy fabrication, and industrial machine systems.' },
        { title: 'Specification utility', subTitle: 'Useful where material and performance selection are more deliberate.' },
        { title: 'Procurement support', subTitle: 'Can be supplied to align with recurring project and plant needs.' },
      ],
    }),
    withAssets('item-f303', {
      slug: 'corrosion-resistant-hex-bolts',
      title: 'Corrosion-Resistant Hex Bolts',
      description: 'Protective-finish hex bolts for exposed industrial and utility applications.',
      mainContent:
        'Corrosion-Resistant Hex Bolts are suited to installations where environmental exposure makes surface protection and long-term service reliability more important.',
      longDescriptionTitle: 'Surface-protected hex bolts for exposed service conditions',
      longDescriptionSubTitle:
        'This hex bolt range helps project and maintenance teams improve fastener durability in applications exposed to moisture, handling, and outdoor industrial conditions.',
      ctaTitle: 'Talk to our product team',
      ctaURL: '/contact',
      descriptionList: [
        { title: 'Enhanced protection', subTitle: 'Protective finishing helps maintain fastener condition in more exposed environments.' },
        { title: 'Longer service outlook', subTitle: 'Supports installations where durability and reduced replacement are valuable.' },
        { title: 'Field suitability', subTitle: 'Useful for outdoor supports, utilities, and industrial maintenance upgrades.' },
      ],
      specificationsLeft: [
        { title: 'Finish type', subTitle: 'Selected surface protection supports corrosion resistance in exposed use cases.' },
        { title: 'Application range', subTitle: 'Suitable for external supports, industrial structures, and site installations.' },
        { title: 'Mechanical value', subTitle: 'Combines practical fastening performance with more durable surface behaviour.' },
        { title: 'Supply format', subTitle: 'Available in quantities appropriate for project and maintenance planning.' },
      ],
      specificationsRight: [
        { title: 'Maintenance benefit', subTitle: 'Can help extend intervals between fastener replacement in harsher settings.' },
        { title: 'Installation familiarity', subTitle: 'Retains standard hex-head usability for routine industrial tooling.' },
        { title: 'Sector fit', subTitle: 'Appropriate for utilities, project sites, processing areas, and exposed fabricated systems.' },
        { title: 'Operational reliability', subTitle: 'Supports stronger lifecycle value in environmental service conditions.' },
      ],
    }),
  ],
};

const frCatalog: Record<string, ProductCatalogItem[]> = {
  'item-t845': [
    withAssets('item-t845', {
      slug: 'vis-a-machine-standard',
      title: 'Vis à machine standard',
      description: 'Vis à machine polyvalentes pour les assemblages industriels courants.',
      mainContent:
        'Cette gamme de vis à machine standard est conçue pour offrir une fixation répétable et fiable dans les équipements, panneaux et ensembles fabriqués.',
      longDescriptionTitle: 'Une fixation fiable pour les besoins industriels quotidiens',
      longDescriptionSubTitle:
        'Les vis à machine standard conviennent aux opérations de maintenance, de fabrication et d’assemblage OEM où la régularité et la facilité de remplacement sont essentielles.',
      ctaTitle: 'Contacter les ventes',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Filetage régulier', subTitle: 'Un filetage propre aide à réduire les problèmes d’installation lors des assemblages répétitifs.' },
        { title: 'Durabilité équilibrée', subTitle: 'Convient aux environnements industriels courants nécessitant une fixation durable.' },
        { title: 'Usage étendu', subTitle: 'Adapté aux carters, capots, supports et panneaux de commande.' },
      ],
      specificationsLeft: [
        { title: 'Options de matériau', subTitle: 'Disponible en acier de qualité industrielle pour des performances fiables.' },
        { title: 'Finition', subTitle: 'Une finition protectrice favorise une durée de service prolongée.' },
        { title: 'Plage dimensionnelle', subTitle: 'Proposé en plusieurs diamètres et longueurs selon les besoins d’assemblage.' },
        { title: 'Applications', subTitle: 'Convient aux machines, panneaux électriques, pièces fabriquées et réparations.' },
      ],
      specificationsRight: [
        { title: 'Compatibilité d’entraînement', subTitle: 'Peut être spécifié avec des têtes et empreintes adaptées au procédé de pose.' },
        { title: 'Efficacité d’assemblage', subTitle: 'Aide les équipes à standardiser les tâches de fixation courantes.' },
        { title: 'Remplacement facile', subTitle: 'Simple à stocker et à remplacer en maintenance.' },
        { title: 'Conditionnement', subTitle: 'Disponible en boîtes adaptées à la consommation industrielle courante.' },
      ],
    }),
    withAssets('item-t845', {
      slug: 'vis-a-machine-filetage-fin',
      title: 'Vis à machine à filetage fin',
      description: 'Vis de précision pour des montages plus fins et mieux contrôlés.',
      mainContent:
        'Cette gamme à filetage fin est destinée aux applications où l’ajustement, l’alignement et la qualité de serrage répétable sont critiques.',
      longDescriptionTitle: 'Davantage de précision pour les assemblages maîtrisés',
      longDescriptionSubTitle:
        'Les vis à machine à filetage fin conviennent aux ensembles nécessitant un serrage plus contrôlé et un engagement plus fluide.',
      ctaTitle: 'Demander une assistance technique',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Engagement précis', subTitle: 'Le filetage fin favorise un serrage plus maîtrisé et un meilleur alignement.' },
        { title: 'Finition plus nette', subTitle: 'Utile pour les équipements où l’aspect visuel et la précision comptent.' },
        { title: 'Performance stable', subTitle: 'Conçue pour une qualité de fixation répétable en environnement contrôlé.' },
      ],
      specificationsLeft: [
        { title: 'Profil de filetage', subTitle: 'Une géométrie fine pour un engagement plus doux et un ajustement précis.' },
        { title: 'Usage recommandé', subTitle: 'Idéal pour instruments, panneaux fabriqués et ensembles mécaniques légers.' },
        { title: 'Orientation tolérance', subTitle: 'Pensé pour les applications exigeant une plus grande régularité.' },
        { title: 'Résistance matière', subTitle: 'Fabriqué à partir de matériaux industriels fiables.' },
      ],
      specificationsRight: [
        { title: 'Contrôle du serrage', subTitle: 'Permet un serrage plus progressif dans les applications sensibles.' },
        { title: 'Plage dimensionnelle', subTitle: 'Peut être fourni dans plusieurs tailles selon les besoins.' },
        { title: 'Secteurs typiques', subTitle: 'Convient à la fabrication de précision, aux boîtiers électroniques et à l’ingénierie légère.' },
        { title: 'Conditionnement', subTitle: 'Préparé pour faciliter la manipulation en atelier et en production.' },
      ],
    }),
    withAssets('item-t845', {
      slug: 'vis-a-machine-pour-panneaux',
      title: 'Vis à machine pour panneaux',
      description: 'Solution de fixation pour coffrets, panneaux et ensembles d’accès.',
      mainContent:
        'Les vis à machine pour panneaux sont adaptées aux coffrets, capots, trappes et ensembles modulaires nécessitant une fermeture nette et répétable.',
      longDescriptionTitle: 'Conçues pour les flux de fabrication de panneaux et coffrets',
      longDescriptionSubTitle:
        'Cette ligne de produits facilite l’accès, la maintenance et la qualité de fixation constante dans les applications de panneaux et d’armoires.',
      ctaTitle: 'Parler à notre équipe produit',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Adaptées aux panneaux', subTitle: 'Conçues pour les coffrets, armoires, panneaux d’accès et capots.' },
        { title: 'Maintenance facilitée', subTitle: 'Convient aux ensembles nécessitant des ouvertures répétées.' },
        { title: 'Présentation soignée', subTitle: 'Aide à conserver une finition ordonnée sur les équipements visibles.' },
      ],
      specificationsLeft: [
        { title: 'Cas d’usage', subTitle: 'Efficace pour armoires de commande, panneaux de process et capots fabriqués.' },
        { title: 'Options de tête', subTitle: 'Peuvent être adaptées à l’esthétique et à l’accès outil recherchés.' },
        { title: 'Qualité de finition', subTitle: 'Une finition protectrice soutient la durabilité en environnement intérieur.' },
        { title: 'Conditionnement', subTitle: 'Fourni dans des emballages adaptés à l’assemblage en série.' },
      ],
      specificationsRight: [
        { title: 'Avantage maintenance', subTitle: 'Permet un démontage et remontage ordonnés lors des interventions.' },
        { title: 'Aspect d’ensemble', subTitle: 'Convient lorsque la fixation et la présentation visuelle comptent toutes deux.' },
        { title: 'Compatibilité', subTitle: 'S’adapte à divers matériaux de panneaux et sous-ensembles fabriqués.' },
        { title: 'Secteurs', subTitle: 'Utilisé dans les systèmes électriques, les machines et les ensembles industriels.' },
      ],
    }),
  ],
  'item-a765': [
    withAssets('item-a765', {
      slug: 'vis-assorties-polyvalentes',
      title: 'Vis assorties polyvalentes',
      description: 'Ensemble polyvalent pour atelier, maintenance et installation.',
      mainContent:
        'Cet assortiment polyvalent fournit immédiatement un mélange pratique de tailles et de profils, réduisant les temps d’arrêt et accélérant les travaux de fixation.',
      longDescriptionTitle: 'Un assortiment pratique pour la fixation quotidienne',
      longDescriptionSubTitle:
        'Cet assortiment est conçu pour les équipes de maintenance, les ateliers et les travaux de fabrication multi-usages où disposer de la bonne vis fait gagner du temps.',
      ctaTitle: 'Contacter les ventes',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Variété utile', subTitle: 'Comprend un équilibre de tailles et types pour les tâches courantes.' },
        { title: 'Gain de temps', subTitle: 'Réduit le besoin de chercher des vis individuelles pour les besoins quotidiens.' },
        { title: 'Prêt pour l’atelier', subTitle: 'Convient aux établis de maintenance et aux opérations industrielles générales.' },
      ],
      specificationsLeft: [
        { title: 'Type d’assortiment', subTitle: 'Formats de vis mixtes choisis pour une grande utilité industrielle.' },
        { title: 'Sélection matière', subTitle: 'Fabriqué avec des matériaux fiables adaptés aux besoins de fixation courants.' },
        { title: 'Rangement pratique', subTitle: 'Conditionné pour une identification simple et un accès rapide.' },
        { title: 'Applications principales', subTitle: 'Utile en maintenance, assemblage léger et réparations sur site.' },
      ],
      tableData: [
        {
          feature: ['Spécification', 'Valeur'],
          description: [
            ['Type d’assortiment', 'Mélange atelier général'],
            ['Usage typique', 'Maintenance et réparation'],
            ['Conditionnement', 'Set mixte'],
            ['Orientation', 'Fixation quotidienne'],
          ],
        },
      ],
    }),
    withAssets('item-a765', {
      slug: 'vis-assorties-de-precision',
      title: 'Vis assorties de précision',
      description: 'Assortiment sélectionné pour des montages plus fins.',
      mainContent:
        'Les vis assorties de précision sont destinées aux travaux où l’ajustement, la régularité et un résultat plus propre sont particulièrement importants.',
      longDescriptionTitle: 'Un assortiment adapté aux besoins d’assemblage plus précis',
      longDescriptionSubTitle:
        'Cet assortiment aide les équipes travaillant sur des montages plus fins avec des besoins de fixation mieux calibrés.',
      ctaTitle: 'Demander une assistance technique',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Mélange affiné', subTitle: 'Ciblé sur les tailles et types utilisés dans des contextes plus contrôlés.' },
        { title: 'Montages plus propres', subTitle: 'Favorise une meilleure finition dans les ensembles fabriqués.' },
        { title: 'Moins d’hésitation', subTitle: 'Offre un ensemble organisé d’options pour les travaux répétitifs de précision.' },
      ],
      specificationsLeft: [
        { title: 'Orientation assortiment', subTitle: 'Configuré pour la mécanique fine, les panneaux et l’ingénierie légère.' },
        { title: 'Manipulation', subTitle: 'Regroupé pour une sélection plus facile pendant l’assemblage.' },
        { title: 'Régularité qualité', subTitle: 'Soutient des résultats répétables sur les petites séries.' },
        { title: 'Environnement d’usage', subTitle: 'Convient aux ateliers de fabrication et aux zones d’assemblage précis.' },
      ],
      tableData: [
        {
          feature: ['Spécification', 'Valeur'],
          description: [
            ['Type d’assortiment', 'Mélange précision'],
            ['Usage typique', 'Assemblage fin'],
            ['Conditionnement', 'Set trié'],
            ['Orientation', 'Pose contrôlée'],
          ],
        },
      ],
    }),
    withAssets('item-a765', {
      slug: 'vis-assorties-usage-intensif',
      title: 'Vis assorties usage intensif',
      description: 'Set mixte conçu pour des besoins de fixation plus exigeants.',
      mainContent:
        'Les vis assorties usage intensif combinent une gamme pratique d’options plus robustes pour les équipes intervenant sur des travaux de maintenance et d’installation plus sévères.',
      longDescriptionTitle: 'Un assortiment conçu pour des travaux plus exigeants',
      longDescriptionSubTitle:
        'Ce set mixte est utile lorsque les équipes ont besoin de vis plus robustes pour des applications industrielles ou de terrain.',
      ctaTitle: 'Parler à notre équipe produit',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Sélection robuste', subTitle: 'Basée sur des types de vis courants dans des contextes atelier ou chantier plus exigeants.' },
        { title: 'Souplesse opérationnelle', subTitle: 'Permet de gérer des tâches mixtes sans multiplier les kits séparés.' },
        { title: 'Utilité terrain', subTitle: 'Pratique pour les équipes mobiles, les mainteneurs et les travaux techniques.' },
      ],
      specificationsLeft: [
        { title: 'Plage d’application', subTitle: 'Adapté à des tâches plus rudes en atelier, utilités et maintenance de terrain.' },
        { title: 'Style de conditionnement', subTitle: 'Préparé pour un rangement fiable et une récupération rapide.' },
        { title: 'Approche matière', subTitle: 'Sélectionnée pour de meilleures attentes de service et de durabilité.' },
        { title: 'Valeur chantier', subTitle: 'Réduit les retards liés au manque du bon type de vis.' },
      ],
      tableData: [
        {
          feature: ['Spécification', 'Valeur'],
          description: [
            ['Type d’assortiment', 'Mélange usage intensif'],
            ['Usage typique', 'Atelier et chantier'],
            ['Conditionnement', 'Set industriel mixte'],
            ['Orientation', 'Fixation exigeante'],
          ],
        },
      ],
    }),
  ],
  'item-b203': [
    withAssets('item-b203', {
      slug: 'boulons-et-ecrous-standard',
      title: 'Boulons et écrous standard',
      description: 'Solution polyvalente pour l’assemblage et la construction courante.',
      mainContent:
        'Cet ensemble standard de boulons et écrous offre une fixation fiable pour l’assemblage industriel quotidien, les supports et les installations mécaniques.',
      longDescriptionTitle: 'Une fixation éprouvée pour l’assemblage industriel courant',
      longDescriptionSubTitle:
        'Les boulons et écrous standard conviennent à la fabrication, au support de construction et aux opérations d’atelier nécessitant force et régularité.',
      ctaTitle: 'Contacter les ventes',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Maintien fiable', subTitle: 'Offre une liaison mécanique sûre pour les applications industrielles et de construction courantes.' },
        { title: 'Assortiment équilibré', subTitle: 'Dimensionné pour répondre aux besoins quotidiens de fixation boulon-écrou.' },
        { title: 'Souplesse atelier', subTitle: 'Utile en fabrication, maintenance et assemblage.' },
      ],
      specificationsLeft: [
        { title: 'Composition matière', subTitle: 'Fabriqué à partir de nuances d’acier fiables pour un service mécanique courant.' },
        { title: 'Protection de finition', subTitle: 'Le traitement de surface soutient une résistance pratique à la corrosion.' },
        { title: 'Format du set', subTitle: 'Livré avec quantités assorties de boulons et écrous.' },
        { title: 'Applications', subTitle: 'Convient aux supports, équerres, cadres et assemblages d’atelier.' },
      ],
      specificationsRight: [
        { title: 'Précision du filetage', subTitle: 'Un filetage constant favorise une pose facile et un assemblage sûr.' },
        { title: 'Usage assemblage', subTitle: 'Aide à standardiser les travaux de fixation sur plusieurs projets.' },
        { title: 'Valeur maintenance', subTitle: 'Simple à conserver en stock pour les besoins de service.' },
        { title: 'Conditionnement', subTitle: 'Préparé pour une manipulation pratique en magasin industriel.' },
      ],
    }),
    withAssets('item-b203', {
      slug: 'boulons-et-ecrous-structurels',
      title: 'Boulons et écrous structurels',
      description: 'Version renforcée pour supports structurels et assemblages exigeants.',
      mainContent:
        'Les boulons et écrous structurels sont destinés aux applications plus exigeantes où l’intégrité de la fixation et la confiance dans le joint sont prioritaires.',
      longDescriptionTitle: 'Conçus pour des assemblages plus robustes et plus exigeants',
      longDescriptionSubTitle:
        'Ce set convient aux équipes travaillant sur des cadres, supports lourds et ensembles industriels nécessitant un profil de fixation renforcé.',
      ctaTitle: 'Demander une assistance technique',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Confiance renforcée', subTitle: 'Conçu pour les ensembles où les performances structurelles sont essentielles.' },
        { title: 'Orientation industrielle', subTitle: 'Utile pour cadres, supports et composants fabriqués plus lourds.' },
        { title: 'Prêt pour projet', subTitle: 'Aide à garder les fixations renforcées disponibles pour les travaux exigeants.' },
      ],
      specificationsLeft: [
        { title: 'Accent sur la résistance', subTitle: 'Les choix de matière et de taille visent des applications structurelles plus sévères.' },
        { title: 'Finition protectrice', subTitle: 'La protection de surface favorise une durée de vie accrue.' },
        { title: 'Cas d’usage', subTitle: 'Applicable aux structures, cadres, supports d’équipement et assemblages lourds.' },
        { title: 'Utilité du kit', subTitle: 'Les boulons et écrous assortis accélèrent la sélection à la pose.' },
      ],
      specificationsRight: [
        { title: 'Performance mécanique', subTitle: 'Convient aux applications nécessitant un comportement fiable sous charge.' },
        { title: 'Qualité du filetage', subTitle: 'Fabriqué pour un filetage fiable et une pose pratique sur site.' },
        { title: 'Régularité assemblage', subTitle: 'Favorise une qualité de fixation répétable dans les conditions plus sévères.' },
        { title: 'Secteurs', subTitle: 'Pertinent pour les structures, utilités et la fabrication industrielle.' },
      ],
    }),
    withAssets('item-b203', {
      slug: 'boulons-et-ecrous-anticorrosion',
      title: 'Boulons et écrous anticorrosion',
      description: 'Jeu protégé en surface pour environnements plus exposés.',
      mainContent:
        'Cet ensemble anticorrosion est prévu pour les installations où une meilleure protection de surface et une fiabilité durable sont recherchées.',
      longDescriptionTitle: 'Pensés pour des conditions de service plus exposées',
      longDescriptionSubTitle:
        'Les boulons et écrous anticorrosion aident les équipes à mieux gérer les assemblages exposés à l’humidité et aux conditions industrielles plus sévères.',
      ctaTitle: 'Parler à notre équipe produit',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Protection améliorée', subTitle: 'Une finition renforcée ralentit les effets de la corrosion.' },
        { title: 'Service prolongé', subTitle: 'Utile lorsque la réduction de la fréquence de remplacement apporte de la valeur.' },
        { title: 'Déploiement flexible', subTitle: 'Peut être utilisé sur site, en maintenance et en installations exposées.' },
      ],
      specificationsLeft: [
        { title: 'Traitement de surface', subTitle: 'Une finition axée protection aide à préserver le fastener dans le temps.' },
        { title: 'Champ d’application', subTitle: 'Convient aux zones industrielles exposées, utilités et supports critiques.' },
        { title: 'Approvisionnement assorti', subTitle: 'Fournit des quantités coordonnées de boulons et écrous.' },
        { title: 'Bénéfice opérationnel', subTitle: 'Favorise des résultats plus durables là où l’environnement compte.' },
      ],
      specificationsRight: [
        { title: 'Avantage maintenance', subTitle: 'Peut aider à réduire les remplacements prématurés en milieu exposé.' },
        { title: 'Qualité d’installation', subTitle: 'Conserve une bonne facilité d’usage au quotidien.' },
        { title: 'Fiabilité mécanique', subTitle: 'Équilibre résistance à la corrosion et performance de fixation.' },
        { title: 'Secteurs ciblés', subTitle: 'Utile dans les utilités, chantiers, extérieurs industriels et maintenance.' },
      ],
    }),
  ],
  'item-f303': [
    withAssets('item-f303', {
      slug: 'boulons-hexagonaux-industriels',
      title: 'Boulons hexagonaux industriels',
      description: 'Boulons hexagonaux fiables pour la fabrication et la fixation industrielle courante.',
      mainContent:
        'Les boulons hexagonaux industriels sont conçus pour la fixation de service courant dans la fabrication, le support de machines et les assemblages d’atelier.',
      longDescriptionTitle: 'Une gamme fiable pour de larges usages industriels',
      longDescriptionSubTitle:
        'Cette ligne de produits convient aux équipes qui ont besoin de boulons hexagonaux faciles à spécifier pour la production, les supports machines et l’installation.',
      ctaTitle: 'Contacter les ventes',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Maintien mécanique sûr', subTitle: 'Offre une force de serrage fiable pour les connexions industrielles courantes.' },
        { title: 'Grande valeur d’usage', subTitle: 'Utile pour les cadres, supports d’équipement et structures mécaniques.' },
        { title: 'Spécification pratique', subTitle: 'Simple à intégrer aux besoins d’atelier et de projet.' },
      ],
      specificationsLeft: [
        { title: 'Matériau', subTitle: 'Fabriqué avec des choix de matières industrielles fiables.' },
        { title: 'Conception du filetage', subTitle: 'Conçue pour une fixation sûre et une pose pratique.' },
        { title: 'Couverture dimensionnelle', subTitle: 'Disponible dans plusieurs dimensions pour divers besoins structurels.' },
        { title: 'Applications', subTitle: 'Utile dans la fabrication, les machines, les structures et les utilités.' },
      ],
      specificationsRight: [
        { title: 'Aptitude au service', subTitle: 'Approprié pour les environnements industriels et projets de service courant.' },
        { title: 'Facilité de pose', subTitle: 'La tête hexagonale permet un outillage familier et une manipulation efficace.' },
        { title: 'Valeur achat', subTitle: 'Simple à stocker pour les besoins réguliers des projets et ateliers.' },
        { title: 'Adaptation opérationnelle', subTitle: 'Équilibre résistance de fixation et praticité d’usage.' },
      ],
    }),
    withAssets('item-f303', {
      slug: 'boulons-hexagonaux-haute-resistance',
      title: 'Boulons hexagonaux haute résistance',
      description: 'Boulons renforcés pour assemblages structurels et mécaniques exigeants.',
      mainContent:
        'Les boulons hexagonaux haute résistance sont destinés aux applications plus exigeantes où de meilleures performances mécaniques sont attendues.',
      longDescriptionTitle: 'Une fixation renforcée pour les applications critiques',
      longDescriptionSubTitle:
        'Cette gamme s’adresse aux utilisateurs qui ont besoin d’une solution plus robuste pour les structures, ensembles lourds et installations mécaniques exigeantes.',
      ctaTitle: 'Demander une assistance technique',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Performance renforcée', subTitle: 'Développé pour les applications nécessitant davantage de confiance sous charge.' },
        { title: 'Adaptation structurelle', subTitle: 'Utile pour supports, cadres et ensembles mécaniques à fortes attentes.' },
        { title: 'Prêt pour l’ingénierie', subTitle: 'Soutient les projets où la spécification de fixation compte davantage.' },
      ],
      specificationsLeft: [
        { title: 'Orientation résistance', subTitle: 'Pensé pour des attentes de résistance plus élevées.' },
        { title: 'Environnement d’usage', subTitle: 'Convient aux structures industrielles, assemblages lourds et travaux mécaniques.' },
        { title: 'Intégrité du filetage', subTitle: 'Fabriqué pour soutenir un engagement sûr et constant.' },
        { title: 'Options de gamme', subTitle: 'Peut être adapté à plusieurs tailles et besoins d’assemblage.' },
      ],
      specificationsRight: [
        { title: 'Confiance sous charge', subTitle: 'Mieux adapté aux ensembles demandant un comportement plus robuste.' },
        { title: 'Adéquation projet', subTitle: 'Pertinent pour les supports d’infrastructure et la fabrication lourde.' },
        { title: 'Utilité de spécification', subTitle: 'Pratique lorsque le choix matière et performance est plus étudié.' },
        { title: 'Approvisionnement', subTitle: 'Peut être fourni selon les besoins récurrents de projet ou d’usine.' },
      ],
    }),
    withAssets('item-f303', {
      slug: 'boulons-hexagonaux-anticorrosion',
      title: 'Boulons hexagonaux anticorrosion',
      description: 'Boulons à finition protectrice pour applications exposées.',
      mainContent:
        'Les boulons hexagonaux anticorrosion conviennent aux installations où l’exposition à l’environnement rend la protection de surface plus importante.',
      longDescriptionTitle: 'Une gamme protégée en surface pour services exposés',
      longDescriptionSubTitle:
        'Cette gamme aide les équipes projet et maintenance à améliorer la durabilité des fixations dans les applications exposées à l’humidité ou à l’extérieur.',
      ctaTitle: 'Parler à notre équipe produit',
      ctaURL: '/fr/contact',
      descriptionList: [
        { title: 'Protection renforcée', subTitle: 'La finition protectrice aide à préserver l’état du fastener en environnement exposé.' },
        { title: 'Durée de service', subTitle: 'Soutient les installations où la durabilité et une maintenance réduite sont importantes.' },
        { title: 'Utilité terrain', subTitle: 'Utile pour supports extérieurs, utilités et maintenance industrielle.' },
      ],
      specificationsLeft: [
        { title: 'Type de finition', subTitle: 'Une protection de surface choisie pour améliorer la résistance à la corrosion.' },
        { title: 'Plage d’application', subTitle: 'Convient aux supports extérieurs, structures industrielles et installations de chantier.' },
        { title: 'Valeur mécanique', subTitle: 'Combine une bonne performance de fixation et une meilleure tenue de surface.' },
        { title: 'Format de fourniture', subTitle: 'Disponible en quantités adaptées à la planification projet ou maintenance.' },
      ],
      specificationsRight: [
        { title: 'Bénéfice maintenance', subTitle: 'Peut allonger l’intervalle entre remplacements en environnement plus sévère.' },
        { title: 'Pose familière', subTitle: 'Conserve l’usage standard de la tête hexagonale avec l’outillage habituel.' },
        { title: 'Secteurs', subTitle: 'Approprié pour les utilités, chantiers, zones de process et systèmes exposés.' },
        { title: 'Fiabilité opérationnelle', subTitle: 'Soutient une meilleure valeur dans le temps en conditions d’exposition.' },
      ],
    }),
  ],
};

export function getProductCatalog(locale: 'en' | 'fr', categoryId: string) {
  return (locale === 'fr' ? frCatalog : enCatalog)[categoryId] || [];
}

export function getCatalogItem(
  locale: 'en' | 'fr',
  categoryId: string,
  productSlug: string
) {
  return getProductCatalog(locale, categoryId).find(item => item.slug === productSlug);
}
