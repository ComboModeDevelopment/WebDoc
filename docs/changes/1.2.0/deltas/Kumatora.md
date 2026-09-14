# Kumatora — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Up Tilt**
adjusted animation and frame data for better range
reduced from 3-wave multi-hit to 2-wave (removed final 3-hitbox set)
delays first hit by 3 → 2 frames
first hit damage: 3 → 1
delays late-hit wave by 6 → 3 frames
late-hit damage: 8 → 10 (all 3 hitboxes)
late-hit hitlag multiplier: 0.5 → 1
first late hitbox Y offset: 5 → 9

### Smash Attacks

**Forward Smash**
startup sped up: 1.2x → 1.4x

**Down Smash**
all 5 hitboxes wkb: 25 → 10
all 5 hitboxes bkb: 50/32 → 25
tripping rate: 0 → 1 (always trips)

### Aerial Attacks

**Up Air**
mid hitbox slowdown: 0.7x → 0.5x
5 hitboxes hitlag multiplier: 1 → 0.5

### Special Moves

**Down B (Start)**
startup sped up: 2x → 2.5x
mid sped up: 1.7x → 1.8x

**Down B (Hit)**
throw attack trajectory: 270 → 90 (now sends up-forward instead of down-back)
throw attack element removed (was fire/element 12 → 0)
late hitbox trajectory: 336 → 90
no longer techable
added 0.35x endlag slowdown
