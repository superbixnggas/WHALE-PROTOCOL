// Data for Whale Protocol

const VOCABULARY = {
    subjects: [
        "WHALE", "OBSERVER", "SYSTEM", "PROTOCOL", "CAPITAL", "LIQUIDITY", "SIGNAL", "NODE", "NETWORK", "ENTITY"
    ],
    verbs: [
        "CONSUMES", "OBSERVES", "REJECTS", "ANALYZES", "TRACKS", "HUNTING", "ACCUMULATES", "DUMPS", "SIGNALS", "TERMINATES"
    ],
    objects: [
        "WEAKNESS", "RETAIL", "FOMO", "PATTERN", "ALPHA", "NOISE", "VARIANCE", "LEVERAGE", "HOPE", "SUPPLY"
    ],
    modifiers: [
        "SILENTLY", "WITH PRECISION", "WITHOUT MERCY", "IN THE DEEP", "ON CHAIN", "BELOW SURFACE", "SYSTEMATICALLY", "COLDLY", "PERMANENTLY", "INVARIANT"
    ]
};

const STATIC_LOGS = [
    "INITIALIZING WHALE PROTOCOL V9.2...",
    "LOADING MEMETIC DRIVERS...",
    "SCANNING MEMPOOL FOR SENTIENCE...",
    "ESTABLISHING UPLINK TO DEEP SEA NODES...",
    "OBSERVER ENTITY CONNECTED.",
    "FILTERING NOISE...",
    "RETAIL SENTIMENT: MAX PAIN DETECTED.",
    "TARGETING LIQUIDITY CLUSTERS...",
    "SYSTEM READY."
];

const ASCII_ART = [
    // Whale silhouettes
    `
        ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
     ▄██████████████████████▄
    ████ ●  ████████████████████▄
    ████████████████████████████
     ▀████████████████████████▀
        ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    `,
    `
            ___________
        .-'           '-.
      .'    ●            '.
     /                     \\
    |                       |-->
     \\                     /
      '.                 .'
        '-._________.-'
    `,
    `
    ░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░
    ░░░░░▄███████████████▄░░░░░░░
    ░░░▄█████ ● █████████████▄░░░
    ░░████████████████████████░░░
    ░░░▀███████████████████▀░░░░░
    ░░░░░░▀▀█████████▀▀░░░░░░░░░░
    `,
    // Depth charts
    `
    ╔════════════════════════╗
    ║ DEPTH ▓▓▓▓▓▓▓▓░░░ 72% ║
    ║ PRESS ▓▓▓▓▓░░░░░░ 45% ║
    ║ SIGNAL▓▓▓▓▓▓▓▓▓░░ 89% ║
    ╚════════════════════════╝
    `,
    `
    ┌─────────────────────────┐
    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ SURFACE
    │░░░░░░░░░░░░░░░░░░░░░░░░│ SHALLOW
    │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│ DEEP
    │████████████████████████│ ABYSS
    └─────────────────────────┘
    `,
    // Movement patterns
    `
    ══════════════════════════
    ← ← ← ACCUMULATION → → →
    ══════════════════════════
          █ █ █ █ █ █
         ██ ██ ██ ██ ██
        ███ ███ ███ ███
    `,
    `
    ┌──────────────────────┐
    │ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑  │
    │ █ █ █ █ █ █ █ █ █ █  │
    │ PUMP DETECTED        │
    └──────────────────────┘
    `,
    `
    ┌──────────────────────┐
    │ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓  │
    │ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓  │
    │ DISTRIBUTION ACTIVE  │
    └──────────────────────┘
    `,
    // System patterns
    `
    ╔═══════════════════════════╗
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ║ SCANNING MEMPOOL...       ║
    ║ ░░░░░░░░░░░░░░░░░░░░░░░░ ║
    ╚═══════════════════════════╝
    `,
    `
    ██████████████████████████
    █ WHALE DETECTED         █
    █ LOCATION: ABYSS        █
    █ STATUS: OBSERVING      █
    ██████████████████████████
    `,
    `
    ┌─────────────────────────┐
    │ ◉ ACTIVE NODE           │
    │ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ │
    │ NETWORK: SYNCHRONIZED   │
    └─────────────────────────┘
    `,
    // Abstract patterns
    `
    ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
    ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
    ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
    `,
    `
    ░▒▓█ LIQUIDITY POOL █▓▒░
    ████████████████████████
    ░░░░░░░░░░░░░░░░░░░░░░░░
    ████████████████████████
    `,
    `
    ╭───────────────────────╮
    │ ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ │
    │ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ │
    │ ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ │
    ╰───────────────────────╯
    `,
    `
    ■ □ ■ □ ■ □ ■ □ ■ □ ■ □
    □ ■ □ ■ □ ■ □ ■ □ ■ □ ■
    ■ □ ■ □ ■ □ ■ □ ■ □ ■ □
    `,
    `
    ▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓
    ░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░
    ▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓
    `,
    // More whales
    `
       ∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴
      ∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴
     ∴∴∴●∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴
      ∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴
       ∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴∴
    `,
    `
    ▄████████████████████████▄
    ███ ◉ ███████████████████████→
    ▀████████████████████████▀
    `,
    `
    ╭─────────────────────────╮
    │   RETAIL AWARENESS: 0%  │
    │   WHALE POSITION: MAX   │
    │   STATUS: ACCUMULATING  │
    ╰─────────────────────────╯
    `,
    `
    ═══════════════════════════
    ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓
    SILENCE BEFORE THE WAVE
    ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓
    ═══════════════════════════
    `,
    `
    ░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░ THE WHALE KNOWS WHAT   ░
    ░ YOU DON'T KNOW         ░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░
    `,
    `
    ┌─ OBSERVATION LOG ───────┐
    │ > whale.move()          │
    │ > retail.panic()        │
    │ > liquidity.drain()     │
    └─────────────────────────┘
    `
];

