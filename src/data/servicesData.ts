import { ServiceItem } from '../types';
import { APP_IMAGES } from '../assets/images';

export const BUSINESS_INFO = {
  name: '24Hrs Motorcycle Motorbike Car Battery & Tyre Repair Emergency Rescue Hotline',
  shortName: '24Hrs Emergency Rescue Hotline',
  phone: '+65 9181 0419',
  phoneTel: '+6591810419',
  whatsappUrl: 'https://wa.me/6591810419',
  address: 'Jurong West Street 41, Block 481, Singapore 640481',
  coverage: 'Islandwide Singapore Roadside Assistance',
  operatingHours: '24 Hours / 7 Days a Week (Including Public Holidays)',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'car-battery',
    title: 'Car Battery Jump-Start & Replacement',
    category: 'battery',
    shortDesc: 'On-the-spot vehicle diagnostic testing, heavy-duty jump-starts, and premium battery replacement for sedans, SUVs, and commercial vehicles.',
    fullDesc: 'When your car fails to crank or suffers sudden electrical depletion, our mobile recovery units arrive equipped with digital conductance testers and fresh automotive batteries. We test your alternator output, verify terminal health, and install matching high-specification batteries directly at your roadside or car park location.',
    features: [
      'Digital battery health and alternator test',
      'Wide range of maintenance-free and AGM batteries',
      'Safe jump-start with anti-surge protection',
      'Old battery disposal and terminal anti-corrosion treatment'
    ],
    vehicleTypes: ['Sedans', 'SUVs', 'Vans', 'Light Trucks', 'Hybrids'],
    imagePath: APP_IMAGES.serviceBattery
  },
  {
    id: 'motorcycle-battery',
    title: 'Motorcycle & Motorbike Battery Services',
    category: 'battery',
    shortDesc: 'Specialized 12V motorcycle battery jump-starts and on-site replacement for sportbikes, cruisers, maxi-scooters, and daily runabouts.',
    fullDesc: 'Motorcycles require precise voltage handling and compact form factors. Our mobile technicians carry dedicated motorcycle diagnostic equipment and sealed AGM/gel batteries suited for Honda, Yamaha, Kawasaki, Vespa, BMW, and diverse scooter models across Singapore roads.',
    features: [
      'Motorcycle-specific low-amperage jump-starting',
      'Factory-spec AGM and maintenance-free motorcycle batteries',
      'Fairing-safe disassembly and secure terminal tightening',
      'Voltage regulator and stator check'
    ],
    vehicleTypes: ['Class 2, 2A, 2B Bikes', 'Maxi-Scooters', 'Sportbikes', 'Cruisers'],
    imagePath: APP_IMAGES.serviceBattery
  },
  {
    id: 'car-tyre-repair',
    title: 'Car Tyre Repair & Replacement',
    category: 'tyre',
    shortDesc: 'Emergency roadside puncture repairs, string plugging, spare tyre mounting, and replacement for damaged tyres.',
    fullDesc: 'A sudden puncture on the expressway or residential carpark does not have to ruin your schedule. We provide roadside tyre inspections, safe hydraulic jacking, permanent puncture plugging, spare wheel mounting, and replacement tyres matching your vehicle specifications.',
    features: [
      'On-site tubeless puncture sealing',
      'Spare tyre installation with calibrated torque wrenching',
      'Tyre pressure verification across all four wheels',
      'Rim and bead leak inspection'
    ],
    vehicleTypes: ['Passenger Cars', 'Continental Vehicles', 'Electric Vehicles', 'MPVs'],
    imagePath: APP_IMAGES.serviceTyre
  },
  {
    id: 'motorcycle-tyre-assistance',
    title: 'Motorcycle Tyre Assistance',
    category: 'tyre',
    shortDesc: 'Roadside tubeless tyre puncture repair, valve stem replacement, and emergency motorcycle inflation anywhere in Singapore.',
    fullDesc: 'A flat tyre on a two-wheeler is an immediate safety hazard. We arrive with specialized tools to locate punctures, extract road debris, seal tubeless tyres with heavy-duty plugs, and re-inflate to manufacturer pressure guidelines so you can ride safely.',
    features: [
      'Emergency roadside tubeless puncture plugging',
      'Portable high-precision pneumatic inflation',
      'Tread depth and road hazard inspection',
      'Front and rear wheel balance check'
    ],
    vehicleTypes: ['Commuter Bikes', 'Delivery Motorbikes', 'Touring Bikes', 'Café Racers'],
    imagePath: APP_IMAGES.serviceMotorcycle
  },
  {
    id: 'emergency-rescue',
    title: 'Emergency Roadside Rescue',
    category: 'rescue',
    shortDesc: '24/7 rapid rescue assistance for stranded motorists on expressways, carparks, industrial zones, and remote locations across Singapore.',
    fullDesc: 'Whether you are stopped along the PIE, ECP, AYE, BKE, or stranded in an underground basement carpark, our 24/7 hotline coordinates direct roadside assistance to safeguard you and your vehicle with warning safety deployment and fast mechanical intervention.',
    features: [
      '24/7 emergency dispatch coverage across Singapore',
      'Roadside safety marshalling and hazard warning setup',
      'Multidisciplinary technicians equipped for both cars & bikes',
      'Direct contact with dispatch team with live updates'
    ],
    vehicleTypes: ['All Private Cars', 'Motorcycles', 'Commercial Fleets', 'Taxis & Private Hire'],
    imagePath: APP_IMAGES.hero
  },
  {
    id: 'breakdown-assistance',
    title: 'Vehicle Breakdown Assistance',
    category: 'rescue',
    shortDesc: 'Comprehensive roadside assessment for electrical failures, starter faults, blown fuses, and minor mechanical stoppages.',
    fullDesc: 'When your vehicle suddenly stalls or refuses to restart, our experienced roadside technicians conduct step-by-step triage. We check fuses, starter relays, battery terminals, and fuel line basics to get you mobile or advise the safest remedy.',
    features: [
      'Preliminary electrical and ignition triage',
      'Terminal cleaning, tightening, and relay inspection',
      'Clear, honest advice without forced parts replacements',
      'Assistance coordinate for safe onward transport if immobilised'
    ],
    vehicleTypes: ['Motorcycles', 'Cars', 'Delivery Vans'],
    imagePath: APP_IMAGES.serviceMotorcycle
  }
];
