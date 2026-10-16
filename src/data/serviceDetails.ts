export interface ServiceDetail {
  slug: string;
  familyTitle: string;
  typesOfRepairs: string[];
  diagnosticProcess: { step: string; title: string; desc: string }[];
  limitations: string;
  equipmentOrMaterials: { title: string; items: string[] };
  localContextInsight: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'plumbing-repair': {
    slug: 'plumbing-repair',
    familyTitle: 'Plumbing Repair Services',
    typesOfRepairs: [
      'Active water supply line leaks (copper, PEX, CPVC)',
      'Burst or cracked pipes caused by Maine winter freezes',
      'Leaking shutoff valves, angle stops, and supply lines',
      'Continuously running toilets and faulty flappers',
      'Low water pressure diagnosis in single fixtures or whole home',
      'Dripping tub, shower, and kitchen sink faucets',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'Initial Isolation & Safety',
        desc: 'We locate the nearest shutoff valve to stop active water flow and protect your floors, drywall, and structural framing.',
      },
      {
        step: '2',
        title: 'Root-Cause Diagnostic',
        desc: 'Our technician inspects pipe joints, operating pressure, and valve seals to determine if the issue is wear, high pressure, or corrosion.',
      },
      {
        step: '3',
        title: 'Upfront Scope & Estimate',
        desc: 'We explain whether a spot component repair or a broader pipe replacement is appropriate, with clear pricing before work begins.',
      },
      {
        step: '4',
        title: 'Code-Compliant Repair & Pressure Test',
        desc: 'We install high-grade fittings to Maine plumbing codes, restore water pressure, and test under full working pressure to verify watertight seals.',
      },
    ],
    limitations:
      'We focus on durable physical plumbing repairs. If a pipe leak has caused extensive structural drywall rot or mold remediation is needed, specialized restoration contractors may be required alongside our plumbing repair.',
    equipmentOrMaterials: {
      title: 'Common Materials Repaired & Installed',
      items: ['Type L & M Copper', 'Uponor PEX-A & PEX-B', 'Schedule 40 PVC & ABS', 'Brass quarter-turn ball valves'],
    },
    localContextInsight:
      'In older Southern Maine homes, plumbing repairs often involve transitions between historic galvanized lines or cast iron and modern copper or PEX.',
  },
  'drain-cleaning': {
    slug: 'drain-cleaning',
    familyTitle: 'Professional Drain Cleaning',
    typesOfRepairs: [
      'Kitchen sink clogs caused by accumulated grease, food debris, and soap scum',
      'Bathroom sink, shower, and tub slow drains restricted by hair and organic residue',
      'Floor drains backing up during washing machine discharge or rain events',
      'Main sewer line obstructions from tree roots, wipes, and heavy buildup',
      'Toilet trap blockages that plungers fail to dislodge',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'Fixture & Flow Assessment',
        desc: 'We test whether the clog affects a single fixture trap or multiple drains across different levels of the property.',
      },
      {
        step: '2',
        title: 'Cleanout Access',
        desc: 'We access the drainage line through local fixture cleanouts or the main basement cleanout to avoid unnecessary disassembly.',
      },
      {
        step: '3',
        title: 'Mechanical Snaking / Augering',
        desc: 'Using professional electric drain machines with specialized cutting heads, we dislodge obstructions and scour interior pipe walls.',
      },
      {
        step: '4',
        title: 'Flow & Flush Verification',
        desc: 'We run high-volume water test cycles to verify rapid drainage and ensure wastewater exits cleanly to the municipal sewer or septic tank.',
      },
    ],
    limitations:
      'Mechanical snaking effectively cuts through roots and soft blockages. However, if a buried line is structurally collapsed, crushed, or heavily back-pitched, physical excavation or spot repair is necessary.',
    equipmentOrMaterials: {
      title: 'Professional Drain Tools Used',
      items: ['Heavy-duty drum augers', 'Drop-head and spade cutters', 'Root-cutting blades', 'Cleanout test plugs'],
    },
    localContextInsight:
      'Southern Maine trees (such as mature maples, oaks, and pines) commonly infiltrate clay or cast iron sewer joints in established residential neighborhoods.',
  },
  'leak-detection': {
    slug: 'leak-detection',
    familyTitle: 'Non-Destructive Leak Detection',
    typesOfRepairs: [
      'Concealed pipe leaks inside drywall, ceilings, and wall cavities',
      'Under-slab leaks in homes with radiant heating or below-grade supply lines',
      'Spinning water meters when no faucets or appliances are running',
      'Unexplained moisture spots on hardwood floors or baseboards',
      'Sudden unexplained increases on municipal water utility bills',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'Meter & Pressure Isolation',
        desc: 'We conduct a static pressure drop test and water meter sweep to confirm whether a pressurized supply leak exists.',
      },
      {
        step: '2',
        title: 'Thermal & Acoustic Diagnostics',
        desc: 'We pinpoint temperature differentials and pipe vibration frequencies to narrow down the exact leak location without tearing down walls blindly.',
      },
      {
        step: '3',
        title: 'Minimal Access Point Opening',
        desc: 'Once the leak zone is verified, we open only the minimum necessary drywall or subfloor area required to access the pipe.',
      },
      {
        step: '4',
        title: 'Immediate Repair & Verification',
        desc: 'We solder, press, or re-pipe the affected line and perform a final pressure verification to ensure 100% seal integrity.',
      },
    ],
    limitations:
      'Leak detection identifies the source of plumbing water leaks. It does not replace building envelope inspections for roof or window rainwater intrusion.',
    equipmentOrMaterials: {
      title: 'Diagnostic Tools & Methods',
      items: ['Hydrostatic pressure gauges', 'Moisture meters', 'Acoustic pipe listening sensors', 'Infrared thermal scanners'],
    },
    localContextInsight:
      'Freeze-thaw cycles in coastal and inland Maine homes frequently produce hairline pipe fractures along unconditioned crawlspaces and exterior walls.',
  },
  'pipe-repair': {
    slug: 'pipe-repair',
    familyTitle: 'Pipe Repair & Freeze Protection',
    typesOfRepairs: [
      'Pinhole leaks and joint corrosion on older copper pipes',
      'Frozen and split water supply lines in basements, attics, and crawlspaces',
      'Cracked or brittle PVC and ABS drain lines',
      'Corroded or leaking galvanized steel pipe transitions',
      'Frost-free sillcock and exterior hose bibb ruptures',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'System Depressurization',
        desc: 'We shut down main supply lines and drain remaining pressure safely through low-point faucets.',
      },
      {
        step: '2',
        title: 'Damage Boundary Evaluation',
        desc: 'We inspect whether the failure is localized to a joint or indicative of widespread pipe wall thinning or severe freeze stress.',
      },
      {
        step: '3',
        title: 'Splicing & Transition Replacement',
        desc: 'We cut away damaged pipe sections and install high-durability copper or PEX-A sections using code-approved compression, press, or sweat fittings.',
      },
      {
        step: '4',
        title: 'Re-pressurization & Freeze Guidance',
        desc: 'We repressurize, bleed trapped air from fixtures, check joints with soapy solution or gauge test, and recommend thermal insulation.',
      },
    ],
    limitations:
      'If galvanized iron pipes have reached the end of their 50-year lifespan with internal rusting throughout the home, localized spot repairs only provide temporary relief; whole-house repiping is advised.',
    equipmentOrMaterials: {
      title: 'Piping Types Supported',
      items: ['Rigid Copper (Type L)', 'Flexible PEX-A Expansion Piping', 'Schedule 40 PVC', 'Cast Iron No-Hub Couplings'],
    },
    localContextInsight:
      'Uninsulated sillcocks along granite foundation walls in historic Maine homes are especially vulnerable to split casings when garden hoses are left connected in October/November.',
  },
  'water-heater-repair': {
    slug: 'water-heater-repair',
    familyTitle: 'Water Heater Diagnostic & Repair',
    typesOfRepairs: [
      'Water running completely cold or running out within minutes',
      'Fluctuating water temperatures and lukewarm showers',
      'Popping, rumbling, or banging sediment noises inside the tank',
      'Leaking temperature and pressure relief (T&P) valves',
      'Gas water heater pilot lights failing to stay lit or faulty thermocouples',
      'Burnt out upper or lower electric heating elements and failed thermostats',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'Power & Fuel Safety Check',
        desc: 'We verify electrical breaker amperage or gas supply pressure before inspecting internal burner and electrical components.',
      },
      {
        step: '2',
        title: 'Component Testing',
        desc: 'We test heating element resistance (ohms), thermostat continuity, thermocouple millivolts, and gas control valve response.',
      },
      {
        step: '3',
        title: 'Repair vs. Replace Evaluation',
        desc: 'If the tank shell is intact, we replace the failed component. If the steel tank is rusted through at the bottom, we provide immediate replacement options.',
      },
      {
        step: '4',
        title: 'Operational Heat Cycle Test',
        desc: 'We refill, bleed air from hot lines, monitor a complete heating cycle, and calibrate safe domestic hot water delivery (typically 120°F).',
      },
    ],
    limitations:
      'Water heaters with rusted-through internal tank bodies cannot be repaired; welding or patching a pressurized vessel is unsafe and violates plumbing code.',
    equipmentOrMaterials: {
      title: 'Supported Equipment Brands & Types',
      items: ['Bradford White', 'Rheem & Ruud', 'A.O. Smith', 'State & Lochinvar', 'Gas, Electric & Hybrid Heat Pump'],
    },
    localContextInsight:
      'Hard mineral content in Southern Maine well and municipal water accelerates bottom-tank sediment accumulation, reducing element lifespan if tanks are not flushed regularly.',
  },
  'water-heater-installation': {
    slug: 'water-heater-installation',
    familyTitle: 'Water Heater Replacement & Installation',
    typesOfRepairs: [
      'Replacing 10+ year old failing conventional tank water heaters',
      'High-efficiency tankless water heater conversions for continuous hot water',
      'Hybrid heat pump water heater installations to cut electricity bills',
      'Expansion tank installations to comply with closed-loop plumbing codes',
      'T&P relief line routing and discharge pipe code compliance',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'Household Sizing & Demand Calculation',
        desc: 'We assess your peak hot water demand (FHR - First Hour Rating) and fuel availability to size the ideal 40, 50, or 75-gallon tank or tankless GPM.',
      },
      {
        step: '2',
        title: 'Safe Removal & Disposal',
        desc: 'We drain and disconnect old, heavy corroded units and transport them for eco-friendly recycling.',
      },
      {
        step: '3',
        title: 'Code-Compliant Hookup',
        desc: 'We install dielectric unions to prevent galvanic corrosion, new brass ball shutoff valves, thermal expansion tanks, and code-approved venting.',
      },
      {
        step: '4',
        title: 'Commissioning & Inspection Readiness',
        desc: 'We test gas pressure or electrical draw, verify watertight seals under pressure, and configure optimal thermostat settings.',
      },
    ],
    limitations:
      'Tankless conversions may require upgrading electrical service panel capacity (for electric tankless) or upsizing gas supply lines to meet high BTU demand.',
    equipmentOrMaterials: {
      title: 'Installation Hardware & Models',
      items: ['ASME-rated thermal expansion tanks', 'Full-port brass ball valves', 'Direct vent & power-vent systems', 'Navien & Rinnai tankless'],
    },
    localContextInsight:
      'Maine plumbing regulations mandate thermal expansion tanks on all closed plumbing systems with backflow check valves or pressure-reducing valves.',
  },
  'fixture-installation': {
    slug: 'fixture-installation',
    familyTitle: 'Fixture Installation & Upgrades',
    typesOfRepairs: [
      'Kitchen sink and disposal unit installations and water hookups',
      'Bathroom vanity and undermount sink installations',
      'Modern WaterSense dual-flush and comfort-height toilet installations',
      'Pressure-balanced tub and shower mixing valves and trim kits',
      'Utility sink and basement laundry hookups',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'Compatibility & Rough-in Check',
        desc: 'We verify rough-in dimensions (e.g. 12" toilet rough-in, faucet center spreads) to ensure new fixtures align with existing plumbing lines.',
      },
      {
        step: '2',
        title: 'Supply & Waste Preparation',
        desc: 'We replace corroded shutoff angle stops and flexible stainless steel braided risers to prevent future water damage.',
      },
      {
        step: '3',
        title: 'Precision Mounting & Watertight Seals',
        desc: 'We set fixtures securely, install wax rings or silicone gaskets, and seal vanity countertops to prevent moisture ingress.',
      },
      {
        step: '4',
        title: 'Drain & Pressure Testing',
        desc: 'We fill and drain fixtures under maximum flow to test P-trap seals, overflow channels, and supply connections.',
      },
    ],
    limitations:
      'Fixture installation covers plumbing connections. Structural cabinetry alterations or custom tile fabrication should be coordinated with specialized carpenters or tile setters.',
    equipmentOrMaterials: {
      title: 'Fixture Brands Serviced',
      items: ['Kohler', 'Moen', 'Delta', 'American Standard', 'Toto', 'Grohe'],
    },
    localContextInsight:
      'Upgrading older 3.5-gallon toilets to 1.28-gallon WaterSense fixtures saves typical Southern Maine families hundreds of gallons of water every month.',
  },
  'toilet-repair': {
    slug: 'toilet-repair',
    familyTitle: 'Toilet Repair & Rebuild Services',
    typesOfRepairs: [
      'Toilets that run continuously or cycle on and off automatically',
      'Water leaking from the base of the toilet onto the bathroom floor',
      'Weak, sluggish, or incomplete flushes requiring multiple attempts',
      'Loose or rocking toilet bowls with deteriorated floor flanges',
      'Cracked porcelain tanks or sweating tank condensation issues',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'Diagnostic Flush & Leak Dye Test',
        desc: 'We perform a food-grade dye test to check for silent flapper leakage into the bowl and inspect the fill valve shutoff height.',
      },
      {
        step: '2',
        title: 'Base & Wax Ring Inspection',
        desc: 'If water appears around the toilet base, we pull the toilet to inspect the cast iron or PVC closet flange and subfloor condition.',
      },
      {
        step: '3',
        title: 'Component Rebuild',
        desc: 'We replace worn flappers, fill valves, tank-to-bowl gasket bolts, and supply lines using commercial-grade parts.',
      },
      {
        step: '4',
        title: 'Anchor & Stability Test',
        desc: 'We reset the toilet on a fresh reinforced wax ring, secure brass closet bolts, shim if necessary, and caulk the perimeter per code.',
      },
    ],
    limitations:
      'If a porcelain tank or bowl has a structural hairline crack, repair is unsafe due to the risk of sudden shattering under pressure; replacement is required.',
    equipmentOrMaterials: {
      title: 'Heavy-Duty Replacement Components',
      items: ['Fluidmaster 400A fill valves', 'Chlorine-resistant silicone flappers', 'Solid brass closet bolts', 'Reinforced wax rings with horns'],
    },
    localContextInsight:
      'Older historic homes in Southern Maine often feature lead bend or cast iron toilet flanges that require specialized repair collars to secure modern bowls.',
  },
  'faucet-repair-installation': {
    slug: 'faucet-repair-installation',
    familyTitle: 'Faucet Repair & Installation',
    typesOfRepairs: [
      'Dripping spout faucets that waste water continuously',
      'Water leaking around the faucet handle or underneath the sink deck',
      'Stiff, squeaking, or hard-to-turn hot and cold handle valves',
      'Low water pressure caused by mineral-clogged aerators or cartridges',
      'New kitchen pull-down and bathroom widespread faucet upgrades',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'Valve Disassembly',
        desc: 'We turn off supply stops and disassemble decorative handle trim to access the internal cartridge or ceramic disc assembly.',
      },
      {
        step: '2',
        title: 'Cartridge & Seat Inspection',
        desc: 'We identify whether worn O-rings, a cracked cartridge body, or mineral scoring on the valve seat is causing the bypass leak.',
      },
      {
        step: '3',
        title: 'OEM Component Replacement',
        desc: 'We install exact manufacturer OEM cartridges (Moen, Kohler, Delta) lubricated with food-safe plumbing silicone.',
      },
      {
        step: '4',
        title: 'Aerator Cleanout & Flow Test',
        desc: 'We flush internal supply lines, soak and clear mineral sediment from the aerator screen, and test temperature balancing.',
      },
    ],
    limitations:
      'In severely corroded bargain faucets where pot-metal bodies have cracked or corroded internally, replacing the unit is more cost-effective than rebuilding.',
    equipmentOrMaterials: {
      title: 'Cartridges & Replacement Parts',
      items: ['Moen 1222 / 1225 cartridges', 'Delta ball & cam assemblies', 'Kohler ceramic disc valves', 'Braided stainless steel risers'],
    },
    localContextInsight:
      'Municipal water in Southern Maine carries moderate mineral content that can calcify cartridge seals over 5–7 years, leading to persistent slow drips.',
  },
  'sewer-line-services': {
    slug: 'sewer-line-services',
    familyTitle: 'Sewer Line Diagnostic & Clearing',
    typesOfRepairs: [
      'Multiple household fixtures backing up simultaneously (toilets, tubs, floor drains)',
      'Gurgling sounds from lower-level fixtures when washing machines drain',
      'Sewage odors in basements or yards near underground waste runs',
      'Tree root intrusion penetrating clay, transite, or cast iron sewer joints',
      'Main sewer line belly clogs and solid grease blockages',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'Cleanout Access & Siphon Check',
        desc: 'We locate your main sewer cleanout (usually at the front foundation wall or yard trap) to check wastewater head pressure.',
      },
      {
        step: '2',
        title: 'Heavy-Duty Mechanical Snaking',
        desc: 'We run heavy-duty sectional or continuous drum sewer machines with specialized expanding root-cutters to open the main sewer conduit.',
      },
      {
        step: '3',
        title: 'High-Volume Line Flushing',
        desc: 'We run continuous hot water and multiple toilet test flushes to wash sheared roots and solids out to the municipal connection.',
      },
      {
        step: '4',
        title: 'Preventative Guidance & Long-Term Plan',
        desc: 'We review the condition of the line and discuss whether periodic maintenance or spot line repairs are needed for recurring root issues.',
      },
    ],
    limitations:
      'Mechanical sewer augering removes tree root blockages and restores gravity flow. If the underground pipe has suffered a structural collapse or offset joint, excavation repair is required.',
    equipmentOrMaterials: {
      title: 'Heavy Sewer Equipment',
      items: ['Electric root-cutting machines', 'C-cutter and grease-scouring blades', 'Rubber mechanical Fernco couplings', 'PVC Schedule 40 cleanout plugs'],
    },
    localContextInsight:
      'Historic tree-lined streets across Southern Maine frequently see aggressive root intrusion into aging clay tile and cast iron sewer pipes during spring and fall.',
  },
  'heating-boiler-services': {
    slug: 'heating-boiler-services',
    familyTitle: 'Heating & Boiler Services',
    typesOfRepairs: [
      'Baseboard radiators remaining cold while the thermostat calls for heat',
      'Boiler failing to ignite, short-cycling, or locking out during cold weather',
      'Banging, knocking, or gurgling sounds in hydronic heating loops',
      'Water leaking from boiler pressure relief valves or circulator pump flanges',
      'Uneven heating across different zones or floors in your home',
    ],
    diagnosticProcess: [
      {
        step: '1',
        title: 'Electrical & Fuel Safety Check',
        desc: 'We test line voltage, emergency switch continuity, and fuel supply valves to confirm safe ignition conditions.',
      },
      {
        step: '2',
        title: 'Hydronic Pressure & Expansion Diagnostic',
        desc: 'We verify cold/hot system pressure (typically 12–15 PSI) and test the diaphragm in the expansion tank.',
      },
      {
        step: '3',
        title: 'Zone Valve & Circulator Testing',
        desc: 'We test end-switches on motorized zone valves and verify circulator pump motor amperage and impeller rotation.',
      },
      {
        step: '4',
        title: 'Air Purge & Combustion Verification',
        desc: 'We bleed trapped air pockets from hydronic radiator loops, test high-limit safety cutoffs, and monitor a complete heat cycle.',
      },
    ],
    limitations:
      'We service hydronic boiler and water-based heating loops. Forced-air furnace duct fabrication or oil tank replacements should be coordinated with specialized ducting or fuel contractors.',
    equipmentOrMaterials: {
      title: 'Heating Components Serviced',
      items: ['Taco & Grundfos circulators', 'Honeywell zone valves', 'Watts pressure reducing valves', 'Cast iron & high-efficiency boilers'],
    },
    localContextInsight:
      'Hydronic baseboard heating is the standard in Southern Maine homes; annual pre-winter air bleeding and pressure checks prevent cold-room emergencies during January freezes.',
  },
};
