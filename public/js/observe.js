// Observation Protocol
(function() {
    'use strict';
    
    let isActive = false;
    let cooldown = false;
    
    const overlay = document.createElement('div');
    overlay.id = 'observe-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 10, 5, 0);
        pointer-events: none;
        z-index: 9998;
        transition: background 1.5s ease-in-out;
    `;
    
    const output = document.createElement('div');
    output.id = 'observe-output';
    output.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'VT323', monospace;
        font-size: 11px;
        color: rgba(34, 197, 94, 0);
        white-space: pre;
        text-align: center;
        pointer-events: none;
        z-index: 9999;
        transition: color 2s ease-in-out;
        line-height: 1.1;
        letter-spacing: 1px;
    `;
    
    const msg = document.createElement('div');
    msg.id = 'observe-msg';
    msg.style.cssText = `
        position: fixed;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
        font-family: monospace;
        font-size: 10px;
        color: rgba(34, 197, 94, 0);
        text-transform: uppercase;
        letter-spacing: 3px;
        pointer-events: none;
        z-index: 9999;
        transition: color 2s ease-in-out;
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(output);
    document.body.appendChild(msg);
    
    function g() {
        const p = [
            () => {
                const w = 40, h = 8;
                let r = '';
                for (let y = 0; y < h; y++) {
                    for (let x = 0; x < w; x++) {
                        const d = Math.sin(x * 0.3 + y * 0.5) * Math.cos(y * 0.4);
                        r += d > 0.3 ? '█' : d > 0 ? '▓' : d > -0.3 ? '░' : ' ';
                    }
                    r += '\n';
                }
                return r;
            },
            () => {
                const w = 36, h = 6;
                let r = '';
                for (let y = 0; y < h; y++) {
                    for (let x = 0; x < w; x++) {
                        const v = (x + y * 3) % 7;
                        r += v === 0 ? '│' : v < 3 ? '·' : ' ';
                    }
                    r += '\n';
                }
                return r;
            },
            () => {
                const l = 32;
                let r = '┌' + '─'.repeat(l) + '┐\n';
                for (let i = 0; i < 4; i++) {
                    r += '│';
                    for (let j = 0; j < l; j++) {
                        r += Math.random() > 0.85 ? '▓' : Math.random() > 0.7 ? '░' : ' ';
                    }
                    r += '│\n';
                }
                r += '└' + '─'.repeat(l) + '┘';
                return r;
            },
            () => {
                let r = '';
                for (let i = 0; i < 5; i++) {
                    const indent = Math.floor(Math.random() * 8);
                    const len = 20 + Math.floor(Math.random() * 15);
                    r += ' '.repeat(indent);
                    for (let j = 0; j < len; j++) {
                        r += Math.random() > 0.6 ? '░' : Math.random() > 0.3 ? '·' : ' ';
                    }
                    r += '\n';
                }
                return r;
            },
            () => {
                const rows = 6, cols = 28;
                let r = '';
                for (let y = 0; y < rows; y++) {
                    for (let x = 0; x < cols; x++) {
                        const wave = Math.sin((x + y) * 0.5) * Math.sin(x * 0.2);
                        r += wave > 0.5 ? '▓' : wave > 0 ? '░' : wave > -0.5 ? '·' : ' ';
                    }
                    r += '\n';
                }
                return r;
            },
            () => {
                let r = '';
                for (let i = 0; i < 7; i++) {
                    const seg = Math.floor(Math.random() * 30) + 5;
                    r += '  '.repeat(Math.floor(Math.random() * 4));
                    r += '░'.repeat(seg);
                    r += '\n';
                }
                return r;
            }
        ];
        return p[Math.floor(Math.random() * p.length)]();
    }
    
    function m() {
        const pool = [
            'DEPTH ACKNOWLEDGED',
            'SIGNAL RECEIVED',
            'OBSERVATION LOGGED',
            'PRESSURE NOMINAL',
            'SILENCE CONFIRMED',
            'PROTOCOL AWARE',
            'FREQUENCY STABLE',
            'MOVEMENT DETECTED',
            'VARIANCE NOTED',
            'LAYER SCANNED',
            'NODE SYNCHRONIZED',
            'ENTITY PRESENT',
            'THRESHOLD UNCHANGED',
            'PATTERN RECORDED',
            'DENSITY MEASURED',
            'CHANNEL OPEN',
            'TRACE REGISTERED',
            'STATE PRESERVED',
            'PULSE MONITORED',
            'BOUNDARY INTACT'
        ];
        return pool[Math.floor(Math.random() * pool.length)];
    }
    
    function activate() {
        if (cooldown || isActive) return;
        isActive = true;
        cooldown = true;
        
        overlay.style.background = 'rgba(0, 15, 8, 0.4)';
        output.textContent = g();
        output.style.color = 'rgba(34, 197, 94, 0.35)';
        msg.textContent = '> ' + m();
        msg.style.color = 'rgba(34, 197, 94, 0.6)';
        
        setTimeout(() => {
            overlay.style.background = 'rgba(0, 10, 5, 0)';
            output.style.color = 'rgba(34, 197, 94, 0)';
            msg.style.color = 'rgba(34, 197, 94, 0)';
            
            setTimeout(() => {
                isActive = false;
                output.textContent = '';
                msg.textContent = '';
            }, 2000);
            
            setTimeout(() => {
                cooldown = false;
            }, 800);
        }, 2500);
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'w' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            const tag = e.target.tagName.toLowerCase();
            if (tag !== 'input' && tag !== 'textarea') {
                e.preventDefault();
                activate();
            }
        }
    });
})();
