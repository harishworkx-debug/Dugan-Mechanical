export interface Location {
  slug: string;
  name: string;
  state: string;
  stateAbbrev: string;
  county: string;
  description: string;
}

export const locations: Location[] = [
  {
    slug: 'saco-me',
    name: 'Saco',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'York County',
    description:
      'Saco is the operational headquarters for Dugan Mechanical. Centrally positioned along Route 1 and I-95, we provide fast local dispatch and prioritized response for plumbing, heating, boiler, and drain needs across Saco neighborhoods.',
  },
  {
    slug: 'portland-me',
    name: 'Portland',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Portland is Southern Maine’s major urban center. Located just 15 miles north of our Saco base, we regularly service historic residential brownstones, West End Victorians, multi-unit buildings, and downtown commercial spaces with code-compliant plumbing and heating solutions.',
  },
  {
    slug: 'scarborough-me',
    name: 'Scarborough',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Scarborough borders Saco directly to the north. From coastal cottages near Higgins Beach and Pine Point to newer residential subdivisions, we provide rapid diagnostics for water heaters, winter freeze protection, and drain cleanouts.',
  },
  {
    slug: 'biddeford-me',
    name: 'Biddeford',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'York County',
    description:
      'Biddeford is situated directly across the Saco River from our home base. We deliver immediate response for historic mill housing, downtown commercial buildings, and single-family homes needing water heater, pipe, and drain repairs.',
  },
  {
    slug: 'south-portland-me',
    name: 'South Portland',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'South Portland connects Portland and Scarborough along our primary travel corridor. We handle residential fixture replacements, water heater installations, and emergency pipe fixes across Knightville, Ferry Village, and the Maine Mall area.',
  },
  {
    slug: 'falmouth-me',
    name: 'Falmouth',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Falmouth is an affluent coastal suburb north of Portland with large single-family homes and coastal estates. Dugan Mechanical handles high-efficiency hydronic boiler repairs, fixture upgrades, and freeze-thaw plumbing protection.',
  },
  {
    slug: 'freeport-me',
    name: 'Freeport',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Freeport sits along coastal Cumberland County known for historic farmhouses and coastal homes. We service Freeport properties with scheduled water heater replacements, well system plumbing connections, and drain cleaning.',
  },
  {
    slug: 'yarmouth-me',
    name: 'Yarmouth',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Yarmouth is a historic Royal River community with older housing stock and modern suburban builds. Our technicians diagnose aging galvanized/cast iron lines, bathroom fixture upgrades, and hydronic heating loops.',
  },
  {
    slug: 'brunswick-me',
    name: 'Brunswick',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Brunswick is home to Bowdoin College and historic coastal properties. For scheduled projects, boiler installations, and major plumbing overhauls, Dugan Mechanical provides upfront estimates and reliable craftsmanship.',
  },
  {
    slug: 'bath-me',
    name: 'Bath',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Sagadahoc County',
    description:
      'Bath is a historic Kennebec River shipbuilding community featuring older architectural homes. We provide scheduled mechanical diagnostics, boiler maintenance, and pipe modernization for property owners in Sagadahoc County.',
  },
  {
    slug: 'lewiston-me',
    name: 'Lewiston',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Androscoggin County',
    description:
      'Lewiston is one of Maine’s largest inland population centers with extensive multi-family and industrial-era housing. We provide scheduled commercial and residential plumbing and boiler services with clear travel coordination.',
  },
  {
    slug: 'auburn-me',
    name: 'Auburn',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Androscoggin County',
    description:
      'Auburn sits across the river from Lewiston with diverse single-family residential properties. Dugan Mechanical accommodates scheduled water heating replacements and major plumbing repairs in the Twin Cities area.',
  },
  {
    slug: 'augusta-me',
    name: 'Augusta',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Kennebec County',
    description:
      'Augusta is Maine’s capital city in Kennebec County. We provide scheduled commercial mechanical work and planned residential plumbing installations for property owners requesting our specialized mechanical expertise.',
  },
  {
    slug: 'old-orchard-beach-me',
    name: 'Old Orchard Beach',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'York County',
    description:
      'Old Orchard Beach neighbors Saco with seasonal cottages and coastal homes requiring spring de-winterization, fall drain-downs, and prompt response for winter pipe bursts.',
  },
  {
    slug: 'kennebunk-me',
    name: 'Kennebunk',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'York County',
    description:
      'Kennebunk is an established York County community south of Saco where we provide routine plumbing maintenance, tankless water heater conversions, and radiant heating solutions.',
  },
  {
    slug: 'buxton-me',
    name: 'Buxton',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'York County',
    description:
      'Buxton is directly west of Saco with rural residential properties utilizing private well water systems, pressure tanks, and hydronic baseboard heating.',
  },
  {
    slug: 'westbrook-me',
    name: 'Westbrook',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Westbrook is adjacent to Portland along the Presumpscot River. We deliver prompt drain clearing, pipe repairs, and boiler tune-ups for single-family residences and apartment buildings.',
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
