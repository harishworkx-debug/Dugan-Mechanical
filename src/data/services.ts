export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  symptoms: string[];
  serviceScope: string;
  customerGuidance: string;
  image: string;
  imageAlt: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'plumbing-repair',
    name: 'Plumbing Repair',
    shortDescription:
      'General plumbing repair services for leaking pipes, dripping faucets, running toilets, and other common household plumbing problems.',
    longDescription:
      'Plumbing repair covers a wide range of fixes for the pipes, fixtures, and fittings that move water through your home or business. Whether you are dealing with a persistent drip, a pipe that has developed a crack, or a fixture that no longer functions properly, a plumber can assess the situation and recommend the right repair approach. Repairs can range from simple part replacements to more involved work that requires accessing pipes behind walls or under floors.',
    symptoms: [
      'Dripping or leaking faucets and fixtures',
      'Visible water stains on walls or ceilings',
      'Unusual sounds from pipes such as banging or gurgling',
      'Low water pressure in one or more fixtures',
      'A toilet that runs continuously or will not flush properly',
    ],
    serviceScope:
      'Plumbing repair includes diagnosing the source of a problem, replacing worn or damaged parts, sealing leaks, and restoring proper function to the affected fixture or pipe. The scope of each repair depends on the location and severity of the issue.',
    customerGuidance:
      'When you call, describe what you are experiencing in as much detail as possible — which fixture is affected, when the problem started, and whether it is getting worse. This helps the plumber understand what tools and parts may be needed before arriving.',
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Plumber installing and repairing steel pipes indoors',
    faqs: [
      {
        question: 'What should I do before calling about a plumbing repair?',
        answer:
          'Note which fixture or area is affected, when the issue started, and whether you have noticed any changes in water pressure or unusual sounds. If there is active leaking, try to contain the water with a bucket or towel while you call.',
      },
      {
        question: 'Can a small leak wait, or should I call right away?',
        answer:
          'Even a small leak can cause water damage over time. It is a good idea to call sooner rather than later so the problem can be assessed before it worsens.',
      },
    ],
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    shortDescription:
      'Drain cleaning services to clear slow-moving or fully clogged drains in sinks, tubs, showers, and floor drains.',
    longDescription:
      'Drain cleaning addresses blockages and buildup in the pipes that carry wastewater away from your fixtures. Over time, drains can become restricted by grease, soap residue, hair, food particles, and other debris. A plumber can clear these blockages using professional tools and techniques, restoring proper flow and helping prevent future clogs.',
    symptoms: [
      'Water draining slowly from a sink, tub, or shower',
      'Gurgling sounds when water goes down the drain',
      'Water backing up into a sink or tub',
      'Unpleasant odors coming from a drain',
      'Multiple fixtures draining slowly at the same time',
    ],
    serviceScope:
      'Drain cleaning involves identifying the location and cause of the blockage, clearing the obstruction, and flushing the line to restore normal flow. The method used depends on the type of drain and the nature of the clog.',
    customerGuidance:
      'Let the plumber know which drains are affected and whether the problem affects a single fixture or multiple drains. If you have already tried a plunger or store-bought cleaner, mention that as well.',
    image: 'https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Chrome sink drain with water droplets',
    faqs: [
      {
        question: 'When should I call about a slow drain?',
        answer:
          'If a drain has been slow for more than a few days, or if multiple drains in your home are slow at the same time, it is worth calling to have the issue assessed. A slow drain can indicate a deeper blockage in the line.',
      },
      {
        question: 'Should I use chemical drain cleaners before calling?',
        answer:
          'Chemical cleaners can sometimes provide temporary relief, but they may not address the root cause of the clog and can be harsh on older pipes. If the problem returns, calling a plumber is the best next step.',
      },
    ],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection',
    shortDescription:
      'Leak detection services to locate hidden water leaks in walls, slabs, underground pipes, and other hard-to-see areas.',
    longDescription:
      'Not all leaks are immediately visible. Water can travel along pipes, pool behind walls, or seep beneath floors before any sign appears on the surface. Leak detection is the process of pinpointing the source of a hidden leak so that repairs can be made with minimal disruption to your property. A plumber uses specialized methods and experience to narrow down the location before opening up walls or floors.',
    symptoms: [
      'An unexplained increase in your water bill',
      'Damp or discolored spots on walls, ceilings, or floors',
      'The sound of running water when no fixtures are in use',
      'A musty or moldy smell in a specific area',
      'Warm spots on the floor that could indicate a hot water line leak',
    ],
    serviceScope:
      'Leak detection involves inspecting the area, checking water meter behavior, and using diagnostic techniques to locate the source of a hidden leak. Once the leak is found, the plumber can discuss repair options.',
    customerGuidance:
      'Share any observations about where you have noticed dampness, sounds, or odors. If you have compared recent water bills and noticed a jump, mention that as well. The more information you can provide, the faster the source can be located.',
    image: 'https://images.pexels.com/photos/18274115/pexels-photo-18274115.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Leaking water pipe in a residential setting',
    faqs: [
      {
        question: 'What information should I provide when describing a leak?',
        answer:
          'Describe where you first noticed water or dampness, when it started, whether it is continuous or intermittent, and whether you have noticed any changes in water pressure or your water bill.',
      },
      {
        question: 'Can a leak be found without tearing open walls?',
        answer:
          'A plumber can often narrow down the location of a leak using diagnostic methods before any opening is needed. In some cases, a small access point may be necessary to confirm and repair the leak.',
      },
    ],
  },
  {
    slug: 'pipe-repair',
    name: 'Pipe Repair',
    shortDescription:
      'Pipe repair services for cracked, corroded, frozen, or damaged water and drain pipes throughout your property.',
    longDescription:
      'Pipes can develop problems for many reasons — age, corrosion, freezing, shifting ground, or physical damage. Pipe repair addresses leaks, cracks, and structural issues in the pipes that supply water to your fixtures or carry wastewater away. Depending on the extent of the damage, a repair may involve replacing a section of pipe, sealing a joint, or recommending a broader replacement if the pipe has reached the end of its service life.',
    symptoms: [
      'Visible cracks, holes, or corrosion on exposed pipes',
      'Water pooling near pipe runs or along walls',
      'A sudden drop in water pressure',
      'Discolored or rusty water from taps',
      'Frozen pipes during cold Maine winters',
    ],
    serviceScope:
      'Pipe repair includes identifying the damaged section, isolating the water supply, replacing or sealing the affected pipe, and verifying that the repair holds under normal pressure. The approach depends on the pipe material and location.',
    customerGuidance:
      'If you suspect a frozen pipe, do not try to thaw it with an open flame. Call a plumber and, if possible, shut off the water supply to that section. For other pipe issues, describe the pipe material if you know it and where the damage appears to be.',
    image: 'https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Worker fixing pipes with tools in an indoor environment',
    faqs: [
      {
        question: 'What should I do if a pipe freezes?',
        answer:
          'Shut off the water supply to that area if you can, and do not use an open flame or high heat to thaw the pipe. Call a plumber to safely assess and address the situation before the pipe bursts.',
      },
      {
        question: 'Can a damaged pipe section be repaired, or does the whole pipe need replacing?',
        answer:
          'In many cases, a damaged section can be repaired or replaced without replacing the entire pipe. The plumber can assess the condition of the surrounding pipe and recommend the most appropriate approach.',
      },
    ],
  },
  {
    slug: 'water-heater-repair',
    name: 'Water Heater Repair',
    shortDescription:
      'Water heater repair services for units that produce no hot water, not enough hot water, or show signs of leaking or malfunction.',
    longDescription:
      'Water heaters are essential for daily comfort, and when they stop working properly, the disruption is immediate. Water heater repair addresses problems with tank-style and tankless units, including heating element failures, thermostat issues, pilot light problems, and leaks. A plumber can diagnose whether the unit can be repaired or whether replacement is the more practical option.',
    symptoms: [
      'No hot water or water that runs cold quickly',
      'Water that is too hot or fluctuates in temperature',
      'Rumbling or popping sounds from the tank',
      'Water pooling near the base of the unit',
      'A pilot light that will not stay lit',
    ],
    serviceScope:
      'Water heater repair includes diagnosing the malfunction, replacing faulty components such as thermostats or heating elements, addressing pilot light and gas valve issues, and checking for leaks. If the unit is beyond repair, the plumber can discuss replacement options.',
    customerGuidance:
      'Tell the plumber whether your unit is gas or electric, tank or tankless, and approximately how old it is. Describe what happens when you turn on the hot water — does it start hot and go cold, or is it cold from the beginning?',
    image: 'https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Industrial plumbing system with pressure gauge and steel pipes',
    faqs: [
      {
        question: 'Why does my water heater run out of hot water so quickly?',
        answer:
          'This can be caused by a failing heating element, a faulty thermostat, or sediment buildup in the tank. A plumber can inspect the unit and determine which component is causing the problem.',
      },
      {
        question: 'Should I repair or replace my water heater?',
        answer:
          'If the unit is relatively new and the problem is a single component, repair is often the right choice. If the tank is leaking or the unit is nearing the end of its typical service life, replacement may be more cost-effective. A plumber can help you weigh the options.',
      },
    ],
  },
  {
    slug: 'water-heater-installation',
    name: 'Water Heater Installation',
    shortDescription:
      'Water heater installation services for new tank-style and tankless units, including removal of old equipment and proper hookup.',
    longDescription:
      'Installing a new water heater involves selecting the right unit for your household needs, safely removing the old equipment, connecting water and gas or electric lines, and verifying that the new unit operates correctly. Proper installation is important for safety, efficiency, and the longevity of the unit. A plumber can help you understand the differences between tank and tankless options and what size unit is appropriate.',
    symptoms: [
      'Your current water heater is leaking and cannot be repaired',
      'Hot water runs out before everyone in the household has showered',
      'The existing unit is old and requires frequent repairs',
      'You are renovating and want to upgrade to a more efficient unit',
      'You are switching from tank to tankless or vice versa',
    ],
    serviceScope:
      'Water heater installation includes disconnecting and removing the old unit, positioning and connecting the new unit, running water and fuel lines, testing for leaks and proper operation, and making any needed adjustments to temperature settings.',
    customerGuidance:
      'Consider how many people live in your household and their typical hot water usage patterns. Let the plumber know whether you want to stick with the same type of unit or explore a different option like tankless.',
    image: 'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician installing a heating system in an indoor setting',
    faqs: [
      {
        question: 'How do I know what size water heater I need?',
        answer:
          'The right size depends on the number of people in your household and your peak hot water usage. A plumber can help you calculate the appropriate capacity so you do not run out of hot water or pay to heat more than you need.',
      },
      {
        question: 'Is a tankless water heater worth considering?',
        answer:
          'Tankless units heat water on demand, which means they do not run out and can be more energy-efficient. They may have a higher upfront cost. A plumber can explain the trade-offs and help you decide what fits your situation.',
      },
    ],
  },
  {
    slug: 'fixture-installation',
    name: 'Fixture Installation',
    shortDescription:
      'Fixture installation services for sinks, faucets, toilets, showerheads, and other plumbing fixtures in kitchens and bathrooms.',
    longDescription:
      'Installing new plumbing fixtures is one of the most common ways to update a kitchen or bathroom. Fixture installation covers everything from swapping out an old faucet to installing a new sink, toilet, or shower system. Proper installation ensures that connections are watertight, drainage is correct, and the fixture functions as intended without leaks or pressure issues.',
    symptoms: [
      'You are remodeling a kitchen or bathroom',
      'An old fixture is cracked, stained, or beyond repair',
      'You want to upgrade to a more efficient or modern fixture',
      'A new sink or toilet needs to be connected to existing plumbing',
      'You are replacing a showerhead or faucet that no longer works properly',
    ],
    serviceScope:
      'Fixture installation includes removing the old fixture if needed, preparing the plumbing connections, installing the new fixture, sealing all joints and connections, and testing for leaks and proper function.',
    customerGuidance:
      'Have the new fixture ready and let the plumber know the brand and model if possible. If the installation is part of a renovation, describe what else is being changed so the plumber can plan the connections accordingly.',
    image: 'https://images.pexels.com/photos/12196323/pexels-photo-12196323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Sleek modern bathroom faucet',
    faqs: [
      {
        question: 'Can I supply my own fixture for installation?',
        answer:
          'In most cases, yes. Let the plumber know the brand and model ahead of time so they can confirm it is compatible with your existing plumbing and bring any additional parts that may be needed.',
      },
      {
        question: 'How long does a typical fixture installation take?',
        answer:
          'A straightforward faucet or showerhead replacement can be quick, while a sink or toilet installation that involves adjusting connections may take longer. The plumber can give you a better idea once they understand the scope.',
      },
    ],
  },
  {
    slug: 'toilet-repair',
    name: 'Toilet Repair',
    shortDescription:
      'Toilet repair services for running toilets, weak flushes, leaks, and other toilet problems that waste water or cause inconvenience.',
    longDescription:
      'Toilets are one of the most frequently used fixtures in any home, and when they malfunction, the problem is hard to ignore. Toilet repair addresses issues such as continuous running, weak or incomplete flushes, leaks from the base or tank, and problems with the fill valve or flapper. Many toilet problems can be fixed by replacing internal components without needing to replace the entire unit.',
    symptoms: [
      'A toilet that runs continuously or cycles on by itself',
      'A weak or incomplete flush that leaves waste behind',
      'Water pooling around the base of the toilet',
      'A toilet that rocks or feels loose when sat on',
      'A handle that must be held down or jiggled to flush',
    ],
    serviceScope:
      'Toilet repair includes diagnosing the problem, replacing worn flappers, fill valves, or flush mechanisms, resealing the base if needed, and checking for leaks. If the toilet is cracked or the issue cannot be fixed with component replacement, a new toilet may be recommended.',
    customerGuidance:
      'Describe what happens when you flush — does the water keep running, does the flush seem weak, or do you see water outside the bowl? Mention how long the problem has been occurring and whether it is getting worse.',
    image: 'https://images.pexels.com/photos/9562388/pexels-photo-9562388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern dual flush toilet with chrome button',
    faqs: [
      {
        question: 'Why does my toilet keep running after it flushes?',
        answer:
          'The most common cause is a worn flapper that does not seal properly, allowing water to continuously flow from the tank into the bowl. A plumber can replace the flapper and check the fill valve and overflow tube.',
      },
      {
        question: 'Should I repair or replace a leaking toilet?',
        answer:
          'If the leak is coming from a worn wax ring or a faulty component, repair is usually straightforward. If the tank or bowl is cracked, replacement is necessary. A plumber can assess the situation and recommend the best option.',
      },
    ],
  },
  {
    slug: 'faucet-repair-installation',
    name: 'Faucet Repair and Installation',
    shortDescription:
      'Faucet repair and installation services for kitchen and bathroom faucets, including leaks, drips, and new faucet upgrades.',
    longDescription:
      'Faucets are used dozens of times a day, and even a small drip can waste a significant amount of water over time. Faucet repair addresses leaking handles, dripping spouts, low pressure, and temperature control issues. Faucet installation covers removing an old faucet and connecting a new one, whether as a replacement for a failing unit or as part of a kitchen or bathroom update.',
    symptoms: [
      'A faucet that drips even when turned off',
      'Reduced water pressure from a single faucet',
      'A handle that is stiff, loose, or difficult to turn',
      'Water leaking from the base of the faucet or under the sink',
      'You want to replace an old faucet with a new model',
    ],
    serviceScope:
      'Faucet repair includes replacing worn cartridges, O-rings, or washers, tightening connections, and checking for leaks. Faucet installation includes disconnecting and removing the old unit, installing the new faucet, connecting supply lines, and verifying watertight seals.',
    customerGuidance:
      'Let the plumber know the faucet brand if possible and whether the issue is a drip, low pressure, or a handle problem. For new installations, have the faucet available and describe the sink configuration.',
    image: 'https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern chrome shower faucet on white tiled wall',
    faqs: [
      {
        question: 'Why is my faucet dripping even when it is turned off?',
        answer:
          'A dripping faucet usually means an internal seal — such as a cartridge, O-ring, or washer — has worn out and is no longer creating a watertight seal. A plumber can identify which part needs replacing.',
      },
      {
        question: 'Can I replace my kitchen faucet with any new model?',
        answer:
          'Most kitchen sinks have standard mounting configurations, but the number of holes and the spacing can vary. Check your sink before purchasing a new faucet, or let the plumber know your sink configuration so they can confirm compatibility.',
      },
    ],
  },
  {
    slug: 'sewer-line-services',
    name: 'Sewer Line Services',
    shortDescription:
      'Sewer line services for main line clogs, backups, and damage to the underground pipe that connects your property to the municipal sewer system.',
    longDescription:
      'The sewer line is the underground pipe that carries all wastewater from your home to the municipal sewer system. Problems with the sewer line can affect every drain in your house. Sewer line services address clogs, tree root intrusion, cracks, and collapses that can cause backups and slow drainage throughout the property. Because the line is buried, diagnosing sewer line problems often requires specialized equipment and experience.',
    symptoms: [
      'Multiple drains backing up or draining slowly at the same time',
      'A gurgling sound from toilets or drains when water is used elsewhere',
      'Sewage odor coming from drains or from the yard',
      'Lush or unusually green patches of grass over the sewer line path',
      'Water backing up into tubs or showers when the washing machine drains',
    ],
    serviceScope:
      'Sewer line services include diagnosing the location and cause of the problem, clearing blockages, and discussing repair or replacement options if the line is cracked, collapsed, or infiltrated by roots. The approach depends on the severity and location of the issue.',
    customerGuidance:
      'Describe which drains are affected and whether the problem started suddenly or has been building over time. If you have had sewer line issues before, mention that as well. The plumber may need to access a cleanout to inspect the line.',
    image: 'https://images.pexels.com/photos/17375718/pexels-photo-17375718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Stacked concrete pipes in an outdoor storage area',
    faqs: [
      {
        question: 'What causes sewer line problems?',
        answer:
          'Common causes include tree roots growing into pipe joints, age-related cracking or collapse, grease buildup, and debris that should not have been flushed. A plumber can identify the specific cause affecting your line.',
      },
      {
        question: 'How can I tell if the problem is in my main sewer line?',
        answer:
          'If multiple drains in different parts of your home are slow or backing up at the same time, the problem may be in the main sewer line rather than an individual drain. A plumber can confirm this during an inspection.',
      },
    ],
  },
];

export const primaryLocationSlug = 'portland-me';

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
