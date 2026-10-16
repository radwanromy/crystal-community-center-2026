# Local SEO implementation — 16 October 2026

## Architecture and deployment

The repository uses Next.js 16.2.5, React 19 and TypeScript, with the active root `app/` directory. The parallel `src/app/` tree is inactive. Locales and shared components live under `src/`. The contact form uses a Resend Server Action; its deployment requires a server runtime and RESEND_API_KEY. Initialization now happens inside the action so production builds do not need a mail secret; provider failures no longer produce a false success response. Form input is sent as plain text.

The repository contains a GitHub Pages workflow triggered by main pushes; it expects `out/`, while the normal Next.js server build produces `.next/` and includes a Server Action. The actual live hostname's hosting provider was not independently established. Do not merge or deploy until the owner confirms the production host and preview strategy. This patch preserves the existing deployment workflow; the new PR quality workflow only validates, and never deploys. No DNS changes, merge or deployment were performed.

## Implemented website changes

- Typed Metadata API title, description, canonical, index/follow robots, Open Graph and Twitter card.
- Homepage title: **Crystal Community Center | Wedding Venue in Gobindaganj, Gaibandha**.
- Description: **ক্রিস্টাল কমিউনিটি সেন্টার, গোবিন্দগঞ্জ, গাইবান্ধা। ৩৫০ আসনের এসি অডিটোরিয়াম, ছাদ, রান্নাঘর ও পার্কিং। Wedding, reception and seminar bookings in Bangladesh.**
- Open Graph title: Crystal Community Center — Gobindaganj, Gaibandha, Bangladesh. Locale bn_BD, alternate en_BD. A 1200×630 crop of a repository wedding-stage photo is the sharing image. No synthetic art.
- One H1 with the venue name and Gobindaganj/Gaibandha; existing About, Programs, Facilities, Gallery and Contact H2s retained, with Cafe, Location and FAQ H2s added. Decorative H4 eyebrows changed to paragraphs.
- Bengali initial HTML and an existing language toggle retained. Toggle updates document language. No separate language URLs were invented, so no hreflang URLs are claimed. English subtitle is visible initially; footer always includes both languages.
- Six visitor FAQs, native accessible disclosure controls, genuine event terminology and natural booking information.
- EventVenue + LocalBusiness schema with stable venue identity, Bengali alternate name, postal address, BD country, exact coordinates, two phones, email, map reference, amenities and contained auditorium/rooftop. The auditorium description states 350 seats, without claiming whole-building occupancy. No invented rating, review or price schema. Opening hours omitted while unresolved.
- Metadata routes `/robots.txt` and `/sitemap.xml`.
- Complete bilingual footer with consistent address, both phone links, email, website, coordinate directions and booking anchor.
- Contact input labels, keyboard focus styling, mobile menu accessible name/expanded state, reduced-motion CSS and narrower form padding/grid sizing.
- Gallery uses Next Image, responsive sizes, reserved dimensions, lazy loading and descriptive alt text. Fourteen actual photographs were resized (maximum 1280px) and converted to quality-90–92 WebP with descriptive filenames. Originals retained. `docs/image-provenance.json` maps every optimized image to its source.
- Existing stock thumbnails and three unrelated sample videos removed from the active video section. Only three repository videos remain. Fabricated initial likes reset to zero. Existing ref-during-render lint error fixed. Silent playback and native controls added.
- Build-error suppression removed from Next config. No new dependencies.

## Authentic imagery

`docs/image-provenance.json` contains all 14 gallery source/destination paths and actual dimensions. The hero retains `/Assets/images/312a4384-43bc-4700-b1a3-c8c7f728239f.jpg`; this same source was cropped to `/crystal-gobindaganj-wedding-hall-og.jpg`. Existing logo assets retained. Reels retain `/Assets/video/video01.mp4`, `video02.mp4`, `video03.mp4` and `/Assets/video/thum/v3.png`.

The repository image inventory was visually inspected in a contact sheet. It contains decorated stages, floral entrance arches, seminar speakers/audience, birthday setups and logos. No clearly identifiable exterior building, street entrance, rooftop, kitchen, parking or Crystal Cafe photograph was found. Floral event arches must not be labeled as the building entrance. These facilities have text only until authentic photos are supplied. No AI images or new stock images were introduced.

## Verification and limitations

- npm ci completed.
- npm run lint: exit 0; seven existing warnings (inactive app image elements, translation exports, customer gallery image/unused variable).
- npx tsc --noEmit: exit 0.
- npm run build: successful; `/`, not-found, robots and sitemap generated; TypeScript build errors are no longer suppressed.
- Earlier local production HTTP inspection (before the final WebP substitution): one H1; six FAQs; correct geographic title/canonical; JSON-LD parses; no missing in-page link targets; every rendered image URL returned successfully; robots and sitemap return expected data.
- Schema.org code test: final EventVenue + LocalBusiness markup showed no errors and no warnings. An initial email-on-EventVenue warning was corrected by also describing the venue's local business role.
- Google Rich Results Test was run on the submitted code. Final combined-type code produced two valid items (local business and organization), with only the optional priceRange missing; no price was fabricated.
- No Minnesota references were added to runtime content. No external stock/photo URLs remain in the active video component.
- The connected desktop browser cannot reach this environment's localhost (connection refused). Consequently interactive QA of the changed site, final desktop/mobile screenshots, end-to-end form delivery and Lighthouse scores are not claimed. A production server was exercised with HTTP locally; this does not substitute for browser layout tests.
- Mail requires the existing Resend credential and sender setup. No test message sent. Customer gallery remains its existing browser-local implementation; this work does not add a gallery backend.
- All final WebP files were decoded and verified with Pillow. A later HTTP rerun could not start a responsive local server, so final optimized-image HTTP checks remain incomplete.
- New images are available on the branch; public live image URLs will only work after an approved production release.

