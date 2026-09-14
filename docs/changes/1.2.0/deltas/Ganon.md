# Ganon — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Up Tilt**
reworked from elaborate multi-stage sword slam into simple single-hit tilt
old: 3 early hits (damage 6, trajectory 100, wkb 10 kbg 29, bkb 77) + delayed 5 lingering late hitboxes (damage 10/10/9/12/12, trajectory 80)
new: 3 hitboxes (damage 11, trajectory 100, kbg 80, bkb 60)
startup delay: 4 → 8 frames

**Down Tilt**
re-timed: early phase slowed (2x → 1.5x speed), mid slightly sped up (1x → 1.2x), late phase slowed (2x → 1.3x)
removed trailing 1.3x speedup at end

### Smash Attacks

**Up Smash**
reworked from simple 3-hit smash into elaborate multi-stage sword slam
old: 3 hitboxes damage 19, trajectory 90, kbg 120, bkb 50/40/40, hitlag 1.6
new: 3 early hits (damage 6, trajectories 150/110/110, wkb 10 kbg 29, bkb 70/60/60), followed by 3 autolinking hits (damage 6, trajectory 365, bkb 25), then 5 late lingering hitboxes (damage 13, trajectories mixed, kbg 100, bkb 56, hitlag 2, Y offsets 6.5/15.5/17.5/26.5/30)
added slower startup (0.65x speed) and dramatic slow-mo (0.2x) near the end

### Special Moves

**Side B (Grounded Startup)**
startup sped up (1.35x → 1.8x)
added mid-startup speedup (1.3x)

**Up B (Grounded)**
removed startup, mid, and late slowdowns - move now plays at consistent speed

**Up B (Aerial)**
startup slowed (1.8x → 1.4x speed)
removed 3 mid-move speed changes - plays more consistently

**Down B (Grounded)**
removed 0.5x startup slowdown (now plays at normal speed)

**Down B (Aerial)**
removed 0.54x startup slowdown (now plays at normal speed)
