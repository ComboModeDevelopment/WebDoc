# Ganondorf — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Up-Angled Forward Tilt**
startup: 0.7x speed → 1.2x speed
hitbox sizes: 5.5/5.3/5.1 → 8/8/8 (all bigger)
added lingering huge hitbox (damage 10, trajectory 270, wkb 22, kbg 88, size 30)
endlag sped up 1.3x

### Aerial Attacks

**Neutral Air**
mid sped up 2.4x
follow-up slowed to 0.75x speed
mid speedup: 1.4x → 1.5x

**Forward Air**
removed sourspot
hitboxes 0x360001 / 0x370000 unified damage: 15/18 → 19/19
kbg unified: 80/83 → 91/91
bkb unified: 30/48 → 48/48
hitlag multiplier: 1/2 → 2/2

**Back Air**
iasa: 36 → 29
2 hitboxes damage: 16 → 18
2 hitboxes bkb: 10 → 28
2 hitboxes hitlag multiplier: 1 → 2
pauses 3 → 5 frames between hits
delays interrupt by 35 → 28 frames

**Up Air**
consolidated sweetspot damage
hitbox 0x80000 damage: 13 → 15
hitbox 0x80000 bkb: 35 → 45
hitbox 0x90001 damage: 12 → 15
hitbox 0x90001 bkb: 35 → 45
second-hit hitbox damage: 10 → 12
late-hit hitbox damage: 6 → 8
endlag sped up 1.3x

**Down Air**
startup sped up 1.2x
hitbox 1 damage: 17 → 22

### Smash Attacks

**Forward Smash (all 3 angles)**
early hitbox hitlag multiplier: 1.5 → 0.4

**Down Smash Charge Start**
sped up 1.6x

**Down Smash**
startup sped up 1.6x
multi-hit trajectories: 170/170/170 → 150/160/150
first hitbox size: 5.5 → 4
second hitbox bkb: 50 → 65
mid speedup: 2x → 3x
delays late hits by 30 → 28 frames

### Special Moves

**Side B (Grounded Startup)**
startup speedup: 1.35x → 1.5x
added 1.35x speedup after catch collisions

**Side B (Grounded Main)**
mid speed: 1x → 1.25x

**Side B (Aerial Startup)**
added ledge-grab disable
startup sped up 1.5x
existing speedup: 1.2x → 1.35x

**Down B**
No longer slows momentum after hitting opponent
Endlag sped up

**Up B (Final Hit)**
loop hitbox damage: 1 → 2
throw damage: 10 → 13
throw kbg: 80 → 110

### Other

**Air Mobility**
Buffed

**Ground to Air Mobility**
Buffed

**Run Speed**
1.5 → 1.63

**Dash Speed**
1.5 → 1.6

**Dash Attack**
more range
added forward momentum kick at start (+0.5 horizontal velocity)
late hitbox size: 4 → 6
pauses 7 → 11 frames between hits
