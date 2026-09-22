import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'modern-3bhk-mvp',
    title: 'Modern 3BHK Residence',
    category: 'Residential',
    location: 'MVP Colony, Visakhapatnam',
    year: '2024',
    scope: 'Complete Interior Design & Turnkey Execution',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    brief: 'A modern coastal family home requiring open-concept spatial flow, child-friendly surfaces, and integrated storage without compromising on clean lines and natural light.',
    approach: 'We introduced warm white oak wall panelling, concealed floor-to-ceiling storage, and warm atmospheric cove lighting. Low-profile Italian marble consoles balance the soft tactile bouclé and linen furnishings.',
    designDetails: [
      {
        title: 'Living & Dining Pavilion',
        description: 'Double-height feeling achieved through vertical fluted wall cladding and bespoke low-slung seating.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Culinary Core',
        description: 'Handleless acrylic finish cabinetry with Calacatta quartz countertops and integrated ambient under-cabinet glow.',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Master Sanctuary',
        description: 'Acoustic padded bed backdrop paired with warm brass reading lights and concealed walk-in wardrobe.',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Raw Brick & Concrete Shell',
      afterLabel: 'Crafted Living Architecture'
    },
    timeline: [
      { phase: 'Phase 01', title: 'Spatial Planning & 3D Renderings', description: 'Layout revisions and material palette curation.', duration: '3 Weeks' },
      { phase: 'Phase 02', title: 'Civil, Electrical & False Ceiling', description: 'Concealed wiring, magnetic track lights, and plumbing.', duration: '4 Weeks' },
      { phase: 'Phase 03', title: 'Custom Carpentry & Turnkey Handover', description: 'Factory-pressed modular units, stone installation & styling.', duration: '5 Weeks' }
    ]
  },
  {
    id: 'contemporary-home-yendada',
    title: 'Contemporary Coastal Home',
    category: 'Complete Home',
    location: 'Yendada, Visakhapatnam',
    year: '2024',
    scope: 'Architectural Renovation & Interior Execution',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    brief: 'Creating an airy, serene home responding to the coastal sea breeze, with a palette inspired by sand, stone, and natural timbers.',
    approach: 'Maximized natural cross-ventilation, micro-cement floor accents, and customized Burma teak timber screens that filter the morning sun into rhythmic geometric shadows.',
    designDetails: [
      {
        title: 'Foyer & Verandah Transition',
        description: 'Hand-crafted teak wood lattice (jaali) separating the entry foyer from the formal living lounge.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Open Kitchen & Island',
        description: 'Granite waterfall island with integrated induction cooktop and matte bronze pendant lighting.',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Study & Library Suite',
        description: 'Bespoke floating desk in natural walnut with recessed LED channels and bookmatched veneer cabinets.',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Dismantled Interior Space',
      afterLabel: 'Completed Living Pavilion'
    },
    timeline: [
      { phase: 'Phase 01', title: 'Demolition & Spatial Realignment', description: 'Wall adjustments to allow expansive open sightlines.', duration: '2 Weeks' },
      { phase: 'Phase 02', title: 'HVAC & Coastal Weatherproofing', description: 'Anti-corrosion materials and specialized sealing.', duration: '3 Weeks' },
      { phase: 'Phase 03', title: 'Artisanal Joinery & Handover', description: 'Custom furniture assembly, soft furnishings & hand-over.', duration: '6 Weeks' }
    ]
  },
  {
    id: 'modern-kitchen-rushikonda',
    title: 'The Modern Kitchen Suite',
    category: 'Modular Kitchen',
    location: 'Rushikonda, Visakhapatnam',
    year: '2023',
    scope: 'Modular Kitchen Design & Precision Installation',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
    brief: 'High-functionality culinary space designed for avid home chefs, prioritizing ergonomic golden triangles and moisture-resistant marine ply carcass.',
    approach: 'German tandem-box hardware paired with fluted matte graphite fronts, built-in pantry units with pull-out carousels, and dual-tone ambient lighting.',
    designDetails: [
      {
        title: 'The Work Triangle',
        description: 'Optimized workflow between high-capacity refrigeration, prep island, and heavy-duty chimney hob.',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Concealed Spice Pullouts',
        description: 'Heavy gauge stainless steel wire-baskets integrated seamlessly behind seamless panel fascias.',
        image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80',
      }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Conventional Tiled Kitchen',
      afterLabel: 'Ergonomic Modular Kitchen'
    },
    timeline: [
      { phase: 'Phase 01', title: 'Plumbing & Gas Line Optimization', description: 'Laser measurement and layout confirmation.', duration: '1 Week' },
      { phase: 'Phase 02', title: 'Modular Box Assembly', description: 'Pre-machined CNC edge-banded marine ply installation.', duration: '2 Weeks' },
      { phase: 'Phase 03', title: 'Countertop & Appliance Testing', description: 'Quartz mitred edge polishing and appliance integration.', duration: '1 Week' }
    ]
  },
  {
    id: 'executive-workspace-siripuram',
    title: 'Executive Corporate Workspace',
    category: 'Commercial',
    location: 'Siripuram, Visakhapatnam',
    year: '2024',
    scope: 'Turnkey Commercial Interior & Executive Cabins',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    brief: 'A progressive commercial office commanding authority and elegance while fostering collaborative team dynamics.',
    approach: 'Acoustically treated micro-perforated wood wall panels, frameless double-glazed partitions, ergonomic workstations, and a dramatic boardroom table in monolithic grey stone.',
    designDetails: [
      {
        title: 'Executive Boardroom',
        description: 'Integrated cable management and recessed motorized presentation technology with warm mood presets.',
        image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Collaborative Lounge',
        description: 'Informal breakout lounge with bespoke leather booths and biophilic planter dividers.',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Bare Commercial Floorplate',
      afterLabel: 'Turnkey Executive Office'
    },
    timeline: [
      { phase: 'Phase 01', title: 'Workplace Density Analysis', description: 'Traffic zoning and acoustic calculations.', duration: '2 Weeks' },
      { phase: 'Phase 02', title: 'HVAC, Fire & Glass Partitions', description: 'Commercial infrastructure coordination.', duration: '4 Weeks' },
      { phase: 'Phase 03', title: 'Interior Fitout & Handover', description: 'Executive suites, reception desk, branding elements.', duration: '3 Weeks' }
    ]
  },
  {
    id: 'minimalist-villa-beachroad',
    title: 'Minimalist Hilltop Villa',
    category: 'Villa',
    location: 'Beach Road, Visakhapatnam',
    year: '2023',
    scope: 'Architecture Coordination & Complete Villa Interiors',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    brief: 'A private multi-level villa overlooking the Bay of Bengal, demanding understated luxury and uninterrupted ocean views.',
    approach: 'Floor-to-ceiling glass fenestrations, warm travertine stone finishes, hidden pivot doors, and custom curved furniture that softly mirrors coastal waves.',
    designDetails: [
      {
        title: 'Double-Height Atrium Living',
        description: 'Bespoke hand-blown glass chandelier suspended across 22-foot high ceiling with motorized sheer drapery.',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Master En-Suite Spa',
        description: 'Book-matched grey Statuario marble and freestanding soaking tub framed against coastal greenery.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Unfinished Villa Structure',
      afterLabel: 'Architectural Ocean Sanctuary'
    },
    timeline: [
      { phase: 'Phase 01', title: 'Villa Architectural Detailing', description: 'Coordination with structural team for recessed details.', duration: '4 Weeks' },
      { phase: 'Phase 02', title: 'Stone Sourcing & Wet Fitouts', description: 'Curating marble slabs directly and custom waterproofing.', duration: '6 Weeks' },
      { phase: 'Phase 03', title: 'Full Turnkey Furnishing', description: 'Art curation, custom carpentry, and automation commissioning.', duration: '6 Weeks' }
    ]
  },
  {
    id: 'curated-living-suite-seethammadhara',
    title: 'Curated Living & Media Suite',
    category: 'Residential',
    location: 'Seethammadhara, Visakhapatnam',
    year: '2024',
    scope: 'Living Room, Dining & Bespoke TV Wall Unit',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    brief: 'A transformation of a formal living hall into an expressive entertainment space with concealed wiring and ambient perimeter lighting.',
    approach: 'Charcoal fluted slats set against a backlit bronze mirror panel, floating quartz audio console, and low-profile velvet seating.',
    designDetails: [
      {
        title: 'Architectural TV Console',
        description: 'Zero-visible-wires acoustic paneling with magnetic access hatches for audio-visual equipment.',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Accent Bar Credenza',
        description: 'Fluted glass display cabinet with bronze profile handles and warm 2700K internal illumination.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-160058515526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Standard White Walls',
      afterLabel: 'Crafted Media Architecture'
    },
    timeline: [
      { phase: 'Phase 01', title: 'Acoustic & Lighting Layout', description: 'Laser leveling and wiring conduits.', duration: '1 Week' },
      { phase: 'Phase 02', title: 'Modular Woodwork & Paneling', description: 'Precision CNC cuts and fluted slat alignment.', duration: '2 Weeks' },
      { phase: 'Phase 03', title: 'Final Finishing & Illumination', description: 'PU polish coat and smart dimmer integration.', duration: '1 Week' }
    ]
  }
];
