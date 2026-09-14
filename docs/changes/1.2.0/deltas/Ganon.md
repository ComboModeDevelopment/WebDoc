# Ganon — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Up-Angled Forward Tilt**
startup FSM: 0.7x → 1.2x
hitbox sizes: 5.5/5.3/5.1 → 8/8/8 (all bigger)
added lingering huge hitbox (damage 10, trajectory 270, wkb 22, kbg 88, size 30)
added 1.3x endlag FSM

### Aerial Attacks

**Neutral Air**
added 2.4x mid FSM
added 0.75x follow-up FSM
mid FSM: 1.4x → 1.5x

**Forward Air**
hitboxes 0x360001 / 0x370000 unified damage: 15/18 → 19/19
kbg unified: 80/83 → 91/91
bkb unified: 30/48 → 48/48
hitlag multiplier: 1/2 → 2/2

**Back Air**
2 hitboxes damage: 16 → 18
2 hitboxes bkb: 10 → 28
2 hitboxes hitlag multiplier: 1 → 2
sync timer: 3 → 5 frames
async endlag timer: 35 → 28

**Up Air**
hitbox 0x80000 damage: 13 → 15
hitbox 0x80000 bkb: 35 → 45
hitbox 0x90001 damage: 12 → 15
hitbox 0x90001 bkb: 35 → 45
second-hit hitbox damage: 10 → 12
late-hit hitbox damage: 6 → 8
added 1.3x endlag FSM

**Down Air**
added 1.2x startup FSM
hitbox 1 damage: 17 → 22

### Smash Attacks

**Forward Smash (all 3 angles)**
early hitbox hitlag multiplier: 1.5 → 0.4

**Down Smash Charge Start**
added 1.6x FSM

**Down Smash**
added 1.6x startup FSM
multi-hit trajectories: 170/170/170 → 150/160/150
first hitbox size: 5.5 → 4
second hitbox bkb: 50 → 65
mid FSM: 2x → 3x
mid async timer: 30 → 28 frames

### Special Moves

**Side B (Grounded Startup)**
startup FSM: 1.35x → 1.5x
added 1.35x FSM after catch collisions

**Side B (Grounded Main)**
mid FSM: 1x → 1.25x

**Side B (Aerial Startup)**
added ledge-grab disable
added 1.5x startup FSM
existing FSM: 1.2x → 1.35x

**Up B (Catch)**
loop hitbox damage: 1 → 2

**Up B (Throw)**
throw damage: 10 → 13
throw kbg: 80 → 110

### Other

**Dash Attack**
added forward momentum kick at start (+0.5 horizontal velocity)
late hitbox size: 4 → 6
sync timer between hits: 7 → 11
