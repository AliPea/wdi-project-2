const mongoose = require("mongoose");
const config   = require("../config/config");
const User     = require("../models/user");
const Activity = require("../models/activity");

mongoose.connect(config.db);

Activity.collection.drop();

const activities = [
  {
    name: "Lee Valley Regional Park, Art Views",
    image: "https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/5/55/River_lee_Country_Park.jpg",
    distance: "6 miles",
    description: "Best hike for Art views. Walk through the wonderful Lea Valley passing unique art sculptures along the way",
    information: "https://www.visitleevalley.org.uk/en/content/cms/outdoors/walks-walking/walking-routes/ware-to-waltham-abbey/artworks-route-three/",
    lat: "51.712169",
    lng: "-0.000872",
    type: "hike"
  },
  {
    name: "The 7 Sisters",
    image: "http://photos3.meetupstatic.com/photos/event/9/a/a/6/600_447579590.jpeg",
    distance: "13.8 miles",
    description:"This classic cliff-top walk – one of the finest coastal walks in England – affords stunning (and very famous) views of the white cliffs of the Seven Sisters, and the renowned Beachy Head, before ending in the elegant seafront town of Eastbourne. There is quite a lot of climbing and descending on the walk – indeed, apart from the section around Cuckmere Haven and the finish along the Eastbourne seafront, almost none of the route is flat – but somehow in the grandeur of the scenery the effort is not noticed.",
    information:"http://www.walkingclub.org.uk/book_2/walk_28/",
    lat: "50.773467",
    lng: "0.101108",
    type: "hike"
  },
  {
    name: "Ockley to Leith Hill",
    image:  "https://www.google.co.uk/search?q=Ockley+and+Leith+Hill&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiz-ZTzgozPAhUJBcAKHQSvAkMQ_AUICSgC&biw=1280&bih=676#tbm=isch&q=Ockley+and+Leith+Hill+high+point&imgrc=zW1qU6N6QtZHkM%3A",
    distance: "7 miles",
    description: "Climb up to the highest point in the south east, taking on Leith Hill from its steeper south side. This pretty walk takes you through green meadows, past ye olde cottages and it has some helpful built-in steps for the final push.",
    information: "http://www.fancyfreewalks.org/Surrey/Ockley-LeithHill.pdf",
    lat: "51.145560",
    lng: "-0.362871",
    type: "hike"
  },
  {
    name: "Vinyard views, Leatherhead to Dorking",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Mole_Gap_Trail_-_geograph.org.uk_-_168233.jpg",
    distance: "6 miles",
    description: "Pleasant short walk through the Surrey countryside",
    information: "http://www.gps-routes.co.uk/routes/home.nsf/RoutesLinksWalks/mole-gap-trail-walking-route",
    lat: "51.282560",
    lng: "-0.327331",
    type: "hike"
  },
  {
    name: "Essex Walks Oak Trail Epping Forest Walking Route",
    image: "http://www.walksandwalking.com/wp-content/uploads/2012/10/Walks-And-Walking-Essex-Walks-The-Oak-Trail-Epping-Forest-Walking-Route-Autumn-Path.jpg",
    distance: "7 miles",
    description: "Epping Forest offers one of the most awesome woodland hikes you can enjoy near London. The route gives you views of wonderful and historic beech pollards, woodland pasture, Ambresbury Banks, which is the remains of an Iron Age Hill Fort, and a deer sanctuary, which is home to black fallow deer. ",
    information: "http://www.walksandwalking.com/2012/10/walks-and-walking-essex-walks-oak-trail-epping-forest-walking-route/",
    lat: "51.671769",
    lng: "0.103112",
    type: "hike"
  },
  {
    name: "English Countryside Views: Chess Valley",
    image: "http://photos1.meetupstatic.com/photos/event/c/5/4/6/600_400130502.jpeg",
    distance: "10 miles",
    description: "This pretty walk takes you through the Chilterns from Rickmansworth to Chesham following the River Chess with some lovely villages and views of this Area Of Outstanding Natural Beauty along the way.",
    information: "http://www.chilternsaonb.org/ccbmaps/381/137/chess-valley-walk.html",
    lat: "51.629723",
    lng: "-0.432294",
    type: "hike"
  },
  {
    name: "Steep Hill Views: Hassocks To Lewes",
    image: "http://www.petes-walks.co.uk/Chess%20Valley%20Walk/2009_0520_103451AA.JPG",
    distance: "11.2 miles",
    description: "Ditchling Beacon is one of the steepest hills in the south east with 214m of drop from the top to the bottom. This hike starts in Hassocks and finishes in Lewes past the Jack and Jill windmills then along the top of the towns to Ditchling Beacon. If you’re struggling with the steepness just be glad you’re not trying to climb it on a bike.",
    information: "",
    lat: "50.924675",
    lng: "-0.146098",
    type: "hike"
  },
  {
    name: "Hastings: Castle View",
    image: "http://cdn.coresites.factorymedia.com/mpora_new/wp-content/uploads/2015/11/iStock_000013867042_Small-oversnap.jpg",
    distance: "5.9 miles",
    description: "This walk starts at Hastings Station and takes you through Hastings Old Town and along the seafront at Rock-A-Nore. The walk continues along a steep coastal path, in Hastings Country Park with the East Hill funicular railway to your right, and towards Fairlight Glen. Head towards the sign ‘Fairlight picnic site 1 mile, North’s Seat 1.25 miles’ and turn left. After passing some woodland on a single path, you will pass the house of Titus Oates (a notorious fraudster), entrance to Clements Caves and the ruins of Hastings Castle.",
    information: "http://www.wegoplaces.me/walks-near-london/",
    lat: "50.857890",
    lng: "0.576770",
    type: "hike"
  },
  {
    name: "Stonor Circular Via Henley: River Views",
    image: "http://photos1.meetupstatic.com/photos/event/2/3/5/c/600_418149052.jpeg",
    distance: "13.6 miles",
    description: "Henley is normally thought of as a riverside town but, as this walk demonstrates, it is also on the southern edge of the Chiltern Hills, a charming area of hidden valleys, mixed wood and farmland, and largely gentle slopes (the main walk has one substantial steep hill after lunch, however). The walk takes you up one side and down the other of the long valley leading up to Stonor, with plenty of charming views over hill en route.",
    information: "http://www.walkingclub.org.uk/book_2/walk_06/",
    lat: "51.534066",
    lng: "-0.900654",
    type: "hike"
  },
  {
    name: "Petts Wood in Bromley",
    image: "http://www.wegoplaces.me/wp-content/uploads/2015/03/petts-wood-bromley-862x647.jpg",
    distance: "4 miles",
    description: "Walk the borough of Bromley through woodland and meadows",
    information: "http://www.wegoplaces.me/wp-content/uploads/2015/03/PETTS_WOOD.pdf",
    lat: "51.392874",
    lng: "0.057340",
    type: "hike"
  },
  {
    name: "Ashridge Estate in Birkhamstead",
    image: "https://plus.google.com/photos/photo/102038449389036440445/6292822435744072162",
    distance: "5.9 miles",
    description: "Ashridge Estate offers beautiful woodland trails. In the autumn you can find orange and yellow colours all around. In the spring, there are stunning clusters of bluebells. Not to mention, a wide variety of wildlife throughout the seasons such as deer and birds. This walk is about 6 miles and starts at the Ashridge Estate Visitor Centre. This is a moderate stroll through the woods that is clearly marked. You can learn more about Ashridge Estate here.",
    information: "https://www.nationaltrust.org.uk/ashridge-estate",
    lat: "51.810419",
    lng: "-0.562221",
    type: "hike"
  },
  {
    name: "Ashtead Common, Epsom Common & Princes Coverts in Surrey",
    image: "http://i4.getsurrey.co.uk/incoming/article9303895.ece/ALTERNATES/s615b/leaf-hill-2.jpg",
    distance: "4.6 miles",
    description: "This is an easy route through the Ashtead Common National Nature Reserve, Epsom Common and the Crown Estates woodland of Prince’s Coverts. You can access the nature reserve from the north side of Ashtead station. You will see well marked hiking trails. This route is under 5 miles in length. You might want to stop by a pub by the A243 (The Star, Malden Rushett).",
    information: "http://about-britain.com/maps/ashstead-epsom.pdf",
    lat: "51.317870",
    lng: "-0.307550",
    type: "hike"
  },
  {
    name: "Ashridge & Ivinghoe Beacon in Hertfordshire",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Ivinghoe_Beacon_seen_from_The_Ridgeway.jpg",
    distance: "9 miles",
    description: "This walk near Berkhamstead is a circular walk with a few pretty viewpoints along the way. The most notable viewpoint being the Ivinghoe Beacon.",
    information: "http://about-britain.com/maps/ashridge-walk.pdf",
    lat: "51.800311",
    lng: "-0.623935",
    type: "hike"
  },
  {
    name: "Cliveden Green Walking Trail in Maidenhead",
    image: "http://www.wegoplaces.me/wp-content/uploads/2015/03/cliveden-esetate-lavendar-862x407.jpg",
    distance: "2.3 miles",
    description: "This walk offers you wonderful views over the River Thames as well as the pleasure of walking through Cliveden’s country estate. The Cliveden Estate and Gardens is open daily for most of the year. Find woodlands and views of the countryside.",
    information: "https://www.nationaltrust.org.uk/cliveden/trails/cliveden-green-walking-trail",
    lat: "51.561655",
    lng: "-0.685844",
    type: "hike"
  },
  {
    name: "Alton Circular in Hampshire",
    image: "http://pfalondon.org/images/altopic.jpg",
    distance: "13.1 miles",
    description: "This is the place of inspiration for two famous writers – the naturalist Gilbert White and romantic fiction novelist Jane Austen. This walk takes you past fields to East Worldham and past woods and hidden pastures in Selborne (about which White wrote ‘Natural History‘). You might like to stop off at the Station Cafe or The Queens in Selborne for lunch. Go past Selborne Common to Chawton (the home of Jane Austen).",
    information: "http://www.wegoplaces.me/walks-near-london/#17",
    lat: "51.151929",
    lng: "-0.967246",
    type: "hike"
  },
  {
    name: "Box Hill to Leatherhead",
    image: "http://www.wegoplaces.me/wp-content/uploads/2015/03/box-hill-viewpoint-862x572.jpg",
    distance: "7.1 miles",
    description: "This walk gets its name from the box trees along the way. However, there are also yew, beech and oak trees that can be seen along the path. This route involves crossing the River Mole on stepping stones. You might have to make a detour if these are under water! After crossing the river, head up the steps on the North Downs Way to the top of Box Hill where you will get a nice view of the valley. This route then takes you through woodland, to Juniper Top, and up White Hill onto Mickleham Downs. At this point you might want to stop for lunch in Mickleham at one of the pubs listed below. Finally, head back along the River Mole valley, through Norbury Park and into the centre of Leatherhead. You should expect two steep climbs – one at Box Hill and the next at White Hill.",
    information: "http://www.walkingclub.org.uk/book_1/walk_49/index.shtml",
    lat: "51.254010",
    lng: "-0.328470",
    type: "hike"
  },
  {
    name: "Pluckley Circular in Kent",
    image: "https://farm8.staticflickr.com/7001/6703143527_4c64edc229_b.jpg",
    distance: "6.8 miles",
    description: "This walk takes you past small farms, timber-framed houses, pastures, apple orchards and ancient oaks. This route is almost completely flat with very gentle gradients. Later on in the walk you get a spectacular view across the plains of the Low Weald. In summer months there are loads of wild-flowers, gardens in bloom and abundant fruit hanging from trees in the orchards. You might like to stop by the Dering Arms near Pluckley station. This was a former hunting lodge that is now an award-winning pub with wonderful seafood. If you want to stop walking earlier, you can stop at the Swan Inn where you can catch a bus to Ashford.",
    information: "http://www.wegoplaces.me/walks-near-london/#16",
    lat: "51.166617",
    lng: "0.750486",
    type: "hike"
  },
  {
    name: "The Balcombe Circular",
    image: "http://photos3.meetupstatic.com/photos/event/a/4/5/2/600_451182066.jpeg",
    distance: "10.9 miles",
    description: "The start of this walk takes you past a nature reserve and a lake with a Japanese pavilion. You will also come across Nyams Park, a paradise for any garden enthusiast. This beautiful National Trust garden is set around the ruins of a manor house. Discover daffodils, wild-flowers, magnolias, camellias and rhododendrons. You will also pass St Mary’s Parish Church in Slaugham, home to a 600-year-old yew tree. Also, the ruins of Slaugham Place, once a great Elizabethan manor house. The final part of the walk is along the River Ouse, where you can see a Roman arch and columns. The walk ends through fields and woods to the village of Balcombe.",
    information: "http://www.walkingclub.org.uk/book_1/walk_16/index.shtml",
    lat: "51.055520",
    lng: "-0.136910",
    type: "hike"
  },
  {
    name: "Hurst Green to Oxted in Surrey",
    image: "http://www.nerverush.com/wp-content/uploads/2014/07/5-best-day-hikes-near-london-green-hurst-to-oxted-600x450.jpg",
    distance: "4.7 miles",
    description: "A gentle and relaxing walk in the woods. Lovely for autumn colours and bluebells in the spring!",
    information: "http://www.wegoplaces.me/walks-near-london/#16",
    lat: "51.244430",
    lng: "0.003970",
    type: "hike"
  },
  {
    name: "Guildford to Chilworth in Surrey",
    image: "https://chilworth2gether.files.wordpress.com/2013/11/swing-bridge-p2.jpg",
    distance: "4 miles",
    description: "This route takes you through hidden valleys, ancient woodlands and pretty farmland below the Downs. You can start the walk by stopping at Guildford Castle and admiring the views over the town from the top of the tower. The walk begins with a climb out of Guildford and into Pewley Down. You will find a concrete plinth commemorating the purchase of Pewley Down in 1920 and as a memorial to those who died in World War 1. ",
    information: "",
    lat: "51.236970",
    lng: "-0.580400",
    type: "hike"
  },
  {
    name: "Octavia Hill Centenary Trail in Toys Hill",
    image: "http://www.thetimes.co.uk/tto/multimedia/archive/00321/110464181_kent_321118c.jpg",
    distance: "6 miles",
    description: "This walk celebrates the life of Octavia Hill, founder of the National Trust. You will pass Crockham Hill village, the church where she was buried, head up Mariners Hill, and pass the former home of Winston Churchill.",
    information: "https://www.nationaltrust.org.uk/mariners-hill/trails/octavia-hill-centenary-trail-west",
    lat: "51.242284",
    lng: "0.104786",
    type: "hike"
  },
  {
    name: "The Polesden Lacey ‘Big Walk’ in Dorking",
    image: "https://www.nationaltrust.org.uk/images/1431730261235-estatepolesdenlacey.jpg",
    distance: "4.2 miles",
    description: "This walk is rich in history since it goes through the 1,400 acre estate of the Polesdon Lacey House with land dating back to Roman Times. There are amazing views over the Surrey Hills. This is a challenging hike that takes you into the heart of Ranmore Common, past working farms and ancient woodlands.",
    information: "https://www.nationaltrust.org.uk/polesden-lacey/trails/the-polesden-lacey-big-walk",
    lat: "51.257603",
    lng: "-0.373533",
    type: "hike"
  },
  {
    name: "The Park Circular Walk at Ankerwycke",
    image: "http://www.wegoplaces.me/wp-content/uploads/2015/03/ankerwycke-yew-tree-862x771.jpg",
    distance: ".6 miles",
    description: "This is a very leisurely stroll through the park at Ankerwycke. The path is generally flat and it is perfect for a relaxed Sunday afternoon excursion. This walk takes you across pretty meadows. Enjoy spotting woodpeckers, dragonflies or a carpet of snowdrops in the spring! The most fascinating part of this walk is that you will find a 2,000 year-old Ankerwycke Yew at the end of the walk.",
    information: "https://www.nationaltrust.org.uk/runnymede/trails/the-park-circular-walk-at-ankerwycke-runnymede",
    lat: "51.447693",
    lng: "-0.552329",
    type: "hike"
  },
  {
    name: "Regents Park & Primrose Hill",
    image: "https://www.royalparks.org.uk/parks/the-regents-park/things-to-see-and-do/primrose-hill/_gallery/Park-visitors-to-Primrose-Hill.jpg/w_992.jpg",
    distance: "2.1 miles",
    description: "At the York Bridge entrance, heading west around the park, before turning off at Ormonde Terrace for a lap around Primrose Hill and back into the park.",
    information: "Escape the office at 2pm when stress levels in the office are reaching peak breakdown, by the time you're thundering back down Primrose Hill all your troubles will have been forgotten (and replaced by a burning in your calves, thighs and feet).",
    lat: "51.540290",
    lng: "-0.157553",
    type: "run"
  },
  {
    name: "Wimbledon Common",
    image: "http://thedecorcafe.com/directory/wp-content/uploads/2013/10/Autumn-leaves-Wimbledon-Common-2-600.jpg",
    distance: "3.18 miles",
    description: "The Common is one of South West London’s largest green spaces, with 1,100 acres to explore. For a simple 5km route start and finish at the old windmill. If 5km sounds a bit 'beginner to you', there's plenty of scope for balzing your own, longer trail around the common’s leafy forest paths, ponds and nature reserve.",
    information: "Best time of day: Evening when all the day-tripping picnicers have gone home.",
    lat: "51.436645",
    lng: "-0.233547",
    type: "run"
  },
  {
    name: "Hampstead Heath",
    image: "http://cdn.londonandpartners.com/asset/9be9406360150d47e42b5b2f18ec3076.jpg",
    distance: "4.8 miles",
    description: "This tour of North London’s ancient 800 acre park has a variety of terrain, from grassland to woods, with plenty of hill sprints for those extreme fat burning sessions. A dash to the top of Parliament Hill, halfway around the circuit is worth it for the sunset alone (and the benches for a swift, 30-minute rest ",
    information: "Best time of day: Late evening",
    lat: "51.560842",
    lng: "-0.163138",
    type: "run"
  },
  {
    name: "The Abandoned Railway Through Parkland Walk",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Parkland_Walk.JPG",
    distance: "5 miles",
    description: "“The Parkland Walk follows a railway line that was abandoned in the 1970s and turned into a woodland. There are sculptures along the route, plus some very rare trees and plants and, at one point, the platforms of a long-abandoned station,” says Simon Freeman of simonfreeman.co.uk.",
    information: "Best time of day: Early afternoon when the trees provide shade from the overhead sun. Night time runs are best avoided as it can get slightly eeire when the sun goes down.",
    lat: "51.5745897",
    lng: "-0.132958",
    type: "run"
  },
  {
    name: "Three-Parks Run",
    image: "http://i.imgur.com/uBoxTID.jpg",
    distance: "7.22 miles",
    description: "A tour around the perimeters of Kensington Gardens, Hyde Park, Green Park and St James’ Park. Quite possibly the most scenic route in London and one that might make you think the Big Smoke isn't just a smog-infested money-trap after all. Watch out for the green parrots in Kensington Gardens (rumoured to have been released by Keith Richards in the 1970s), the Canadian War Memorial in Green Park and the Victory Arch on Hyde Park Corner.",
    information: "Best time of day: Any time during the week. Getting round in one piece on the weekend may be tricky and access to Kensington Gardens is restricted after dark.",
    lat: "33.126308",
    lng: "-96.703225",
    type: "run"
  },
  {
    name: "The East London Canal Run",
    image: "http://theresident.wpms.greatbritishlife.co.uk/wp-content/uploads/sites/10/2015/01/Regents-Canal.jpg",
    distance: "13 miles",
    description: "Follow Regents Canal east towards Limehouse Basin. Then take the Limehouse Cut past the Olympic Park and around the Hackney Marshes before circling back to Angel.",
    information: "Best time of day: Head out on a weekend morning in time for sunrise and you’ll share the route with a handful of like-minded early rising runners.",
    lat: "51.5327443",
    lng: "-0.1080619",
    type: "run"
  },
  {
    name: "The Cross-Capital Riverside Route",
    image: "",
    distance: "up to 36 miles!",
    description: "A (very) long run along the Thames from Woolwich to Richmond Park. One for the committed.",
    information: "Best time of day: Early morning or late at night.",
    lat: "51.4946243",
    lng: "0.0614224",
    type: "run"
  },
  {
    name: "River Thames Sightseeing Tour",
    image: "http://www.e-architect.co.uk/images/jpgs/london/st_pauls_cathedral_nw080609_1.jpg",
    distance: "5.9 miles",
    description: "This run along the Thames takes in some of the most popular sights London has to offer, including the Tower of London, Tower Bridge, the London Eye, Big Ben and the Houses of Parliament. It is completely flat and mainly along the waterfront thus avoiding some street traffic. This route is best run early in the morning or in the winter to avoid heavy tourist traffic. You’ll want to plan an easy run so you can take your time to enjoy the historic landmarks and stop for pictures.",
    information: "https://www.strava.com/local/uk/london/running/routes/255",
    lat: "51.5120528",
    lng: "-0.1048954",
    type: "run"
  },
  {
    name: "Escape the City Thames Run",
    image: "http://www.bbc.co.uk/staticarchive/65459bc7af9e03dc11da73d697d4d216c92847fc.jpg",
    distance: "12.3 miles",
    description: "Running the Thames path away from Central London you will slowly see the city melt away as you run alongside pretty wooded parks. In some places the path changes from pavement to dirt, providing some relief for the joints. You can run as far as you like and take the train back to the start. We selected Richmond as our finish where you can have a bite to eat before you take the tube back.",
    information: "https://www.strava.com/local/uk/london/running/routes/256",
    lat: "51.4820191",
    lng: "-0.1611994",
    type: "run"
  },
  {
    name: "Four Royal Parks",
    image: "http://images.mapsofworld.com/travel-blog/Hampstead-Heath-603x452.jpg",
    distance: "6.5 miles",
    description: "Enjoy a bit of nature in the middle of the city as you glide along shaded paths, past ponds, gardens, and of course Kensington Palace. Any number of routes are possible through the Hyde Park and Kensington Gardens pathways, which offer a combination of paved and dirt surfaces. Our route adds on Green Park and St. James Park as well to take you past Buckingham Palace, the Horse Guards Parade, and the Mall. This route is flat and nearly traffic free except Hyde Park Corner. Note that Kensington Gardens is closed after dark",
    information: "https://www.strava.com/local/uk/london/running/routes/257",
    lat: "51.5063335",
    lng: "-0.1331502",
    type: "run"
  },
  {
    name: "Richmond Park",
    image: "http://nathan-harrison.com/route/wp-content/uploads/2010/10/Richmond-Park-005.jpg",
    distance: "7.2 miles",
    description: "Richmond Park, the largest of the Royal Parks, is a countryside treasure within the city of London. A short trip from central London has you running on hilly dirt trails through forests and fields. The most popular route in Richmond Park is the perimeter loop on the Tamsin Trail but a network of trails offer countless options. If you venture in to the heart of the park you will likely meet some of the deer that live there. Toilets, water fountains and cafes are plentiful, making Richmond Park the ideal place for any type of run. Our route starts and finishes at the Roehampton Gate where you will find a café for a post-run snack. For a more formal lunch try the Pembroke Lodge.",
    information: "https://www.strava.com/local/uk/london/running/routes/258",
    lat: "51.4584325",
    lng: "-0.2704419",
    type: "run"
  },
  {
    name: "East London Towpaths",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Regents_Canal,_London,_England_-Islington_tunnel-21March2010.jpg",
    distance: "6.2 miles",
    description: "This mostly traffic-free, flat, paved route takes you on a tour of East London via four different towpaths along London’s historic canals – the Limehouse Cut, River Lea, Hertford Union and Regent's Canals. Starting from the redeveloped Limehouse Basin you will run past narrowboats and locks, over and under bridges and even get a peek at the Olympic Park. You’ll find a variety of scenery along your way from industrial buildings to manicured parks. Highlights include the floating towpath on the Limehouse Cut, the Olympic Stadium, Victoria Park, and Mile End Park. You might try a detour through the meandering paths of Mile End Park or extend this route by continuing along the Thames.",
    information: "https://www.strava.com/local/uk/london/running/routes/260",
    lat: "51.5113242",
    lng: "-0.0385467",
    type: "run"
  },
  {
    name: "The Diana Memorial Run",
    image: "",
    distance: "7.2 miles",
    description: "",
    information: "http://dynamic-assets.mapmyfitness.com/gb/chelsea-eng/the-diana-memorial-run-route-117187735?host_canon=mapmyrun.com",
    lat: "",
    lng: "",
    type: "run"
  },
  {
    name: "",
    image: "",
    distance: "",
    description: "",
    information: "",
    lat: "",
    lng: "",
    type: "run"
  },
  {
    name: "",
    image: "",
    distance: "",
    description: "",
    information: "",
    lat: "",
    lng: "",
    type: "run"
  },
  {
    name: "",
    image: "",
    distance: "",
    description: "",
    information: "",
    lat: "",
    lng: "",
    type: "run"
  },
  {
    name: "",
    image: "",
    distance: "",
    description: "",
    information: "",
    lat: "",
    lng: "",
    type: "run"
  },
  {
    name: "",
    image: "",
    distance: "",
    description: "",
    information: "",
    lat: "",
    lng: "",
    type: "run"
  },
  {
    name: "",
    image: "",
    distance: "",
    description: "",
    information: "",
    lat: "",
    lng: "",
    type: "run"
  },
  {
    name: "",
    image: "",
    distance: "",
    description: "",
    information: "",
    lat: "",
    lng: "",
    type: "run"
  },

];

activities.forEach(activity => {
  Activity.create(activity, (err, activity) => {
    if (err) return console.log(err);
    return console.log(`${activity.name} was created`);
  });
});
