# Fox — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Up Tilt**
reworked from single-hit into multi-hit connect + launcher
startup async: 2 → 5 frames
old: 4 hitboxes damage 10/9/9/9, trajectories 110/84/80/80, hitlag 1
new connect wave: 3 hitboxes damage 3, trajectories 365/365/95 (autolinking), wkb 10 kbg 90, bkb 15/30/15, hitlag 0.5, DI multiplier 0.2
new launcher wave: 3 hitboxes damage 7, trajectories 80/290/80, kbg 60/90/60, bkb 70/40/70, middle hitbox hitlag 2
mid sped up 1.2x + 19-frame gap timer

**Down Tilt**
New animation
reworked: 4 hitboxes → 3 hitboxes
damage: 9/9/8/7 → 8/8/8 (uniform)
trajectory: 70/70/80/90 → 80 (uniform)
tripping rate: 0.4 → 0 (removed)
kbg: 100 → 80
bkb: 25 → 60

### Aerial Attacks

**Up Air**
New animation
startup sped up 2x, then 1.3x follow-up speedup
multi-hit hitbox bones relocated (0x150000/0x160001/0x170002 → 0xD0000/0xE0001/0xB0002)
multi-hit inner timer: 2 → 6 frames
middle speedup: 2.5x → 2x
gap async timer: 10 → 22 frames

**Down Air**
startup speed: 1x → 1.2x
multi-hit loop iterations: 7 → 4 (fewer hits)
multi-hit wkb added: 0 → 10 (set-knockback component)
inner sync timer: 2 → 3 frames
added launcher hitboxes at end (damage 3, trajectory 70, kbg 40, bkb 90)
endlag sped up 1.8x

### Smash Attacks

**Up Smash**
Animation redone
startup async timer: 5 → 8 frames
hitbox 4 size: 2 → 6 (much bigger)
middle async timer: 6 → 9 frames
mid slowed to 0.5x speed, then reset to 1x

**Down Smash**
New animation
now starts animation from frame 15
startup async: 3 → 2 frames
startup slowed to 0.7x speed
2 side hitboxes removed (0xD0001, 0xD0003) - now hits front only per wave
hitlag multiplier: 1 → 2
added second wave of hitboxes (repeats after a timer)

### Special Moves

**Down B (Reflector)**
damage: 5 → 4 (both hitboxes)
trajectory: 0 → 20
hitbox 0 kbg: 30 → 110
hitbox 1 wkb: 0 → 35 (set knockback re-added)
DI multiplier: 0.6 → 1.2 (hitbox 0), 0.6 → 1 (hitbox 1)
No set knockback and will now eventually knock down

### Other

**Dash Attack**
New animation
completely reworked into multi-hit + launcher
startup sped up 2x
multi-hit phase slowed to 0.6x speed; hitboxes damage 3, trajectory 365 (autolinking angle), wkb 10, kbg 60, bkb 25
new launcher phase at 0.6x speed: hitboxes damage 7, trajectory 80, kbg 80, bkb 60
mid sped up 1.5x, endlag sped up 2x
