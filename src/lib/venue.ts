export const venue = {
  url: "https://www.crystalccbd.site/",
  addressEn: "Opposite Pex Eye Hospital, Gobindaganj 5740, Gaibandha District, Rangpur Division, Bangladesh",
  addressBn: "পেক্স চক্ষু হাসপাতালের বিপরীত দিকে, গোবিন্দগঞ্জ-৫৭৪০, জেলা: গাইবান্ধা, বিভাগ: রংপুর, বাংলাদেশ",
  directions: "https://www.google.com/maps/dir/?api=1&destination=25.1463083%2C89.3889261",
};
export const venueSchema = {
  "@context": "https://schema.org", "@type": ["EventVenue", "LocalBusiness"], "@id": venue.url + "#venue",
  name: "Crystal Community Center", alternateName: "ক্রিস্টাল কমিউনিটি সেন্টার",
  url: venue.url, image: venue.url + "crystal-gobindaganj-wedding-hall-og.jpg",
  telephone: ["+8801915762486", "+8801797944561"], email: "crystalcc2022@gmail.com",
  address: { "@type": "PostalAddress", streetAddress: "Opposite Pex Eye Hospital", addressLocality: "Gobindaganj", addressRegion: "Gaibandha, Rangpur Division", postalCode: "5740", addressCountry: "BD" },
  geo: { "@type": "GeoCoordinates", latitude: 25.1463083, longitude: 89.3889261 },
  hasMap: "https://www.google.com/maps?cid=14575114675746577543",
  amenityFeature: ["Air-conditioned auditorium", "Rooftop event space", "Three-burner commercial kitchen", "Car parking", "On-site Crystal Cafe"].map(name => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  containsPlace: [{ "@type": "Room", name: "Third-floor main auditorium", description: "Auditorium seating for 350 guests. This is not the entire building occupancy limit." }, { "@type": "Place", name: "Fourth-floor rooftop event space" }],
};
