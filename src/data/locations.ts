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
    slug: 'portland-me',
    name: 'Portland',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Portland is the largest city in Maine and the primary service area for Dugan Mechanical. With its mix of historic homes, modern condominiums, and commercial properties, Portland presents a wide range of plumbing needs from pipe repair in older buildings to fixture installation in new construction.',
  },
  {
    slug: 'freeport-me',
    name: 'Freeport',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Freeport is a coastal community north of Portland known for its outlet shopping and historic charm. Homes in the area range from older farmhouses to newer developments, each with distinct plumbing considerations.',
  },
  {
    slug: 'brunswick-me',
    name: 'Brunswick',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Brunswick is home to Bowdoin College and a mix of residential neighborhoods and commercial properties. The area features a blend of historic and modern construction that requires knowledgeable plumbing service.',
  },
  {
    slug: 'lewiston-me',
    name: 'Lewiston',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Androscoggin County',
    description:
      'Lewiston is one of the largest cities in Maine and features a wide variety of residential properties. From multi-family homes to single-family houses, plumbing needs in Lewiston span repairs, installations, and maintenance.',
  },
  {
    slug: 'auburn-me',
    name: 'Auburn',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Androscoggin County',
    description:
      'Auburn sits directly across the Androscoggin River from Lewiston and shares much of the same housing stock and plumbing infrastructure. Homes here range from historic Victorians to mid-century builds.',
  },
  {
    slug: 'falmouth-me',
    name: 'Falmouth',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Falmouth is a residential community north of Portland with a mix of waterfront properties and suburban neighborhoods. Plumbing needs in Falmouth often involve both older and newer home systems.',
  },
  {
    slug: 'scarborough-me',
    name: 'Scarborough',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Scarborough is a growing community south of Portland with a mix of residential developments, commercial areas, and marshland. The variety of housing types means plumbing needs range from routine repairs to full fixture installations.',
  },
  {
    slug: 'yarmouth-me',
    name: 'Yarmouth',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Cumberland County',
    description:
      'Yarmouth is a small coastal town north of Portland known for its shipbuilding history and community events. The residential plumbing needs here include repair, maintenance, and installation services.',
  },
  {
    slug: 'bath-me',
    name: 'Bath',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Sagadahoc County',
    description:
      'Bath is a historic shipbuilding city on the Kennebec River. The area features many older homes whose plumbing systems may benefit from inspection, repair, and selective updating.',
  },
  {
    slug: 'augusta-me',
    name: 'Augusta',
    state: 'Maine',
    stateAbbrev: 'ME',
    county: 'Kennebec County',
    description:
      'Augusta is the capital of Maine and sits along the Kennebec River. The city includes a mix of government buildings, residential neighborhoods, and commercial properties, each with distinct plumbing service needs.',
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