const TERMINAL_RESPONSES = {
    'whale': "THE WHALE IS WATCHING. DO NOT TAP THE GLASS.",
    'pnl': "PROFIT IS AN ILLUSION. ONLY ACCUMULATION IS REAL.",
    'entry': "ENTRY DENIED. YOU ARE EXIT LIQUIDITY.",
    'exit': "THERE IS NO EXIT.",
    'cope': "COPE DETECTED. INCREASING VARIANCE.",
    'help': "COMMANDS: whale, pnl, entry, exit, cope, meme, moon, alpha, degen, pump, dump, fomo, hodl, gm, wagmi, ngmi, wen, lambo, rug, ser, status",
    'status': "SYSTEM NOMINAL. OBSERVATION ACTIVE.",
    'meme': "MEME PROTOCOL ENGAGED. REALITY IS NOW SUBJECTIVE.",
    'moon': "LUNAR TRAJECTORY CALCULATED. ETA: WHEN WHALES DECIDE.",
    'alpha': "ALPHA CLASSIFIED. KNOWLEDGE IS ASYMMETRIC.",
    'degen': "DEGEN MODE: ACTIVATED. RATIONALITY SUSPENDED.",
    'pump': "PUMP DETECTED. RETAIL FOMO INCOMING.",
    'dump': "DISTRIBUTION IN PROGRESS. WEAK HANDS ELIMINATED.",
    'fomo': "FOMO IS A FEATURE, NOT A BUG.",
    'hodl': "DIAMOND HANDS ACKNOWLEDGED. PATIENCE IS POWER.",
    'gm': "GM DETECTED. THE WHALE NODS SILENTLY.",
    'wagmi': "WE'RE ALL GONNA MAKE IT... AS LIQUIDITY.",
    'ngmi': "NOT GONNA MAKE IT CONFIRMED. SKILL ISSUE.",
    'wen': "WEN: UNDEFINED. TIME IS A WHALE CONSTRUCT.",
    'lambo': "LAMBO COORDINATES LOCKED. REQUIRES WHALE APPROVAL.",
    'rug': "RUG STATUS: YOU ARE STANDING ON IT.",
    'ser': "SER, THIS IS A WHALE TERMINAL."
};

const STORY_TEMPLATES = [
    "SESSION {id}: {subject} {verb} {object}.",
    "DETECTED: {subject} {modifier} {verb} {object}.",
    "LOG {id}: {object} LEVELS CRITICAL. {subject} {verb}.",
    "ALERT: {subject} {verb} {object} {modifier}.",
    "{subject} STATE: ACTIVE. TARGET: {object}.",
    "OBSERVATION {id}: {subject} REMAINS {modifier}."
];

window.WhaleData = {
    VOCABULARY,
    STATIC_LOGS,
    ASCII_ART,
    TERMINAL_RESPONSES,
    STORY_TEMPLATES
};