document.addEventListener('DOMContentLoaded', () => {
    const { VOCABULARY, STATIC_LOGS, ASCII_ART, TERMINAL_RESPONSES, STORY_TEMPLATES } = window.WhaleData;

    const storyContainer = document.getElementById('story-log');
    const terminalInput = document.getElementById('cmd-input');
    const terminalOutput = document.getElementById('cmd-output');
    const copyBtn = document.getElementById('copy-address');
    
    let sessionCount = 1;
    let autoScroll = true;

    // --- Utils ---
    const randomInt = (max) => Math.floor(Math.random() * max);
    const randomItem = (arr) => arr[randomInt(arr.length)];

    // --- Story Generator ---
    function generateLine() {
        const template = randomItem(STORY_TEMPLATES);
        const subject = randomItem(VOCABULARY.subjects);
        const verb = randomItem(VOCABULARY.verbs);
        const object = randomItem(VOCABULARY.objects);
        const modifier = randomItem(VOCABULARY.modifiers);

        let line = template
            .replace('{id}', String(randomInt(9999)).padStart(4, '0'))
            .replace('{subject}', subject)
            .replace('{verb}', verb)
            .replace('{object}', object)
            .replace('{modifier}', modifier);
        
        return `> ${line}`;
    }

    function addLine(text, isAscii = false) {
        const div = document.createElement('div');
        // ASCII Styling: denser, darker, tighter spacing
        div.className = isAscii 
            ? 'text-[10px] leading-[0.8] text-white/40 my-2 whitespace-pre font-vt323 select-none overflow-hidden' 
            : 'mb-1 text-white';
        
        if (isAscii) {
            div.textContent = text;
        } else {
            div.textContent = text;
        }

        storyContainer.appendChild(div);

        // Limit history to prevent memory leak
        if (storyContainer.children.length > 200) {
            storyContainer.removeChild(storyContainer.firstChild);
        }

        if (autoScroll) {
            storyContainer.scrollTop = storyContainer.scrollHeight;
        }
    }

    // --- Initialization ---
    function init() {
        // Add static logs first
        let delay = 0;
        STATIC_LOGS.forEach((log, index) => {
            setTimeout(() => {
                addLine(`> ${log}`);
            }, index * 100); // Faster init
            delay = index * 100;
        });

        // Start infinite loop
        setTimeout(loop, delay + 500);
    }

    function loop() {
        // Faster loop for "high density" feel
        const delay = randomInt(800) + 200; 
        
        // High frequency ASCII (65% chance - more ASCII than text)
        if (Math.random() < 0.65) { 
            addLine(randomItem(ASCII_ART), true);
        } else {
            addLine(generateLine());
        }

        setTimeout(loop, delay);
    }

    // --- Terminal Logic ---
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = terminalInput.value.trim().toLowerCase();
            const response = TERMINAL_RESPONSES[cmd] || `ERROR: COMMAND '${cmd.toUpperCase()}' NOT RECOGNIZED.`;
            
            // Show command in output
            const cmdLine = document.createElement('div');
            cmdLine.innerHTML = `<span class="text-gray-500">$</span> ${terminalInput.value}`;
            terminalOutput.appendChild(cmdLine);

            // Show response
            const respLine = document.createElement('div');
            respLine.className = 'text-green-400/80 mb-2';
            respLine.textContent = `> ${response}`;
            terminalOutput.appendChild(respLine);

            terminalInput.value = '';
            
            // Scroll terminal to bottom
            const termWindow = document.getElementById('terminal-window');
            termWindow.scrollTop = termWindow.scrollHeight;
        }
    });

    // --- Copy Logic ---
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const address = "0x000000000000000000000000000000000000dead"; // Placeholder
            navigator.clipboard.writeText(address).then(() => {
                const original = copyBtn.innerHTML;
                copyBtn.textContent = "[COPIED]";
                setTimeout(() => {
                    copyBtn.innerHTML = original;
                }, 2000);
            });
        });
    }

    // --- Scroll Handling ---
    storyContainer.addEventListener('scroll', () => {
        const isBottom = Math.abs(storyContainer.scrollHeight - storyContainer.scrollTop - storyContainer.clientHeight) < 50;
        autoScroll = isBottom;
    });

    init();
});