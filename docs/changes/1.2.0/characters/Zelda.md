# Zelda — 1.2.0

## Changes

### Jab / Tilts

**Jab**
sped up 1.2x
sped up startup 2.3x → 2.5x
removed multihit — now a single strong hit with 4 hitboxes
damage: 2 (multihit) / 4 (final) → 9 (unified across all hits)
bkb: 10 → 25
added mid-move FSM 0.48x slowdown during the swing

**Forward Tilt**
iasa: 40 → 30
sped up 1.3x
angle: 110 → 100
all angled variants share the same reworked implementation
startup pacing changed (FSM 1.3x/11-frame async → FSM 2x/7-frame async, then FSM 1x/10-frame async)
total endlag extended (29 → 39 frames)
added mid-endlag speedup FSM(1.9x)

**Up Tilt**
sped up 1.2x → 1.4x
iasa: 48 → 39
angle: 70 → 80
kbg: 105 → 70
bkb: 65 → 45
hitlag: 1 → 0.6 on all hitboxes

**Down Tilt**
angle: 270 → 80
hitboxes reworked (4 hitboxes dmg 7/7/8/8 → 3 hitboxes dmg 6/6/8)
removed hitbox id 0x120000
added weight-based knockback on the two low hitboxes
new upper hitbox: dmg 8, angle 70°, size 6, kbg 60, bkb 50
endlag reduced (async 24 → 19 frames)

### Aerial Attacks

**Neutral Air**
sped up 1.2x
multihit angles: 90 → 365
final hit angle: 361 → 55
skb: 75 → 25
added an initial hit to help combo into multihit

**Up Air**
sped up 1.2x
hitbox size: 8.9 → 10
damage: 15 → 19 → 20
kbg: 110 → 90
new animation
now shifts momentum downwards

**Forward Air**
sweetspot hitbox size: 1.7 → 3.2
sweetspot active frames: 1 → 2
sourspot angle: 361 → 55
iasa: 40 → 32
sourspot bkb: 5 → 45
sourspot damage: 4 → 8

**Back Air**
sweetspot hitbox size: 1.7 → 3.2
sweetspot active frames: 1 → 2
iasa: 36 → 29
sourspot bkb: 5 → 45
sourspot damage: 4 → 8

**Down Air**
sweetspot size: 1.7 → 4.5
sweetspot duration: 1 → 3
sweetspot can now hit grounded opponents
iasa: 45 → 37
sourspot trip rate: 0 → 1

### Smash Attacks

**Forward Smash**
hitlag multiplier: 1 → .5
sdi multiplier: .5 → .2
multihit angles: 270 → 90
removed down time between multihits
final hit kbg: 105 → 115
removed multihit, now a single strong hit, increased range

**Up Smash**
startup reworked with new pacing (FSM 2x fast → slow-motion charge frame (0.3x) → FSM 1x normal → hit)

**Down Smash**
damage: 12/10 → 16/14 → 20
bkb: 20 → 35
hitbox Y offset raised (23 → 28)
added downward vertical velocity (-2) during the hit
startup async: 13 → 18 frames
camera shake intensified (size 0 → 1)

### Special Moves

**Neutral B**
can now be canceled into attacks when grounded
angle: 10 → 100 → 365
multihit comes out earlier and lasts longer

**Side B**
projectile moves much faster and can be turned much faster
hitlag multiplier: 1 → 2
sdi multiplier: 1 → .3
size: 6 → 8
startup+endlag sped up 1.2x
no longer puts zelda into special fall
can double jump out of aerial end lag
projectile moves even faster

**Up B**
grounded up b hitbox angle: 361 → 270
added skb: 10
can now cancel the move after 10 frames
sped up 1.2x
no longer puts zelda into special fall, but can only be used once in the air
fixed many stage collision issues 
Farore's Wind subactions now allow ledge grab during startup — improves recovery reliability
follow-up subaction restructured with additional interrupt window
former SpecialAirHi (0x1D9) reworked into SpecialAirLw2 variant (removes movement freeze, auto-transitions afterwards)

### Other

**Dash Attack**
switched hitbox angles
sweetspot id0 kbg: 70 → 90
added +0.35 horizontal momentum boost at startup (small dash into the move, more range)
initial hits damage: 12/9 → 12/12 (unified)
late hits damage: 8/7 → 10/10 (unified)
active window between hits: 3 → 4 frames
late hit async delay: 13 → 18 frames

**Grab**
sped up 1.3x
startup sped up 1.9x
dash grab faf: 11 → 5
dash grab active frames: 2 → 7

**Up Throw**
kbg: 50 → 40 → 60
bkb: 80 → 65 → 80

**Down Throw**
sped up 1.2x
angle: 120 → 105 → 90 → 120
iasa: 70 → 62

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Double Jump Height | .86 → 1 |
| Run Speed | 1.224 → 1.35 → 1.45 |
| Air Mobility | buffed further |
| Dash Speed | 1.25 → 1.5 |
| Weight | 85 → 94 |
