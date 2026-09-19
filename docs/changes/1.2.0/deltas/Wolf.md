# Wolf — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Forward Tilt (all angles reworked and consolidated)**
new animation and properties, absed off P+ wolf dash attack
up/normal/down-angled variants (AttackS3Hi / AttackS3S / AttackS3Lw) all renamed AttackS3S and now share a single implementation
first hit: 3 hitboxes (dmg 5, kbg 110, bkb 10, hitlag 3, trajectory 361°) → 2 hitboxes (dmg 4, kbg 100, bkb 20, hitlag 1, trajectory 0°)
second hit: 3 hitboxes (dmg 6, kbg 120, bkb 40, hitlag 0.5, trajectory 361°) → 2 hitboxes (dmg 6, kbg 100, bkb 60, hitlag 1, trajectory 70°)
total endlag extended (32 → 39 frames)
added mid-endlag speedup (FSM 1.2x)

**Down Tilt**
startup slowed (added FSM 0.4x speed modifier at start)
endlag slowed (added FSM 0.6x after post-hit delay)

### Smash Attacks

**Up Smash**
new redone animation
final hit damage: 16 → 18
final hit hitlag: 1.8 → 2
reworked from 3 multihit + 3 final hitboxes → 2 multihit + 2 final hitboxes with different positioning (higher Y, forward Z)
startup delay tweaked (added 12-frame async before hitboxes)

### Aerial Attacks

**Forward Air**
endlag sped up further (FSM 1.55x → 1.8x)

### Grab / Throws

**Pummel**
slowed to 0.5x
