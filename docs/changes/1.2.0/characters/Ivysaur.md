# Ivysaur — 1.2.0

## Changes

### Jab / Tilts

**Jab**
jab 2 now leads into Forward Tilt
jab 1 angle: 30 → 90
jab 2 added skb: 10

**Up Tilt**
damage: 7 → 10

**Forward Tilt**
added skb: 10
hitbox id3 damage: 1 → 2
angle: 20 → 365
iasa: 42 → 37
can cancel multihit into specials
5 multi-hit hitboxes trajectory: 361 (Sakurai) → 80 (upward)
5 multi-hit hitboxes wkb added: 0 → 10
added conditional follow-up: on hit-connect, transitions into new AttackS3S2 subaction

**Forward Tilt Follow-up (NEW)**
new subaction added
2 hitboxes (damage 6, trajectory 70, kbg 40, bkb 100)
plays over ~24 frames total with a 3-frame gap between hits

**Down Tilt**
1st hit angle: 30 → 365
2nd hit sped up 1.3x
endlag sped up 1.2x
2nd hit reworked angles: id0/1: 80, id2: 90, id3: 100
first hit damage: 2 → 4
2nd hit damage: 5 → 6
active frames on both hits: 2 → 3
endlag sped up 1.4x
buffed hitboxes to connect better
first wave (4 hitboxes) damage: 4 → 6
first wave hitbox sizes: 4 → 5.5
first wave DI multiplier: 1 → 0 (much harder to DI)
hitbox 5 (0x340003) X offset: 1 → -3 (moved behind)
second wave hitbox sizes: 4/5/5/4 → 7/6/6/5.5 (much bigger)

### Aerial Attacks

**Neutral Air**
final hit angle: 361 → 60
multihit angles all made 365 except for id2
adjusted multihit kb to link better

**Back Air**
1st hit damage: 2 → 3
2nd hit damage: 3 → 5
2nd hit kbg: 160 → 130
2nd hit bkb: 10 → 5
iasa: 45 → 39
startup slowed .5x
between hits sped up 1.5x
bkb: 7 → 25
startup slowed more
added skb to first hit
sped up between hits

**Down Air**
sweetspot damage: 8 → 12
sweetspot hitbox size increased
can now move horizontally during move
damage: 12 → 16

**Forward Air**
endlag sped up 1.3x → 1.45x
first active frame: 14 → 13
angles all made 75
startup sped up 1.2x
segment during hitboxes slowed .6x, improves hitbox coverage+duration
hitbox id3 size: 2.5 → 3.6
sync timer: 6 → 7 frames

**Up Air**
damage: 16 → 13
bkb: 32 → 40
kbg: 97 → 100

### Smash Attacks

**Forward Smash**
damage: 16 → 18
startup sped up 1.2x

**Up Smash**
sped up 1.3x
startup sped up 1.2x
damage: 17 → 20
bkb: 80 → 65
kbg: 90 → 80

**Down Smash**
damage: 8 → 12 → 14
kbg: 80 → 90
startup sped up 1.4x
fixed active frames
added sweetspots on tips of vines

### Special Moves

**Neutral B**
can cancel into attacks
can jump cancel the charge
no longer puts ivy into special fall in air

**Up B**
sweetspot priority: 4 → 0
range to grab edge increased
reaches the edge much faster
Ivysaur no longer goes into special fall after use
added more endlag
fixed end of up b animation
removed slowdown on endlag in air
sweetspot damage: 13 → 18
can now double jump earlier out of up b to help recovery
no longer halts aerial drift when used

**Side B**
razor leaves last longer (50 → 60)
removed rng angles
sped up 1.2x
can now landing cancel
lasts longer
new angle
hits more frequently

### Other

**Dash Attack**
iasa: 44 → 40
endlag sped up 1.3x
added forward momentum kick at start (+0.6 horizontal velocity)
mid async timer: 19 → 24 frames (more delay between hits)

**Grab**
active frames: 13-14 → 9-12
fixed range

**Down Throw**
kbg: 50 → 20
bkb: 83 → 95
angle: 100
horizontal airspeed increased
ivy is now built off P+ ivy

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Run Speed | 1.5 → 1.6 |
| Dash Speed | 1.4 → 1.56 → 1.6 |
