export const metadata = {
  title: 'Services – SGM Presents'
};

interface Service {
  name: string;
  description: string;
}

const services: Service[] = [
  {
    name: 'Vox Pops',
    description: 'Street‑style interviews capturing real voices and opinions.'
  },
  {
    name: 'Challenges',
    description: 'Fun tasks and stunts that engage your audience.'
  },
  {
    name: 'Presenter‑Led Pieces',
    description: 'Short videos hosted by our charismatic talent.'
  },
  {
    name: 'Live Event Coverage',
    description: 'On‑site content from games, gigs and fights.'
  },
  {
    name: 'UGC Briefs',
    description: 'Curated user‑generated content campaigns that feel authentic.'
  },
  {
    name: 'Editing Only',
    description: 'Polished post‑production to level up your raw footage.'
  },
  {
    name: 'Livestreams',
    description: 'End‑to‑end setup for live broadcasts and watch‑alongs.'
  },
  {
    name: 'Talent Casting',
    description: 'Find the right influencers and presenters for your brief.'
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-4">Services</h2>
      <p className="mb-6">
        We offer a suite of production services designed for digital audiences. Pick what you need or work with us on a custom package.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.name} className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}