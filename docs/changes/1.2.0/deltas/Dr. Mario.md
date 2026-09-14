# Dr. Mario — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Up Tilt**
added 1 new spike hitbox (damage 12, trajectory 270, bkb 70, size 5.5)
hitbox id order reshuffled

**Down Tilt**
added 2 new spike hitboxes (damage 12, trajectory 265, bkb 70)
hitbox id order reshuffled

### Aerial Attacks

**Neutral Air**
2 hitboxes hitlag multiplier: 1.4 → 2

**Up Air**
added 2 new mid-hitboxes (damage 11, trajectory 25, kbg 50, bkb 25, sizes 4.5/5.5)
timing restructured: old async 11 split into async 5 (before new hitboxes) + async 13 (after)

### Smash Attacks

**Forward Smash Charge Start**
removed 0.7x startup slowdown

**Forward Smash (up angle)**
all 3 hitboxes kbg: 97 → 110
all 3 hitboxes hitlag multiplier: 1 → 2

**Forward Smash (down angle)**
all 3 hitboxes kbg: 97 → 110
all 3 hitboxes hitlag multiplier: 1 → 2

**Down Smash Charge Start**
startup slowed to 0.5x speed

### Special Moves

**Side B**
all 6 multi-hit hitboxes damage: 8/8/7 → 11 (uniform)

**Down B (Tornado)**
endlag sped up 2.5x
added 2 lingering windbox-style hitboxes (damage 2, trajectory 80, size 5) during endlag

### Other

**Dash Attack**
added 2 new first-hit hitboxes: damage 13, trajectory 270 (spike), bkb 130
