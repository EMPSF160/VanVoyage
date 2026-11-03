/**
 * VanVoyage Master Data Store
 * Adventure Travel • Campervan • Overlanding
 */

const VANVOYAGE_DATA = {
  brand: {
    name: "VanVoyage",
    tagline: "Adventure Beyond the Ordinary.",
    phone: "+1 (800) 584-VOYAGE",
    email: "adventures@vanvoyage.com",
    address: "742 Overland Ridge Way, Boulder, CO 80302",
    depots: [
      { name: "Boulder Overland Hub (HQ)", city: "Boulder, CO", coords: [40.0150, -105.2705] },
      { name: "Pacific Coast Depot", city: "Portland, OR", coords: [45.5152, -122.6784] },
      { name: "High Sierra Station", city: "Lake Tahoe, CA", coords: [39.0968, -120.0324] },
      { name: "Red Rock Gateway", city: "Moab, UT", coords: [38.5733, -109.5498] }
    ]
  },

  vehicles: [
    {
      id: "vv-nomad-4x4",
      name: "Nomad Sprinter 4x4 Overland",
      category: "overland",
      categoryLabel: "4x4 Overlanding",
      tagline: "High-clearance Mercedes 4WD beast built for off-grid backcountry expeditions.",
      dailyRate: 235,
      passengers: 4,
      sleeps: 4,
      transmission: "Automatic 4x4",
      fuel: "Turbo Diesel",
      drive: "4WD Hi/Lo Range",
      length: "5.9m / 19.5ft",
      featured: true,
      rating: 4.98,
      reviewsCount: 64,
      image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["BFGoodrich KO2 All-Terrain", "400W Off-Grid Solar", "Webasto Diesel Heater", "Hot Outdoor Shower", "Starlink Mount", "Induction Dual Stove"],
      specifications: {
        engine: "3.0L V6 Turbo Diesel (188 HP)",
        fuelCapacity: "24.5 Gal / 93 L (500+ mile range)",
        freshWater: "30 Gal / 115 L heated tank",
        electrical: "400Ah Lithium LiFePO4 + 3000W Inverter",
        clearance: "10.8 inches with skid plates",
        recovery: "Warn VR EVO 12-S Winch + MaxTrax Boards"
      },
      amenities: [
        "Queen size ergonomic memory mattress",
        "Pop-top penthouse second bunk (sleeps 2)",
        "85L Dometic dual-zone fridge & freezer",
        "Integrated induction cooktop & prep sink",
        "Casette chemical toilet + hot exterior shower",
        "Alu-Cab 270-degree awning with LED camp lights",
        "Yeti cooler & camp cooking chef set included",
        "Front swivel captain seats with bamboo dining table"
      ]
    },
    {
      id: "vv-alpine-escape",
      name: "Alpine Horizon California Camper",
      category: "campervan",
      categoryLabel: "Campervan",
      tagline: "Agile, iconic pop-top camper engineered for winding mountain switchbacks and forest stays.",
      dailyRate: 165,
      passengers: 4,
      sleeps: 4,
      transmission: "Automatic",
      fuel: "Efficiency Diesel",
      drive: "AWD Intelligent",
      length: "5.0m / 16.4ft",
      featured: true,
      rating: 4.95,
      reviewsCount: 89,
      image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1533873942090-d4c9bc013d33?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Electro-Hydraulic Pop-Top", "Integrated Kitchenette", "Dual Swivel Seats", "Auxiliary Night Heater", "Fiamma Bike Rack", "USB-C Fast Ports"],
      specifications: {
        engine: "2.0L BiTDI Clean Diesel (150 HP)",
        fuelCapacity: "18.5 Gal / 70 L (600 mile highway)",
        freshWater: "10 Gal / 38 L internal tank",
        electrical: "200Ah Auxiliary AGM + 150W Solar panel",
        clearance: "7.8 inches",
        recovery: "Standard recovery eye & traction pads"
      },
      amenities: [
        "Upper roof panoramic bed with slatted frame",
        "Lower folding rear lounge bed",
        "2-burner gas stove with piezo ignition",
        "42L compressor cooler box",
        "Outdoor camping table & 2 folding chairs stowed in tailgate",
        "Roll-out side awning with ground stakes",
        "Blackout privacy magnetic roller blinds on all windows"
      ]
    },
    {
      id: "vv-grand-sanctuary",
      name: "Grand Sanctuary Luxury RV",
      category: "luxury-rv",
      categoryLabel: "Luxury RV",
      tagline: "Bespoke hotel-suite craftsmanship on wheels with private master bedroom and walk-in shower.",
      dailyRate: 310,
      passengers: 6,
      sleeps: 6,
      transmission: "Automatic",
      fuel: "Diesel",
      drive: "Rear-Wheel Heavy Chassis",
      length: "7.4m / 24.3ft",
      featured: true,
      rating: 4.99,
      reviewsCount: 42,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Private King Bed Suite", "Walk-In Hot Shower & WC", "Dual AC & Radiant Heating", "Full Corian Kitchen", "Nespresso Espresso Bar", "Smart 4K Entertainment"],
      specifications: {
        engine: "Mercedes-Benz 3.0L V6 Turbo Diesel",
        fuelCapacity: "26 Gal / 98 L",
        freshWater: "42 Gal / 160 L insulated tank",
        electrical: "600Ah Lithium + 600W Solar Roof + Onan Quiet Generator",
        clearance: "8.5 inches",
        recovery: "Hydraulic automatic leveling jacks"
      },
      amenities: [
        "Walk-around King bed with organic cotton sheets",
        "Drop-down electric overhead double bed",
        "Enclosed porcelain toilet & glass door hot shower",
        "Convection microwave & 3-burner gas range",
        "150L 3-way automatic refrigerator / freezer",
        "Wine cellar rack & stainless barware kit",
        "Power patio awning with wind auto-retract sensor",
        "External hot shower connection and gear wash"
      ]
    },
    {
      id: "vv-ridgeback-gladiator",
      name: "Ridgeback Gladiator 4x4 Expedition",
      category: "overland",
      categoryLabel: "4x4 Overlanding",
      tagline: "Unstoppable Jeep Gladiator rig with carbon hardshell roof tent and rugged trail clearance.",
      dailyRate: 215,
      passengers: 5,
      sleeps: 3,
      transmission: "Heavy-Duty 8-Speed Auto",
      fuel: "V6 EcoDiesel",
      drive: "Rock-Trac 4x4 with Tru-Lok",
      length: "5.5m / 18.2ft",
      featured: false,
      rating: 4.97,
      reviewsCount: 51,
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Fox 2.5 Factory Suspension", "Alu-Cab Gen 3.1 Hard Tent", "Slide-Out Camp Kitchen", "Rotopax Fuel & Water", "Rigid LED Lightbars", "Tire Air-Down Kit"],
      specifications: {
        engine: "3.0L EcoDiesel V6 (442 lb-ft Torque)",
        fuelCapacity: "19 Gal + 10 Gal Aux Rotopax",
        freshWater: "18 Gal with 12V pump",
        electrical: "100Ah Lithium + 120W Hood Solar",
        clearance: "11.6 inches / 35-inch mud terrains",
        recovery: "Warn 10,000 lb synthetic winch + Hi-Lift Jack"
      },
      amenities: [
        "High-density insulated mattress inside Alu-Cab roof tent",
        "Camp Chef dual burner burner slide-out station",
        "ARB 50L Zero portable fridge/freezer",
        "270 Shadow Awning covering side and rear",
        "Heavy-duty recovery gear bag & tire deflators",
        "Portable folding fire pit & grill grate"
      ]
    },
    {
      id: "vv-driftwood-transit",
      name: "Driftwood Transit Cruiser",
      category: "campervan",
      categoryLabel: "Campervan",
      tagline: "Handcrafted cedar interior, queen bed, and minimalist Scandinavian aesthetic for couples.",
      dailyRate: 155,
      passengers: 2,
      sleeps: 2,
      transmission: "10-Speed Automatic",
      fuel: "EcoBoost Gasoline",
      drive: "Intelligent AWD",
      length: "5.5m / 18.0ft",
      featured: false,
      rating: 4.93,
      reviewsCount: 76,
      image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Solid Cedar Paneling", "Fixed Queen Bed", "Dometic CRX65 Fridge", "Custom Copper Sink", "Roof Deck with Stargazing Mat", "300W SunPower Solar"],
      specifications: {
        engine: "3.5L EcoBoost Twin-Turbo V6 (310 HP)",
        fuelCapacity: "25 Gal / 95 L",
        freshWater: "25 Gal internal fresh water",
        electrical: "300Ah Renogy Lithium + 2000W Inverter",
        clearance: "8.2 inches AWD",
        recovery: "Tow hooks & emergency jump starter"
      },
      amenities: [
        "Fixed full-time Queen memory mattress (no folding needed)",
        "Under-bed garage storage for 2 mountain bikes & luggage",
        "Custom solid oak butcher-block pull-out table",
        "Tile backsplash kitchenette with deep copper basin",
        "MaxxAir 10-speed reversible ventilation fan with remote",
        "Fairy ambient dimmable brass reading lights"
      ]
    },
    {
      id: "vv-solitude-monarch",
      name: "Monarch Vista All-Season Motorhome",
      category: "luxury-rv",
      categoryLabel: "Luxury RV",
      tagline: "Four-season thermal insulation with panoramic bay windows and automated slide-out salon.",
      dailyRate: 345,
      passengers: 6,
      sleeps: 6,
      transmission: "Automatic",
      fuel: "Diesel",
      drive: "Dual Rear Axle",
      length: "8.1m / 26.5ft",
      featured: false,
      rating: 4.98,
      reviewsCount: 39,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Hydronic Underfloor Heat", "Electric Slide-Out Living Room", "Washer/Dryer Combo", "Full Induction Kitchen", "Dry Bath with Rain Shower", "Lithium Off-Grid Bank"],
      specifications: {
        engine: "Cummins 6.7L Turbo Diesel",
        fuelCapacity: "40 Gal / 150 L",
        freshWater: "60 Gal / 227 L heated winter tanks",
        electrical: "800Ah Heated Lithium + 800W Solar + Generator",
        clearance: "9.2 inches",
        recovery: "Automatic hydraulic 4-point leveling"
      },
      amenities: [
        "Master stateroom with residential memory mattress",
        "Spacious panoramic dinette converts into second double bed",
        "Ceramic tile bathroom with hot heated towel rail",
        "Dual-zone whisper quiet inverter air conditioning",
        "Starlink High Performance satellite terminal onboard",
        "Exterior entertainment center with 43-inch smart screen"
      ]
    },
    {
      id: "vv-tundra-rebel",
      name: "Tundra Rebel 4x4 Pop-Up Rig",
      category: "overland",
      categoryLabel: "4x4 Overlanding",
      tagline: "Rugged Toyota V8 platform with composite lightweight pop-up flatbed camper.",
      dailyRate: 195,
      passengers: 4,
      sleeps: 3,
      transmission: "6-Speed Automatic",
      fuel: "Gasoline V8",
      drive: "Part-Time 4WD with A-TRAC",
      length: "5.8m / 19.0ft",
      featured: false,
      rating: 4.94,
      reviewsCount: 47,
      image: "https://images.unsplash.com/photo-1533873942090-d4c9bc013d33?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1533873942090-d4c9bc013d33?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Old Man Emu BP-51 Shocks", "Four Wheel Campers Pop-Up", "Truma Combi Heating", "Dual Jerry Cans", "CBI Offroad Steel Bumpers", "Air Compressor Onboard"],
      specifications: {
        engine: "5.7L i-FORCE V8 (381 HP)",
        fuelCapacity: "38 Gal Long Range Tank",
        freshWater: "20 Gal insulated tank",
        electrical: "200Ah Lithium + 200W Roof Solar",
        clearance: "11.2 inches",
        recovery: "ComeUp 9.5rs Winch + Factor 55 Shackle"
      },
      amenities: [
        "King slide-out cabover sleeping deck",
        "Roll-over couch that folds into secondary bed",
        "Two-burner stove & flush glass sink",
        "External rear shower curtain and instant hot water",
        "Built-in twin ARB on-board air compressor for airing up tires"
      ]
    },
    {
      id: "vv-pacific-crest",
      name: "Pacific Crest Classic Van",
      category: "campervan",
      categoryLabel: "Campervan",
      tagline: "Easy to drive, parks in standard car parking spots, ideal for first-time road trippers.",
      dailyRate: 140,
      passengers: 2,
      sleeps: 2,
      transmission: "Automatic",
      fuel: "Gasoline",
      drive: "FWD",
      length: "4.9m / 16.0ft",
      featured: false,
      rating: 4.91,
      reviewsCount: 95,
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Easy Maneuverability", "Rear Pullout Kitchen", "Solar Charging", "Comfortable Double Bed", "Bluetooth Sound", "USB Stations"],
      specifications: {
        engine: "2.4L 4-Cylinder (178 HP)",
        fuelCapacity: "16 Gal (28 MPG Highway)",
        freshWater: "8 Gal portable system",
        electrical: "100Ah Deep Cycle + 100W Solar",
        clearance: "7.2 inches",
        recovery: "Standard emergency kit"
      },
      amenities: [
        "Fold-flat double bed with fresh linen sets",
        "Slide-out kitchen drawer with butane burner",
        "Rotomolded insulated cooler",
        "LED interior mood strip lighting",
        "Magnetic bug screens for side and rear door openings"
      ]
    },
    {
      id: "vv-glacier-cruiser",
      name: "Glacier Peak Class C Executive",
      category: "luxury-rv",
      categoryLabel: "Luxury RV",
      tagline: "Family-ready luxury tourer with rear master suite, spacious dinette, and large gear bay.",
      dailyRate: 290,
      passengers: 6,
      sleeps: 5,
      transmission: "6-Speed TorqShift Auto",
      fuel: "V8 Gas",
      drive: "RWD Dually",
      length: "7.6m / 25.0ft",
      featured: false,
      rating: 4.96,
      reviewsCount: 38,
      image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Over-Cab Bunk", "Master Queen Bedroom", "Full Enclosed Bathroom", "Dual Slide-Outs", "Outdoor Kitchen Bar", "Solar Smart Monitoring"],
      specifications: {
        engine: "7.3L V8 Godzilla Engine",
        fuelCapacity: "55 Gal",
        freshWater: "44 Gal",
        electrical: "400Ah Lithium + 4.0kW Generator + 400W Solar",
        clearance: "8.9 inches",
        recovery: "Electric automatic stabilizers"
      },
      amenities: [
        "Master Queen bedroom with pocket privacy door",
        "Large over-cab loft bed with safety net (ideal for kids or adults)",
        "3-burner stovetop, microwave & gas oven",
        "Stand-alone shower stall with skylight",
        "Exterior camp kitchen with mini-fridge and pull-out griddle"
      ]
    }
  ],

  destinations: [
    {
      id: "dest-rockies",
      title: "Rocky Mountain High Alpine Loop",
      region: "Colorado & Wyoming",
      type: "Mountain Road Trip",
      badge: "High Altitude",
      distance: "840 miles / 1,350 km",
      duration: "7 - 10 Days",
      difficulty: "Moderate",
      bestSeason: "June - October",
      elevation: "12,183 ft max",
      recommendedCategory: "overland",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      description: "Scale breathtaking continental divide passes, camp beside turquoise glacier-melt alpine lakes, and encounter elk herds beneath the jagged peaks of the Grand Tetons.",
      highlights: [
        "Trail Ridge Road (highest continuous paved road in US)",
        "Dispersed wild camping spots in Arapaho National Forest",
        "Grand Teton Jenny Lake alpine loop",
        "Thermal springs in Steamboat & Cottonwood"
      ],
      itinerary: [
        { day: "Day 1-2", title: "Denver Depot to Rocky Mountain National Park", desc: "Pick up your VanVoyage camper at our Boulder HQ. Ascend through Big Thompson Canyon and settle into Moraine Park campsite." },
        { day: "Day 3-4", title: "Continental Divide to Steamboat Springs", desc: "Cross Milner Pass at 10,758 ft. Soak in Strawberry Park Natural Hot Springs under the starry night sky." },
        { day: "Day 5-7", title: "Wind River Range & Grand Tetons", desc: "Drive the scenic Wyoming highway into Jackson Hole. Unfurl your awning at Shadow Mountain with front-row views of the Cathedral Group." },
        { day: "Day 8-10", title: "Yellowstone Basin & Return Loop", desc: "Explore geyser basins and Lamar Valley wildlife before rolling smoothly back to Boulder." }
      ]
    },
    {
      id: "dest-pacific-coast",
      title: "Wild Pacific Coast & Ancient Redwoods",
      region: "California & Oregon",
      type: "Coastal Route",
      badge: "Scenic Ocean",
      distance: "920 miles / 1,480 km",
      duration: "8 - 12 Days",
      difficulty: "Easy Scenic",
      bestSeason: "Year-Round (Best May - October)",
      elevation: "Sea Level - 2,500 ft",
      recommendedCategory: "campervan",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      description: "Carve through misty ocean bluffs along Highway 101, wander through thousand-year-old redwood giants, and watch sunsets over pounding Pacific breakers from your van bed.",
      highlights: [
        "Big Sur oceanfront cliffside sunset pullouts",
        "Avenue of the Giants redwood canopy drives",
        "Oregon coast sea stacks and Dungeness crab shacks",
        "Cannon Beach & Ecola State Park overlooks"
      ],
      itinerary: [
        { day: "Day 1-3", title: "San Francisco to Big Sur Coast", desc: "Cross the Golden Gate and wind along Highway 1. Park at Pfeiffer Big Sur State Park nestled in coastal pines." },
        { day: "Day 4-6", title: "Mendocino to Redwood National Park", desc: "Cruise through bohemian coastal towns, then sleep beneath 300-foot ancient coastal redwoods at Jedediah Smith camp." },
        { day: "Day 7-9", title: "Southern Oregon Dunes & Haystack Rock", desc: "Experience wild coastal beaches, driftwood campfires, and the rugged capes of the Oregon coastline." },
        { day: "Day 10-12", title: "Columbia River Gorge to Portland Depot", desc: "Follow dramatic waterfall corridors before returning the camper at our Pacific Northwest station." }
      ]
    },
    {
      id: "dest-red-rock-moab",
      title: "Utah Red Rock & Canyonlands Overland",
      region: "Utah & Arizona",
      type: "Overlanding Trail",
      badge: "4x4 Wilderness",
      distance: "650 miles / 1,045 km",
      duration: "6 - 8 Days",
      difficulty: "Rugged 4x4",
      bestSeason: "March - May & September - November",
      elevation: "4,000 - 8,500 ft",
      recommendedCategory: "overland",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      description: "Traverse crimson slickrock, secret canyon washes, and dark-sky wilderness preserves in America's desert overlanding playground.",
      highlights: [
        "White Rim Trail off-grid expedition route (4x4 required)",
        "BLM free dispersed camping with infinite galaxy stargazing",
        "Monument Valley iconic sandstone buttes",
        "Dead Horse Point sunrise panoramic cliff overlook"
      ],
      itinerary: [
        { day: "Day 1-2", title: "Moab Gateway & Arches Wilderness", desc: "Gear check at Moab Depot. Deflate tires to trail pressure and explore Klondike Bluffs backcountry." },
        { day: "Day 3-4", title: "Island in the Sky to Shafer Switchbacks", desc: "Descend the legendary Shafer Trail hairpin dirt grades down into the Colorado River basin." },
        { day: "Day 5-6", title: "San Rafael Swell & Goblin Valley", desc: "Navigate remote sandstone slot canyons and camp alongside ancient petroglyph cliffs." },
        { day: "Day 7-8", title: "Capitol Reef to Boulder Highway 12", desc: "Climb scenic Byway 12 through grand staircase plateaus before returning with indelible desert memories." }
      ]
    },
    {
      id: "dest-black-forest",
      title: "Alpine Lakes & Deep Pine Forest Traverse",
      region: "Montana & Idaho",
      type: "Forest Camping",
      badge: "Deep Wilderness",
      distance: "720 miles / 1,160 km",
      duration: "7 - 9 Days",
      difficulty: "Moderate",
      bestSeason: "June - September",
      elevation: "3,200 - 7,800 ft",
      recommendedCategory: "campervan",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      description: "Escape to fragrant evergreen corridors, crystal-clear glacial swimming coves, and quiet riverfront boondocking spots far off the beaten path.",
      highlights: [
        "Glacier National Park Going-to-the-Sun Road",
        "Flathead Lake paddleboard & van camping",
        "Bitterroot Valley hot springs and cider mills",
        "Sawtooth Mountain backcountry forest roads"
      ],
      itinerary: [
        { day: "Day 1-2", title: "Whitefish to Lake McDonald", desc: "Launch your journey through pine-scented valleys and setup your outdoor kitchen alongside turquoise waters." },
        { day: "Day 3-5", title: "Flathead National Forest Dispersed Stays", desc: "Utilize your off-grid solar setup to enjoy complete solitude surrounded by huckleberry meadows." },
        { day: "Day 6-7", title: "Seeley-Swan Lake Chain", desc: "Lakeside campfire cooking, morning coffee on the pop-up roof deck, and evening kayaking." },
        { day: "Day 8-9", title: "Bitterroot River Valley & Departure", desc: "Scenic mountain pass run with stopovers at mountain bakeries before returning to depot." }
      ]
    },
    {
      id: "dest-patagonia",
      title: "Southern Fjords & Glacial Steppe Odyssey",
      region: "International Partner Route",
      type: "Overlanding Trail",
      badge: "Expedition Grade",
      distance: "1,200 miles / 1,930 km",
      duration: "12 - 16 Days",
      difficulty: "Rugged 4x4",
      bestSeason: "November - March",
      elevation: "Sea Level - 4,800 ft",
      recommendedCategory: "overland",
      image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80",
      description: "The ultimate edge-of-the-world overland expedition across sweeping pampas, hanging glaciers, and granite towers.",
      highlights: [
        "Torres del Paine granite horn views from your camper",
        "Carretera Austral remote ferry crossings",
        "Perito Moreno rumbling glacier viewpoints",
        "Guanaco wildlife herds and pure glacial spring water"
      ],
      itinerary: [
        { day: "Day 1-4", title: "Punta Arenas to Puerto Natales", desc: "Cross the windy Magellan plains and acclimatize to the high southern latitudes." },
        { day: "Day 5-9", title: "Torres del Paine National Park Heart", desc: "Camp under Southern Cross stars with unobstructed views of Cuernos del Paine." },
        { day: "Day 10-16", title: "Glaciers to Argentine Patagonia", desc: "Cross border checkpoints to witness massive ice walls calving into azure glacial lakes." }
      ]
    },
    {
      id: "dest-golden-route",
      title: "Great American Southwest Luxury Safari",
      region: "Arizona & Nevada",
      type: "Luxury RV",
      badge: "Luxury Tour",
      distance: "780 miles / 1,250 km",
      duration: "6 - 8 Days",
      difficulty: "Easy Scenic",
      bestSeason: "October - April",
      elevation: "2,000 - 7,000 ft",
      recommendedCategory: "luxury-rv",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      description: "Experience five-star RV resort glamping, private wine tastings in Sedona, and helicopter canyon tours in ultimate comfort.",
      highlights: [
        "Sedona Red Rock luxury RV estates with pool access",
        "Grand Canyon South Rim private sunset points",
        "Lake Powell private boat charters and shore camping",
        "Oak Creek Canyon scenic drive"
      ],
      itinerary: [
        { day: "Day 1-2", title: "Phoenix to Sedona Oak Creek", desc: "Pick up your luxury Class C motorhome. Enjoy underfloor heat and sunset wine on your private power awning." },
        { day: "Day 3-4", title: "Grand Canyon National Park South Rim", desc: "Park in full-hookup wilderness spaces minutes from the rim with full hot shower amenities." },
        { day: "Day 5-6", title: "Lake Powell & Horseshoe Bend", desc: "Shoreline glamping with full smart entertainment and chef's kitchen preparation." },
        { day: "Day 7-8", title: "Flagstaff Pine Highlands to Return", desc: "Smooth cruise back down the Mogollon Rim to our depot hub." }
      ]
    }
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Marcus & Elena Vance",
      role: "Adventure Photographers",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      route: "Rocky Mountain High Alpine Loop",
      vehicle: "Nomad Sprinter 4x4 Overland",
      quote: "VanVoyage completely redefined road tripping for us. The 4x4 Sprinter took us up rocky BLM trails where no regular RV could ever dream of going. Waking up at 11,000 feet with hot French press coffee and solar-powered warmth is pure bliss."
    },
    {
      id: "test-2",
      name: "Sarah Jenkins & Chloe",
      role: "Solo Outdoor Enthusiast & Trail Pup",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      route: "Wild Pacific Coast & Ancient Redwoods",
      vehicle: "Alpine Horizon California Camper",
      quote: "As a solo traveler with a golden retriever, safety and simplicity were everything. The VanVoyage team gave me a seamless 20-minute digital walk-through, the pop-up roof opened with one button, and parking in tight coastal towns was effortless."
    },
    {
      id: "test-3",
      name: "The Sterling Family (David, Clara & 2 kids)",
      role: "Family Sabbatical Explorers",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      route: "Great American Southwest Luxury Safari",
      vehicle: "Grand Sanctuary Luxury RV",
      quote: "The kids called it our 'spaceship mansion'. Having a full hot walk-in shower, porcelain toilet, and real memory mattresses while gazing at the Milky Way over Monument Valley made this our best family vacation of all time."
    },
    {
      id: "test-4",
      name: "Julian Brooks",
      role: "Ultrarunner & Backcountry Guide",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      route: "Utah Red Rock & Canyonlands Overland",
      vehicle: "Ridgeback Gladiator 4x4 Expedition",
      quote: "The build quality on the Gladiator is top-tier expedition level. Real 35-inch tires, Fox suspension, Warn winch, and the Alu-Cab tent opens in 10 seconds flat after a 12-hour desert run. Outstanding customer support."
    }
  ],

  faqs: [
    {
      category: "Booking & Eligibility",
      question: "What driver's license and age requirements apply to rent a VanVoyage vehicle?",
      answer: "Drivers must be at least 21 years of age for our campervans and 25 years of age for our 4x4 Overlanding and Luxury RV categories. A valid standard driver's license from your home country or US state held for at least one full year is required. International drivers simply present their home country license alongside a passport (and an International Driving Permit if your license is not in English)."
    },
    {
      category: "Booking & Eligibility",
      question: "What is your cancellation and trip modification policy?",
      answer: "We offer maximum road trip flexibility. Free cancellations and 100% full refunds are granted up to 14 days before your scheduled pickup date. Cancellations between 14 days and 48 hours receive a 75% credit voucher valid for 24 months. You can also modify your dates or vehicle selection anytime free of charge subject to calendar availability."
    },
    {
      category: "Vehicle & Off-Grid Living",
      question: "Can I take VanVoyage vehicles off-road and onto gravel trails?",
      answer: "Yes! Unlike mainstream car rental companies that prohibit gravel roads, our 4x4 Overlanding vehicles (such as the Nomad Sprinter 4x4 and Ridgeback Gladiator) are specifically engineered, insured, and permitted on marked unpaved roads, BLM trails, Forest Service routes, and National Park unpaved corridors. Campervans and RVs are permitted on maintained gravel access roads leading to established campsites."
    },
    {
      category: "Vehicle & Off-Grid Living",
      question: "How long can we camp off-grid without electrical hookups?",
      answer: "All VanVoyage vehicles feature high-capacity lithium iron phosphate (LiFePO4) battery banks paired with rooftop solar arrays and vehicle alternator charging while driving. You can easily camp off-grid indefinitely for 3 to 7 days while running refrigerators, diesel heaters, induction cooktops, interior LED lights, and device charging without ever needing to plug into a generator or RV park."
    },
    {
      category: "Support & Safety",
      question: "What happens if I experience mechanical trouble or need roadside assistance?",
      answer: "Every VanVoyage rental includes complimentary 24/7 Premium Adventure Roadside Assistance across the USA and Canada. Whether you require tire assistance, winching, battery jump, or technical gear guidance, our dedicated remote dispatch team is on call around the clock. If a repair cannot be performed within 24 hours, we provide an immediate replacement vehicle or cover luxury boutique lodging."
    },
    {
      category: "Support & Safety",
      question: "What items and equipment are included in the rental price?",
      answer: "We believe in all-inclusive, turnkey road trips. Every rental includes: premium bed linens, down duvets and organic pillows, a complete chef cook set (pans, chef knife, kettle, stainless tableware, French press), outdoor camp chairs and fold-out table, levelers, water hoses, emergency first-aid kit, biodegradable soap, and 150 free miles per rental day (unlimited mileage packages available)."
    }
  ],

  team: [
    {
      name: "Tarek Al-Mansoor",
      role: "Founder & Chief Expedition Officer",
      bio: "Former rally raid navigator and overland vehicle builder who crossed 45 countries in a converted Land Cruiser.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Astrid Lindgren",
      role: "Head of Fleet Engineering & Design",
      bio: "12 years in automotive chassis design, obsessed with ergonomic tiny-home space efficiency and lithium solar power.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Marcus Vance",
      role: "Director of Backcountry Routes & Safety",
      bio: "Wilderness first responder and veteran route scout who has mapped over 40,000 miles of off-grid BLM tracks.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Elena Rostova",
      role: "VP of Guest Experience & Concierge",
      bio: "Curates tailor-made national park itineraries and ensures every campervan journey feels like a 5-star boutique retreat.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  ],

  whyChooseUs: [
    {
      icon: "compass",
      title: "Built For True Backcountry",
      description: "Unlike standard car rentals, our purpose-built fleet is authorized for marked gravel roads, mountain passes, and BLM dispersed camping."
    },
    {
      icon: "sun",
      title: "100% Off-Grid Solar & Lithium",
      description: "High-capacity lithium battery banks and high-wattage solar panels ensure endless power for heaters, fridges, and Starlink without noisy generators."
    },
    {
      icon: "shield-check",
      title: "24/7 Wilderness Roadside",
      description: "Comprehensive satellite-connected adventure dispatch covers you across national parks, mountain passes, and desert corridors."
    },
    {
      icon: "sparkles",
      title: "Turnkey All-Inclusive Gear",
      description: "No hidden nickel-and-diming. Luxury bedding, chef camp kitchen, French press, Yeti cooler, and camp chairs come standard in every van."
    },
    {
      icon: "map-pin",
      title: "Flexible Multi-Hub Depots",
      description: "Pick up in Boulder, drop off in Portland or Moab. One-way adventure road trips made seamless with flexible depot drop-offs."
    },
    {
      icon: "leaf",
      title: "Leave No Trace Certified",
      description: "We offset 100% of carbon emissions from our fleet and equip every van with grey-water containment and biodegradable supplies."
    }
  ],

  defaultBookings: [
    {
      id: "VV-84920",
      vehicleId: "vv-nomad-4x4",
      vehicleName: "Nomad Sprinter 4x4 Overland",
      vehicleImage: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=800&q=80",
      pickupDate: "2026-11-14",
      dropoffDate: "2026-11-21",
      days: 7,
      pickupLocation: "Boulder Overland Hub (HQ)",
      dropoffLocation: "Red Rock Gateway (Moab)",
      dailyRate: 235,
      totalAmount: 1845,
      status: "Upcoming", // 'Upcoming', 'Active', 'Completed', 'Cancelled'
      statusClass: "badge-upcoming",
      passengers: 2,
      addons: ["Starlink High-Speed Satellite Kit ($140)", "All-Terrain Fat-Tire E-Bikes x2 ($210)"],
      bookingDate: "2026-10-28",
      insurance: "Full Adventure Shield (Zero Deductible)",
      confirmationCode: "VV-NOMAD-7741"
    },
    {
      id: "VV-79104",
      vehicleId: "vv-alpine-escape",
      vehicleName: "Alpine Horizon California Camper",
      vehicleImage: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=800&q=80",
      pickupDate: "2026-08-10",
      dropoffDate: "2026-08-16",
      days: 6,
      pickupLocation: "Pacific Coast Depot (Portland)",
      dropoffLocation: "Pacific Coast Depot (Portland)",
      dailyRate: 165,
      totalAmount: 1140,
      status: "Completed",
      statusClass: "badge-completed",
      passengers: 3,
      addons: ["Stand-Up Paddleboard Kit ($80)"],
      bookingDate: "2026-07-02",
      insurance: "Standard Explorer Protection",
      confirmationCode: "VV-ALPINE-3982"
    },
    {
      id: "VV-68219",
      vehicleId: "vv-ridgeback-gladiator",
      vehicleName: "Ridgeback Gladiator 4x4 Expedition",
      vehicleImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      pickupDate: "2026-05-18",
      dropoffDate: "2026-05-23",
      days: 5,
      pickupLocation: "Red Rock Gateway (Moab)",
      dropoffLocation: "Boulder Overland Hub (HQ)",
      dailyRate: 215,
      totalAmount: 1285,
      status: "Completed",
      statusClass: "badge-completed",
      passengers: 2,
      addons: ["Winch Recovery Pack ($50)", "Solo Stove Ranger Fire Pit ($60)"],
      bookingDate: "2026-04-12",
      insurance: "Full Adventure Shield (Zero Deductible)",
      confirmationCode: "VV-GLAD-9140"
    }
  ],

  defaultUser: {
    name: "Alex Rivers",
    email: "alex.rivers@adventure.com",
    phone: "+1 (555) 782-9912",
    location: "Denver, Colorado",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    memberSince: "March 2024",
    tier: "Explorer Elite Member",
    licenseNumber: "CO-D839210-EXP2029",
    emergencyContact: {
      name: "Morgan Rivers",
      relationship: "Spouse / Co-Pilot",
      phone: "+1 (555) 782-4431"
    },
    preferences: {
      terrain: "Mountain passes & 4x4 trails",
      favoriteDepot: "Boulder Overland Hub (HQ)",
      preferredTransmission: "Automatic 4x4",
      newsletter: true,
      smsAlerts: true
    }
  }
};

// Expose globally
window.VANVOYAGE_DATA = VANVOYAGE_DATA;
