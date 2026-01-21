document.addEventListener('DOMContentLoaded', () => {
    const { VOCABULARY, ASCII_ART } = window.WhaleData;
    const container = document.getElementById('truth-content');
    
    // Seeded Random Generator (Linear Congruential Generator)
    // Ensures the "random" sequence is exactly the same every time the page loads.
    let seed = 123456789;
    function seededRandom() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    }

    function randomInt(max) {
        return Math.floor(seededRandom() * max);
    }

    function randomItem(arr) {
        return arr[randomInt(arr.length)];
    }

    // Vocabulary for this specific page (extending base data)
    const LABELS = ['protocol', 'state', 'session', 'log', 'alert', 'observer', 'system', 'kernel', 'memory'];
    const HEX_CODES = ['0x4F', '0x1A', '0xFF', '0x00', '0x9E', '0xB2', '0xC1', '0x77'];
    
    const TRUTH_TEMPLATES = [
        "{label}: {subject} {verb} {object}",
        "{label}: DETECTED {object} VARIANCE [{hex}]",
        "{label}: {subject} STATE -> {modifier}",
        "{label}: UPLINK {id} :: {verb} {object}",
        "{label}: MEMORY DUMP {hex}:{hex}:{hex}",
        "{label}: {modifier} {verb} {subject}",
        "{label}: SIGNAL {id} RECEIVED FROM {object}",
        "{label}: EXECUTING ORDER {id} // {subject} {verb}",
        "{label}: {object} SATURATION AT {percent}%",
        "{label}: RECURSIVE LOOP IN {subject} NODE"
    ];

    // Clear loading text
    container.innerHTML = '';

    // Generate 600 lines of content
    for (let i = 0; i < 600; i++) {
        const rand = seededRandom();

        // 35% Chance for ASCII Block
        if (rand < 0.35) {
            const art = randomItem(ASCII_ART);
            const div = document.createElement('div');
            div.className = 'text-xs text-green-900/50 font-vt323 whitespace-pre overflow-x-hidden my-4 select-none leading-none opacity-60';
            div.textContent = art;
            container.appendChild(div);
            continue; // Skip generating text line if we did ASCII
        }

        // Generate Text Line
        const template = randomItem(TRUTH_TEMPLATES);
        const label = randomItem(LABELS).padEnd(10, ' ');
        const subject = randomItem(VOCABULARY.subjects);
        const verb = randomItem(VOCABULARY.verbs);
        const object = randomItem(VOCABULARY.objects);
        const modifier = randomItem(VOCABULARY.modifiers);
        const hex = randomItem(HEX_CODES);
        const id = String(randomInt(9999)).padStart(4, '0');
        const percent = randomInt(100);

        let lineText = template
            .replace('{label}', label)
            .replace('{subject}', subject)
            .replace('{verb}', verb)
            .replace('{object}', object)
            .replace('{modifier}', modifier)
            .replace('{hex}', hex)
            .replace('{hex}', hex) // handle multiple
            .replace('{hex}', hex)
            .replace('{id}', id)
            .replace('{percent}', percent);

        // Add Timestamp
        const time = `[${String(randomInt(24)).padStart(2,'0')}:${String(randomInt(60)).padStart(2,'0')}:${String(randomInt(60)).padStart(2,'0')}.${String(randomInt(999)).padStart(3,'0')}]`;

        const lineDiv = document.createElement('div');
        
        // Style based on label
        let colorClass = 'text-gray-500';
        if (lineText.includes('alert')) colorClass = 'text-red-900/80';
        else if (lineText.includes('protocol')) colorClass = 'text-green-900/80';
        else if (lineText.includes('state')) colorClass = 'text-blue-900/80';
        
        lineDiv.className = `font-mono text-xs md:text-sm ${colorClass} hover:text-gray-300 transition-colors cursor-default`;
        lineDiv.innerHTML = `<span class="opacity-30 mr-2">${time}</span>${lineText}`;
        
        container.appendChild(lineDiv);
    }

    // Add final terminator
    const endDiv = document.createElement('div');
    endDiv.className = 'text-center mt-12 text-green-500 animate-pulse';
    endDiv.textContent = 'END OF STREAM // REFRESH FOR RE-SYNCHRONIZATION';
    container.appendChild(endDiv);
});