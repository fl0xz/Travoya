import { NextResponse } from 'next/server';

// Define Flight interface
interface Flight {
  id: number;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  departureAirport: string;
  arrivalAirport: string;
  date: string;
  price: number;
}

// Mock flights data including prices
const flightsData: Flight[] = [
  {
    id: 1,
    airline: 'Ryanair',
    departureTime: '06:45',
    arrivalTime: '10:35',
    duration: '3h 50m',
    stops: 'Nonstop',
    departureAirport: 'LTN',
    arrivalAirport: 'ACE',
    date: '2025-08-17',
    price: 60,
  },
  {
    id: 2,
    airline: 'Ryanair',
    departureTime: '21:15',
    arrivalTime: '01:05',
    duration: '3h 50m',
    stops: 'Nonstop',
    departureAirport: 'LTN',
    arrivalAirport: 'ACE',
    date: '2025-08-17',
    price: 55,
  },
  {
    id: 3,
    airline: 'EasyJet',
    departureTime: '07:30',
    arrivalTime: '11:20',
    duration: '3h 50m',
    stops: 'Nonstop',
    departureAirport: 'LTN',
    arrivalAirport: 'ACE',
    date: '2025-08-17',
    price: 75,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin');
  const dest = searchParams.get('dest');
  const date = searchParams.get('date'); // expected format YYYY-MM-DD

  // Return all mock flights matching airports, and override date to the requested date
  let results: Flight[] = [];
  if (origin && dest && date) {
    results = flightsData
      .filter(f => f.departureAirport === origin && f.arrivalAirport === dest)
      .map(f => ({ ...f, date }));
  }

  return NextResponse.json({ flights: results });
} 