## Research observations and follow-up

In the user's selected Japan-personalized Google results, the Bangladesh owner panel appeared while organic web results were led by City of Crystal government pages, Minnesota.gov, Yelp, MapQuest and Apple Maps. This is a snapshot, not a Bangladesh rank benchmark. Geographic titles, entity data, bilingual location copy and consistent business details address relevance; no promise is made to outrank a government site for an unqualified global name.

Regional research found SKS Inn's official meeting/events page (https://sksinn.com/metting-and-events), listing event spaces/capacities and Gaibandha address. Crystal should answer the same practical questions with verified seating, actual hall photos and an easy booking path. Search also surfaced M N Convention & Community Centre, Gaibandha, on an Instagram location result, but no verified capacity or comparable performance data was available. A reliable Gobindaganj competitor ranking audit needs Bangladesh-local Maps observations; broad searches returned many unrelated Dhaka venues, which were excluded as local competitors. Do not infer competitor rank or demand from these results.

Google's official guidance (https://support.google.com/business/answer/3038177?hl=en) says event venues generally should not publish regular hours. Resolve visitor access versus booked event operation versus telephone availability with the owner before changing hours. Do not equate booking availability with a venue being staffed 24/7.

30 days after approved release: verify production host, run desktop/mobile browser QA and Lighthouse, confirm indexing in Search Console, submit sitemap, benchmark Bangladesh-filtered impressions/clicks and brand-plus-location queries. Export GBP calls, direction requests, website clicks and booking inquiries. Confirm Bengali Maps name/address/hours and photograph missing facilities. Request honest reviews after events without incentives.

60 days: compare the preceding 28-day period against baseline; report impressions, clicks, CTR, calls, directions and qualified booking inquiries. Reconcile website/GBP/Facebook contact details and pursue legitimate local business/partner citations. Publish approved genuine event updates, assess which pages/photos attract inquiries, and verify review-response coverage.

90 days: compare 28-day and 90-day trends with seasonality noted. Track inquiry-to-booking conversion, review count/rating distribution and median response time, geo-modified search impressions and mobile performance. Extend useful content only where real customer questions or Search Console data justify it. Do not set fabricated traffic or ranking guarantees.

## Google Business Profile action log

| Field | Status | Evidence / limitation |
| --- | --- | --- |
| English name | Verified, preserved | Crystal Community Center in owner editor. No geographic keywords appended. |
| Bengali Maps spelling | Correction submitted through Bengali Maps | The owner editor exposed only English. The Bengali Maps suggestion form exposed a dedicated Bengali-name field; submitted ক্রিস্টাল কমিউনিটি সেন্টার while preserving English. Publication/approval status must be checked in Google. |
| Address | Attempted, not saved | Google rejected the supplied landmark address with “Address can't be found.” Opened map adjustment and confirmed without dragging; save still rejected. Cancelled edit, preserving existing address. Requires an accepted street/local address or Google support. |
| Map pin | Preserved | Existing coordinate-style address matches supplied coordinates to displayed precision. No pin movement. Exact survey-level verification was not possible. |
| Categories | Saved in owner editor | Wedding venue primary; Community centre and Events Venue secondary. Removed Resort hotel, Wedding planner, Wedding service and Convention centre. Search panel may lag editor. |
| Description | Saved in owner editor | 515/750 characters shown. Bilingual location, events and verified owner-supplied facilities. Public propagation not separately confirmed. |
| Phones / website | Verified, unchanged | Both supplied phones and official website were already present. |
| Hours | Unresolved, unchanged | Existing 09:00–17:00 every day conflicts with reported 24/7; owner must distinguish staffed visiting hours, events and telephone availability. No speculative 24/7 edit. |
| Services | Submitted, pending Google review | Ten bilingual custom names and all ten bilingual descriptions saved. Google explicitly displayed “Your edit is pending review” and service-details confirmation. Existing Space rental retained. No prices added. |
| Parking | Saved in owner editor | On-site parking selected Yes. No free/paid/valet claims. |
| Accessibility / payments / other attributes | Reviewed, unchanged | Existing accessible entrance/car park claims found, but not physically verified. No new claims made about ramps, lifts, payments, restrooms or fee policies. |
| Owner Q&A | Not exposed in owner controls inspected | Six FAQs implemented on website instead. No fake customer questions posted. |
| Promotional Updates | Prepared, awaiting owner approval | Four bilingual posts in local-seo-content.md. Not published; no GBP draft assumed. |
| Review responses | Prepared, awaiting owner approval | Personalized responses and two calm replacements for old confrontational replies. Not published. |
| Review requests | Prepared, not sent | Actual owner-generated URL: https://g.page/r/CYccdUiTNUXKEBM/review |

Final Google Rich Results code test detected two valid items: one local business and one organization. The sole non-critical issue is optional `priceRange`; it is deliberately omitted because no verified prices were supplied. Schema.org reports zero errors and zero warnings. Valid markup does not guarantee that Google will display a rich result.
