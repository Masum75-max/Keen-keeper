'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../app/Navbar/page'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { createContext } from "react";
import Footer from "./Footer/page";
import Contextpage from "./Context/Contextpage";
import InteractionContex from "./Context/InteractionContex";
config.autoAddCss = false;
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const  LengthOfTotal = createContext();

  const friends  =  [
  {
    "id": 1,
    "name": "John Doe",
    "picture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400",
    "email": "john@example.com",
    "days_since_contact": 12,
    "status": "almost-due",
    "tags": ["college", "close friend"],
    "bio": "Met in university. Love hiking together.",
    "goal": 14,
    "next_due_date": "2025-07-20"
  },
  {
    "id": 2,
    "name": "Sarah Chen",
    "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400",
    "email": "schen@workmail.com",
    "days_since_contact": 3,
    "status": "active",
    "tags": ["professional", "mentor"],
    "bio": "Former manager at TechCorp. Great for career advice.",
    "goal": 30,
    "next_due_date": "2025-08-12"
  },
  {
    "id": 3,
    "name": "Marcus Miller",
    "picture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
    "email": "marcus.m@web.com",
    "days_since_contact": 45,
    "status": "overdue",
    "tags": ["high school", "gym buddy"],
    "bio": "Grew up in the same neighborhood. Into weightlifting.",
    "goal": 21,
    "next_due_date": "2025-06-01"
  },
  {
    "id": 4,
    "name": "Elena Rodriguez",
    "picture": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400",
    "email": "elena.rod@provider.net",
    "days_since_contact": 5,
    "status": "active",
    "tags": ["family", "sister"],
    "bio": "Sister living in Madrid. Try to call weekly.",
    "goal": 7,
    "next_due_date": "2025-07-22"
  },
  {
    "id": 5,
    "name": "David Kim",
    "picture": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400",
    "email": "dkim88@inbox.com",
    "days_since_contact": 60,
    "status": "overdue",
    "tags": ["gaming", "online"],
    "bio": "Met on Discord. We play tactical shooters on weekends.",
    "goal": 14,
    "next_due_date": "2025-05-15"
  },
  {
    "id": 6,
    "name": "Priya Sharma",
    "picture": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
    "email": "priya.design@studio.com",
    "days_since_contact": 2,
    "status": "active",
    "tags": ["freelance", "creative"],
    "bio": "Graphic designer I collaborate with on side projects.",
    "goal": 30,
    "next_due_date": "2025-08-10"
  },
  {
    "id": 7,
    "name": "Liam O'Connor",
    "picture": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400",
    "email": "liam.oc@ireland.ie",
    "days_since_contact": 90,
    "status": "overdue",
    "tags": ["travel", "hostel-mate"],
    "bio": "Met while backpacking in Japan. Lives in Dublin.",
    "goal": 180,
    "next_due_date": "2025-04-10"
  },
  {
    "id": 8,
    "name": "Aisha Yusuf",
    "picture": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400",
    "email": "aisha.y@community.org",
    "days_since_contact": 10,
    "status": "active",
    "tags": ["volunteer", "local"],
    "bio": "Co-organizer for the local food bank initiative.",
    "goal": 14,
    "next_due_date": "2025-07-25"
  },
  {
    "id": 9,
    "name": "Tom Baker",
    "picture": "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400",
    "email": "tbakes@outlook.com",
    "days_since_contact": 25,
    "status": "overdue",
    "tags": ["neighbor", "close friend"],
    "bio": "Lives next door. Always down for a backyard BBQ.",
    "goal": 7,
    "next_due_date": "2025-07-01"
  },
  {
    "id": 10,
    "name": "Chloe Dupont",
    "picture": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400",
    "email": "chloe.d@fashion.fr",
    "days_since_contact": 8,
    "status": "active",
    "tags": ["college", "study buddy"],
    "bio": "Exchange student from Paris. Expert at macroeconomics.",
    "goal": 30,
    "next_due_date": "2025-08-05"
  },
  {
    "id": 11,
    "name": "Sam Rivera",
    "picture": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400",
    "email": "sam.riv@music.com",
    "days_since_contact": 1,
    "status": "active",
    "tags": ["band", "hobby"],
    "bio": "Bassist in our amateur jazz quartet.",
    "goal": 7,
    "next_due_date": "2025-07-21"
  },
  {
    "id": 12,
    "name": "Aris Thorne",
    "picture": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
    "email": "thorne.research@uni.edu",
    "days_since_contact": 150,
    "status": "overdue",
    "tags": ["academic", "mentor"],
    "bio": "Thesis advisor. Need to update him on my research paper.",
    "goal": 90,
    "next_due_date": "2025-03-20"
  }
]





export default function RootLayout({ children }) {

    let total = friends.length;

       let on_track =0;
       let need_attention =0;

       for( let friend of friends){
        if(friend.status === "overdue") need_attention++;
        if(friend.status === "active") on_track++;
       }


       let data = {
        friends,
        total,
        on_track,
        need_attention,
       
       }
  return (
    <html
      lang="en"
     className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     
      <body className="min-h-full flex flex-col">

         <Navbar></Navbar>

     
      <InteractionContex>
        <Contextpage>
           <LengthOfTotal.Provider value={data}>
      {children}
     </LengthOfTotal.Provider>
      </Contextpage>
      </InteractionContex>
    
       <Footer></Footer>

        </body>
    </html>
  );
}
