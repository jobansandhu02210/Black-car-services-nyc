# Page outlines + JSON-LD plan — homepage and JFK

Extracted from the pages as built on localhost (2026-10-22), plus proposed tweaks marked **[change]**.
JFK is the template for LGA and EWR. Rules (docs/REFERENCE-RESEARCH.md §3): one H1 with the primary keyword;
H2 = searched questions/intents; H3 = repeatable units (terminal, vehicle, step, FAQ question).

---

## Homepage `/`
**Title (53):** NYC Black Car Service | JFK, LGA, EWR & Long Distance
**Description (152):** Private black car service from anywhere in NYC to JFK, LaGuardia and Newark, plus door-to-door rides to NJ, Connecticut, Philadelphia and DC. Book 24/7.

```
H1  NYC Black Car Service
    (tagline below, as <p>: "Airports and long rides, door to door.")      [change: tagline is inside the H1 today]
    — hero booking card (Airport | City to city → /book prefilled)
    — trust row: Flight tracked · Door to door · No account needed · A real person, 24/7
                                                                            [change: these are H3s before any H2 → make them plain text]
H2  Car service to JFK, LaGuardia and Newark
    H3  JFK Airport car service
    H3  LaGuardia car service
    H3  Newark Liberty car service
H2  Long-distance car service from NYC                                      [change: today "From New York to the next city, without the station" → keep that as the intro line]
    (route cards: Philadelphia, Washington DC, Princeton, Morristown, Stamford, New Haven — distance | time)
H2  Black car vs rideshare, taxi and train
    (comparison table)
H2  Black car fleet: sedans and SUVs                                        [change: today "Pick the car that fits the trip"]
    H3  Executive Sedan
    H3  First Class SUV
    H3  First Class Sedan
H2  How to book your car
    H3  Tell us the trip
    H3  Choose the vehicle
    H3  Get your price
    H3  Meet your driver
H2  Black car service in New York City, New Jersey, Connecticut, Philadelphia and DC   [change: add "Black car service in"]
    H3  New York City · New Jersey · Connecticut · Pennsylvania · Washington, DC
H2  NYC black car service FAQs                                              [change: today "Black car service questions"]
    H3 ×6  How do I book a black car in NYC? · Which airports do you cover? · Can I take a car service from
           New York to Philadelphia or Washington, DC? · What happens if my flight is delayed? ·
           How is the fare worked out? · Can I book a car for someone else?
    final CTA "Your car, when you need it."                                 [change: H2 → plain text, it is not a topic]
```

**JSON-LD on the homepage**
| Block | Status | Notes |
|---|---|---|
| `LocalBusiness` + `TaxiService` (`@id …/#business`) | built (sitewide, layout) | **Service-area business**: name, url, telephone, email, 24/7 hours, areaServed = NYC, NJ, CT, PA, DC + JFK/LGA/EWR (wikidata `sameAs`). **No street address, no geo, no founder, no social links, no rating.** |
| `WebSite` (`@id …/#website`) | built (sitewide) | **[change]** drop its `SearchAction` — it points at `/blog?q=`, which no longer exists. |
| `FAQPage` (6 Q) | built | Matches the visible FAQ text word for word. |
| `WebPage` + `SpeakableSpecification` | built | `#hero-title`, `#hero-answer`. |
| `Organization` | not added | `LocalBusiness` is already an Organization; a second entity would duplicate it. Add `logo`/`sameAs` to the LocalBusiness once a real logo and profiles exist. |

---

## JFK `/services/airport/jfk`  (template for LGA / EWR)
**Title (49):** JFK Car Service to & from NYC | Black Car Service
**Description (152):** Private car service between JFK and Manhattan, Brooklyn, New Jersey and Connecticut. Flight-tracked pickups, every terminal, sedans and SUVs. Book 24/7.
**Length:** ≈ 2,100 words, all new copy.

```
H1  JFK Car Service NYC
    (answer-first intro, 50 words, Speakable target)
H2  How much does a car service to JFK cost?
    (table: distance · vehicle · tolls · Manhattan congestion charge · time & waiting · extra stops — no prices)
H2  JFK car service vs taxi, rideshare and AirTrain
    (comparison table)
    H3  Yellow taxi
    H3  Rideshare
    H3  AirTrain and rail
H2  JFK terminals and where your driver meets you
    H3  Terminal 4
    H3  Terminal 5
    H3  Terminal 8
    H3  Terminal 1 and the New Terminal One
    H3  Terminals 6 and 7
    H3  Not sure which terminal?
H2  JFK drive times by neighborhood
    (table: 10 places × distance, off-peak, rush hour)
H2  JFK black car fleet: vehicles and capacity
    H3  Executive Sedan
    H3  First Class SUV
    H3  First Class Sedan
H2  Corporate JFK car service in NYC
H2  When to book your JFK car, and what is included
    H3  Booking ahead
    H3  Leaving for a flight
    H3  Included with every ride
H2  How to book JFK car service
    H3  Enter the trip
    H3  Choose a vehicle
    H3  Review the estimate
    H3  Get your driver details
H2  JFK car service FAQs
    H3  How much is a car service from Manhattan to JFK?
    H3  How long does it take to drive from JFK to Manhattan?
    H3  Is it cheaper to take a taxi or Uber from JFK?
    H3  What happens if my JFK flight is delayed?
    H3  Where will my driver meet me at JFK?
    H3  Which terminal is my airline at JFK?
    H3  How early should I leave Manhattan for a JFK flight?
    H3  Can you take a group or a lot of luggage to JFK?
    H3  Do you drive from JFK to New Jersey, Connecticut or Philadelphia?
    H3  Can I book a JFK car for someone else?
H2  Related NYC airports and routes
    (links: LGA, EWR, airport hub, long-distance, fleet, book)
```

**JSON-LD on JFK**
| Block | Status | Notes |
|---|---|---|
| `LocalBusiness` + `WebSite` | sitewide | as above |
| `BreadcrumbList` | built | Home > Airport car service > JFK car service (also shown visibly) |
| `Service` | built | `serviceType` Airport transfer · `provider` → `{ "@id": …/#business }` · `areaServed` = **`Airport`** (John F. Kennedy International Airport, `iataCode` JFK, wikidata Q8685) + `City` New York City · `Offer` with **no price** until the owner publishes rates |
| `HowTo` (4 steps) | built | Same text as the visible "How to book" H3s. (Google no longer shows HowTo rich results, but the markup is valid and helps AI answers.) |
| `FAQPage` (10 Q) | built | Same text as the visible FAQ. |
| `WebPage` + `SpeakableSpecification` | built | `#jfk-title`, `#jfk-answer` |

**Fact policy used:** terminal airlines named only where stable (Delta T4, JetBlue T5, American T8); T1/NTO and T6/T7 described as "moving in stages, check your airline app" because sources conflict (re-check every few months). Drive times are rounded public-map estimates. No prices, ratings, licence numbers or addresses. Owner-dependent promises (flight tracking, meeting point, inclusions) are marked `TODO(owner)` in code.

**LGA / EWR will follow the same skeleton**, with airport-specific H3s: LGA Terminals A, B, C; EWR Terminals A, B, C, plus an EWR-only H2 on AirTrain Newark / NJ Transit vs car.
