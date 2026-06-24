export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const { origins, destinations } = req.query;
  
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origins)}&destinations=${encodeURIComponent(destinations)}&units=imperial&key=AIzaSyDLSqMaaRBH2Ckixyrzuol04oNPibS4p7s`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  res.status(200).json(data);
}
