# Zelda — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Jab**
removed multihit — now a single strong hit with 4 hitboxes
damage: 2 (multihit) / 4 (final) → 9 (unified across all hits)
startup FSM: 2.3x → 2.5x
added mid-move FSM 0.48x slowdown during the swing

**Forward Tilt (all angles)**
FaF: 12 → 11
startup pacing reworked (FSM 1.3x then 11-frame async → FSM 2x then 7-frame async, FSM 1x, 10-frame async)
total endlag extended (29 → 39 frames)
added mid-endlag speedup FSM(1.9x)

**Up Tilt**
hitlag: 1 → 0.6 on all hitboxes

**Down Tilt**
hitboxes reworked:
  - old: 4 hitboxes (dmg 7/7/8/8, angles 80°/80°/270°/270°)
  - new: 3 hitboxes (dmg 6/6/8, angles 0°/0°/70°)
removed one hitbox (id 0x120000)
added weight-based knockback on the two low hitboxes
new upper hitbox: dmg 8, angle 70°, size 6, kbg 60, bkb 50
endlag reduced (async 24 → 19 frames)

### Aerial Attacks

**Up Air**
new animation
damage: 19 → 20
now shifts momentum downwards

### Smash Attacks

**Up Smash**
startup reworked with new pacing:
  - added FSM 2x, async(10), FSM 0.3x (slow-motion charge frame), async(12), FSM 1x, async(13)
effectively: fast startup animation → slow-motion frame → normal → hit

**Down Smash**
damage: 19 → 20
hitbox Y offset raised (23 → 28)
added downward vertical velocity (-2) during the hit
startup async: 13 → 18 frames
camera shake intensified (size 0 → 1)

### Special Moves

**Side B**
projectile moves even faster

**Up B (grounded / aerial variants)**
no longer puts zelda into special fall, but can only be used once in the air
fixed many stage collision issues 
added `character.allowDisallowLedgegrab(0x2)` at start of Farore's Wind subactions (0x1D6, 0x1D7, 0x1D8) — improves ledge-grab reliability
0x1D7 restructured with double interrupt/cancel window
0x1D8 event ordering fixed (ledgegrab allow now before FSM)
subaction 0x1D9 renamed SpecialAirHi → SpecialAirLw2
  - removed kinetic.disallowCertainMovements / reallowCertainMovements freeze pair
  - added `status.changeAction(0xE)` at end (auto-transitions after)

### Other

**Dash Attack**
added +0.35 horizontal momentum boost at startup (small dash into the move, more range)
initial hits damage: 12/9 → 12/12 (unified)
late hits damage: 8/7 → 10/10 (unified)
active window between hits: 3 → 4 frames
late hit async delay: 13 → 18 frames
