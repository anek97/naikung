// ═══════════════════════════════════════════════════════════
// DATA.JS — All content lives here.
// To add a new gate: copy a LEVELS entry and fill it in.
// To add a new daily practice: add to DAILY array.
// ═══════════════════════════════════════════════════════════

const DAILY = [
  {
    time: "5 min",
    name: "Triangle Breathing",
    desc: "Activate and warm the lower dantian. Never skip this. It is the ignition."
  },
  {
    time: "5 min",
    name: "Microcosmic Orbit",
    desc: "Tongue to palate. Circulate awareness up the spine, down the front. Open the circuit."
  },
  {
    time: "10 min",
    name: "Yin-Yang Exchange",
    desc: "Send yang down through huiyin into earth. Draw yin back up. Build the differential."
  },
  {
    time: "10 min",
    name: "Yi Qi Gong",
    desc: "Expand awareness through the meridians to the hands and feet. Fill the terminal points."
  },
  {
    time: "10 min",
    name: "Zhan Zhuang",
    desc: "Stand or sit in stillness. Let the chi distribute and settle. Do nothing."
  },
  {
    time: "5 min",
    name: "Integration Silence",
    desc: "Absolute stillness. Crown open. Earth below. Heaven above. You between them."
  }
];

const LEVELS = [
  // ─────────────────────────────────────────────
  // GATE 1
  // ─────────────────────────────────────────────
  {
    id: 0,
    gate: "EARTH GATE · Gate 1",
    name: "Lower Dantian · Yang Foundation",
    chinese: "下丹田",
    subtitle: "Nei Yang Gong · Internal Yang Cultivation",
    location: "📍 3 finger-widths below the navel, 2 inches inward",
    accent: "#D2691E",
    glow: "rgba(139,69,19,0.35)",
    element: "Earth",
    symbol: "⬇",
    prerequisite: null,

    unclog: {
      title: "How to Unclog the Lower Dantian",
      steps: [
        "Sit in half-lotus or cross-legged. Spine straight. Chin slightly tucked. Hands resting on knees, palms up.",
        "Place one hand over the lower abdomen — 3 fingers below the navel. Feel this spot with your awareness. Do not force anything. Simply notice it.",
        "Begin slow nasal breathing. Inhale 4 counts. Hold 4. Exhale 6. Do this for 5 minutes. This alone will begin to warm the area.",
        "On each inhale, gently contract the lower abdomen inward toward the spine. On each exhale, let it soften outward. This mechanical pumping moves stagnant energy.",
        "If you feel nothing: continue. Numbness IS a blockage. The absence of sensation is the clog itself.",
        "Do this for 20–30 minutes daily for a minimum of 30 days before expecting heat to develop."
      ]
    },

    cultivate: {
      title: "How to Cultivate Yang Chi",
      steps: [
        "After unclogging phase (warmth can be felt), begin formal Nei Yang Gong. Sit with spine erect.",
        "Triangle breathing: Inhale 4 counts through nose → Hold 4 → Exhale 8 through mouth. Slow down over weeks until you reach 1 full breath per minute.",
        "During the hold, focus all attention on the lower dantian. Imagine a small orange ember sitting there. Do not manufacture — simply observe.",
        "During exhale: do NOT lose attention. Keep the ember lit. The breath releases but awareness stays.",
        "Isometric key: on each inhale, VERY lightly contract the perineum upward (huiyin point). Hold through the breath retention. Release on exhale. This seals the yang chi downward.",
        "Practice 40–60 minutes per session. Twice daily if possible. Morning and evening."
      ]
    },

    sensations: [
      { phase: "Week 1–2",  text: "Nothing, or vague warmth. Do not chase it. This is normal. You are building the container." },
      { phase: "Week 3–4",  text: "Dull heat that builds during meditation and fades after. Like a warm stone sitting in the abdomen." },
      { phase: "Month 2",   text: "Persistent warmth even after meditation ends. The dantian is beginning to hold charge." },
      { phase: "Month 3+",  text: "Pulsation. A rhythmic throb independent of heartbeat. This is the chi ball forming. Milestone reached." }
    ],

    warning: "Do not rush. Forcing breath or over-contracting the perineum causes headaches and energy rising too early. Slow = fast here.",
    passing: "You pass Level 1 when the heat is persistent, the pulsation is felt consistently, and 40 minutes of focused meditation produces a tangible sensation of fullness and pressure below the navel. No teacher needed — the body confirms it."
  },

  // ─────────────────────────────────────────────
  // GATE 2
  // ─────────────────────────────────────────────
  {
    id: 1,
    gate: "EARTH ↔ ROOT BRIDGE · Gate 2",
    name: "Huiyin Activation · Drawing Yin from Earth",
    chinese: "會陰",
    subtitle: "Nei Yin Gong · Internal Yin Cultivation",
    location: "📍 Perineum — the point between genitals and anus",
    accent: "#5A8A3C",
    glow: "rgba(45,74,30,0.35)",
    element: "Water",
    symbol: "⟳",
    prerequisite: "Lower Dantian warm and pulsating consistently",

    unclog: {
      title: "How to Unclog the Huiyin Point",
      steps: [
        "Sit in the same posture as Gate 1. Begin with 10 minutes of triangle breathing to warm the lower dantian first. Always.",
        "Begin Mula Bandha practice (root lock): slowly contract the perineum as if stopping urination. Hold 5 seconds. Release fully. Repeat 20 times.",
        "Most people have no felt awareness of this point. The blockage is both physical (muscular tension) and energetic. The contraction practice alone begins dissolving it.",
        "After contractions, sit still. Notice if there is any sensation — tingling, coolness, magnetic pull — at the perineum. No sensation = still clogged. Continue daily.",
        "Add: after contraction holds, visualize a root descending from the perineum downward through the floor into the earth. Not a command — an invitation."
      ]
    },

    cultivate: {
      title: "How to Draw Yin Chi Upward",
      steps: [
        "With dantian warm and huiyin physically sensitive, begin Nei Yin Gong. Same seated posture.",
        "Inhale: contract the huiyin point upward toward the lower dantian. Simultaneously feel cool dark energy rising from the earth through the perineum, up into the dantian.",
        "Hold: let the yin chi sit in the dantian alongside the existing yang chi. Feel them as two distinct energies — warm (yang) and cool (yin).",
        "Exhale: SEND yang chi downward from the dantian, through the huiyin, into the earth below you. 'Feel the body sinking.' You are exchanging — sending yang down, pulling yin up.",
        "This exchange is the alchemical practice. Yin from earth. Yang from heaven. Both meeting in the lower dantian.",
        "Continue for 30–40 minutes. The microcosmic orbit will begin to activate spontaneously as this exchange deepens."
      ]
    },

    sensations: [
      { phase: "Early stage", text: "Coolness at the perineum during yin-drawing inhales. Distinctly different from the dantian warmth. This is yin chi." },
      { phase: "Mid stage",   text: "A sense of two currents in the lower abdomen — one warm and rising, one cool and descending. Like hot and cold water meeting." },
      { phase: "Advanced",    text: "Spontaneous tingling traveling up the spine during the exchange. The microcosmic orbit is opening. May feel like electricity in the back." },
      { phase: "Milestone",   text: "A 'clicking' or locking sensation at the lower dantian, as if the two currents have found a stable meeting point. Yin-yang contact — not yet fusion." }
    ],

    warning: "Yin chi rising too fast without sufficient yang foundation causes cold sensations, excessive sensitivity, emotional flooding, and disturbed sleep. Build yang first. Always.",
    passing: "Level 2 is passed when you can distinguish yin and yang chi as separate, palpable sensations, and when the microcosmic orbit activates consistently during practice."
  },

  // ─────────────────────────────────────────────
  // GATE 3
  // ─────────────────────────────────────────────
  {
    id: 2,
    gate: "MICROCOSMIC ORBIT · Gate 3",
    name: "The Circuit Opens · Spine and Front Channel",
    chinese: "小週天",
    subtitle: "Xiao Zhou Tian · Small Heavenly Circulation",
    location: "📍 Governing Vessel (spine) + Conception Vessel (front centerline)",
    accent: "#4A8FBF",
    glow: "rgba(26,58,92,0.35)",
    element: "Fire",
    symbol: "◎",
    prerequisite: "Yin-yang contact established at lower dantian, spinal activation felt",

    unclog: {
      title: "How to Open the Microcosmic Orbit",
      steps: [
        "The orbit has 2 vessels: the Du Mai (Governing — up the spine) and the Ren Mai (Conception — down the front). Energy must flow in a complete loop.",
        "Common blockage points: the tailbone (wei lu), the base of the skull (yu zhen), and the crown (bai hui). Also the throat and the area behind the navel on the front channel.",
        "For the tailbone block: gentle spinal rocking during meditation. Sitting on a cushion angled slightly forward opens the tailbone. Breathe into it.",
        "For the skull base block: draw the chin slightly in (mild throat lock). On inhale, feel energy pushing through the base of the skull. This one opens slowly.",
        "For the front channel: touch the tongue to the upper palate (just behind the teeth). This closes the circuit between the two vessels. It is not symbolic — it is electrical. Do this in every session."
      ]
    },

    cultivate: {
      title: "How to Run the Microcosmic Orbit",
      steps: [
        "Tongue to upper palate. Seated posture. Dantian warmed by 10–15 minutes of Level 1 breathing first.",
        "Begin to guide awareness (NOT force energy) up the spine on the inhale — from huiyin, up through the sacrum, lumbar, thoracic, cervical, to the crown.",
        "On the exhale, guide awareness down the front — from crown, through forehead, face, throat, chest, abdomen, back to the dantian.",
        "Do NOT visualize elaborate colors or lights. Simply feel warmth or tingling traveling the path. Where you feel nothing = a block. Breathe into that spot specifically.",
        "Once the orbit runs naturally without deliberate guidance, you are complete. This can take months to years.",
        "Advanced: reverse the orbit occasionally (down the spine, up the front) to balance yin-yang polarity. This prevents excess yang buildup."
      ]
    },

    sensations: [
      { phase: "Opening",     text: "Warmth or tingling spots along the spine. Not always continuous — like Christmas lights where some don't work yet." },
      { phase: "Mid-opening", text: "The sensation moves without deliberate guidance. You think 'spine' and it rises on its own. Awareness and chi are beginning to merge." },
      { phase: "Full flow",   text: "A continuous warm current completing a full loop with each breath. Sometimes accompanied by spontaneous body sways or deep sighs. All normal." },
      { phase: "Milestone",   text: "The orbit runs even when not meditating — during stillness, during nature walks. The circuit is now baseline." }
    ],

    warning: "Forcing energy through blocked points causes pain, pressure headaches, or emotional eruptions (stored trauma releasing from the spine). Never force. Guide and wait.",
    passing: "The orbit passes when it runs continuously without deliberate effort and when blockage points along the spine no longer stop the flow. The body circulates energy as naturally as it circulates blood."
  },

  // ─────────────────────────────────────────────
  // GATE 4
  // ─────────────────────────────────────────────
  {
    id: 3,
    gate: "THE 72 MERIDIANS · Gate 4",
    name: "Yi Qi Gong · Opening All Channels",
    chinese: "經絡",
    subtitle: "Yi Qi Gong · Intent-Chi Cultivation",
    location: "📍 Throughout the entire body — limbs, organs, surface channels",
    accent: "#9B59B6",
    glow: "rgba(74,26,107,0.35)",
    element: "Metal",
    symbol: "⫶",
    prerequisite: "Microcosmic orbit running without deliberate effort",

    unclog: {
      title: "How to Unclog the 72 Meridians",
      steps: [
        "The 72 meridians branch from the two primary vessels already opened. They carry chi into the limbs, organs, and surface of the body.",
        "Physical preparation: daily cold exposure forces peripheral blood flow and activates the body's surface channels. Non-negotiable at this stage.",
        "Acupressure on the key junctions: Laogong (center of palm), Yongquan (sole of foot), Zusanli (shin), Neiguan (wrist). Press for 1–2 minutes each daily.",
        "Standing Zhan Zhuang: stand with knees slightly bent, arms rounded as if holding a ball at chest height. 20–30 minutes. Chi distributes through all limbs through pressure and stillness.",
        "Where you feel tingling or warmth during standing = open. Where you feel nothing or aching = blocked. Stay in the posture. Stillness opens channels over time."
      ]
    },

    cultivate: {
      title: "How to Fill the Meridian System",
      steps: [
        "After standing Zhan Zhuang, sit. Begin with dantian warming and microcosmic orbit activation.",
        "Yi Qi Gong: using pure intent (no breath manipulation), send awareness from the lower dantian outward. First to the legs. Then up the torso. Then into the arms. Then to the hands.",
        "The Laogong points in the palms are key emission points. Bring awareness there. Hold it. The hands will begin to feel heat, magnetic resistance, or tingling.",
        "Practice projecting and retracting: fill the hands with awareness, then draw it back to the dantian. Repeat. This trains energy to travel the meridian network bidirectionally.",
        "Eventually: hold a plant, a glass of water, a person's hand. Notice if you can feel the energy exchange — warmth, tingling, or resistance coming back. External sensitivity developing.",
        "This level requires 1–3 hours of daily practice at its peak cultivation phase."
      ]
    },

    sensations: [
      { phase: "Early",     text: "Tingling in the palms and soles. Sometimes compared to mild pins-and-needles that is pleasurable rather than painful. The terminals are opening." },
      { phase: "Mid",       text: "Warmth that travels visibly from the core outward when you direct attention. You can feel the route chi takes to reach your hands." },
      { phase: "Advanced",  text: "Spontaneous chi flow through limbs independent of direction. Hands feel magnetized. Resistance when palms face each other. The chi ball is felt as a physical object." },
      { phase: "Milestone", text: "Full body aliveness — every cell feels subtly lit. Not electricity. More like presence — as if the body is completely occupied by awareness for the first time." }
    ],

    warning: "Over-cultivation without emotional processing causes chi to amplify unresolved trauma. Anger, grief, or fear will surface. Do not suppress them again. They are clearing.",
    passing: "Level 4 passes when you can feel and move chi to any part of the body on command, when the hands feel consistently magnetically alive, and when the chi ball between the palms is reliably palpable."
  },

  // ─────────────────────────────────────────────
  // GATE 5
  // ─────────────────────────────────────────────
  {
    id: 4,
    gate: "THE FUSION THRESHOLD · Gate 5",
    name: "Yin-Yang Fusion · Thunder and Lightning",
    chinese: "陰陽合一",
    subtitle: "Internal Alchemy · The Threshold Event",
    location: "📍 Lower Dantian — the site of internal alchemy",
    accent: "#FFD700",
    glow: "rgba(255,215,0,0.2)",
    element: "Lightning",
    symbol: "☰",
    prerequisite: "All 72 meridians sensitive, chi ball palpable, orbit running",

    unclog: {
      title: "Preparing the Vessel for Fusion",
      steps: [
        "Fusion cannot be forced. It is a consequence of sufficient accumulation. If the previous four levels are genuinely complete, fusion begins to occur spontaneously.",
        "Increase the exchange practice from Gate 2. More yang sent down into the earth, more yin drawn back up. Build the differential. The greater the differential, the stronger the eventual fusion.",
        "Physical vessel: your body must be clean. Diet simplicity is correct at this stage — no substances, minimal processed food. The body must be a clean conductor.",
        "Emotional clarity: stored emotions are dielectric — they interfere with the body's electromagnetic field. Unresolved grief, rage, or fear is a literal physical blockage in the dantian. Address it.",
        "Bring all previous practices together in one session: warm dantian, yin-yang exchange, orbit running, meridians filled. Then sit in absolute stillness. Do nothing. Let the energies find each other."
      ]
    },

    cultivate: {
      title: "The Fusion Practice",
      steps: [
        "In deep stillness with the dantian full and the orbit running, draw yin from the earth through huiyin AND yang from the sky through baihui simultaneously on one long inhale.",
        "Let both currents travel toward the lower dantian at the same time. Feel them approach each other from opposite directions.",
        "Do not command them to merge. Simply hold your breath and your attention on the dantian. Let the two energies find contact naturally.",
        "The moment of contact produces a physical sensation — most describe it as an electric shock or sudden expansion in the lower abdomen. This is unmistakable. You will not wonder if it happened.",
        "If the shock occurs: do NOT react. Do not celebrate. Do not move. Stay absolutely still and let the energy stabilize. Any reaction disperses it.",
        "After the session: the lower dantian will feel denser. More solid. Like a warm stone that doesn't cool. This persists between sessions if the fusion is genuine."
      ]
    },

    sensations: [
      { phase: "Contact (pre-fusion)", text: "Electric or magnetic sensation in the lower abdomen as yin and yang approach each other. Like two magnets being brought together — resistance, then snap." },
      { phase: "Fusion moment",        text: "An internal electric shock or sudden full-body warmth radiating from the dantian outward. Some experience light behind closed eyes. Some report involuntary sounds or tears. All normal." },
      { phase: "Post-fusion",          text: "A new kind of stillness. The dantian feels like a gravitational center — the body naturally organizes around it. The first real taste of sovereign embodiment." },
      { phase: "Integrated state",     text: "You become a conduit between heaven and earth. You feel both the downward pull of Earth and upward pull of Heaven running through you simultaneously and continuously." }
    ],

    warning: "Do not attempt fusion practices without genuine completion of previous levels. Forced attempts without proper foundation cause dangerous energy dispersal — anxiety disorders, sleep disorders, and in rare cases psychotic breaks.",
    passing: "Fusion is self-confirming. The electric shock sensation in the dantian, followed by persistent dense warmth that does not fade between sessions, is the marker. There is no mistaking it for imagination."
  },

  // ─────────────────────────────────────────────
  // GATE 6
  // ─────────────────────────────────────────────
  {
    id: 5,
    gate: "HEAVEN GATE · Gate 6",
    name: "Crown Opening · Baihui Activation",
    chinese: "百會",
    subtitle: "The Final Gate — Heaven Descends",
    location: "📍 Crown of the skull — top center",
    accent: "#A0C4FF",
    glow: "rgba(160,196,255,0.18)",
    element: "Ether",
    symbol: "☽",
    prerequisite: "Yin-yang fusion stable and persistent at lower dantian",

    unclog: {
      title: "How the Crown Opens — and What Blocks It",
      steps: [
        "The crown does NOT open through crown chakra meditations, visualizations of violet light, or affirmations. These are maps, not the territory.",
        "The crown opens as a result of sufficient pressure from below. When the dantian is fused and the orbit runs freely, energy rises naturally. The crown is the pressure-relief valve.",
        "The most common block: the area at the base of the skull (yu zhen — jade pillow). This must be open before the crown can fully activate. Use the chin-tuck lock and breathe specifically into the back of the skull.",
        "Secondary block: excess mental activity. The crown gate requires mushin — the empty mind state. A busy, analytical mind physically compresses the crown point. Silence is the unclogging agent.",
        "Practice: after completing all lower levels in one session, sit in complete inner silence for 20 minutes. No visualization. No guidance. Simply be the breath. The crown, when ready, opens on its own."
      ]
    },

    cultivate: {
      title: "Cultivating the Crown Connection",
      steps: [
        "With all lower levels stable, begin dedicated Baihui work. Touch the crown lightly with one finger to locate the point — a slight depression at the very top center of the skull.",
        "On each inhale: feel yang chi entering through the crown, descending through the center of the skull, down the front of the spine, meeting the dantian.",
        "On each exhale: feel the unified chi from the dantian radiating outward through the entire body — limbs, skin, field.",
        "The crown connection adds a quality of clarity and spaciousness that was not present before. The dantian warmth becomes luminous rather than just thermal.",
        "At this level, mushin and nei kung merge. The empty mind and the full dantian are the same state approached from different directions.",
        "Sitting in nature accelerates crown development — particularly under open sky, at sunrise or sunset, or near moving water."
      ]
    },

    sensations: [
      { phase: "Opening signal",   text: "Tingling or pressure at the very top of the skull. Sometimes a sensation of the scalp lifting or expanding. Not painful — more like a gentle suction upward." },
      { phase: "Partial opening",  text: "Coolness descending from the crown during inhales. A quality of luminosity in the thoughts — clarity without effort. Things that previously caused turbulence simply don't." },
      { phase: "Full opening",     text: "A column of energy running from the crown to the perineum, continuous and self-sustaining. You are the axis. Grounded and expansive simultaneously." },
      { phase: "Integrated crown", text: "What Musashi called mushin — not emptiness but fullness so complete it feels empty. Action without interference. Presence without performance. This is the state." }
    ],

    warning: "At this stage the only danger is spiritual ego — believing arrival means superiority. The tradition is clear: the more powerful the cultivation, the greater the obligation to remain grounded and of service.",
    passing: "The crown passage has no 'passing.' It is the arrival. When the column runs from crown to root without effort, when clarity is the baseline rather than a peak experience, when you are unmoved by what previously moved you — you have not passed the level. You have become it."
  }

  // ─────────────────────────────────────────────
  // ADD NEW GATES BELOW THIS LINE
  // Copy the block above, increment the id,
  // fill in your content, and save.
  // ─────────────────────────────────────────────
];
