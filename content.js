/* =========================================================
   FLAVOR & FOILS — EASY EDIT CONTROL PANEL
   Only edit the stuff below.
   Do NOT touch anything outside this file unless needed.
========================================================= */

const siteContent = {

  /* =====================================================
     LIVE STATUS

     OPTIONS:
     - LIVE NOW
     - OFFLINE
     - RESTOCKING
     - SHIPPING ORDERS
     - NEXT STREAM THURSDAY
  ===================================================== */

  liveStatus: "OFFLINE",



  /* =====================================================
     MAIN HOMEPAGE BANNER

     This is the big announcement people see first.

     EXAMPLES:
     - Shop sold out — restock coming soon.
     - Vintage stream Friday night.
     - New sealed inventory added.
     - PSA submission updates soon.
  ===================================================== */

  mainBanner: "Shop sold out — restock coming soon.",



  /* =====================================================
     NEXT STREAM INFO

     Update whenever your schedule changes.
  ===================================================== */

  nextStream: "Thursday at 8PM EST",



  /* =====================================================
     SHOP STATUS

     OPTIONS:
     - OPEN
     - LIMITED STOCK
     - RESTOCKING
     - SHIPPING WEEK
  ===================================================== */

  shopStatus: "RESTOCKING",



  /* =====================================================
     FEATURED SPOTLIGHT SECTION

     This is the “cool thing right now” on the homepage.

     Use it for:
     - important pull
     - PSA/grading update
     - vendor pickup
     - favorite collection piece
     - stream theme
     - sold out/restock update
     - card show/event prep
  ===================================================== */

  featuredLabel: "FEATURED SPOTLIGHT",

  featuredTitle: "PSA Submission Update",

  featuredText:
    "Some serious vintage heat is still out at grading — big updates coming when the returns land.",

  featuredButtonText: "Join the Discord for updates",

  featuredButtonLink: "https://discord.gg/5yxDPmGRMg",



  /* =====================================================
     LATEST VIDEO LINK

     Paste your newest TikTok or YouTube video link below.
  ===================================================== */

  latestVideoLink: "PASTE_LATEST_VIDEO_LINK_HERE",



  /* =====================================================
     SHOP BUTTON LINK

     Paste your shop/store link below.
  ===================================================== */

  shopLink:
    "https://www.tiktok.com/@flavorandfoils?_r=1&_t=zp-92k6zzoymy2",



  /* =====================================================
     DISCORD INVITE LINK

     Paste your Discord invite link below.
  ===================================================== */

  discordLink: "https://discord.gg/5yxDPmGRMg",



  /* =====================================================
     STREAM SCHEDULE

     Add or remove stream days below.
  ===================================================== */

  schedule: [
    "Monday — Late night around 11 PM",
    "Tuesday — Afternoon around 3–6 PM",
    "Wednesday — Afternoon around 3–6 PM",
    "Thursday — Main auction night around 11 PM",
    "Friday — Late night around 11 PM",
    "Saturday — Off day",
    "Sunday — Afternoon around 3–6 PM"
  ],



  /* =====================================================
     EVENTS BOARD

     This powers the Community page Events Board.

     Add/remove events anytime.

     STATUS IDEAS:
     - Watching
     - Upcoming
     - Interested
     - Confirmed
     - Maybe
     - Planned
  ===================================================== */

  eventsBoard: [

    {
      title: "Collect-A-Con Watchlist",

      text:
        "Big show energy, trade possibilities, content, pickups, and future setup potential.",

      status: "Watching"
    },

    {
      title: "Local Card Shows",

      text:
        "Potential vendor tables, trade nights, meetups, and live content days.",

      status: "Interested"
    },

    {
      title: "Stream Specials",

      text:
        "Theme nights, auctions, community goals, giveaways, and live-only drops.",

      status: "Upcoming"
    },

    {
      title: "Community Meetups",

      text:
        "Future plans for collectors who want to trade, rip packs, talk cards, and hang.",

      status: "Maybe"
    }

  ]

};
